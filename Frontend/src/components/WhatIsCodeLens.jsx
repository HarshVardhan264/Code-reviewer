import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatIsCodeLens = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true,
                },
            });

            // Label
            tl.from(".cl-rail__label", {
                y: 25,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
            })

                // First paragraph
                .from(
                    ".cl-statement:nth-child(1)",
                    {
                        y: 45,
                        opacity: 0,
                        duration: 0.9,
                        ease: "power4.out",
                    },
                    "-=0.3"
                )

                // Second paragraph
                .from(
                    ".cl-statement:nth-child(2)",
                    {
                        y: 45,
                        opacity: 0,
                        duration: 0.9,
                        ease: "power4.out",
                    },
                    "-=0.5"
                )

                // Divider
                .from(
                    ".cl-rule",
                    {
                        scaleX: 0,
                        transformOrigin: "left center",
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.4"
                )

                // Final description
                .from(
                    ".cl-prose",
                    {
                        y: 25,
                        opacity: 0,
                        duration: 0.7,
                        ease: "power3.out",
                    },
                    "-=0.4"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="cl-section"
            id="about"
        >
            <div className="cl-shell cl-rail">

                {/* CodeLens Lens */}
                <div className="cl-rail__label">
                    <svg
                        width="230"
                        height="230"
                        viewBox="0 0 230 230"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        {/* Outer technical circle */}
                        <circle
                            cx="105"
                            cy="105"
                            r="82"
                            stroke="rgba(255,255,255,0.10)"
                            strokeWidth="1"
                        />

                        {/* Lens glass */}
                        <circle
                            cx="105"
                            cy="105"
                            r="48"
                            stroke="rgba(255,255,255,0.92)"
                            strokeWidth="4"
                        />

                        {/* Inner glass detail */}
                        <circle
                            cx="105"
                            cy="105"
                            r="39"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="1"
                        />

                        {/* Lens reflection */}
                        <path
                            d="M78 83C84 75 92 70 101 68"
                            stroke="rgba(255,255,255,0.35)"
                            strokeWidth="8"
                            strokeLinecap="round"
                        />

                        {/* Magnifying glass handle */}
                        <path
                            d="M139 139L178 178"
                            stroke="rgba(255,255,255,0.92)"
                            strokeWidth="12"
                            strokeLinecap="round"
                        />

                        {/* Handle highlight */}
                        <path
                            d="M140 140L177 177"
                            stroke="rgba(255,255,255,0.18)"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />

                        {/* Horizontal crosshair */}
                        <path
                            d="M23 105H187"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />

                        {/* Vertical crosshair */}
                        <path
                            d="M105 23V187"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                    </svg>
                </div>

                {/* Existing Content — unchanged */}
                <div>

                    <p className="cl-statement">
                        A review that takes four minutes is not a review. It is a signature.
                        Most pull requests get approved by someone who scrolled to the
                        bottom, and the bug ships anyway.
                    </p>

                    <p
                        className="cl-statement"
                        style={{ marginTop: "2.2rem" }}
                    >
                        CodeLens reads what nobody has time to read. It follows the change
                        through the code that calls it, then tells you what breaks and why.
                    </p>

                    <div
                        className="cl-rule"
                        style={{
                            margin: "3.5rem 0 1.25rem",
                            maxWidth: "34rem",
                        }}
                    />

                    <p className="cl-prose">
                        Point it at a repository or a single pull request. It reports back
                        in plain language, with the line, the reason, and the fix.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default WhatIsCodeLens;