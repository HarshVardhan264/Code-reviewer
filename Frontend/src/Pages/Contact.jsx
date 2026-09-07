import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================================
         HERO ANIMATION
      ===================================================== */

      const hero = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      hero
        .from(".contact-lens", {
          opacity: 0,
          scale: 0.82,
          y: 30,
          duration: 1.1,
        })
        .from(
          ".contact-eyebrow",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          "-=0.6"
        )
        .from(
          ".hero-title-line",
          {
            opacity: 0,
            y: 65,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.3"
        )
        .from(
          ".contact-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.45"
        )
        .from(
          ".contact-link",
          {
            opacity: 0,
            y: 18,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.3"
        )
        .from(
          ".review-connect",
          {
            opacity: 0,
            y: 35,
            duration: 0.8,
          },
          "-=0.35"
        );

      /* =====================================================
         MAGNIFYING GLASS ANIMATION
      ===================================================== */

      gsap.to(".lens-technical-ring", {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
        transformOrigin: "center",
      });

      gsap.to(".lens-reflection", {
        opacity: 0.35,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".lens-wrapper", {
        y: -7,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         CONTACT LINKS HOVER
      ===================================================== */

      gsap.utils.toArray(".contact-link").forEach((link) => {
        const arrow = link.querySelector(".contact-arrow");

        link.addEventListener("mouseenter", () => {
          gsap.to(link, {
            x: 5,
            duration: 0.25,
            ease: "power2.out",
          });

          gsap.to(arrow, {
            x: 5,
            duration: 0.25,
            ease: "power2.out",
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            x: 0,
            duration: 0.25,
          });

          gsap.to(arrow, {
            x: 0,
            duration: 0.25,
          });
        });
      });

      /* =====================================================
         REVIEW CARD
      ===================================================== */

      const reviewCard = document.querySelector(".review-card");

      if (reviewCard) {
        reviewCard.addEventListener("mouseenter", () => {
          gsap.to(reviewCard, {
            y: -4,
            duration: 0.25,
            ease: "power2.out",
          });
        });

        reviewCard.addEventListener("mouseleave", () => {
          gsap.to(reviewCard, {
            y: 0,
            duration: 0.25,
          });
        });
      }

      /* =====================================================
         SOCIAL CARDS
      ===================================================== */

      gsap.from(".social-card", {
        opacity: 0,
        y: 25,
        duration: 0.55,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".social-grid",
          start: "top 85%",
        },
      });

      gsap.utils.toArray(".social-card").forEach((card) => {
        const arrow = card.querySelector(".social-arrow");

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -4,
            duration: 0.25,
            ease: "power2.out",
          });

          gsap.to(arrow, {
            x: 5,
            duration: 0.25,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.25,
          });

          gsap.to(arrow, {
            x: 0,
            duration: 0.25,
          });
        });
      });

      /* =====================================================
         SCROLL REVEALS
      ===================================================== */

      gsap.utils.toArray(".scroll-reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 35,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        });
      });

      /* =====================================================
         LENS MOUSE PARALLAX
      ===================================================== */

      const lens = document.querySelector(".lens-main");

      if (lens) {
        const handleMouseMove = (event) => {
          const rect = lens.getBoundingClientRect();

          const x =
            (event.clientX - rect.left - rect.width / 2) /
            rect.width;

          const y =
            (event.clientY - rect.top - rect.height / 2) /
            rect.height;

          gsap.to(lens, {
            rotateY: x * 5,
            rotateX: -y * 5,
            duration: 0.6,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(lens, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        };

        lens.addEventListener("mousemove", handleMouseMove);
        lens.addEventListener("mouseleave", handleMouseLeave);
      }

      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#151514] text-[#f2f1ed]"
    >
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <div className="relative z-50">
        <Navbar />
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative z-10 mx-auto max-w-[1390px] px-6 pb-20 pt-[120px] sm:px-8 lg:px-0 lg:pt-[145px]">
        <div className="grid grid-cols-1 items-center lg:grid-cols-[44%_56%]">
          {/* =================================================
              LEFT — LENS
          ================================================= */}

          <div className="contact-lens flex justify-center lg:justify-start">
            <div className="lens-wrapper relative">
              <div
                className="lens-main relative h-[330px] w-[330px] sm:h-[370px] sm:w-[370px]"
                style={{
                  perspective: "1000px",
                }}
              >
                {/* =================================================
                    TECHNICAL OUTER RINGS
                ================================================= */}

                <div className="lens-technical-ring absolute inset-[5px] rounded-full border border-white/[0.16]" />

                <div className="absolute inset-[23px] rounded-full border border-white/[0.08]" />

                <div className="absolute inset-[42px] rounded-full border border-white/[0.06]" />

                {/* =================================================
                    TECHNICAL CROSS LINES
                ================================================= */}

                <div className="absolute left-1/2 top-[-35px] h-[400px] w-px -translate-x-1/2 bg-white/[0.06]" />

                <div className="absolute left-[-35px] top-1/2 h-px w-[400px] -translate-y-1/2 bg-white/[0.06]" />

                <div className="absolute left-[77px] top-0 h-[330px] w-px bg-white/[0.035]" />

                <div className="absolute right-[77px] top-0 h-[330px] w-px bg-white/[0.035]" />

                {/* =================================================
                    REAL GLASS LENS
                ================================================= */}

                <div
                  className="absolute left-[72px] top-[72px] h-[145px] w-[145px] rounded-full border-[3px] border-white/[0.72]"
                  style={{
                    background:
                      "radial-gradient(circle at 34% 28%, rgba(255,255,255,0.20), rgba(255,255,255,0.05) 32%, rgba(0,0,0,0.92) 70%)",
                    boxShadow:
                      "inset 0 0 25px rgba(255,255,255,0.08), 0 0 18px rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Inner glass */}

                  <div className="absolute inset-[7px] rounded-full border border-white/[0.15]" />

                  {/* Reflection */}

                  <div className="lens-reflection absolute left-[25px] top-[15px] h-[52px] w-[18px] rotate-[-35deg] rounded-full bg-white/[0.62] blur-[2px]" />

                  <div className="absolute left-[35px] top-[17px] h-[13px] w-[28px] rotate-[-35deg] rounded-full bg-white/[0.22] blur-[1px]" />
                </div>

                {/* =================================================
                    MAGNIFYING GLASS HANDLE
                ================================================= */}

                <div className="absolute left-[185px] top-[190px] h-[92px] w-[30px] rotate-[-43deg] origin-top rounded-[5px] border border-white/[0.25] bg-gradient-to-r from-white/[0.22] via-white/[0.11] to-white/[0.035] shadow-[0_5px_18px_rgba(0,0,0,0.8)]">
                  <div className="absolute left-[5px] top-[7px] h-[75px] w-[4px] rounded-full bg-white/[0.22]" />
                </div>

                {/* =================================================
                    SMALL TECHNICAL DOTS
                ================================================= */}

                <span className="absolute left-[55px] top-[78px] h-1.5 w-1.5 rounded-full bg-white/35" />

                <span className="absolute right-[58px] top-[106px] h-1.5 w-1.5 rounded-full bg-white/30" />

                <span className="absolute bottom-[67px] left-[83px] h-1.5 w-1.5 rounded-full bg-white/25" />

                {/* =================================================
                    TOP LABEL
                ================================================= */}

                <span className="absolute left-[136px] top-[-13px] font-mono text-[8px] tracking-[0.28em] text-white/30">
                  CODE / 01
                </span>

                {/* =================================================
                    BOTTOM LABEL
                ================================================= */}

                <span className="absolute bottom-[-17px] left-[146px] font-mono text-[8px] tracking-[0.28em] text-white/30">
                  FOCUS
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — HERO CONTENT
          ================================================= */}

          <div className="mt-20 lg:mt-0 lg:pl-[30px]">
            {/* Eyebrow */}

            <div className="contact-eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-white/30" />

              <span className="font-mono text-[10px] uppercase tracking-[0.27em] text-white/40">
                ( get in touch )
              </span>
            </div>

            {/* Heading */}

            <h1 className="mt-6 max-w-[800px] overflow-hidden text-[clamp(3.5rem,5.7vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
              <span className="hero-title-line block">
                Let’s build better
              </span>

              <span className="hero-title-line block text-white/[0.38]">
                code, together.
              </span>
            </h1>

            {/* Description */}

            <p className="contact-description mt-8 max-w-[590px] text-[16px] leading-7 text-white/[0.50]">
              Have a question, feedback, or just want to say hi?
              <br />
              I’d love to hear from you.
            </p>

            {/* =================================================
                CONTACT LINKS
            ================================================= */}

            <div className="mt-10 grid max-w-[690px] grid-cols-1 border-t border-white/[0.11] sm:grid-cols-3">
              {/* EMAIL */}

              <a
                href="mailto:hello@codelens.dev"
                className="contact-link group flex min-h-[78px] items-center justify-between border-b border-white/[0.11] pr-4 sm:border-b-0 sm:border-r"
              >
                <div>
                  <p className="text-[13px] font-medium">
                    Email me
                  </p>

                  <p className="mt-1 text-[10px] text-white/35">
                    hello@codelens.dev
                  </p>
                </div>

                <span className="contact-arrow text-sm text-white/40">
                  ↗
                </span>
              </a>

              {/* GITHUB */}

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-link group flex min-h-[78px] items-center justify-between border-b border-white/[0.11] px-4 sm:border-b-0 sm:border-r"
              >
                <div>
                  <p className="text-[13px] font-medium">
                    GitHub
                  </p>

                  <p className="mt-1 text-[10px] text-white/35">
                    github.com/codelens
                  </p>
                </div>

                <span className="contact-arrow text-sm text-white/40">
                  ↗
                </span>
              </a>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-link group flex min-h-[78px] items-center justify-between pl-4"
              >
                <div>
                  <p className="text-[13px] font-medium">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-[10px] text-white/35">
                    linkedin.com/in/codelens
                  </p>
                </div>

                <span className="contact-arrow text-sm text-white/40">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOWER CONTENT
          BOTH LEFT + RIGHT BELOW HERO
      ===================================================== */}

      <section className="review-connect relative z-10 mx-auto max-w-[1390px] px-6 py-20 sm:px-8 lg:px-0 lg:py-28">
        <div className="grid grid-cols-1 border-t border-white/[0.11] lg:grid-cols-2">
          {/* =================================================
              LEFT — SEND A REVIEW
          ================================================= */}

          <div className="border-b border-white/[0.11] py-10 lg:border-b-0 lg:border-r lg:py-12 lg:pr-[60px]">
            <p className="font-mono text-[10px] tracking-[0.22em] text-white/40">
              SEND A REVIEW
            </p>

            <h2 className="mt-5 max-w-[570px] text-[clamp(2rem,3vw,3.1rem)] font-medium leading-[1.08] tracking-[-0.045em]">
              Share a repository or pull request
              <br />
              for a review.
            </h2>

            <p className="mt-5 max-w-[530px] text-[14px] leading-6 text-white/45">
              If you’d like CodeLens to review your code, send the
              repository link or pull request details via email.
            </p>

            {/* Review email */}

            <a
              href="mailto:reviews@codelens.dev?subject=CodeLens%20Code%20Review"
              className="review-card group mt-7 flex min-h-[100px] items-center justify-between rounded-[7px] border border-white/[0.14] px-6 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.025]"
            >
              <div className="flex items-center gap-5">
                {/* Envelope */}

                <div className="flex h-10 w-10 items-center justify-center">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    className="h-8 w-8 text-white/85"
                  >
                    <rect
                      x="3"
                      y="6"
                      width="26"
                      height="20"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                    <path
                      d="M4 8L16 17L28 8"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[15px] font-medium">
                    reviews@codelens.dev
                  </p>

                  <p className="mt-1 text-[11px] text-white/35">
                    Send your repo link for a review
                  </p>
                </div>
              </div>

              <span className="text-lg text-white/45 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* =================================================
              RIGHT — CONNECT
          ================================================= */}

          <div className="py-10 lg:py-12 lg:pl-[60px]">
            <p className="font-mono text-[10px] tracking-[0.22em] text-white/40">
              CONNECT WITH ME
            </p>

            <h2 className="mt-5 max-w-[450px] text-[clamp(2rem,3vw,3.1rem)] font-medium leading-[1.08] tracking-[-0.045em]">
              Follow the work.
              <br />
              <span className="text-white/35">
                See what comes next.
              </span>
            </h2>

            <p className="mt-5 max-w-[500px] text-[14px] leading-6 text-white/40">
              Follow CodeLens as we build better ways to review,
              understand, and improve software.
            </p>

            {/* Social grid */}

            <div className="social-grid mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {/* GITHUB */}

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="social-card group flex min-h-[80px] items-center justify-between rounded-[7px] border border-white/[0.13] px-5 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.025]"
              >
                <div className="flex items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-white"
                  >
                    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
                  </svg>

                  <div>
                    <p className="text-[14px] font-medium">
                      GitHub
                    </p>

                    <p className="mt-1 text-[11px] text-white/35">
                      See my work
                    </p>
                  </div>
                </div>

                <span className="social-arrow text-white/45">
                  →
                </span>
              </a>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="social-card group flex min-h-[80px] items-center justify-between rounded-[7px] border border-white/[0.13] px-5 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.025]"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[24px] font-bold tracking-[-0.1em]">
                    in
                  </span>

                  <div>
                    <p className="text-[14px] font-medium">
                      LinkedIn
                    </p>

                    <p className="mt-1 text-[11px] text-white/35">
                      Let’s connect
                    </p>
                  </div>
                </div>

                <span className="social-arrow text-white/45">
                  →
                </span>
              </a>

              {/* BEHANCE */}

              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noreferrer"
                className="social-card group flex min-h-[80px] items-center justify-between rounded-[7px] border border-white/[0.13] px-5 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.025]"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[20px] font-bold tracking-[-0.08em]">
                    Bē
                  </span>

                  <div>
                    <p className="text-[14px] font-medium">
                      Behance
                    </p>

                    <p className="mt-1 text-[11px] text-white/35">
                      View my designs
                    </p>
                  </div>
                </div>

                <span className="social-arrow text-white/45">
                  →
                </span>
              </a>

              {/* X */}

              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                className="social-card group flex min-h-[80px] items-center justify-between rounded-[7px] border border-white/[0.13] px-5 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.025]"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[24px] font-light">
                    𝕏
                  </span>

                  <div>
                    <p className="text-[14px] font-medium">
                      Twitter / X
                    </p>

                    <p className="mt-1 text-[11px] text-white/35">
                      Follow for updates
                    </p>
                  </div>
                </div>

                <span className="social-arrow text-white/45">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="relative z-10 mx-auto max-w-[1390px] border-t border-white/[0.12] px-6 py-8 sm:px-8 lg:px-0">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[10px] tracking-[0.15em] text-white/40">
              BETTER CODE
            </p>

            <p className="font-mono text-[10px] tracking-[0.15em] text-white/40">
              BRIGHTER BUILDERS
            </p>
          </div>

          <div className="text-right">
            <p className="text-[13px] font-medium tracking-wide">
              CODELENS
            </p>

            <p className="mt-1 font-mono text-[9px] tracking-[0.18em] text-white/30">
              AI CODE REVIEW
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Contact;