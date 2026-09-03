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
    const orbRef = useRef(null);
    const eyebrowRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const inputRef = useRef(null);
    const statusRef = useRef(null);
    const resultRef = useRef(null);

    // ==========================================
    // PAGE ANIMATION
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
                duration: 0.6,
            })
                .from(
                    orbRef.current,
                    {
                        opacity: 0,
                        scale: 0.6,
                        duration: 0.8,
                        ease: "back.out(1.7)",
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
                    "-=0.4"
                )
                .from(
                    descriptionRef.current,
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.6,
                    },
                    "-=0.45"
                )
                .from(
                    inputRef.current,
                    {
                        opacity: 0,
                        y: 30,
                        scale: 0.98,
                        duration: 0.8,
                    },
                    "-=0.3"
                )
                .from(
                    statusRef.current,
                    {
                        opacity: 0,
                        y: 15,
                        duration: 0.5,
                    },
                    "-=0.35"
                );

            // Floating orb
            gsap.to(orbRef.current, {
                y: -8,
                duration: 2.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // Orb glow
            gsap.to(".review-orb-glow", {
                scale: 1.3,
                opacity: 0.55,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // Background glow
            gsap.to(".review-glow", {
                x: 30,
                y: -25,
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // Grid movement
            gsap.to(".review-grid", {
                y: 30,
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
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.9,
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
                overflow-x-hidden
                bg-[#0b0806]
                text-[#f4ead7]
            "
        >
            {/* EXISTING NAVBAR */}
            <Navbar />

            <main className="relative pt-[76px]">
                {/* ==========================================
                    BACKGROUND
                ========================================== */}

                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    {/* Main glow */}

                    <div
                        className="
                            review-glow
                            absolute
                            left-1/2
                            top-[4%]
                            h-[600px]
                            w-[750px]
                            -translate-x-1/2
                            rounded-full
                            bg-[#c98a4b]/[0.07]
                            blur-[150px]
                        "
                    />

                    {/* Secondary glow */}

                    <div
                        className="
                            absolute
                            right-[-200px]
                            top-[45%]
                            h-[450px]
                            w-[450px]
                            rounded-full
                            bg-[#70401f]/[0.08]
                            blur-[140px]
                        "
                    />

                    {/* Grid */}

                    <div
                        className="
                            review-grid
                            absolute
                            inset-0
                            opacity-[0.025]
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
                            backgroundSize: "80px 80px",
                        }}
                    />

                    {/* Top fade */}

                    <div
                        className="
                            absolute
                            inset-x-0
                            top-0
                            h-[300px]
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
                            h-[300px]
                            bg-gradient-to-t
                            from-[#0b0806]
                            to-transparent
                        "
                    />
                </div>

                {/* ==========================================
                    APPLICATION WORKSPACE
                ========================================== */}

                <section
                    className="
                        relative
                        min-h-[calc(100vh-76px)]
                        px-5
                        pb-20
                        pt-12
                        sm:px-8
                        sm:pt-16
                    "
                >
                    <div
                        className="
                            mx-auto
                            flex
                            min-h-[calc(100vh-180px)]
                            max-w-[1250px]
                            flex-col
                        "
                    >
                        
                       

                        {/* ======================================
                            CENTRAL WORKSPACE
                        ====================================== */}

                        {!result && !loading && (
                            <div
                                className="
                                    flex
                                    flex-1
                                    flex-col
                                    items-center
                                "
                            >
                                {/* AI ORB */}

                                <div
                                    ref={orbRef}
                                    className="
                                        relative
                                        mt-[clamp(65px,10vh,110px)]
                                        flex
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                    "
                                >
                                    <div
                                        className="
                                            review-orb-glow
                                            absolute
                                            inset-[-22px]
                                            rounded-full
                                            bg-[#c98a4b]/20
                                            blur-[25px]
                                        "
                                    />

                                    <div
                                        className="
                                            relative
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-[#c98a4b]/30
                                            bg-[#24160d]
                                            shadow-[0_0_50px_rgba(201,138,75,0.18)]
                                        "
                                    >
                                        <span
                                            className="
                                                h-3
                                                w-3
                                                rounded-full
                                                bg-[#c98a4b]
                                                shadow-[0_0_20px_#c98a4b]
                                            "
                                        />

                                        <span
                                            className="
                                                absolute
                                                inset-2
                                                rounded-full
                                                border
                                                border-[#c98a4b]/10
                                            "
                                        />
                                    </div>
                                </div>

                                {/* HEADER */}

                                <div
                                    ref={eyebrowRef}
                                    className="
                                        mt-5
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >
                                    <span className="h-px w-7 bg-[#c98a4b]/50" />

                                    <span
                                        className="
                                            font-mono
                                            text-[9px]
                                            tracking-[0.3em]
                                            text-[#c98a4b]
                                        "
                                    >
                                        REPOSITORY REVIEW
                                    </span>

                                    <span className="h-px w-7 bg-[#c98a4b]/50" />
                                </div>

                                {/* TITLE */}

                                <h1
                                    ref={titleRef}
                                    className="
                                        mt-5
                                        text-center
                                        text-[clamp(3rem,7vw,6.5rem)]
                                        font-medium
                                        leading-[0.9]
                                        tracking-[-0.075em]
                                    "
                                >
                                    Ready to review
                                    <br />

                                    <span className="text-[#f4ead7]/30">
                                        your code?
                                    </span>
                                </h1>

                                {/* DESCRIPTION */}

                                <p
                                    ref={descriptionRef}
                                    className="
                                        mx-auto
                                        mt-6
                                        max-w-xl
                                        text-center
                                        text-[13px]
                                        leading-6
                                        text-[#f4ead7]/35
                                        sm:text-[15px]
                                    "
                                >
                                    Paste a GitHub repository URL and let
                                    CodeLens analyze the codebase for bugs,
                                    security risks, performance issues, and
                                    code quality problems.
                                </p>

                                {/* ==================================
                                    REPOSITORY COMPOSER
                                ================================== */}

                                <div
                                    ref={inputRef}
                                    className="
                                        mt-9
                                        w-full
                                        max-w-[780px]
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
                                            shadow-[0_35px_110px_rgba(0,0,0,0.45)]
                                            backdrop-blur-xl
                                            transition-all
                                            duration-500
                                            focus-within:border-[#c98a4b]/25
                                            focus-within:shadow-[0_35px_110px_rgba(201,138,75,0.08)]
                                        "
                                    >
                                        {/* Accent */}

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
                                                bg-[#17100b]/95
                                                p-5
                                                sm:p-6
                                            "
                                        >
                                            {/* Input header */}

                                            <div
                                                className="
                                                    mb-5
                                                    flex
                                                    items-center
                                                    justify-between
                                                "
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <span
                                                        className="
                                                            flex
                                                            h-7
                                                            w-7
                                                            items-center
                                                            justify-center
                                                            rounded-lg
                                                            bg-[#c98a4b]/10
                                                            text-[#c98a4b]
                                                        "
                                                    >
                                                        ↗
                                                    </span>

                                                    <div>
                                                        <p
                                                            className="
                                                                font-mono
                                                                text-[9px]
                                                                tracking-[0.18em]
                                                                text-[#f4ead7]/45
                                                            "
                                                        >
                                                            GITHUB REPOSITORY
                                                        </p>

                                                        <p className="mt-0.5 text-[9px] text-[#f4ead7]/20">
                                                            Enter the repository
                                                            you want CodeLens to
                                                            review
                                                        </p>
                                                    </div>
                                                </div>

                                                <span
                                                    className="
                                                        hidden
                                                        font-mono
                                                        text-[8px]
                                                        tracking-[0.15em]
                                                        text-[#f4ead7]/15
                                                        sm:block
                                                    "
                                                >
                                                    HTTPS
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
                                                mt-3
                                                rounded-xl
                                                border
                                                border-red-400/10
                                                bg-red-400/[0.04]
                                                px-4
                                                py-3
                                                text-center
                                                text-[11px]
                                                text-red-400/80
                                            "
                                        >
                                            {error}
                                        </div>
                                    )}
                                </div>

                                {/* STATUS */}

                                <div
                                    ref={statusRef}
                                    className="
                                        mt-6
                                        flex
                                        items-center
                                        justify-center
                                        gap-3
                                        text-[8px]
                                        tracking-[0.22em]
                                        text-[#f4ead7]/20
                                    "
                                >
                                    <span className="h-px w-8 bg-[#f4ead7]/[0.07]" />

                                    <span className="flex items-center gap-2">
                                        <span className="h-1 w-1 rounded-full bg-[#9be86a]" />
                                        SECURE REPOSITORY ANALYSIS
                                    </span>

                                    <span className="h-px w-8 bg-[#f4ead7]/[0.07]" />
                                </div>
                            </div>
                        )}

                        {/* ======================================
                            LOADING
                        ====================================== */}

                        {loading && (
                            <div
                                className="
                                    flex
                                    flex-1
                                    items-center
                                    justify-center
                                    px-2
                                    py-16
                                "
                            >
                                <div className="w-full max-w-[850px]">
                                    <Loading />
                                </div>
                            </div>
                        )}

                        {/* ======================================
                            RESULT
                        ====================================== */}

                        {result && !loading && (
                            <section
                                ref={resultRef}
                                className="
                                    flex-1
                                    px-1
                                    py-10
                                    sm:px-4
                                    sm:py-14
                                "
                            >
                                <div className="mx-auto max-w-[1150px]">
                                    <div
                                        className="
                                            mb-8
                                            flex
                                            items-end
                                            justify-between
                                            gap-4
                                            border-b
                                            border-[#f4ead7]/[0.07]
                                            pb-5
                                        "
                                    >
                                        <div>
                                            <p
                                                className="
                                                    font-mono
                                                    text-[9px]
                                                    tracking-[0.22em]
                                                    text-[#c98a4b]
                                                "
                                            >
                                                CODE REVIEW COMPLETE
                                            </p>

                                            <h2
                                                className="
                                                    mt-2
                                                    text-2xl
                                                    font-medium
                                                    tracking-[-0.04em]
                                                    sm:text-3xl
                                                "
                                            >
                                                Repository analysis
                                            </h2>
                                        </div>

                                        <button
                                            onClick={() => {
                                                setResult(null);
                                                setRepoUrl("");
                                                setError("");
                                            }}
                                            className="
                                                shrink-0
                                                rounded-full
                                                border
                                                border-[#f4ead7]/[0.08]
                                                px-4
                                                py-2
                                                text-[9px]
                                                text-[#f4ead7]/40
                                                transition-all
                                                hover:border-[#c98a4b]/20
                                                hover:bg-[#f4ead7]/[0.04]
                                                hover:text-[#f4ead7]/70
                                            "
                                        >
                                            New review
                                        </button>
                                    </div>

                                    <ReviewResult result={result} />
                                </div>
                            </section>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Review;