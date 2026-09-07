import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Stack from "./Stack";

gsap.registerPlugin(ScrollTrigger);

const AboutHowItWorks = () => {
    const sectionRef = useRef(null);

    const steps = [
        {
            number: "01",
            title: "Connect",
            detail: "REPOSITORY",
            description:
                "Give CodeLens a repository and let it understand the structure, files and context of your codebase.",
            image:
                "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1000&q=85",
        },
        {
            number: "02",
            title: "Analyze",
            detail: "INTELLIGENCE",
            description:
                "CodeLens examines your code for bugs, security risks, performance issues and maintainability problems.",
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
        },
        {
            number: "03",
            title: "Improve",
            detail: "ACTION",
            description:
                "Get clear findings with useful context so you can understand the problem and decide what to change.",
            image:
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=85",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".how-label", {
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

            gsap.from(".how-heading", {
                y: 55,
                opacity: 0,
                duration: 0.9,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    once: true,
                },
            });

            gsap.from(".how-stack", {
                x: -70,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 65%",
                    once: true,
                },
            });

            gsap.from(".how-content", {
                x: 70,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 65%",
                    once: true,
                },
            });

            gsap.from(".how-bottom", {
                y: 25,
                opacity: 0,
                duration: 0.6,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".how-bottom",
                    start: "top 90%",
                    once: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const stackCards = [...steps].reverse().map((step) => (
        <div
            key={step.number}
            className="
                relative
                h-full
                w-full
                overflow-hidden
                rounded-[20px]
                bg-[#0b0b0b]
            "
        >
            <img
                src={step.image}
                alt={step.title}
                className="h-full w-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#121213]/55" />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/30" />

            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7">

                {/* TOP */}
                <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/60">
                        {step.number}
                    </span>

                    <span
                        className="
                            rounded-full
                            border
                            border-white/15
                            px-3
                            py-1.5
                            font-mono
                            text-[8px]
                            tracking-[0.2em]
                            text-white/60
                        "
                    >
                        {step.detail}
                    </span>
                </div>

                {/* BOTTOM */}
                <div>
                    <h3
                        className="
                            text-[clamp(2rem,4vw,3rem)]
                            font-medium
                            leading-none
                            tracking-[-0.06em]
                            text-white
                        "
                    >
                        {step.title}
                    </h3>

                    <p
                        className="
                            mt-3
                            max-w-[310px]
                            text-[12px]
                            leading-5
                            text-white/55
                        "
                    >
                        {step.description}
                    </p>
                </div>
            </div>
        </div>
    ));

    return (
        <section
            ref={sectionRef}
            id="how-it-works"
            className="
                relative
                overflow-hidden
                bg-[#121213]
                px-6
                py-28
                text-white
                sm:px-10
                sm:py-36
                lg:px-14
                lg:py-40
            "
        >
            <div className="mx-auto max-w-[1380px]">

                {/* HEADER */}

                <div className="mb-20 lg:mb-24">

                    <div className="how-label mb-8 flex items-center gap-3">
                        <span className="h-[5px] w-[5px] rounded-full bg-white/60" />

                        <span
                            className="
                                font-mono
                                text-[9px]
                                tracking-[0.3em]
                                text-white/40
                            "
                        >
                            HOW CODELENS WORKS
                        </span>
                    </div>

                    <h2
                        className="
                            how-heading
                            max-w-[1050px]
                            text-[clamp(2.8rem,5.5vw,5.8rem)]
                            font-medium
                            leading-[0.94]
                            tracking-[-0.065em]
                            text-white
                        "
                    >
                        From repository
                        <br />
                        <span className="text-white/25">
                            to clarity.
                        </span>
                    </h2>
                </div>


                {/* STACK + CONTENT */}

                <div
                    className="
                        grid
                        items-center
                        gap-20
                        lg:grid-cols-[0.85fr_1fr]
                        lg:gap-28
                    "
                >

                    {/* STACK */}

                    <div className="how-stack flex justify-center lg:justify-start">
                        <div className="h-[340px] w-[340px] sm:h-[400px] sm:w-[400px]">
                            <Stack
                                randomRotation={true}
                                sensitivity={150}
                                sendToBackOnClick={true}
                                cards={stackCards}
                                animationConfig={{
                                    stiffness: 280,
                                    damping: 22,
                                }}
                                mobileClickOnly={true}
                            />
                        </div>
                    </div>


                    {/* CONTENT */}

                    <div className="how-content">

                        <div className="mb-10">

                            <span
                                className="
                                    font-mono
                                    text-[9px]
                                    tracking-[0.25em]
                                    text-white/40
                                "
                            >
                                THE PROCESS
                            </span>

                            <h3
                                className="
                                    mt-5
                                    max-w-[650px]
                                    text-[clamp(2.2rem,4vw,4rem)]
                                    font-medium
                                    leading-[0.95]
                                    tracking-[-0.06em]
                                    text-white
                                "
                            >
                                Three steps.
                                <br />
                                <span className="text-white/25">
                                    One clearer review.
                                </span>
                            </h3>
                        </div>


                        <div className="border-t border-white/[0.08]">

                            {steps.map((step) => (
                                <div
                                    key={step.number}
                                    className="
                                        group
                                        flex
                                        gap-6
                                        border-b
                                        border-white/[0.08]
                                        py-7
                                    "
                                >

                                    <span
                                        className="
                                            pt-1
                                            font-mono
                                            text-[9px]
                                            tracking-[0.2em]
                                            text-white/40
                                        "
                                    >
                                        {step.number}
                                    </span>

                                    <div>

                                        <div className="flex items-center gap-4">

                                            <h4
                                                className="
                                                    text-[20px]
                                                    font-medium
                                                    tracking-[-0.04em]
                                                    text-white
                                                "
                                            >
                                                {step.title}
                                            </h4>

                                            <span
                                                className="
                                                    font-mono
                                                    text-[7px]
                                                    tracking-[0.2em]
                                                    text-white/20
                                                    transition-colors
                                                    duration-300
                                                    group-hover:text-white/60
                                                "
                                            >
                                                {step.detail}
                                            </span>

                                        </div>

                                        <p
                                            className="
                                                mt-2
                                                max-w-[480px]
                                                text-[13px]
                                                leading-6
                                                text-white/40
                                            "
                                        >
                                            {step.description}
                                        </p>

                                    </div>

                                    <span
                                        className="
                                            ml-auto
                                            self-center
                                            text-white/20
                                            transition-all
                                            duration-300
                                            group-hover:translate-x-1
                                            group-hover:text-white/60
                                        "
                                    >
                                        →
                                    </span>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                
            </div>


            {/* BACKGROUND DETAIL */}

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-15%]
                    right-[-10%]
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-white/[0.012]
                    blur-[110px]
                "
            />
        </section>
    );
};

export default AboutHowItWorks;

