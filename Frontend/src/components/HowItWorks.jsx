import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    label: "CONNECT",
    title: "Bring your code.",
    description:
      "Connect your repository or paste your code. CodeLens starts with the code exactly as it exists — no complicated setup.",
  },
  {
    number: "02",
    label: "ANALYZE",
    title: "Let CodeLens think.",
    description:
      "CodeLens analyzes your code like a reviewer would, looking beyond syntax to understand bugs, security risks, performance issues, and code quality.",
  },
  {
    number: "03",
    label: "IMPROVE",
    title: "Build with clarity.",
    description:
      "Get clear, actionable feedback that explains what went wrong, why it matters, and how you can improve it.",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 70,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        bottomRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative overflow-hidden bg-[#080604] text-[#f4ead7]"
    >
      {/* Very subtle warm glow */}
      <div className="pointer-events-none absolute left-1/2 top-[15%] h-[650px] w-[850px] -translate-x-1/2 rounded-full bg-[#9a5b24]/[0.035] blur-[180px]" />

      <div className="relative mx-auto max-w-[1500px] px-[7vw] py-[13vw]">
        {/* Section heading */}
        <div
          ref={headingRef}
          className="mb-[8vw] grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end"
        >
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[1px] w-8 bg-[#c98a4b]/60" />

              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#c98a4b]">
                How CodeLens works
              </span>
            </div>

            <h2 className="max-w-[850px] text-[clamp(3.5rem,7vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              From code
              <br />
              <span className="text-[#f4ead7]/35">to clarity.</span>
            </h2>
          </div>

          <div className="max-w-[440px] md:ml-auto">
            <p className="text-[15px] leading-[1.8] text-[#f4ead7]/45 md:text-[16px]">
              CodeLens turns a codebase into understandable feedback. It
              follows the same thinking process as a thoughtful code reviewer —
              inspect, understand, explain, and improve.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative min-h-[390px] overflow-hidden rounded-[22px] border border-[#f4ead7]/[0.08] bg-[#100b07] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#c98a4b]/30"
            >
              {/* Background number */}
              <span className="pointer-events-none absolute -right-4 -top-10 text-[170px] font-medium leading-none tracking-[-0.08em] text-[#f4ead7]/[0.025] transition-all duration-700 group-hover:text-[#c98a4b]/[0.06]">
                {step.number}
              </span>

              {/* Top */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.2em] text-[#c98a4b]">
                  {step.number}
                </span>

                <span className="font-mono text-[9px] tracking-[0.25em] text-[#f4ead7]/25">
                  {step.label}
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-[150px]">
                <h3 className="text-[clamp(2rem,3vw,3rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#f4ead7]">
                  {step.title}
                </h3>

                <p className="mt-6 max-w-[380px] text-[14px] leading-[1.8] text-[#f4ead7]/40">
                  {step.description}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="absolute bottom-7 left-7 right-7 flex items-center gap-3">
                <div className="h-[1px] flex-1 bg-[#f4ead7]/10 transition-all duration-500 group-hover:bg-[#c98a4b]/40" />

                <span className="h-2 w-2 rounded-full border border-[#c98a4b]/50 transition-all duration-500 group-hover:bg-[#c98a4b] group-hover:shadow-[0_0_15px_rgba(201,138,75,0.5)]" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div
          ref={bottomRef}
          className="mt-[10vw] flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-[700px]">
            <p className="text-[clamp(2rem,4vw,4.2rem)] font-medium leading-[1] tracking-[-0.055em] text-[#f4ead7]">
              Good reviews don't just
              <span className="text-[#c98a4b]"> find problems.</span>
            </p>

            <p className="mt-2 text-[clamp(2rem,4vw,4.2rem)] font-medium leading-[1] tracking-[-0.055em] text-[#f4ead7]/30">
              They make developers better.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-[#f4ead7]/25">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c98a4b]" />
            Review. Understand. Improve.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;