import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutReviewAreas = () => {
    const sectionRef = useRef(null);

    const areas = [
        {
            number: "01",
            title: "Bug Detection",
            description:
                "Find logic errors, edge cases and fragile code before they become real problems.",
            tag: "LOGIC",
        },
        {
            number: "02",
            title: "Security",
            description:
                "Spot vulnerable patterns, unsafe practices and potential attack surfaces hiding in your code.",
            tag: "RISK",
        },
        {
            number: "03",
            title: "Performance",
            description:
                "Identify unnecessary work and inefficient patterns that could slow your application down.",
            tag: "SPEED",
        },
        {
            number: "04",
            title: "Code Quality",
            description:
                "Understand maintainability, structure and the decisions that make code easier to work with.",
            tag: "QUALITY",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray(".review-reveal");

            gsap.fromTo(
                items,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        once: true,
                    },
                }
            );

            // Small hover movement
            gsap.utils.toArray(".review-card").forEach((card) => {
                const arrow = card.querySelector(".review-arrow");

                card.addEventListener("mouseenter", () => {
                    gsap.to(arrow, {
                        x: 4,
                        y: -4,
                        duration: 0.3,
                        ease: "power2.out",
                    });
                });

                card.addEventListener("mouseleave", () => {
                    gsap.to(arrow, {
                        x: 0,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out",
                    });
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="review-areas"
            className="
                relative
                overflow-hidden
                bg-[#211812]
                px-6
                py-24
                text-[#f3eadb]
                sm:px-10
                sm:py-28
                lg:px-14
                lg:py-32
            "
        >
            <div className="relative z-10 mx-auto max-w-[1380px]">

                {/* ================= HEADER ================= */}

                <div className="review-reveal mb-16 lg:mb-20">
                    <div className="mb-7 flex items-center gap-3">
                        <span className="h-[5px] w-[5px] rounded-full bg-[#c4874b]" />

                        <span
                            className="
                                font-mono
                                text-[9px]
                                tracking-[0.3em]
                                text-[#c4874b]
                            "
                        >
                            WHAT CODELENS SEES
                        </span>
                    </div>

                    <h2
                        className="
                            max-w-[950px]
                            text-[clamp(2.8rem,5vw,5.4rem)]
                            font-medium
                            leading-[0.94]
                            tracking-[-0.065em]
                        "
                    >
                        Four ways to look
                        <br />
                        <span className="text-[#f3eadb]/30">
                            at your code.
                        </span>
                    </h2>
                </div>

                {/* ================= CARDS ================= */}

                <div
                    className="
                        grid
                        border-t
                        border-[#f3eadb]/10
                        md:grid-cols-2
                    "
                >
                    {areas.map((area, index) => (
                        <div
                            key={area.number}
                            className={`
                                review-reveal
                                review-card
                                group
                                relative
                                min-h-[285px]
                                border-b
                                border-[#f3eadb]/10
                                p-7
                                transition-colors
                                duration-500
                                hover:bg-[#f3eadb]/[0.035]
                                sm:p-9
                                lg:p-10
                                ${
                                    index % 2 === 0
                                        ? "md:border-r md:border-[#f3eadb]/10"
                                        : ""
                                }
                            `}
                        >

                            {/* TOP */}

                            <div className="flex items-start justify-between">
                                <span
                                    className="
                                        font-mono
                                        text-[10px]
                                        tracking-[0.2em]
                                        text-[#f3eadb]/30
                                    "
                                >
                                    {area.number}
                                </span>

                                <span
                                    className="
                                        rounded-full
                                        border
                                        border-[#f3eadb]/10
                                        px-3
                                        py-1.5
                                        font-mono
                                        text-[8px]
                                        tracking-[0.2em]
                                        text-[#f3eadb]/30
                                        transition-all
                                        duration-300
                                        group-hover:border-[#c4874b]/40
                                        group-hover:text-[#c4874b]
                                    "
                                >
                                    {area.tag}
                                </span>
                            </div>

                            {/* CONTENT */}

                            <div className="mt-16 max-w-[480px]">
                                <h3
                                    className="
                                        text-[clamp(1.8rem,3vw,2.8rem)]
                                        font-medium
                                        leading-none
                                        tracking-[-0.05em]
                                    "
                                >
                                    {area.title}
                                </h3>

                                <p
                                    className="
                                        mt-4
                                        max-w-[420px]
                                        text-[13px]
                                        leading-6
                                        text-[#f3eadb]/45
                                    "
                                >
                                    {area.description}
                                </p>
                            </div>

                            {/* ARROW */}

                            <div
                                className="
                                    review-arrow
                                    absolute
                                    bottom-8
                                    right-8
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-[#f3eadb]/10
                                    text-[14px]
                                    text-[#f3eadb]/30
                                    transition-colors
                                    duration-300
                                    group-hover:border-[#c4874b]/50
                                    group-hover:text-[#c4874b]
                                "
                            >
                                ↗
                            </div>
                        </div>
                    ))}
                </div>

                {/* ================= BOTTOM ================= */}

                <div
                    className="
                        review-reveal
                        mt-12
                        flex
                        flex-col
                        gap-4
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <p
                        className="
                            max-w-[560px]
                            text-[13px]
                            leading-6
                            text-[#f3eadb]/35
                        "
                    >
                        CodeLens doesn't just ask whether your code works.
                        It asks whether it will continue to work well.
                    </p>

                    <span
                        className="
                            font-mono
                            text-[8px]
                            tracking-[0.25em]
                            text-[#c4874b]/60
                        "
                    >
                        04 AREAS OF ANALYSIS
                    </span>
                </div>
            </div>

            {/* BACKGROUND GLOW */}

            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-12%]
                    top-[15%]
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-[#ad6d36]/[0.05]
                    blur-[120px]
                "
            />
        </section>
    );
};

export default AboutReviewAreas;