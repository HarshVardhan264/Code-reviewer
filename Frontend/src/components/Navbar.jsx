import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Lens = ({ size = "0.78em" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="inline-block align-[-0.02em]"
  >
    <circle
      cx="12"
      cy="12"
      r="10.5"
      stroke="currentColor"
      strokeWidth="2.4"
    />

    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="currentColor"
      strokeWidth="2.4"
    />
  </svg>
);

export const ArrowTile = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2 10L10 2M10 2H3.5M10 2V8.5"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

const Navbar = () => {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================
     SCROLL DETECTION
  ========================= */

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > window.innerHeight * 0.7);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =========================
     LOCK BODY WHEN MENU OPEN
  ========================= */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed left-0 top-0 z-[1000] w-full">
        <div
          className="
            grid
            h-[90px]
            w-full
            grid-cols-[1fr_auto_1fr]
            items-center
            px-[5.25vw]
          "
        >
          {/* =================================================
              CODELENS LOGO
          ================================================= */}

         <Link to="/" className="cl-nav__mark" aria-label="CodeLens home">
        C<Lens />
        <span>delens</span>
      </Link>
      
          {/* =================================================
              MIDDLE LINKS
          ================================================= */}

          <nav
            className={`
              flex
              items-center
              gap-[34px]
              transition-all
              duration-500
              max-md:hidden
              ${
                solid
                  ? "pointer-events-none translate-y-[-10px] opacity-0"
                  : "translate-y-0 opacity-100"
              }
            `}
          >
            <a
              href="#reads"
              className="
                text-[14px]
                font-medium
                tracking-[-0.02em]
                text-[#eeeae1]
                no-underline
                transition-opacity
                duration-300
                hover:opacity-60
              "
            >
              What it reads
            </a>

            <a
              href="#process"
              className="
                text-[14px]
                font-medium
                tracking-[-0.02em]
                text-[#eeeae1]
                no-underline
                transition-opacity
                duration-300
                hover:opacity-60
              "
            >
              Process
            </a>

            <Link
              to="/about"
              className="
                text-[14px]
                font-medium
                tracking-[-0.02em]
                text-[#eeeae1]
                no-underline
                transition-opacity
                duration-300
                hover:opacity-60
              "
            >
              About
            </Link>
          </nav>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex justify-end">
            {/* =================================================
                REVIEW A REPO
            ================================================= */}

            <Link
              to="/review"
              className={`
                flex
                items-center
                gap-0
                transition-all
                duration-500
                ${
                  solid
                    ? "pointer-events-none translate-y-[-10px] opacity-0"
                    : "translate-y-0 opacity-100"
                }
              `}
            >
              <span
                className="
                  flex
                  h-[46px]
                  items-center
                  bg-[#eeeae1]
                  px-[17px]
                  text-[14px]
                  font-medium
                  text-[#0b0b0a]
                "
              >
                Review a repo
              </span>

              <span
                className="
                  flex
                  h-[46px]
                  w-[46px]
                  items-center
                  justify-center
                  bg-[#eeeae1]
                  text-[#0b0b0a]
                "
              >
                <ArrowTile />
              </span>
            </Link>

            {/* =================================================
                THREE LINE CIRCLE
            ================================================= */}

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className={`
                flex
                h-[58px]
                w-[58px]
                flex-col
                items-center
                justify-center
                gap-[5px]
                rounded-full
                bg-[#eeeae1]
                text-[#0b0b0a]
                transition-all
                duration-500
                ${
                  solid
                    ? "pointer-events-auto scale-100 opacity-100"
                    : "pointer-events-none scale-90 opacity-0"
                }
              `}
            >
              <span className="block h-[1.5px] w-[22px] bg-[#0b0b0a]" />
              <span className="block h-[1.5px] w-[22px] bg-[#0b0b0a]" />
              <span className="block h-[1.5px] w-[22px] bg-[#0b0b0a]" />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          OVERLAY
      ===================================================== */}

      <div
        onClick={() => setMenuOpen(false)}
        className={`
          fixed
          inset-0
          z-[1050]
          bg-black/60
          transition-opacity
          duration-500
          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          SIDE MENU
      ===================================================== */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-[1100]
          flex
          h-screen
          w-[420px]
          max-w-[88vw]
          flex-col
          bg-[#0b0b0a]
          px-8
          py-8
          text-[#eeeae1]
          shadow-2xl
          transition-transform
          duration-700
          ease-[cubic-bezier(0.76,0,0.24,1)]
          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* =================================================
            MENU HEADER
        ================================================= */}

        <div className="flex items-center justify-between">
          {/* CODELENS */}

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="
              flex
              items-center
              text-[20px]
              font-medium
              tracking-[-0.05em]
              text-[#eeeae1]
            "
          >
            C<Lens />
            <span>delens</span>
          </Link>

          {/* =================================================
              CLOSE BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label="Close menu"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            className="
              relative
              z-[1200]
              flex
              h-[52px]
              w-[52px]
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-[#eeeae1]/30
              bg-transparent
              text-[#eeeae1]
              transition-all
              duration-300
              hover:bg-[#eeeae1]
              hover:text-[#0b0b0a]
            "
          >
            {/* CROSS LINE 1 */}

            <span
              className="
                absolute
                h-[1.5px]
                w-[21px]
                rotate-45
                bg-current
              "
            />

            {/* CROSS LINE 2 */}

            <span
              className="
                absolute
                h-[1.5px]
                w-[21px]
                -rotate-45
                bg-current
              "
            />
          </button>
        </div>

        {/* =================================================
            MENU OPTIONS
        ================================================= */}

        <nav className="mt-auto flex flex-col pb-12">
          {/* WHAT IT READS */}

          <a
            href="#reads"
            onClick={() => setMenuOpen(false)}
            className="
              border-b
              border-[#eeeae1]/20
              py-5
              text-[32px]
              font-medium
              tracking-[-0.05em]
              text-[#eeeae1]
              transition-all
              duration-300
              hover:pl-2
            "
          >
            What it reads
          </a>

          {/* PROCESS */}

          <a
            href="#process"
            onClick={() => setMenuOpen(false)}
            className="
              border-b
              border-[#eeeae1]/20
              py-5
              text-[32px]
              font-medium
              tracking-[-0.05em]
              text-[#eeeae1]
              transition-all
              duration-300
              hover:pl-2
            "
          >
            Process
          </a>

          {/* ABOUT */}

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="
              border-b
              border-[#eeeae1]/20
              py-5
              text-[32px]
              font-medium
              tracking-[-0.05em]
              text-[#eeeae1]
              transition-all
              duration-300
              hover:pl-2
            "
          >
            About
          </Link>

          {/* REVIEW A REPO */}

          <Link
            to="/review"
            onClick={() => setMenuOpen(false)}
            className="
              flex
              items-center
              justify-between
              border-b
              border-[#eeeae1]/20
              py-5
              text-[32px]
              font-medium
              tracking-[-0.05em]
              text-[#eeeae1]
              transition-all
              duration-300
              hover:pl-2
            "
          >
            <span>Review a repo</span>

            <ArrowTile />
          </Link>
        </nav>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="text-[10px] uppercase tracking-[0.2em] text-[#eeeae1]/40">
          CodeLens
        </div>
      </aside>
    </>
  );
};

export default Navbar;