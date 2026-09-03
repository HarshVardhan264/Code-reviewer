import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const reviewAreas = [
  {
    number: "01",
    title: "Finds hidden bugs",
    description:
      "CodeLens traces logic and edge cases that are easy to miss during a normal code review.",
  },
  {
    number: "02",
    title: "Spots risky patterns",
    description:
      "It highlights fragile assumptions, duplicated logic, and patterns that may become technical debt.",
  },
  {
    number: "03",
    title: "Checks security concerns",
    description:
      "Potential vulnerabilities and unsafe implementation choices are surfaced before they become incidents.",
  },
  {
    number: "04",
    title: "Explains what matters",
    description:
      "Every finding comes with context, severity, and a practical direction for improving the code.",
  },
];

const About = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .from(".codelens-eyebrow", {
          y: 18,
          opacity: 0,
          duration: 0.6,
        })
        .from(
          ".codelens-title-line",
          {
            y: 55,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
          },
          "-=0.3"
        )
        .from(
          ".codelens-intro",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.35"
        )
        .from(
          ".codelens-visual",
          {
            scale: 0.96,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.4"
        )
        .from(
          ".codelens-card",
          {
            y: 24,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.5"
        );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#020504] text-white"
    >
      {/* HERO */}
      <section className="relative isolate px-6 pb-24 pt-32 sm:px-10 lg:px-16 lg:pb-32 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(111,163,76,0.16),transparent_38%),linear-gradient(to_bottom,transparent_65%,#020504)]" />

        <div className="mx-auto max-w-[1180px]">
          <div className="grid items-end gap-16 lg:grid-cols-[1fr_0.72fr] lg:gap-24">
            {/* LEFT */}
            <div>
              <p className="codelens-eyebrow mb-7 font-mono text-[10px] tracking-[0.32em] text-[#9be86a]/60">
                ABOUT CODELENS
                <span className="ml-3 text-white/20">/</span>{" "}
                CODE REVIEW, REFINED
              </p>

              <h1 className="max-w-[820px] font-medium tracking-[-0.065em]">
                <span className="codelens-title-line block text-[clamp(3.5rem,8vw,7.8rem)] leading-[0.92]">
                  A clearer view
                </span>

                <span className="codelens-title-line mt-3 block text-[clamp(3.5rem,8vw,7.8rem)] leading-[0.92] text-white/30">
                  of your{" "}
                  <span className="bg-gradient-to-r from-[#9be86a] via-[#b8ff72] to-[#82c95a] bg-clip-text text-transparent">
                    code.
                  </span>
                </span>
              </h1>

              <p className="codelens-intro mt-10 max-w-[590px] text-[15px] leading-7 text-white/50">
                CodeLens is an intelligent second pair of eyes for your
                repository. It helps you understand what deserves attention
                before your code reaches production.
              </p>

              <Link
                to="/review"
                className="mt-10 inline-flex h-14 items-center gap-4 rounded-full bg-[#b8ff72] px-7 text-sm font-semibold text-[#071006] transition-all duration-300 hover:bg-[#c7ff91] hover:shadow-[0_0_45px_rgba(184,255,114,0.14)]"
              >
                Try CodeLens
                <span>→</span>
              </Link>
            </div>

            {/* CODE VISUAL */}
            <div className="codelens-visual relative min-h-[330px] rounded-[2rem] border border-white/[0.1] bg-white/[0.025] p-6 shadow-2xl shadow-black/20 sm:p-8">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_70%_25%,rgba(155,232,106,0.13),transparent_42%)]" />

              <div className="relative font-mono text-xs leading-7 text-white/35">
                <p>
                  <span className="text-[#9be86a]/60">const</span>{" "}
                  repository = await load();
                </p>

                <p className="pl-5">
                  <span className="text-[#9be86a]/60">const</span> findings =
                  analyze(repository);
                </p>

                <p className="mt-4 text-white/20">{"{"}</p>

                <p className="pl-5">
                  <span className="text-[#b8ff72]">severity</span>:{" "}
                  <span className="text-white/60">&quot;medium&quot;</span>,
                </p>

                <p className="pl-5">
                  <span className="text-[#b8ff72]">confidence</span>:{" "}
                  <span className="text-white/60">0.94</span>,
                </p>

                <p className="pl-5">
                  <span className="text-[#b8ff72]">action</span>:{" "}
                  <span className="text-white/60">
                    &quot;review this path&quot;
                  </span>
                </p>

                <p className="text-white/20">{"}"}</p>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-white/[0.08] pt-5 font-mono text-[9px] tracking-[0.2em] text-white/30 sm:bottom-8 sm:left-8 sm:right-8">
                <span>ANALYSIS COMPLETE</span>

                <span className="text-[#9be86a]/70">
                  ● 4 FINDINGS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEW AREAS */}
      <section className="border-y border-white/[0.07] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-14 max-w-[600px]">
            <p className="mb-5 font-mono text-[10px] tracking-[0.3em] text-[#9be86a]/60">
              WHAT IT LOOKS FOR
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
              More than a syntax check.
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/45">
              Good reviews are not only about whether code works. They are
              about whether it will remain reliable, secure, and understandable
              as the project grows.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
            {reviewAreas.map((area) => (
              <article
                key={area.number}
                className="codelens-card bg-[#050906] p-7 transition-colors duration-300 hover:bg-[#0a1209] sm:p-9"
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#9be86a]/65">
                    {area.number}
                  </span>

                  <span className="text-lg text-[#9be86a]/50">
                    ↗
                  </span>
                </div>

                <h3 className="text-xl font-medium tracking-[-0.03em]">
                  {area.title}
                </h3>

                <p className="mt-4 max-w-[380px] text-sm leading-6 text-white/40">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center sm:px-10 lg:px-16 lg:py-32">
        <p className="font-mono text-[10px] tracking-[0.3em] text-[#9be86a]/60">
          READY WHEN YOU ARE
        </p>

        <h2 className="mx-auto mt-6 max-w-[700px] text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
          Ship with a little more confidence.
        </h2>

        <Link
          to="/review"
          className="mt-9 inline-flex h-14 items-center gap-4 rounded-full border border-[#9be86a]/30 px-7 text-sm text-[#b8ff72] transition-all duration-300 hover:bg-[#9be86a]/10"
        >
          Review your repository
          <span>→</span>
        </Link>
      </section>
    </main>
  );
};

export default About;