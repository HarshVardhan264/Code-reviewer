import { useEffect, useRef, useState } from "react";
import axios from "axios";
import gsap from "gsap";

import Navbar from "../components/Navbar";
import RepoInput from "../components/RepoInput";
import Loading from "../components/Loading";
import ReviewResult from "../components/ReviewResult";

function Review() {
    const [repoUrl, setRepoUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const pageRef = useRef(null);
    const lensRef = useRef(null);
    const eyebrowRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const inputRef = useRef(null);
    const statusRef = useRef(null);
    const resultRef = useRef(null);

    /* =========================================
       INTRO ANIMATION
    ========================================= */

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            tl.from(lensRef.current, {
                opacity: 0,
                scale: 0.7,
                duration: 0.7,
            })
                .from(
                    eyebrowRef.current,
                    {
                        opacity: 0,
                        y: 15,
                        duration: 0.5,
                    },
                    "-=0.3"
                )
                .from(
                    titleRef.current,
                    {
                        opacity: 0,
                        y: 35,
                        duration: 0.8,
                    },
                    "-=0.25"
                )
                .from(
                    descriptionRef.current,
                    {
                        opacity: 0,
                        y: 15,
                        duration: 0.5,
                    },
                    "-=0.35"
                )
                .from(
                    inputRef.current,
                    {
                        opacity: 0,
                        y: 25,
                        duration: 0.6,
                    },
                    "-=0.25"
                )
                .from(
                    statusRef.current,
                    {
                        opacity: 0,
                        y: 10,
                        duration: 0.4,
                    },
                    "-=0.25"
                );

            gsap.to(lensRef.current, {
                y: -6,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    /* =========================================
       RESULT ANIMATION
    ========================================= */

    useEffect(() => {
        if (!result || !resultRef.current) return;

        gsap.fromTo(
            resultRef.current,
            {
                opacity: 0,
                y: 35,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            }
        );
    }, [result]);

    /* =========================================
       REVIEW REPOSITORY
    ========================================= */

    const handleReview = async () => {
        if (!repoUrl.trim()) {
            setError("Please enter a GitHub repository URL");
            return;
        }

        setLoading(true);
        setError("");
        setResult(null);

        try {
            const response = await axios.post(
                "http://localhost:5000/api/review",
                {
                    repoUrl,
                }
            );

            setResult(response.data);
        } catch (err) {
            console.error(err);

            setError(
                err.response?.data?.message ||
                    "Something went wrong while reviewing the repository."
            );
        } finally {
            setLoading(false);
        }
    };

    /* =========================================
       NEW REVIEW
    ========================================= */

    const handleNewReview = () => {
        setResult(null);
        setRepoUrl("");
        setError("");

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            ref={pageRef}
            className="
                relative
                min-h-screen
                overflow-x-hidden
                bg-[#0b0b0a]
                text-[#eeeae1]
            "
        >
            {/* =========================================
                NAVBAR
            ========================================= */}

            <Navbar />

            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

                {/* Main diagonal lines */}

                <div
                    className="
                        absolute
                        -left-[20%]
                        -top-[30%]
                        h-[160%]
                        w-[140%]
                        rotate-[18deg]
                        opacity-[0.055]
                    "
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(
                                0deg,
                                transparent 0px,
                                transparent 30px,
                                rgba(238,234,225,0.8) 31px,
                                transparent 32px
                            )
                        `,
                    }}
                />

                {/* Fine diagonal lines */}

                <div
                    className="
                        absolute
                        -left-[20%]
                        -top-[30%]
                        h-[160%]
                        w-[140%]
                        rotate-[18deg]
                        opacity-[0.018]
                    "
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(
                                0deg,
                                transparent 0px,
                                transparent 9px,
                                rgba(238,234,225,0.8) 10px,
                                transparent 11px
                            )
                        `,
                    }}
                />

                {/* Center fade */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-[radial-gradient(
                            circle_at_center,
                            transparent_10%,
                            #0b0b0a_88%
                        )]
                    "
                />

                {/* Top fade */}

                <div
                    className="
                        absolute
                        inset-x-0
                        top-0
                        h-[220px]
                        bg-gradient-to-b
                        from-[#0b0b0a]
                        to-transparent
                    "
                />

                {/* Bottom fade */}

                <div
                    className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-[180px]
                        bg-gradient-to-t
                        from-[#0b0b0a]
                        to-transparent
                    "
                />
            </div>

            {/* =========================================
                MAIN
            ========================================= */}

            <main className="relative z-10 pt-[90px]">

                {/* =====================================
                    INPUT / HERO
                ===================================== */}

                {!result && !loading && (
                    <section
                        className="
                            flex
                            min-h-[calc(100vh-90px)]
                            flex-col
                            items-center
                            px-6
                            pb-20
                            pt-[115px]
                            sm:pt-[125px]
                        "
                    >

                        {/* Lens */}

                        <div
                            ref={lensRef}
                            className="
                                mb-9
                                flex
                                h-[58px]
                                w-[58px]
                                items-center
                                justify-center
                                text-[#eeeae1]/70
                            "
                        >
                            <svg
                                width="58"
                                height="58"
                                viewBox="0 0 58 58"
                                fill="none"
                            >
                                <circle
                                    cx="29"
                                    cy="29"
                                    r="27"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />

                                <circle
                                    cx="29"
                                    cy="29"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>

                        {/* Eyebrow */}

                        <div
                            ref={eyebrowRef}
                            className="
                                mb-7
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <span className="h-px w-9 bg-[#eeeae1]/20" />

                            <span
                                className="
                                    font-mono
                                    text-[9px]
                                    uppercase
                                    tracking-[0.28em]
                                    text-[#eeeae1]/35
                                "
                            >
                                Repository Review
                            </span>

                            <span className="h-px w-9 bg-[#eeeae1]/20" />
                        </div>

                        {/* Main heading */}

                        <h1
                            ref={titleRef}
                            className="
                                text-center
                                text-[clamp(4rem,7.5vw,7.5rem)]
                                font-medium
                                leading-[0.94]
                                tracking-[-0.045em]
                            "
                        >
                            Review your
                            <br />

                            <span className="text-[#eeeae1]/30">
                                code.
                            </span>
                        </h1>

                        {/* Description */}

                        <p
                            ref={descriptionRef}
                            className="
                                mt-9
                                max-w-[560px]
                                text-center
                                text-[13px]
                                leading-[1.7]
                                tracking-[-0.01em]
                                text-[#eeeae1]/35
                                sm:text-[14px]
                            "
                        >
                            Paste a GitHub repository and let CodeLens
                            inspect it line by line for bugs, security
                            risks, performance issues, and code quality.
                        </p>

                        {/* Repository input */}

                        <div
                            ref={inputRef}
                            className="
                                mt-11
                                w-full
                                max-w-[780px]
                            "
                        >
                            <div
                                className="
                                    border
                                    border-[#eeeae1]/10
                                    bg-[#0d0d0c]/80
                                    p-[9px]
                                "
                            >
                                {/* Input header */}

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        px-5
                                        pb-4
                                        pt-3
                                    "
                                >
                                    <span
                                        className="
                                            font-mono
                                            text-[9px]
                                            uppercase
                                            tracking-[0.25em]
                                            text-[#eeeae1]/35
                                        "
                                    >
                                        GitHub Repository
                                    </span>

                                    <span
                                        className="
                                            font-mono
                                            text-[8px]
                                            uppercase
                                            tracking-[0.2em]
                                            text-[#eeeae1]/20
                                        "
                                    >
                                        HTTPS
                                    </span>
                                </div>

                                {/* Input */}

                                <div
                                    className="
                                        border
                                        border-[#eeeae1]/10
                                        bg-[#111110]
                                        px-3
                                        py-3
                                    "
                                >
                                    <RepoInput
                                        repoUrl={repoUrl}
                                        setRepoUrl={setRepoUrl}
                                        handleReview={handleReview}
                                        loading={loading}
                                    />
                                </div>
                            </div>

                            {/* Error */}

                            {error && (
                                <div
                                    className="
                                        mt-3
                                        px-2
                                        text-center
                                        text-[11px]
                                        text-red-300/60
                                    "
                                >
                                    {error}
                                </div>
                            )}
                        </div>

                        {/* Status */}

                        <div
                            ref={statusRef}
                            className="
                                mt-8
                                flex
                                items-center
                                gap-3
                                text-[8px]
                                uppercase
                                tracking-[0.25em]
                                text-[#eeeae1]/20
                            "
                        >
                            <span className="h-px w-8 bg-[#eeeae1]/10" />

                            <span className="flex items-center gap-2">
                                <span
                                    className="
                                        h-1
                                        w-1
                                        rounded-full
                                        bg-[#eeeae1]/40
                                    "
                                />

                                Secure repository analysis
                            </span>

                            <span className="h-px w-8 bg-[#eeeae1]/10" />
                        </div>
                    </section>
                )}

                {/* =====================================
                    LOADING
                ===================================== */}

                {loading && (
                    <section
                        className="
                            flex
                            min-h-[calc(100vh-90px)]
                            items-center
                            justify-center
                            px-6
                        "
                    >
                        <div className="w-full max-w-[850px]">
                            <Loading />
                        </div>
                    </section>
                )}

                {/* =====================================
                    RESULT
                ===================================== */}

                {result && !loading && (
                    <section
                        ref={resultRef}
                        className="
                            min-h-screen
                            px-6
                            pb-24
                            pt-[145px]
                            sm:px-10
                        "
                    >
                        <div className="mx-auto max-w-[1230px]">

                            {/* =================================
                                RESULT HEADER
                            ================================= */}

                            <div
                                className="
                                    relative
                                    mb-12
                                    border-b
                                    border-[#eeeae1]/10
                                    pb-10
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-end
                                        justify-between
                                        gap-8
                                    "
                                >
                                    <div>

                                        

                                        {/* NEW TITLE */}

                                        <h2
                                            className="
                                                text-[clamp(3.5rem,6vw,6.5rem)]
                                                font-medium
                                                leading-[0.9]
                                                tracking-[-0.055em]
                                            "
                                        >
                                            Repository
                                            <br />

                                            <span className="text-[#eeeae1]/30">
                                                Analysis.
                                            </span>
                                        </h2>

                                        {/* Small supporting text */}

                                        <p
                                            className="
                                                mt-6
                                                max-w-[500px]
                                                text-[12px]
                                                leading-[1.6]
                                                text-[#eeeae1]/30
                                            "
                                        >
                                            A line-by-line inspection of your
                                            repository, distilled into the
                                            signals that matter.
                                        </p>
                                    </div>

                                    {/* New Review */}

                                    <button
                                        type="button"
                                        onClick={handleNewReview}
                                        className="
                                            group
                                            mb-1
                                            flex
                                            shrink-0
                                            items-center
                                            gap-4
                                            border
                                            border-[#eeeae1]/15
                                            px-5
                                            py-3
                                            text-[10px]
                                            uppercase
                                            tracking-[0.16em]
                                            text-[#eeeae1]/55
                                            transition-all
                                            duration-300
                                            hover:border-[#eeeae1]/40
                                            hover:text-[#eeeae1]
                                        "
                                    >
                                        <span>
                                            New review
                                        </span>

                                        <span
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover:-translate-y-1
                                                group-hover:translate-x-1
                                            "
                                        >
                                            ↗
                                        </span>
                                    </button>
                                </div>

                                {/* Decorative bottom detail */}

                                <div
                                    className="
                                        absolute
                                        bottom-[-1px]
                                        left-0
                                        h-[1px]
                                        w-24
                                        bg-[#eeeae1]/30
                                    "
                                />
                            </div>

                            {/* =================================
                                EXISTING RESULT
                            ================================= */}

                            <ReviewResult result={result} />
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}

export default Review;