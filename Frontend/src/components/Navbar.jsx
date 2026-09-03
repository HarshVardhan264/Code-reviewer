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
            font-sans
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
              rounded-[10px]
              border
              border-[#d99a3e]/30
              bg-[#d99a3e]/[0.04]
              transition-all
              duration-300
              group-hover:border-[#d99a3e]/60
              group-hover:bg-[#d99a3e]/[0.08]
            "
          >
            {/* Lens */}

            <div
              className="
                h-[15px]
                w-[15px]
                rounded-full
                border-[2px]
                border-[#d99a3e]
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
                bg-[#f1e8d7]
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
                bg-[#d99a3e]
              "
            />
          </div>

          {/* Logo text */}

          <span
            className="
              text-[18px]
              font-semibold
              tracking-[-0.045em]
              text-[#f1e8d7]
            "
          >
            Code<span className="text-[#d99a3e]">Lens</span>
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
            border-[#d9a14a]/15
            bg-[#f1e8d7]/[0.025]
            p-1
            backdrop-blur-md
            md:flex
          "
        >
          {/* Home */}

          <Link
            to="/"
            className={`
              rounded-full
              px-5
              py-2.5
              text-[13px]
              font-medium
              transition-all
              duration-300
              ${
                isActive("/")
                  ? "bg-[#f1e8d7]/[0.10] text-[#f1e8d7]"
                  : "text-[#c8bfb0]/55 hover:text-[#f1e8d7]/90"
              }
            `}
          >
            Home
          </Link>

          {/* Review */}

          <Link
            to="/review"
            className={`
              rounded-full
              px-5
              py-2.5
              text-[13px]
              font-medium
              transition-all
              duration-300
              ${
                isActive("/review")
                  ? "bg-[#f1e8d7]/[0.10] text-[#f1e8d7]"
                  : "text-[#c8bfb0]/55 hover:text-[#f1e8d7]/90"
              }
            `}
          >
            Review
          </Link>



          {/* How it works */}

          <a
            href="#how-it-works"
            className="
              rounded-full
              px-5
              py-2.5
              text-[13px]
              font-medium
              text-[#c8bfb0]/55
              transition-all
              duration-300
              hover:text-[#f1e8d7]/90
            "
          >
            How it works
          </a>

          {/* About */}

          <Link
            to="/about"
            className="
              rounded-full
              px-5
              py-2.5
              text-[13px]
              font-medium
              text-[#c8bfb0]/55
              transition-all
              duration-300
              hover:text-[#f1e8d7]/90
            "
          >
            About
          </Link>
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
            rounded-[3px]
            bg-[#f1e8d7]
            px-6
            text-[13px]
            font-medium
            text-[#17130e]
            transition-all
            duration-300
            hover:-translate-y-[1px]
            hover:bg-[#fff5e2]
          "
        >
          <span>Get Started</span>

          <span
            className="
              text-[15px]
              transition-transform
              duration-300
              group-hover:translate-x-1
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