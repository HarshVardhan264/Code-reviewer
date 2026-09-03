import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const AboutHero = () => {
    const heroRef = useRef(null);
    const buttonRef = useRef(null);
    const arrowRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power4.out",
                },
            });

            tl.from(".about-eyebrow", {
                y: 20,
                opacity: 0,
                duration: 0.5,
            })
                .from(
                    ".about-title-line",
                    {
                        y: 55,
                        opacity: 0,
                        duration: 0.75,
                        stagger: 0.1,
                    },
                    "-=0.25"
                )
                .from(
                    ".about-description",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.55,
                    },
                    "-=0.35"
                )
                .from(
                    ".about-actions",
                    {
                        y: 15,
                        opacity: 0,
                        duration: 0.5,
                    },
                    "-=0.3"
                )
                .from(
                    ".about-image",
                    {
                        y: 35,
                        opacity: 0,
                        scale: 0.97,
                        duration: 0.9,
                    },
                    "-=0.6"
                )
                .from(
                    ".about-image-label",
                    {
                        y: 15,
                        opacity: 0,
                        duration: 0.4,
                    },
                    "-=0.35"
                );

            // Subtle floating button animation
            gsap.to(buttonRef.current, {
                y: -3,
                duration: 1.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // Arrow animation
            gsap.to(arrowRef.current, {
                x: 4,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="
                relative
                min-h-[calc(100vh-10px)]
                overflow-hidden
                bg-[#f3eadb]
                px-6
                pb-10
                pt-[105px]
                sm:px-10
                lg:px-14
                lg:pt-[100px]
            "
        >
            {/* =========================================
                BACKGROUND GLOW
            ========================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-10%]
                    top-[5%]
                    h-[550px]
                    w-[550px]
                    rounded-full
                    bg-[#b8793f]/[0.06]
                    blur-[120px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-20%]
                    left-[-10%]
                    h-[400px]
                    w-[500px]
                    rounded-full
                    bg-[#8d684b]/[0.04]
                    blur-[120px]
                "
            />

            {/* =========================================
                MAIN CONTENT
            ========================================= */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[calc(100vh-120px)]
                    max-w-[1380px]
                    items-center
                "
            >
                <div
                    className="
                        grid
                        w-full
                        items-center
                        gap-12
                        lg:grid-cols-[0.95fr_0.8fr]
                        lg:gap-20
                    "
                >
                    {/* =====================================
                        LEFT CONTENT
                    ===================================== */}

                    <div className="max-w-[700px]">
                        {/* EYEBROW */}

                        <p
                            className="
                                about-eyebrow
                                mb-6
                                font-mono
                                text-[10px]
                                font-medium
                                tracking-[0.32em]
                                text-[#8f5d32]
                                sm:text-[11px]
                            "
                        >
                            ABOUT CODELENS

                            <span className="mx-3 text-[#211812]/25">
                                /
                            </span>

                            CODE INTELLIGENCE
                        </p>

                        {/* TITLE */}

                        <h1
                            className="
                                overflow-hidden
                                tracking-[-0.07em]
                            "
                        >
                            <span
                                className="
                                    about-title-line
                                    block
                                    text-[clamp(3.8rem,6.4vw,6.8rem)]
                                    font-medium
                                    leading-[0.88]
                                    text-[#211812]
                                "
                            >
                                A clearer
                            </span>

                            <span
                                className="
                                    about-title-line
                                    block
                                    text-[clamp(3.8rem,6.4vw,6.8rem)]
                                    font-medium
                                    leading-[0.88]
                                    text-[#211812]
                                "
                            >
                                view of
                            </span>

                            <span
                                className="
                                    about-title-line
                                    block
                                    text-[clamp(3.8rem,6.4vw,6.8rem)]
                                    font-medium
                                    leading-[0.88]
                                    text-[#211812]/30
                                "
                            >
                                your{" "}
                                <span className="text-[#ad6d36]">
                                    code.
                                </span>
                            </span>
                        </h1>

                        {/* =====================================
                            CATCHY DESCRIPTION
                        ===================================== */}

                        <div className="about-description mt-8">
                            <p
                                className="
                                    text-[19px]
                                    font-medium
                                    tracking-[-0.025em]
                                    text-[#211812]/85
                                    sm:text-[21px]
                                "
                            >
                                See beyond the syntax.
                            </p>

                            <p
                                className="
                                    mt-2
                                    max-w-[520px]
                                    text-[14px]
                                    leading-6
                                    text-[#211812]/50
                                    sm:text-[15px]
                                    sm:leading-7
                                "
                            >
                                CodeLens gives developers a second pair of
                                eyes — finding the bugs, risks and decisions
                                hidden inside a repository.
                            </p>
                        </div>

                        {/* =====================================
                            ACTIONS
                        ===================================== */}

                        <div
                            className="
                                about-actions
                                mt-8
                                flex
                                flex-wrap
                                items-center
                                gap-5
                            "
                        >
                            <Link
                                ref={buttonRef}
                                to="/review"
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    gap-5
                                    rounded-full
                                    bg-[#211812]
                                    px-7
                                    py-4
                                    text-[13px]
                                    font-medium
                                    text-[#f3eadb]
                                    shadow-[0_8px_25px_rgba(33,24,18,0.12)]
                                    transition-all
                                    duration-300
                                    hover:bg-[#382920]
                                    hover:shadow-[0_12px_30px_rgba(33,24,18,0.16)]
                                "
                            >
                                Review your code

                                <span
                                    ref={arrowRef}
                                    className="
                                        text-[16px]
                                        text-[#d0955b]
                                    "
                                >
                                    →
                                </span>
                            </Link>

                            <a
                                href="#what-is-codelens"
                                className="
                                    text-[12px]
                                    font-medium
                                    text-[#211812]/50
                                    transition-colors
                                    duration-300
                                    hover:text-[#211812]
                                "
                            >
                                Explore CodeLens ↓
                            </a>
                        </div>
                    </div>

                    {/* =====================================
                        RIGHT IMAGE
                    ===================================== */}

                    <div
                        className="
                            relative
                            lg:ml-auto
                            lg:w-full
                            lg:max-w-[590px]
                        "
                    >
                        {/* BACK FRAME */}

                        <div
                            className="
                                absolute
                                -bottom-3
                                -left-3
                                h-full
                                w-full
                                rounded-[1.7rem]
                                border
                                border-[#211812]/10
                            "
                        />

                        {/* IMAGE */}

                        <div
                            className="
                                about-image
                                relative
                                h-[360px]
                                overflow-hidden
                                rounded-[1.7rem]
                                bg-[#33271f]
                                sm:h-[420px]
                                lg:h-[470px]
                            "
                        >
                            <img
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85"
                                alt="Code displayed on a developer's screen"
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                    object-center
                                "
                            />

                            {/* DARK OVERLAY */}

                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-[#211812]/25
                                "
                            />

                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-[#211812]/75
                                    via-[#211812]/10
                                    to-transparent
                                "
                            />

                            {/* IMAGE LABEL */}

                            <div
                                className="
                                    about-image-label
                                    absolute
                                    bottom-6
                                    left-6
                                    right-6
                                    flex
                                    items-end
                                    justify-between
                                "
                            >
                                <div>
                                    <p
                                        className="
                                            font-mono
                                            text-[9px]
                                            tracking-[0.25em]
                                            text-[#f3eadb]/55
                                        "
                                    >
                                        INTELLIGENT REVIEW
                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-[15px]
                                            font-medium
                                            tracking-[-0.02em]
                                            text-[#f3eadb]
                                        "
                                    >
                                        Understand what matters.
                                    </p>
                                </div>

                                {/* IMAGE ICON */}

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#f3eadb]/90
                                        text-[#211812]
                                        backdrop-blur-md
                                    "
                                >
                                    ↗
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================
                SCROLL INDICATOR
            ========================================= */}

            <div
                className="
                    absolute
                    bottom-6
                    left-1/2
                    hidden
                    -translate-x-1/2
                    items-center
                    gap-3
                    font-mono
                    text-[8px]
                    tracking-[0.28em]
                    text-[#211812]/30
                    lg:flex
                "
            >
                <span
                    className="
                        h-1
                        w-1
                        rounded-full
                        bg-[#ad6d36]
                    "
                />

                SCROLL TO EXPLORE
            </div>
        </section>
    );
};

export default AboutHero;
