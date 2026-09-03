import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#080604] text-[#f4ead7]">

      {/* =====================================================
          IMAGE HERO
      ===================================================== */}

      <div className="relative min-h-[40vh] overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=85"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#080604]/65" />

        {/* Brown overlay */}
        <div className="absolute inset-0 bg-[#3b2415]/20 mix-blend-multiply" />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-[#080604] to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#080604] via-[#080604]/80 to-transparent" />

        {/* Side vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080604]/70 via-transparent to-[#080604]/50" />

        {/* Warm glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b86f32]/[0.08] blur-[180px]" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[78vh] max-w-[1500px] flex-col justify-between px-[7vw] py-10 sm:py-14">

          {/* TOP BAR */}

          <div className="flex items-center justify-between">

            <Link
              to="/"
              className="text-[20px] font-medium tracking-[-0.05em]"
            >
              CodeLens<span className="text-[#c98a4b]">.</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c98a4b]" />

              <span className="font-mono text-[9px] tracking-[0.22em] text-[#f4ead7]/40">
                SYSTEM OPERATIONAL
              </span>
            </div>

          </div>


          {/* MAIN CONTENT */}

          <div className="pb-12 pt-32">

            {/* Label */}

            <div className="mb-7 flex items-center gap-4">

              <span className="h-px w-9 bg-[#c98a4b]" />

              <span className="font-mono text-[10px] tracking-[0.3em] text-[#c98a4b]">
                CODELENS
              </span>

            </div>


            {/* Heading */}

            <h2 className="max-w-[1000px] text-[clamp(4rem,9vw,9.5rem)] font-medium leading-[0.84] tracking-[-0.075em]">

              Code review
              <br />

              <span className="text-[#f4ead7]/45">
                made clearer.
              </span>

            </h2>


            {/* Short description */}

            <p className="mt-8 max-w-[430px] text-[14px] leading-[1.8] text-[#f4ead7]/50">
              AI-powered feedback to help you understand and improve your code.
            </p>


            {/* CTA */}

            <div className="mt-8">

              <Link
                to="/review"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  rounded-[14px]
                  bg-[#f4ead7]
                  px-7
                  py-4
                  text-[13px]
                  font-semibold
                  text-[#17110c]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-[0_20px_50px_rgba(201,138,75,0.2)]
                "
              >
                <span>
                  Start a review
                </span>

                <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </Link>

            </div>

          </div>


          

        </div>

      </div>


      {/* =====================================================
          SIMPLE FOOTER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-[7vw]">

        {/* Bottom */}

        <div className="flex flex-col gap-3 py-6 text-[9px] text-[#f4ead7]/20 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © 2026 CodeLens
          </span>

          <span className="font-mono tracking-[0.18em]">
            REVIEW · ANALYZE · IMPROVE
          </span>

        </div>

      </div>

    </footer>
  );
};

export default Footer;