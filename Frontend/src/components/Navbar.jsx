import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";
import gsap from "gsap";

/* =========================================================
   LENS ICON
========================================================= */

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

/* =========================================================
   ARROW ICON
========================================================= */

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

/* =========================================================
   PROFILE ICON
========================================================= */

const ProfileIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="8"
      r="3.5"
      stroke="currentColor"
      strokeWidth="1.7"
    />

    <path
      d="M5 20c.8-3.2 3.2-5 7-5s6.2 1.8 7 5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* =======================================================
     AUTH STATE
  ======================================================= */

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* =======================================================
     GSAP REFS
  ======================================================= */

  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const menuHeaderRef = useRef(null);
  const menuFooterRef = useRef(null);

  const menuItemsRef = useRef([]);

  /* =======================================================
     CHECK LOGIN
  ======================================================= */

  useEffect(() => {
    const loggedIn =
      localStorage.getItem("isLoggedIn");

    setIsLoggedIn(loggedIn === "true");
  }, []);

  /* =======================================================
     SCROLL DETECTION
  ======================================================= */

  useEffect(() => {
    const onScroll = () => {
      setSolid(
        window.scrollY >
          window.innerHeight * 0.7
      );
    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );
    };
  }, []);

  /* =======================================================
     LOCK BODY WHEN MENU OPEN
  ======================================================= */

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

  /* =======================================================
     INITIAL GSAP STATE
  ======================================================= */

  useLayoutEffect(() => {
    const menu = menuRef.current;
    const overlay = overlayRef.current;

    if (!menu || !overlay) return;

    gsap.set(menu, {
      xPercent: 100,
    });

    gsap.set(overlay, {
      opacity: 0,
      pointerEvents: "none",
    });

    gsap.set(menuHeaderRef.current, {
      opacity: 0,
      x: 30,
    });

    gsap.set(menuFooterRef.current, {
      opacity: 0,
      y: 10,
    });

    gsap.set(menuItemsRef.current, {
      opacity: 0,
      x: 40,
    });
  }, []);

  /* =======================================================
     MENU ANIMATION
  ======================================================= */

  useLayoutEffect(() => {
    const menu = menuRef.current;
    const overlay = overlayRef.current;

    if (!menu || !overlay) return;

    const items = menuItemsRef.current.filter(
      Boolean
    );

    gsap.killTweensOf([
      menu,
      overlay,
      menuHeaderRef.current,
      menuFooterRef.current,
      ...items,
    ]);

    /* =====================================================
       OPEN
    ===================================================== */

    if (menuOpen) {
      const tl = gsap.timeline();

      /* Overlay */

      tl.to(
        overlay,
        {
          opacity: 1,
          duration: 0.45,
          ease: "power2.out",
          onStart: () => {
            overlay.style.pointerEvents =
              "auto";
          },
        },
        0
      );

      /* Panel */

      tl.to(
        menu,
        {
          xPercent: 0,
          duration: 0.85,
          ease: "power4.out",
        },
        0
      );

      /* Header */

      tl.to(
        menuHeaderRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        0.35
      );

      /* Menu items */

      tl.to(
        items,
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.075,
          ease: "power3.out",
        },
        0.4
      );

      /* Footer */

      tl.to(
        menuFooterRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        0.8
      );
    }

    /* =====================================================
       CLOSE
    ===================================================== */

    else {
      const tl = gsap.timeline();

      /* Menu items */

      tl.to(
        items,
        {
          opacity: 0,
          x: 25,
          duration: 0.22,
          stagger: 0.025,
          ease: "power2.in",
        },
        0
      );

      /* Header */

      tl.to(
        menuHeaderRef.current,
        {
          opacity: 0,
          x: 20,
          duration: 0.25,
          ease: "power2.in",
        },
        0
      );

      /* Footer */

      tl.to(
        menuFooterRef.current,
        {
          opacity: 0,
          y: 8,
          duration: 0.2,
          ease: "power2.in",
        },
        0
      );

      /* Panel → right */

      tl.to(
        menu,
        {
          xPercent: 100,
          duration: 0.7,
          ease: "power4.inOut",
        },
        0.08
      );

      /* Overlay */

      tl.to(
        overlay,
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",

          onComplete: () => {
            overlay.style.pointerEvents =
              "none";
          },
        },
        0.15
      );
    }
  }, [menuOpen]);

  /* =======================================================
     TOP NAV VISIBILITY
  ======================================================= */

  const topVisibility = solid
    ? "pointer-events-none translate-y-[-10px] opacity-0"
    : "translate-y-0 opacity-100";

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
              LOGO
          ================================================= */}

          <Link
            to="/"
            className="cl-nav__mark"
            aria-label="CodeLens home"
          >
            C<Lens />
            <span>delens</span>
          </Link>

          {/* =================================================
              CENTER NAVIGATION
          ================================================= */}

          <nav
            className={`
              flex
              items-center
              gap-[34px]
              max-md:hidden
              transition-all
              duration-500
              ${topVisibility}
            `}
          >
            <a
              href="#reads"
              className="
                text-[14px]
                font-medium
                tracking-[-0.02em]
                !text-[#eeeae1]
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
                !text-[#eeeae1]
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
                !text-[#eeeae1]
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

          <div className="flex items-center justify-end gap-3">

            {/* =================================================
                LOGIN / SIGNUP
            ================================================= */}

            {!isLoggedIn ? (
              <>
                {/* LOGIN */}

                <Link
                  to="/login"
                  className={`
                    flex
                    h-[46px]
                    items-center
                    justify-center
                    whitespace-nowrap
                    px-[16px]
                    text-[14px]
                    font-medium
                    !text-[#eeeae1]
                    no-underline
                    transition-all
                    duration-500
                    hover:opacity-60
                    ${topVisibility}
                  `}
                >
                  <span className="!text-[#eeeae1]">
                    Log in
                  </span>
                </Link>

                {/* SIGN UP */}

                <Link
                  to="/signup"
                  className={`
                    relative
                    z-[2]
                    flex
                    h-[46px]
                    min-w-[88px]
                    items-center
                    justify-center
                    whitespace-nowrap
                    bg-[#eeeae1]
                    px-[17px]
                    text-[14px]
                    font-medium
                    !text-[#0b0b0a]
                    no-underline
                    transition-all
                    duration-500
                    hover:opacity-80
                    ${topVisibility}
                  `}
                >
                  <span className="!text-[#0b0b0a]">
                    Sign up
                  </span>
                </Link>
              </>
            ) : (
              /* =================================================
                 PROFILE
              ================================================= */

              <Link
                to="/profile"
                aria-label="Open profile"
                className={`
                  flex
                  h-[46px]
                  items-center
                  gap-2
                  border
                  border-[#eeeae1]/30
                  px-[15px]
                  text-[14px]
                  font-medium
                  !text-[#eeeae1]
                  no-underline
                  transition-all
                  duration-300
                  hover:bg-[#eeeae1]
                  hover:!text-[#0b0b0a]
                  ${topVisibility}
                `}
              >
                <ProfileIcon />

                <span className="!text-inherit">
                  Profile
                </span>
              </Link>
            )}

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
                ${topVisibility}
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
                  !text-[#0b0b0a]
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
                  !text-[#0b0b0a]
                "
              >
                <ArrowTile />
              </span>
            </Link>

            {/* =================================================
                MENU BUTTON
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
                !text-[#0b0b0a]
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
        ref={overlayRef}
        onClick={() => setMenuOpen(false)}
        className="
          fixed
          inset-0
          z-[1050]
          bg-black/60
          opacity-0
          pointer-events-none
        "
      />

      {/* =====================================================
          SIDE PANEL
      ===================================================== */}

      <aside
        ref={menuRef}
        className="
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
        "
      >
        {/* =================================================
            MENU HEADER
        ================================================= */}

        <div
          ref={menuHeaderRef}
          className="
            flex
            items-center
            justify-between
          "
        >
          {/* LOGO */}

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="
              flex
              items-center
              text-[20px]
              font-medium
              tracking-[-0.05em]
              !text-[#eeeae1]
              no-underline
            "
          >
            C<Lens />

            <span>delens</span>
          </Link>

          {/* CLOSE */}

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
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
              !text-[#eeeae1]
              transition-all
              duration-300
              hover:bg-[#eeeae1]
              hover:!text-[#0b0b0a]
            "
          >
            <span
              className="
                absolute
                h-[1.5px]
                w-[21px]
                rotate-45
                bg-current
              "
            />

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
            MENU ITEMS
        ================================================= */}

        <nav className="mt-auto flex flex-col pb-12">

          {/* WHAT IT READS */}

          <a
            ref={(el) => {
              menuItemsRef.current[0] = el;
            }}
            href="#reads"
            onClick={() => setMenuOpen(false)}
            className="
              border-b
              border-[#eeeae1]/20
              py-5
              text-[32px]
              font-medium
              tracking-[-0.05em]
              !text-[#eeeae1]
              no-underline
              transition-all
              duration-300
              hover:pl-2
            "
          >
            What it reads
          </a>

          {/* PROCESS */}

          <a
            ref={(el) => {
              menuItemsRef.current[1] = el;
            }}
            href="#process"
            onClick={() => setMenuOpen(false)}
            className="
              border-b
              border-[#eeeae1]/20
              py-5
              text-[32px]
              font-medium
              tracking-[-0.05em]
              !text-[#eeeae1]
              no-underline
              transition-all
              duration-300
              hover:pl-2
            "
          >
            Process
          </a>

          {/* ABOUT */}

          <Link
            ref={(el) => {
              menuItemsRef.current[2] = el;
            }}
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="
              border-b
              border-[#eeeae1]/20
              py-5
              text-[32px]
              font-medium
              tracking-[-0.05em]
              !text-[#eeeae1]
              no-underline
              transition-all
              duration-300
              hover:pl-2
            "
          >
            About
          </Link>

          {/* REVIEW A REPO */}

          <Link
            ref={(el) => {
              menuItemsRef.current[3] = el;
            }}
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
              !text-[#eeeae1]
              no-underline
              transition-all
              duration-300
              hover:pl-2
            "
          >
            <span className="!text-[#eeeae1]">
              Review a repo
            </span>

            <ArrowTile />
          </Link>

          {/* =================================================
              AUTH OPTIONS
          ================================================= */}

          {!isLoggedIn ? (
            <>
              {/* LOGIN */}

              <Link
                ref={(el) => {
                  menuItemsRef.current[4] = el;
                }}
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="
                  border-b
                  border-[#eeeae1]/20
                  py-5
                  text-[32px]
                  font-medium
                  tracking-[-0.05em]
                  !text-[#eeeae1]
                  no-underline
                  transition-all
                  duration-300
                  hover:pl-2
                "
              >
                <span className="!text-[#eeeae1]">
                  Log in
                </span>
              </Link>

              {/* SIGN UP */}

              <Link
                ref={(el) => {
                  menuItemsRef.current[5] = el;
                }}
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="
                  border-b
                  border-[#eeeae1]/20
                  py-5
                  text-[32px]
                  font-medium
                  tracking-[-0.05em]
                  !text-[#eeeae1]
                  no-underline
                  transition-all
                  duration-300
                  hover:pl-2
                "
              >
                <span className="!text-[#eeeae1]">
                  Sign up
                </span>
              </Link>
            </>
          ) : (
            /* PROFILE */

            <Link
              ref={(el) => {
                menuItemsRef.current[4] = el;
              }}
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="
                border-b
                border-[#eeeae1]/20
                py-5
                text-[32px]
                font-medium
                tracking-[-0.05em]
                !text-[#eeeae1]
                no-underline
                transition-all
                duration-300
                hover:pl-2
              "
            >
              <span className="!text-[#eeeae1]">
                Profile
              </span>
            </Link>
          )}
        </nav>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div
          ref={menuFooterRef}
          className="
            text-[10px]
            uppercase
            tracking-[0.2em]
            !text-[#eeeae1]/40
          "
        >
          CodeLens
        </div>
      </aside>
    </>
  );
};

export default Navbar;