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
            className="relative overflow-hidden bg-[#080604] text-[#f4ead7]"
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
                <div className="absolute inset-0 bg-[#080604]/70" />

                {/* Brown overlay */}
                <div className="absolute inset-0 bg-[#3b2415]/25 mix-blend-multiply" />

                {/* Top fade */}
                <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-[#080604] to-transparent" />

                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#080604] via-[#080604]/75 to-transparent" />

                {/* Side vignette */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#080604]/75 via-transparent to-[#080604]/55" />

                {/* Warm glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b86f32]/[0.08] blur-[180px]" />

                {/* Content */}
                <div className="relative mx-auto flex min-h-[72vh] max-w-[1500px] flex-col justify-between px-[7vw] py-10 sm:py-14">

                    {/* TOP BAR */}
                    <div className="about-cta-top flex items-center justify-between">

                        <Link
                            to="/"
                            className="text-[20px] font-medium tracking-[-0.05em]"
                        >
                            CodeLens<span className="text-[#c98a4b]">.</span>
                        </Link>

                        <div className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#c98a4b]" />

                            <span className="font-mono text-[9px] tracking-[0.22em] text-[#f4ead7]/40">
                                READY TO REVIEW
                            </span>
                        </div>

                    </div>


                    {/* MAIN CONTENT */}
                    <div className="pb-8 pt-28 sm:pb-12 sm:pt-32">

                        {/* Label */}
                        <div className="about-cta-label mb-7 flex items-center gap-4">

                            <span className="h-px w-9 bg-[#c98a4b]" />

                            <span className="font-mono text-[10px] tracking-[0.3em] text-[#c98a4b]">
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
            text-[#f4ead7]/40
        "
                            >
                                differently.
                            </h2>
                        </div>


                        {/* Description */}
                        <p className="about-cta-bottom mt-8 max-w-[450px] text-[14px] leading-[1.8] text-[#f4ead7]/50">
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
                                    bg-[#f4ead7]
                                    px-7
                                    py-4
                                    text-[13px]
                                    font-semibold
                                    text-[#17110c]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-white
                                    hover:shadow-[0_20px_50px_rgba(201,138,75,0.2)]
                                "
                            >
                                <span>
                                    Start a review
                                </span>

                                <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-1">
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

                <div className="flex flex-col gap-3 py-6 text-[9px] text-[#f4ead7]/20 sm:flex-row sm:items-center sm:justify-between">

                    <span>
                        CodeLens · AI Code Intelligence
                    </span>

                    <span className="font-mono tracking-[0.18em]">
                        UNDERSTAND · REVIEW · IMPROVE
                    </span>

                </div>

            </div>

        </section>
    );
};

export default AboutCTA;