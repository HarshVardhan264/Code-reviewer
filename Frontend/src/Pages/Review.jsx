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
    const eyebrowRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const inputRef = useRef(null);
    const statusRef = useRef(null);
    const resultRef = useRef(null);

    // ==========================================
    // HERO ANIMATION
    // ==========================================

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            tl.from(eyebrowRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.7,
            })
                .from(
                    titleRef.current,
                    {
                        opacity: 0,
                        y: 50,
                        duration: 1,
                    },
                    "-=0.35"
                )
                .from(
                    descriptionRef.current,
                    {
                        opacity: 0,
                        y: 25,
                        duration: 0.7,
                    },
                    "-=0.55"
                )
                .from(
                    inputRef.current,
                    {
                        opacity: 0,
                        y: 35,
                        scale: 0.97,
                        duration: 0.8,
                    },
                    "-=0.35"
                )
                .from(
                    statusRef.current,
                    {
                        opacity: 0,
                        y: 15,
                        duration: 0.5,
                    },
                    "-=0.3"
                );

            // Main warm glow
            gsap.to(".review-glow", {
                x: 25,
                y: -30,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // Subtle grid movement
            gsap.to(".review-grid", {
                y: 35,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    // ==========================================
    // RESULT ANIMATION
    // ==========================================

    useEffect(() => {
        if (!result || !resultRef.current) return;

        gsap.fromTo(
            resultRef.current,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
            }
        );
    }, [result]);

    // ==========================================
    // REVIEW REPOSITORY
    // ==========================================

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

    return (
        <div
            ref={pageRef}
            className="
                min-h-screen
                overflow-hidden
                bg-[#0b0806]
                text-[#f4ead7]
            "
        >
            <Navbar />

            <main className="relative pt-[76px]">

                {/* ==========================================
                    BACKGROUND
                ========================================== */}

                <div className="pointer-events-none absolute inset-0 overflow-hidden">

                    {/* Main warm brown glow */}

                    <div
                        className="
                            review-glow
                            absolute
                            left-1/2
                            top-[5%]
                            h-[550px]
                            w-[750px]
                            -translate-x-1/2
                            rounded-full
                            bg-[#c98a4b]/[0.08]
                            blur-[140px]
                        "
                    />

                    {/* Secondary brown glow */}

                    <div
                        className="
                            absolute
                            right-[-180px]
                            top-[38%]
                            h-[500px]
                            w-[500px]
                            rounded-full
                            bg-[#70401f]/[0.12]
                            blur-[140px]
                        "
                    />

                    {/* Small green accent glow */}

                    <div
                        className="
                            absolute
                            left-[-150px]
                            top-[55%]
                            h-[350px]
                            w-[350px]
                            rounded-full
                            bg-[#9be86a]/[0.025]
                            blur-[120px]
                        "
                    />

                    {/* Grid */}

                    <div
                        className="
                            review-grid
                            absolute
                            inset-0
                            opacity-[0.035]
                        "
                        style={{
                            backgroundImage: `
                                linear-gradient(
                                    rgba(244,234,215,0.5) 1px,
                                    transparent 1px
                                ),
                                linear-gradient(
                                    90deg,
                                    rgba(244,234,215,0.5) 1px,
                                    transparent 1px
                                )
                            `,
                            backgroundSize: "70px 70px",
                        }}
                    />

                    {/* Top fade */}

                    <div
                        className="
                            absolute
                            inset-x-0
                            top-0
                            h-[350px]
                            bg-gradient-to-b
                            from-[#0b0806]
                            to-transparent
                        "
                    />

                    {/* Bottom fade */}

                    <div
                        className="
                            absolute
                            inset-x-0
                            bottom-0
                            h-[350px]
                            bg-gradient-to-t
                            from-[#0b0806]
                            to-transparent
                        "
                    />
                </div>

                {/* ==========================================
                    REVIEW HERO
                ========================================== */}

                <section
                    className="
                        relative
                        px-5
                        pb-28
                        pt-24
                        sm:pb-36
                        sm:pt-32
                    "
                >
                    <div className="mx-auto max-w-[1200px]">

                        {/* ==================================
                            HEADER
                        ================================== */}

                        <div className="mx-auto max-w-4xl text-center">

                            {/* Eyebrow */}

                            <div
                                ref={eyebrowRef}
                                className="
                                    mb-7
                                    flex
                                    items-center
                                    justify-center
                                    gap-3
                                "
                            >
                                <span className="h-px w-8 bg-[#c98a4b]/60" />

                                <span
                                    className="
                                        font-mono
                                        text-[10px]
                                        font-medium
                                        tracking-[0.35em]
                                        text-[#c98a4b]
                                    "
                                >
                                    CODELENS / REVIEW
                                </span>

                                <span className="h-px w-8 bg-[#c98a4b]/60" />
                            </div>

                            {/* Main heading */}

                            <h1
                                ref={titleRef}
                                className="
                                    text-[clamp(3.5rem,8vw,7.5rem)]
                                    font-medium
                                    leading-[0.88]
                                    tracking-[-0.075em]
                                    text-[#f4ead7]
                                "
                            >
                                Understand
                                <br />

                                <span className="text-[#f4ead7]/35">
                                    your code.
                                </span>
                            </h1>

                            {/* Description */}

                            <p
                                ref={descriptionRef}
                                className="
                                    mx-auto
                                    mt-8
                                    max-w-2xl
                                    text-[15px]
                                    leading-7
                                    text-[#f4ead7]/45
                                    sm:text-[17px]
                                "
                            >
                                Give CodeLens a GitHub repository.
                                Our AI reviews the codebase and finds
                                bugs, security risks, performance issues,
                                and opportunities to improve code quality.
                            </p>
                        </div>

                        {/* ==================================
                            REPOSITORY INPUT
                        ================================== */}

                        <div
                            ref={inputRef}
                            className="
                                mx-auto
                                mt-14
                                max-w-4xl
                            "
                        >
                            <div
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-[24px]
                                    border
                                    border-[#f4ead7]/[0.09]
                                    bg-[#f4ead7]/[0.025]
                                    p-2
                                    shadow-[0_30px_100px_rgba(0,0,0,0.45)]
                                    backdrop-blur-xl
                                "
                            >

                                {/* Top gold accent */}

                                <div
                                    className="
                                        absolute
                                        left-1/2
                                        top-0
                                        h-px
                                        w-1/2
                                        -translate-x-1/2
                                        bg-gradient-to-r
                                        from-transparent
                                        via-[#c98a4b]/70
                                        to-transparent
                                    "
                                />

                                <div
                                    className="
                                        rounded-[18px]
                                        border
                                        border-[#f4ead7]/[0.04]
                                        bg-[#17100b]/90
                                        p-4
                                        sm:p-6
                                    "
                                >

                                    {/* Input header */}

                                    <div
                                        className="
                                            mb-4
                                            flex
                                            items-center
                                            justify-between
                                        "
                                    >
                                        <div className="flex items-center gap-2">

                                            <span
                                                className="
                                                    h-2
                                                    w-2
                                                    rounded-full
                                                    bg-[#9be86a]
                                                    shadow-[0_0_12px_#9be86a]
                                                "
                                            />

                                            <span
                                                className="
                                                    font-mono
                                                    text-[10px]
                                                    tracking-[0.2em]
                                                    text-[#f4ead7]/40
                                                "
                                            >
                                                REPOSITORY URL
                                            </span>

                                        </div>

                                        <span
                                            className="
                                                hidden
                                                font-mono
                                                text-[9px]
                                                tracking-[0.15em]
                                                text-[#f4ead7]/20
                                                sm:block
                                            "
                                        >
                                            GITHUB
                                        </span>
                                    </div>

                                    {/* Existing RepoInput */}

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
                                        mt-4
                                        rounded-xl
                                        border
                                        border-red-400/10
                                        bg-red-400/[0.04]
                                        px-4
                                        py-3
                                        text-center
                                        text-sm
                                        text-red-400/80
                                    "
                                >
                                    {error}
                                </div>
                            )}
                        </div>

                        {/* ==================================
                            STATUS
                        ================================== */}

                        <div
                            ref={statusRef}
                            className="
                                mx-auto
                                mt-8
                                flex
                                items-center
                                justify-center
                                gap-3
                                text-[10px]
                                tracking-[0.18em]
                                text-[#f4ead7]/25
                            "
                        >
                            <span className="h-px w-10 bg-[#f4ead7]/[0.08]" />

                            <span>
                                {loading
                                    ? "ANALYZING CODEBASE"
                                    : "READY TO ANALYZE"}
                            </span>

                            <span className="h-px w-10 bg-[#f4ead7]/[0.08]" />
                        </div>
                    </div>
                </section>

                {/* ==========================================
                    LOADING
                ========================================== */}

                {loading && (
                    <section
                        className="
                            relative
                            border-t
                            border-[#f4ead7]/[0.06]
                            bg-[#0b0806]
                        "
                    >
                        <Loading />
                    </section>
                )}

                {/* ==========================================
                    REVIEW RESULT
                ========================================== */}

                {result && !loading && (
                    <section
                        ref={resultRef}
                        className="
                            relative
                            border-t
                            border-[#f4ead7]/[0.06]
                            bg-[#0b0806]
                            px-5
                            py-20
                            sm:py-28
                        "
                    >
                        <ReviewResult result={result} />
                    </section>
                )}
            </main>
        </div>
    );
}

export default Review;