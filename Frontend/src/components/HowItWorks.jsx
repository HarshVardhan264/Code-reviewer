import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: "01",
    title: "You hand it the code",
    body: "Paste a repository URL or a pull request. Nothing to install, no branch to prepare.",
    sample: "$ codelens github.com/acme/checkout#418",
  },
  {
    step: "02",
    title: "It reads the whole path",
    body: "Not just the diff. It follows the change into the functions that call it and the tests that cover it, so a two-line edit is judged by what it touches.",
    sample: "reading 41 files · 6 call sites · 2 test suites",
  },
  {
    step: "03",
    title: "You get a review, not a score",
    body: "Findings ordered by what would hurt most in production, each with the line, the reason it matters, and the change that fixes it.",
    sample: "7 findings · 2 correctness · 1 security · 4 clarity",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ================================
         PROCESS LABEL
      ================================= */

      gsap.from(".cl-section#process > .cl-shell > .cl-mono", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cl-section#process",
          start: "top 85%",
          once: true,
        },
      });

      /* ================================
         INDIVIDUAL STEPS
         
         Step 01
         ↓
         Step 02
         ↓
         Step 03
      ================================= */

      const stepElements = gsap.utils.toArray(".cl-step");

      stepElements.forEach((step) => {
        const index = step.querySelector(".cl-step__index");
        const title = step.querySelector(".cl-row__title");
        const body = step.querySelector(".cl-prose");
        const sample = step.querySelector(".cl-step__sample");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            once: true,
          },
        });

        // Step enters from below
        timeline.from(step, {
          y: 70,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        // Step number
        timeline.from(
          index,
          {
            x: -30,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.5"
        );

        // Title
        timeline.from(
          title,
          {
            x: -40,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );

        // Description
        timeline.from(
          body,
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35"
        );

        // Sample/code line
        timeline.from(
          sample,
          {
            x: 40,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cl-section"
      id="process"
    >
      <div className="cl-shell">
        <p className="cl-mono">(process)</p>

        <div style={{ marginTop: "2rem" }}>
          {steps.map((item) => (
            <div
              className="cl-step cl-rule"
              key={item.step}
            >
              <p className="cl-mono cl-step__index">
                step · {item.step}
              </p>

              <div>
                <h3 className="cl-row__title">
                  {item.title}
                </h3>

                <p
                  className="cl-prose"
                  style={{ marginTop: "0.9rem" }}
                >
                  {item.body}
                </p>
              </div>

              <p className="cl-mono cl-step__sample">
                {item.sample}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;