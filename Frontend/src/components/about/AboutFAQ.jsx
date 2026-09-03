import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutFAQ = () => {
    const sectionRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What is CodeLens?",
            answer:
                "CodeLens is an AI-powered code review system that looks beyond syntax. It analyzes your codebase to identify bugs, security risks, performance issues and code-quality problems.",
        },
        {
            question: "What can CodeLens review?",
            answer:
                "CodeLens looks at several dimensions of your code including potential bugs, security vulnerabilities, inefficient implementations, maintainability and overall code quality.",
        },
        {
            question: "How does CodeLens analyze my code?",
            answer:
                "You connect your repository and CodeLens examines the structure and context of your code before producing findings. The goal is to understand why something matters, not simply point at a line.",
        },
        {
            question: "Does CodeLens replace a developer?",
            answer:
                "No. CodeLens is designed as a second pair of eyes. It helps developers spot issues and understand their code faster while keeping the final decisions and changes in their hands.",
        },
        {
            question: "What makes CodeLens different from a linter?",
            answer:
                "Traditional linters are excellent at enforcing rules and detecting specific patterns. CodeLens aims to provide a broader review by combining multiple areas of analysis with explanations and context.",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".faq-label", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true,
                },
            });

            gsap.from(".faq-heading", {
                y: 50,
                opacity: 0,
                duration: 0.9,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    once: true,
                },
            });

            gsap.from(".faq-item", {
                y: 30,
                opacity: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".faq-list",
                    start: "top 80%",
                    once: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#f3eadb] px-6 py-28 text-[#211812] sm:px-10 sm:py-36 lg:px-14 lg:py-40"
        >
            <div className="mx-auto max-w-[1380px]">
                {/* Header */}
                <div className="mb-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                    <div className="faq-label flex items-center gap-3">
                        <span className="h-[5px] w-[5px] rounded-full bg-[#ad6d36]" />

                        <span className="font-mono text-[9px] tracking-[0.3em] text-[#8f5d32]">
                            FREQUENTLY ASKED
                        </span>
                    </div>

                    <div>
                        <h2 className="faq-heading max-w-[900px] text-[clamp(3rem,6vw,6.2rem)] font-medium leading-[0.9] tracking-[-0.07em]">
                            Questions,
                            <br />
                            <span className="text-[#211812]/30">
                                answered clearly.
                            </span>
                        </h2>
                    </div>
                </div>

                {/* FAQ */}
                <div className="faq-list border-t border-[#211812]/15">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="faq-item border-b border-[#211812]/15"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full items-center justify-between gap-8 py-7 text-left sm:py-8"
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex items-start gap-6 sm:gap-10">
                                        <span className="pt-1 font-mono text-[9px] tracking-[0.2em] text-[#ad6d36]">
                                            0{index + 1}
                                        </span>

                                        <span className="text-[18px] font-medium tracking-[-0.035em] sm:text-[21px]">
                                            {faq.question}
                                        </span>
                                    </div>

                                    <span
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#211812]/15 text-[18px] font-light transition-all duration-300 ${
                                            isOpen
                                                ? "rotate-45 bg-[#211812] text-[#f3eadb]"
                                                : "text-[#211812]/50"
                                        }`}
                                    >
                                        +
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
                                        isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="pb-8 pl-[45px] sm:pl-[72px]">
                                            <p className="max-w-[650px] text-[13px] leading-7 text-[#211812]/50">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <div className="mt-10 flex items-center justify-between">
                    <p className="text-[11px] text-[#211812]/35">
                        Still curious? Start exploring CodeLens.
                    </p>

                    <span className="hidden font-mono text-[8px] tracking-[0.25em] text-[#211812]/25 sm:block">
                        CODE INTELLIGENCE
                    </span>
                </div>
            </div>

            {/* Decorative glow */}
            <div className="pointer-events-none absolute left-[-15%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#ad6d36]/[0.035] blur-[120px]" />
        </section>
    );
};

export default AboutFAQ;
