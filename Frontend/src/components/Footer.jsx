import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#030704] py-32 sm:py-40">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5d963e]/[0.07] blur-[130px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(180,255,130,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180,255,130,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[900px] px-5 text-center sm:px-8">

        {/* Label */}

        <div className="mb-7 flex items-center justify-center gap-3">

          <span className="h-px w-8 bg-[#82a86d]" />

          <span className="text-[10px] font-medium tracking-[0.28em] text-[#82a86d]">
            READY TO REVIEW?
          </span>

          <span className="h-px w-8 bg-[#82a86d]" />

        </div>


        {/* Heading */}

        <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl">

          Let CodeLens
          <br />

          <span className="text-white/30">
            take a look.
          </span>

        </h2>


        {/* Description */}

        <p className="mx-auto mt-7 max-w-[570px] text-sm leading-7 text-white/40 sm:text-base">
          Stop wondering what's hiding inside your codebase.
          Connect your repository and get an AI-powered review
          in minutes.
        </p>


        {/* CTA */}

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            to="/review"
            className="
              group
              relative
              flex
              items-center
              gap-3
              overflow-hidden
              rounded-xl
              bg-[#b8ff72]
              px-7
              py-3.5
              text-[13px]
              font-semibold
              text-[#071006]
              shadow-[0_0_40px_rgba(184,255,114,0.16)]
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-[#c8ff91]
              hover:shadow-[0_0_60px_rgba(184,255,114,0.28)]
            "
          >

            {/* shine */}

            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />

            <span className="relative">
              Start your first review
            </span>

            <span className="relative text-base transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </Link>


          <Link
            to="/about"
            className="
              rounded-xl
              border
              border-white/[0.1]
              bg-white/[0.02]
              px-7
              py-3.5
              text-[13px]
              text-white/50
              backdrop-blur-md
              transition
              hover:border-white/[0.18]
              hover:bg-white/[0.04]
              hover:text-white
            "
          >
            Learn how it works
          </Link>

        </div>


        {/* Bottom status */}

        <div className="mt-14 flex items-center justify-center gap-2">

          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#9be86a] shadow-[0_0_10px_#9be86a]" />

          <span className="font-mono text-[9px] tracking-[0.18em] text-white/20">
            CODELENS · AI CODE INTELLIGENCE
          </span>

        </div>

      </div>

    </section>
  );
};

export default CTA;