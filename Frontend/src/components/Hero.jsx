import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import WebThreads from "./WebThreads";

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
          ".hero-title-line",
          {
            y: 65,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.25"
        )
        .from(
          ".hero-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.65,
          },
          "-=0.35"
        )
        .from(
          ".hero-buttons",
          {
            y: 20,
            opacity: 0,
            duration: 0.65,
          },
          "-=0.4"
        )
        .from(
          ".code-decoration",
          {
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
          },
          "-=0.45"
        )
        .from(
          ".scroll-indicator",
          {
            y: 12,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#020504]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND THREADS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <WebThreads
          color1="#315526"
          color2="#6b9d4d"
          color3="#456d32"
          speed={0.09}
          threadCount={9}
          frequency={4.5}
          spread={0.19}
          taper={1}
          position={0.5}
          fanMode="center"
          glow={0.08}
          falloff={1}
          thickness={0.75}
          brightness={0.24}
          opacity={0.44}
          mirror={true}
          shimmer={false}
          grain={true}
          grainIntensity={0.006}
          mouseInteraction={true}
          mouseStrength={0.12}
        />
      </div>

      {/* =====================================================
          CENTRAL DARKENING
          Keeps the typography readable
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          bg-[radial-gradient(ellipse_at_center,rgba(2,5,4,0.90)_0%,rgba(2,5,4,0.70)_32%,rgba(2,5,4,0.22)_68%,rgba(2,5,4,0.60)_100%)]
        "
      />

      {/* =====================================================
          TOP / BOTTOM VIGNETTE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          bg-gradient-to-b
          from-[#020504]/65
          via-transparent
          to-[#020504]/85
        "
      />

      {/* =====================================================
          LEFT TOP CODE
      ====================================================== */}

      <div
        className="
          code-decoration
          pointer-events-none
          absolute
          left-7
          top-[31%]
          z-20
          hidden
          font-mono
          text-[9px]
          leading-5
          text-[#9be86a]/15
          xl:block
        "
      >
        <div>0101 0011 1010</div>

        <div className="mt-2 h-px w-6 bg-[#9be86a]/20" />
      </div>

      {/* =====================================================
          LEFT BOTTOM CODE
      ====================================================== */}

      <div
        className="
          code-decoration
          pointer-events-none
          absolute
          bottom-[22%]
          left-7
          z-20
          hidden
          font-mono
          text-[9px]
          leading-5
          text-[#9be86a]/15
          xl:block
        "
      >
        <div>const review = true;</div>

        <div className="mt-2 h-px w-6 bg-[#9be86a]/20" />
      </div>

      {/* =====================================================
          RIGHT TOP CODE
      ====================================================== */}

      <div
        className="
          code-decoration
          pointer-events-none
          absolute
          right-7
          top-[40%]
          z-20
          hidden
          text-right
          font-mono
          text-[9px]
          leading-5
          text-[#9be86a]/15
          xl:block
        "
      >
        <div>analyze(repository)</div>

        <div className="mt-2 ml-auto h-px w-6 bg-[#9be86a]/20" />
      </div>

      {/* =====================================================
          RIGHT BOTTOM CODE
      ====================================================== */}

      <div
        className="
          code-decoration
          pointer-events-none
          absolute
          bottom-[22%]
          right-7
          z-20
          hidden
          text-right
          font-mono
          text-[9px]
          leading-5
          text-[#9be86a]/15
          xl:block
        "
      >
        <div>→ findings[]</div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1500px]
          flex-col
          items-center
          justify-center
          px-8
          py-28
          text-center
          sm:px-12
          lg:px-16
        "
      >
        {/* ===================================================
            LABEL
        ==================================================== */}

        

        {/* ===================================================
            MAIN HEADING
        ==================================================== */}

        <h1
          className="
            w-full
            max-w-[1360px]
            text-center
            font-medium
            tracking-[-0.065em]
          "
        >
          {/* First line */}

          <span
            className="
              hero-title-line
              block
              text-[clamp(3.2rem,7.2vw,8rem)]
              leading-[0.94]
              text-white
            "
          >
            Your code deserves
          </span>

          {/* Second line */}

          <span
            className="
              hero-title-line
              mt-4
              block
              text-[clamp(3.2rem,7.2vw,8rem)]
              leading-[0.94]
            "
          >
            <span className="text-white/30">
              a second{" "}
            </span>

            <span
              className="
                bg-gradient-to-r
                from-[#9be86a]
                via-[#b8ff72]
                to-[#82c95a]
                bg-clip-text
                text-transparent
              "
            >
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
            mt-11
            max-w-[650px]
            px-4
            text-[14px]
            leading-7
            text-white/50
            sm:text-[15px]
          "
        >
          CodeLens reads your repository like another engineer would —
          looking for bugs, risky patterns, security issues and code
          that could be easier to maintain.
        </p>

        {/* ===================================================
            CTA BUTTONS
        ==================================================== */}

        <div
          className="
            hero-buttons
            mt-11
            flex
            flex-col
            items-center
            gap-4
            sm:flex-row
          "
        >
          {/* Primary */}

          <Link
            to="/review"
            className="
              group
              flex
              h-[58px]
              min-w-[220px]
              items-center
              justify-center
              gap-4
              rounded-full
              bg-[#b8ff72]
              px-8
              text-[14px]
              font-semibold
              text-[#071006]
              transition-all
              duration-300
              hover:bg-[#c7ff91]
              hover:shadow-[0_0_45px_rgba(184,255,114,0.14)]
            "
          >
            <span>Start a review</span>

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>

          {/* Secondary */}

          <a
            href="#how-it-works"
            className="
              flex
              h-[58px]
              min-w-[220px]
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.14]
              bg-white/[0.015]
              px-8
              text-[14px]
              text-white/55
              transition-all
              duration-300
              hover:border-[#9be86a]/30
              hover:bg-white/[0.025]
              hover:text-white
            "
          >
            See how it works
          </a>
        </div>

        {/* ===================================================
            SCROLL INDICATOR
        ==================================================== */}

        <div
          className="
            scroll-indicator
            absolute
            bottom-5
            left-1/2
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
              tracking-[0.35em]
              text-[#9be86a]/45
            "
          >
            SCROLL
          </span>

          <span className="h-7 w-px bg-[#9be86a]/20" />
        </div>
      </div>
    </section>
  );
};

export default Hero;