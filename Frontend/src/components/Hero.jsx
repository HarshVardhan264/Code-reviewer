import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar, { Lens } from "./Navbar";
import BackgroundBeams from "./BackgroundBeams";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      /* --------------------------------
         HERO INTRO ANIMATION
      -------------------------------- */

      gsap
        .timeline({
          defaults: {
            ease: "power3.out",
          },
        })
        .from(".hero-lens", {
          opacity: 0,
          scale: 0.7,
          duration: 0.7,
        })
        .from(
          ".hero-line",
          {
            opacity: 0,
            y: 14,
            duration: 0.7,
            stagger: 0.09,
          },
          "-=0.4"
        );

      /* --------------------------------
         CODE + LENS SCROLL ANIMATION
      -------------------------------- */

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-brand",
          start: "top bottom",
          end: "center center",
          scrub: 1.2,
        },
      });

      // CODE comes from the left
      scrollTl.fromTo(
        ".brand-code",
        {
          xPercent: -100,
        },
        {
          xPercent: 0,
          ease: "none",
        },
        0
      );

      // LENS comes from the right
      scrollTl.fromTo(
        ".brand-lens-word",
        {
          xPercent: 100,
        },
        {
          xPercent: 0,
          ease: "none",
        },
        0
      );

      // Lens icon appears when both sides meet
      scrollTl.fromTo(
        ".brand-lens-icon",
        {
          opacity: 0,
          scale: 0.4,
          rotation: -20,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          ease: "power2.out",
        },
        0.55
      );

      /* --------------------------------
         SMALL EXIT / SETTLE EFFECT
      -------------------------------- */

      gsap.fromTo(
        ".hero-brand",
        {
          opacity: 0.35,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".hero-brand",
            start: "top 85%",
            end: "center center",
            scrub: true,
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        cl-hero
        cl-grain
        relative
        min-h-screen
        overflow-hidden
        bg-[#0b0b0a]
        text-[#eeeae1]
      "
    >
      {/* --------------------------------
          BACKGROUND
      -------------------------------- */}

      <BackgroundBeams />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[#0b0b0a]/35
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-[radial-gradient(circle_at_center,transparent_25%,#0b0b0a_100%)]
          opacity-50
        "
      />

      {/* --------------------------------
          NAVBAR
      -------------------------------- */}

      <div className="relative z-20">
        <Navbar />
      </div>

      {/* --------------------------------
          HERO COPY
      -------------------------------- */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-90px)]
          max-w-4xl
          flex-col
          items-center
          justify-center
          px-6
          pb-20
          text-center
        "
      >
        {/* Lens */}
        <span
          className="
            hero-lens
            mb-8
            block
            text-[2.6rem]
            opacity-70
          "
        >
          <Lens size="1em" />
        </span>

        {/* Main statement */}
        <p
          className="
            hero-line
            max-w-3xl
            text-4xl
            font-medium
            leading-[1.05]
            tracking-[-0.045em]
            sm:text-5xl
            md:text-6xl
          "
        >
          Every pull request gets read
          <br />
          the way your most careful
          <br />
          reviewer would read it.
        </p>

        {/* Sub text */}
        <p
          className="
            hero-line
            mt-6
            text-sm
            tracking-wide
            text-[#eeeae1]/40
          "
        >
          Line by line, in context, before it ships.
        </p>
      </div>


      {/* =================================
    BRAND SCROLL REVEAL
================================= */}

      <div
        className="
    hero-brand
    relative
    z-10
    flex
    min-h-[55vh]
    w-full
    items-center
    justify-center
    overflow-hidden
  "
      >
        <div
          className="
      flex
      items-center
      justify-center
      whitespace-nowrap
      text-[18vw]
      font-medium
      uppercase
      leading-[0.6]
      tracking-[-0.09em]
    "
        >
          {/* CODE — comes from LEFT */}
          <span className="brand-code inline-flex items-center">
            <span>C</span>

            {/* Lens replaces O */}
            <span
              className="
          brand-lens
          inline-flex
          items-center
          justify-center
          mx-[0.01em]
        "
            >
              <Lens size="0.62em" />
            </span>

            <span>DE</span>
          </span>

          {/* LENS — comes from RIGHT */}
          <span className="brand-lens-word inline-block">
            LENS
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;