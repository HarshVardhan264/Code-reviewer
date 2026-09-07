import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutCTA = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-cta-top", {
                y: -20,
                opacity: 0,
                duration: 0.7,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                },
            });

            gsap.from(".about-cta-label", {
                y: 25,
                opacity: 0,
                duration: 0.7,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    once: true,
                },
            });

            gsap.from(".about-cta-title-line", {
                y: "100%",
                opacity: 0,
                duration: 0.9,
                stagger: 0.15,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    once: true,
                },
            });

            gsap.from(".about-cta-bottom", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.3,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 65%",
                    once: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#121213] text-white"
        >
            {/* =====================================================
                CTA HERO
            ===================================================== */}

            <div className="relative min-h-[72vh] overflow-hidden">

                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=85"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#121213]/70" />

                {/* Neutral dark overlay */}
                <div className="absolute inset-0 bg-[#121213]/20 mix-blend-multiply" />

                {/* Top fade */}
                <div
                    className="
                        absolute
                        inset-x-0
                        top-0
                        h-[40%]
                        bg-gradient-to-b
                        from-[#121213]
                        to-transparent
                    "
                />

                {/* Bottom fade */}
                <div
                    className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-[70%]
                        bg-gradient-to-t
                        from-[#121213]
                        via-[#121213]/75
                        to-transparent
                    "
                />

                {/* Side vignette */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-black/75
                        via-transparent
                        to-black/55
                    "
                />

                {/* Subtle white glow */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        h-[600px]
                        w-[900px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-white/[0.025]
                        blur-[180px]
                    "
                />

                {/* Content */}
                <div
                    className="
                        relative
                        mx-auto
                        flex
                        min-h-[72vh]
                        max-w-[1500px]
                        flex-col
                        justify-between
                        px-[7vw]
                        py-10
                        sm:py-14
                    "
                >
                    


                    {/* =================================================
                        MAIN CONTENT
                    ================================================= */}

                    <div className="pb-8 pt-28 sm:pb-12 sm:pt-32">

                        {/* Label */}
                        <div className="about-cta-label mb-7 flex items-center gap-4">

                            <span className="h-px w-9 bg-white/50" />

                            <span
                                className="
                                    text-[10px]
                                    tracking-[0.3em]
                                    text-white/55
                                "
                            >
                                CODELENS
                            </span>

                        </div>


                        {/* Heading */}
                        <div className="overflow-hidden pb-[0.15em]">
                            <h2
                                className="
                                    about-cta-title-line
                                    max-w-[1000px]
                                    text-[clamp(4rem,9vw,9.5rem)]
                                    font-medium
                                    leading-[0.95]
                                    tracking-[-0.075em]
                                    text-white
                                "
                            >
                                See your code
                            </h2>
                        </div>

                        <div className="overflow-hidden pb-[0.15em]">
                            <h2
                                className="
                                    about-cta-title-line
                                    max-w-[1000px]
                                    text-[clamp(4rem,9vw,9.5rem)]
                                    font-medium
                                    leading-[0.95]
                                    tracking-[-0.075em]
                                    text-white/30
                                "
                            >
                                differently.
                            </h2>
                        </div>


                        {/* Description */}
                        <p
                            className="
                                about-cta-bottom
                                mt-8
                                max-w-[450px]
                                text-[17px]
                                leading-[1.8]
                                text-white/55
                            "
                        >
                            Give your code a second pair of eyes.
                            CodeLens helps you understand what's wrong,
                            why it matters, and where to improve.
                        </p>


                        {/* CTA */}
                        <div className="about-cta-bottom mt-8">

                            <Link
                                to="/review"
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    gap-4
                                    rounded-[14px]
                                    bg-white
                                    px-7
                                    py-4
                                    
                                    font-semibold
                                    text-[#000000]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-white/90
                                    hover:shadow-[0_20px_60px_rgba(255,255,255,0.08)]
                                "
                            >
                                <span className="text-black ">
                                    Start a review
                                </span>

                                <span
                                    className="
                                        text-[17px]
                                        text-black
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                >
                                    →
                                </span>

                            </Link>

                        </div>

                    </div>

                </div>
            </div>


            {/* =====================================================
                SMALL BOTTOM STRIP
            ===================================================== */}

            <div className="relative mx-auto max-w-[1500px] px-[7vw]">

                <div
                    className="
                        flex
                        flex-col
                        gap-3
                        border-t
                        border-white/[0.08]
                        py-6
                        text-[9px]
                        text-white/25
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >

                    <span>
                        CodeLens · AI Code Intelligence
                    </span>

                    <span className="tracking-[0.18em]">
                        UNDERSTAND · REVIEW · IMPROVE
                    </span>

                </div>

            </div>

        </section>
    );
};

export default AboutCTA;
