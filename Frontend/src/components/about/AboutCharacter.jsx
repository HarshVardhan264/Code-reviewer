import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutCharacter = () => {
    const sectionRef = useRef(null);
    const characterRef = useRef(null);

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

            tl.from(".character-label", {
                y: 20,
                opacity: 0,
                duration: 0.6,
            })
                .from(
                    ".character-title",
                    {
                        y: 60,
                        opacity: 0,
                        duration: 0.9,
                    },
                    "-=0.3"
                )
                .from(
                    ".character-copy",
                    {
                        y: 35,
                        opacity: 0,
                        duration: 0.8,
                    },
                    "-=0.4"
                )
                .from(
                    ".character-visual",
                    {
                        scale: 0.85,
                        opacity: 0,
                        y: 50,
                        duration: 1.2,
                    },
                    "-=0.5"
                );

            // Character floating animation
            gsap.to(characterRef.current, {
                y: -12,
                rotation: 1,
                duration: 2.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // Glow animation
            gsap.to(".character-glow", {
                scale: 1.15,
                opacity: 0.7,
                duration: 2.5,
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
            className="
                relative
                overflow-hidden
                bg-[#211812]
                px-6
                py-28
                text-[#f3eadb]
                sm:px-10
                sm:py-36
                lg:px-14
                lg:py-40
            "
        >
            <div className="relative z-10 mx-auto max-w-[1380px]">

                {/* =====================================================
                    MAIN CONTENT
                ===================================================== */}

                <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-24">

                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div>

                        {/* Label */}

                        <div className="character-label mb-8 flex items-center gap-3">

                            <span className="h-[5px] w-[5px] rounded-full bg-[#c4874b]" />

                            <span className="font-mono text-[9px] tracking-[0.3em] text-[#c4874b]">
                                THE CODELENS APPROACH
                            </span>

                        </div>


                        {/* Heading */}

                        <h2
                            className="
                                character-title
                                max-w-[850px]
                                text-[clamp(3rem,5.5vw,6rem)]
                                font-medium
                                leading-[0.92]
                                tracking-[-0.07em]
                            "
                        >
                            Your code deserves
                            <br />
                            <span className="text-[#f3eadb]/30">
                                another perspective.
                            </span>
                        </h2>


                        {/* Copy */}

                        <div className="character-copy mt-12 max-w-[600px] border-t border-[#f3eadb]/10 pt-8">

                            <p className="text-[17px] leading-7 text-[#f3eadb]/65">
                                CodeLens acts like a second pair of eyes
                                for your code — always looking for the
                                things that are easy to miss.
                            </p>

                            <p className="mt-5 text-[13px] leading-6 text-[#f3eadb]/35">
                                It doesn't replace the developer.
                                It helps the developer see more clearly.
                            </p>

                        </div>

                    </div>


                    {/* =================================================
                        PARTNER CHARACTER
                    ================================================= */}

                    <div
                        className="
                            character-visual
                            relative
                            flex
                            min-h-[420px]
                            items-center
                            justify-center
                        "
                    >

                        {/* Glow */}

                        <div
                            className="
                                character-glow
                                pointer-events-none
                                absolute
                                h-[320px]
                                w-[320px]
                                rounded-full
                                bg-[#c4874b]/10
                                blur-[90px]
                            "
                        />


                        {/* Character */}

                        <div
                            ref={characterRef}
                            className="
                                relative
                                z-10
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <img
                                src="/partner.png"
                                alt="CodeLens AI review companion"
                                className="
                                    h-auto
                                    w-[270px]
                                    object-contain
                                    drop-shadow-[0_30px_35px_rgba(0,0,0,0.3)]
                                    sm:w-[320px]
                                    lg:w-[370px]
                                "
                            />
                        </div>


                        {/* Floating status */}

                        <div
                            className="
                                absolute
                                right-[3%]
                                top-[12%]
                                z-20
                                rounded-full
                                border
                                border-[#f3eadb]/10
                                bg-[#211812]/70
                                px-4
                                py-2
                                backdrop-blur-md
                            "
                        >
                            <div className="flex items-center gap-2">

                                <span className="h-1.5 w-1.5 rounded-full bg-[#c4874b]" />

                                <span className="font-mono text-[8px] tracking-[0.2em] text-[#f3eadb]/50">
                                    REVIEWING
                                </span>

                            </div>
                        </div>


                        {/* Floating AI label */}

                        <div
                            className="
                                absolute
                                bottom-[8%]
                                left-[4%]
                                z-20
                                rounded-[12px]
                                border
                                border-[#f3eadb]/10
                                bg-[#f3eadb]/[0.04]
                                px-5
                                py-4
                                backdrop-blur-md
                            "
                        >
                            <span className="block font-mono text-[8px] tracking-[0.2em] text-[#c4874b]">
                                CODELENS
                            </span>

                            <span className="mt-1 block text-[11px] text-[#f3eadb]/40">
                                YOUR REVIEW COMPANION
                            </span>
                        </div>

                    </div>
                </div>


               
                

            </div>


            {/* =====================================================
                BACKGROUND GLOW
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-[-10%]
                    top-[20%]
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-[#c4874b]/[0.035]
                    blur-[120px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-20%]
                    right-[-10%]
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-[#c4874b]/[0.04]
                    blur-[100px]
                "
            />

        </section>
    );
};

export default AboutCharacter;