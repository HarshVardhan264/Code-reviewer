import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import Navbar from "./Navbar";
import GhostFibers from "./GhostFibers";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.from(".hero-label", {
        y: 18,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-title",
          {
            y: 45,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.3"
        )
        .from(
          ".hero-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.45"
        )
        .from(
          ".hero-buttons",
          {
            y: 18,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.35"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="
        relative
        h-[100svh]
        min-h-screen
        w-full
        overflow-hidden
        bg-[#0c0a08]
        text-[#f1e8d8]
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 z-0">
        <GhostFibers
          lineColor="#6f4b20"
          glowColor="#c8892d"
          speed={0.14}
          scale={2.15}
          rotation={0}
          rotationSpeed={0.06}
          layers={5}
          waveAmplitude={0.018}
          waveFrequency={3}
          waveSpeed={0.12}
          layerSpeed={0.05}
          twist={0.1}
          twistFrequency={5}
          twistSpeed={1}
          lineFrequency={5}
          lineSpacing={2}
          lineSharpness={15}
          glowFalloff={9}
          glowIntensity={1.1}
          brightness={1.35}
          blueBoost={1}
          vignette={1}
          grain={0.02}
          lightMode={false}
          dpr={1}
          fps={60}
        />
      </div>

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          bg-[radial-gradient(circle_at_50%_42%,rgba(70,48,22,0.18),rgba(12,10,8,0.76)_68%,rgba(12,10,8,0.96)_100%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-10
          h-[30%]
          bg-gradient-to-t
          from-[#0c0a08]
          to-transparent
        "
      />

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar />

      {/* =====================================================
          DECORATIVE CODE — LEFT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-7
          top-[32%]
          z-20
          hidden
          font-mono
          text-[8px]
          tracking-wide
          text-[#c8892d]/25
          xl:block
        "
      >
        <div>0101 0011 1010</div>

        <div className="mt-3 h-px w-7 bg-[#c8892d]/25" />
      </div>

      {/* =====================================================
          DECORATIVE CODE — LEFT BOTTOM
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[16%]
          left-7
          z-20
          hidden
          font-mono
          text-[8px]
          tracking-wide
          text-[#c8892d]/25
          xl:block
        "
      >
        <div>const review = true;</div>

        <div className="mt-3 h-px w-7 bg-[#c8892d]/25" />
      </div>

      {/* =====================================================
          DECORATIVE CODE — RIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-7
          top-[37%]
          z-20
          hidden
          text-right
          font-mono
          text-[8px]
          tracking-wide
          text-[#c8892d]/25
          xl:block
        "
      >
        <div>analyze(repository)</div>

        <div className="mt-3 ml-auto h-px w-7 bg-[#c8892d]/25" />
      </div>

      {/* =====================================================
          DECORATIVE CODE — RIGHT BOTTOM
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[16%]
          right-7
          z-20
          hidden
          text-right
          font-mono
          text-[8px]
          tracking-wide
          text-[#c8892d]/25
          xl:block
        "
      >
        <div>→ findings[]</div>
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <main
        className="
          relative
          z-30
          flex
          h-full
          w-full
          flex-col
          items-center
          justify-center
          px-6
          pt-[90px]
          text-center
          sm:px-10
        "
      >
        {/* ===================================================
            LABEL
        ==================================================== */}

        <div
          className="
            hero-label
            mb-7
            font-sans
            text-[9px]
            font-medium
            uppercase
            tracking-[0.38em]
            text-[#c8892d]/80
            sm:text-[10px]
          "
        >
          AI-powered code review
        </div>

        {/* ===================================================
            MAIN HEADING
        ==================================================== */}

        <h1
          className="
            hero-title
            w-full
            max-w-[1250px]
            font-sans
            font-semibold
            tracking-[-0.065em]
          "
        >
          {/* First line */}

          <span
            className="
              block
              text-[clamp(3.7rem,6.7vw,7rem)]
              leading-[0.92]
              text-[#f1e8d8]
            "
          >
            Your code deserves
          </span>

          {/* Second line */}

          <span
            className="
              mt-1
              block
              text-[clamp(3.7rem,6.7vw,7rem)]
              leading-[0.92]
            "
          >
            <span className="text-[#aaa196]/60">
              a second{" "}
            </span>

            <span className="text-[#d99532]">
              pair of eyes.
            </span>
          </span>
        </h1>

        {/* ===================================================
            DESCRIPTION
        ==================================================== */}

        <p
          className="
            hero-description
            mt-8
            max-w-[650px]
            font-sans
            text-[13px]
            font-normal
            leading-[1.8]
            tracking-[-0.01em]
            text-[#c9c0b2]/65
            sm:text-[14px]
          "
        >
          CodeLens reads your repository like another engineer would —
          looking for bugs, risky patterns, security issues and code
          that could be easier to maintain.
        </p>

        {/* ===================================================
            BUTTONS
        ==================================================== */}

        <div
          className="
            hero-buttons
            mt-8
            flex
            items-center
            justify-center
            gap-3
          "
        >
          {/* PRIMARY */}

          <Link
            to="/review"
            className="
              group
              flex
              h-[54px]
              min-w-[180px]
              items-center
              justify-center
              gap-4
              rounded-[18px]
              bg-[#f1e8d8]
              px-7
              font-sans
              text-[13px]
              font-semibold
              tracking-[-0.01em]
              text-[#17130f]
              transition-all
              duration-300
              hover:-translate-y-[2px]
              hover:bg-[#fff6e8]
              hover:shadow-[0_10px_35px_rgba(217,149,50,0.12)]
            "
          >
            <span>Start a review</span>

            <span
              className="
                text-[16px]
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>

          {/* SECONDARY */}

          <a
            href="#how-it-works"
            className="
              flex
              h-[54px]
              min-w-[180px]
              items-center
              justify-center
              rounded-[18px]
              border
              border-[#c8892d]/25
              bg-[#0c0a08]/35
              px-7
              font-sans
              text-[13px]
              font-medium
              tracking-[-0.01em]
              text-[#d8cfc1]/65
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-[2px]
              hover:border-[#c8892d]/45
              hover:bg-[#c8892d]/[0.05]
              hover:text-[#f1e8d8]
            "
          >
            See how it works
          </a>
        </div>
      </main>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div
        className="
          absolute
          bottom-5
          left-1/2
          z-40
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-2
        "
      >
        <span
          className="
            font-mono
            text-[7px]
            tracking-[0.42em]
            text-[#c8892d]/50
          "
        >
          SCROLL
        </span>

        <span className="h-6 w-px bg-[#c8892d]/25" />
      </div>
    </section>
  );
};

export default Hero;