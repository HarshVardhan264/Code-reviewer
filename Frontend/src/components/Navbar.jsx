import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <nav
        className="
          mx-auto
          flex
          h-[92px]
          w-full
          max-w-[1500px]
          items-center
          justify-between
          px-8
          sm:px-12
          lg:px-16
        "
      >
        {/* =================================================
            LOGO
        ================================================== */}

        <Link
          to="/"
          className="
            group
            flex
            items-center
            gap-3
          "
        >
          {/* CodeLens mark */}

          <div
            className="
              relative
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              border
              border-[#9be86a]/20
              bg-[#9be86a]/[0.04]
              transition-all
              duration-300
              group-hover:border-[#9be86a]/40
              group-hover:bg-[#9be86a]/[0.08]
            "
          >
            {/* Lens */}

            <div
              className="
                h-[15px]
                w-[15px]
                rounded-full
                border-[2px]
                border-[#b8ff72]
              "
            />

            {/* Lens reflection */}

            <span
              className="
                absolute
                right-[9px]
                top-[8px]
                h-[3px]
                w-[3px]
                rounded-full
                bg-white
              "
            />

            {/* Handle */}

            <span
              className="
                absolute
                bottom-[8px]
                right-[7px]
                h-[2px]
                w-[7px]
                rotate-45
                rounded-full
                bg-[#b8ff72]
              "
            />
          </div>

          <span
            className="
              text-[18px]
              font-semibold
              tracking-[-0.04em]
              text-white
            "
          >
            Code<span className="text-[#9be86a]">Lens</span>
          </span>
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <div
          className="
            hidden
            items-center
            gap-1
            rounded-full
            border
            border-white/[0.06]
            bg-white/[0.018]
            p-1
            md:flex
          "
        >
          <Link
            to="/"
            className={`
              rounded-full
              px-5
              py-2.5
              text-[13px]
              transition-all
              duration-300
              ${
                isActive("/")
                  ? "bg-white/[0.08] text-white"
                  : "text-white/45 hover:text-white/80"
              }
            `}
          >
            Home
          </Link>

          <Link
            to="/review"
            className={`
              rounded-full
              px-5
              py-2.5
              text-[13px]
              transition-all
              duration-300
              ${
                isActive("/review")
                  ? "bg-white/[0.08] text-white"
                  : "text-white/45 hover:text-white/80"
              }
            `}
          >
            Review
          </Link>

          <a
            href="#features"
            className="
              rounded-full
              px-5
              py-2.5
              text-[13px]
              text-white/45
              transition-all
              duration-300
              hover:text-white/80
            "
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="
              rounded-full
              px-5
              py-2.5
              text-[13px]
              text-white/45
              transition-all
              duration-300
              hover:text-white/80
            "
          >
            How it works
          </a>

          <a
            href="#about"
            className="
              rounded-full
              px-5
              py-2.5
              text-[13px]
              text-white/45
              transition-all
              duration-300
              hover:text-white/80
            "
          >
            About
          </a>
        </div>

        {/* =================================================
            RIGHT CTA
        ================================================== */}

        <Link
          to="/review"
          className="
            group
            flex
            h-[46px]
            items-center
            gap-2.5
            rounded-full
            bg-white
            px-6
            text-[13px]
            font-semibold
            text-[#080b09]
            transition-all
            duration-300
            hover:bg-[#b8ff72]
            hover:shadow-[0_0_35px_rgba(184,255,114,0.12)]
          "
        >
          <span>Get Started</span>

          <span
            className="
              text-[15px]
              transition-transform
              duration-300
              group-hover:translate-x-0.5
            "
          >
            →
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;