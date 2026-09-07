import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const AboutHero = () => {
    const sectionRef = useRef(null);
    const labelRef = useRef(null);
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const scrollRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            tl.fromTo(
                labelRef.current,
                {
                    opacity: 0,
                    y: 15,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                }
            )
                .fromTo(
                    headingRef.current,
                    {
                        opacity: 0,
                        y: 45,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                    },
                    "-=0.25"
                )
                .fromTo(
                    textRef.current,
                    {
                        opacity: 0,
                        y: 25,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                    },
                    "-=0.55"
                )
                .fromTo(
                    buttonRef.current,
                    {
                        opacity: 0,
                        y: 20,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                    },
                    "-=0.35"
                )
                .fromTo(
                    scrollRef.current,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 0.8,
                    },
                    "-=0.1"
                );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
                relative
                flex
                min-h-screen
                items-center
                bg-[#121213]
                px-6
                pb-20
                pt-32
                text-white
                sm:px-10
                lg:px-16
            "
        >

            <div className="mx-auto w-full max-w-7xl">

                {/* LABEL */}

                <div ref={labelRef} className="mb-8 flex items-center gap-3">

                    <span className="h-px w-10 bg-white/30" />

                    <span
                        className="
                            font-mono
                            text-[10px]
                            uppercase
                            tracking-[0.28em]
                            text-white/45
                        "
                    >
                        About CodeLens
                    </span>

                </div>


                {/* HEADING */}

                <h1
                    ref={headingRef}
                    className="
                        max-w-6xl
                        text-[clamp(3.5rem,8vw,8rem)]
                        font-medium
                        leading-[0.9]
                        tracking-[-0.065em]
                        text-white
                    "
                >
                    Code should be
                    <br />

                    <span className="text-white/35">
                        reviewed before
                    </span>

                    <br />

                    it becomes a problem.
                </h1>


                {/* DESCRIPTION */}

                <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">

                    <p
                        ref={textRef}
                        className="
                            max-w-xl
                            text-base
                            leading-8
                            text-white/55
                            sm:text-lg
                        "
                    >
                        CodeLens is an autonomous AI code review platform
                        that analyzes your repositories for bugs, security
                        vulnerabilities, and code quality issues.
                    </p>


                    {/* CTA */}

                    <div ref={buttonRef}>

                        <Link
                            to="/review"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-4
                                border
                                border-white/20
                                px-6
                                py-4
                                text-sm
                                font-medium
                                text-white
                                transition-all
                                duration-300
                                hover:border-white/50
                               
                            "
                        >
                            <span className=""> Review your repository</span>

                           

                            <span
                                className="
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

        </section>
    );
};

export default AboutHero;