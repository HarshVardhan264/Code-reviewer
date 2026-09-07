
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutIntro = () => {
    const sectionRef = useRef(null);
    const foxRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true,
                },
                defaults: {
                    ease: "power4.out",
                },
            });

            tl.from(".intro-label", {
                y: 20,
                opacity: 0,
                duration: 0.6,
            })
                .from(
                    ".intro-heading",
                    {
                        y: 60,
                        opacity: 0,
                        duration: 0.9,
                    },
                    "-=0.3"
                )
                .from(
                    ".intro-fox",
                    {
                        y: 70,
                        scale: 0.92,
                        opacity: 0,
                        duration: 1,
                    },
                    "-=0.45"
                )
                .from(
                    ".intro-text",
                    {
                        y: 35,
                        opacity: 0,
                        duration: 0.7,
                    },
                    "-=0.55"
                )
                .from(
                    ".intro-meta",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.5,
                    },
                    "-=0.3"
                );

            gsap.to(foxRef.current, {
                y: -10,
                rotation: 1.5,
                duration: 2.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="what-is-codelens"
            className="
                relative
                overflow-hidden
                bg-[#121213]
                px-6
                py-24
                text-white
                sm:px-10
                sm:py-32
                lg:px-14
                lg:py-36
            "
        >
            <div className="relative z-10 mx-auto max-w-[1380px]">

                {/* TOP LABEL */}

                <div className="intro-label mb-10 flex items-center gap-3">
                    <span className="h-[5px] w-[5px] rounded-full bg-white/60" />

                    <span
                        className="
                            text-[9px]
                            font-medium
                            tracking-[0.3em]
                            text-white/40
                        "
                    >
                        WHY CODELENS
                    </span>
                </div>


                {/* MAIN HEADING */}

                <h2
                    className="
                        intro-heading
                        max-w-[1100px]
                        text-[clamp(2.8rem,5.5vw,5.8rem)]
                        font-medium
                        leading-[0.94]
                        tracking-[-0.065em]
                        text-white
                    "
                >
                    Good code should
                    <br />
                    <span className="text-white/25">
                        be understood before it breaks.
                    </span>
                </h2>


                {/* CONTENT */}

                <div
                    className="
                        mt-16
                        grid
                        items-center
                        gap-10
                        border-t
                        border-white/[0.08]
                        pt-10
                        lg:grid-cols-[0.75fr_1.25fr]
                        lg:gap-20
                    "
                >

                    {/* FOX */}

                    <div
                        className="
                            intro-fox
                            relative
                            flex
                            min-h-[320px]
                            items-end
                            justify-center
                            sm:min-h-[380px]
                            lg:min-h-[420px]
                            lg:justify-start
                        "
                    >

                        {/* Soft glow */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                bottom-[5%]
                                left-1/2
                                h-[280px]
                                w-[280px]
                                -translate-x-1/2
                                rounded-full
                                bg-white/[0.025]
                                blur-[70px]
                            "
                        />

                        {/* Fox */}

                        <img
                            ref={foxRef}
                            src="/fox.png"
                            alt="CodeLens fox character"
                            className="
                                relative
                                z-10
                                h-auto
                                w-[240px]
                                object-contain
                                drop-shadow-[0_25px_30px_rgba(255,255,255,0.06)]
                                sm:w-[280px]
                                lg:w-[340px]
                            "
                        />

                        {/* Character label */}

                        <div
                            className="
                                absolute
                                bottom-4
                                left-1/2
                                z-20
                                -translate-x-1/2
                                whitespace-nowrap
                                rounded-full
                                border
                                border-white/[0.08]
                                bg-[#121213]/80
                                px-4
                                py-2
                                backdrop-blur-sm
                            "
                        >
                            <span
                                className="
                                    text-[8px]
                                    tracking-[0.2em]
                                    text-white/35
                                "
                            >
                                YOUR SECOND PAIR OF EYES
                            </span>
                        </div>
                    </div>


                    {/* TEXT */}

                    <div className="intro-text max-w-[720px]">

                        <p
                            className="
                                text-[20px]
                                font-medium
                                leading-[1.45]
                                tracking-[-0.025em]
                                text-white/85
                                sm:text-[24px]
                            "
                        >
                            Code can work perfectly today and still hide
                            problems waiting for tomorrow.
                        </p>

                        <p
                            className="
                                mt-6
                                max-w-[650px]
                                text-[14px]
                                leading-7
                                text-white/45
                                sm:text-[15px]
                            "
                        >
                            CodeLens reviews your repository with three
                            specialized AI agents. One looks for bugs,
                            another searches for security risks, and the
                            third evaluates code quality. Together, they
                            turn complex code into clear, actionable insight.
                        </p>


                        {/* INFORMATION ROW */}

                        <div
                            className="
                                intro-meta
                                mt-10
                                grid
                                grid-cols-2
                                gap-6
                                border-t
                                border-white/[0.08]
                                pt-6
                                sm:grid-cols-3
                            "
                        >
                            <div>
                                <span
                                    className="
                                        block
                                        text-[8px]
                                        font-medium
                                        tracking-[0.2em]
                                        text-white/50
                                    "
                                >
                                    01
                                </span>

                                <span
                                    className="
                                        mt-2
                                        block
                                        text-[11px]
                                        text-white/35
                                    "
                                >
                                    Understand
                                </span>
                            </div>

                            <div>
                                <span
                                    className="
                                        block
                                        text-[8px]
                                        font-medium
                                        tracking-[0.2em]
                                        text-white/50
                                    "
                                >
                                    02
                                </span>

                                <span
                                    className="
                                        mt-2
                                        block
                                        text-[11px]
                                        text-white/35
                                    "
                                >
                                    Detect
                                </span>
                            </div>

                            <div>
                                <span
                                    className="
                                        block
                                        text-[8px]
                                        font-medium
                                        tracking-[0.2em]
                                        text-white/50
                                    "
                                >
                                    03
                                </span>

                                <span
                                    className="
                                        mt-2
                                        block
                                        text-[11px]
                                        text-white/35
                                    "
                                >
                                    Improve
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            {/* BACKGROUND DETAIL */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    top-1/2
                    h-[420px]
                    w-[420px]
                    -translate-y-1/2
                    rounded-full
                    bg-white/[0.012]
                    blur-[100px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-32
                    left-[15%]
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-white/[0.008]
                    blur-[100px]
                "
            />
        </section>
    );
};

export default AboutIntro;
