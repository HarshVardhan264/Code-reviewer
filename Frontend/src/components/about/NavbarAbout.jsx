import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

/* =========================================================
   LENS
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
   ARROW
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
   NAVBAR
========================================================= */

const NavbarAbout = () => {
    const [solid, setSolid] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const menuRef = useRef(null);
    const overlayRef = useRef(null);
    const menuItemsRef = useRef([]);

    /* =====================================================
       SCROLL DETECTION
    ===================================================== */

    useEffect(() => {
        const handleScroll = () => {
            setSolid(window.scrollY > window.innerHeight * 0.7);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    /* =====================================================
       LOCK BODY WHEN MENU OPEN
    ===================================================== */

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


    /* =====================================================
       MENU GSAP ANIMATION
    ===================================================== */

    useEffect(() => {
        if (!menuRef.current || !overlayRef.current) return;

        if (menuOpen) {

            gsap.to(overlayRef.current, {
                opacity: 1,
                duration: 0.45,
                ease: "power2.out",
                pointerEvents: "auto",
            });

            gsap.to(menuRef.current, {
                x: "0%",
                duration: 0.7,
                ease: "power4.out",
            });

            gsap.fromTo(
                menuItemsRef.current,
                {
                    x: 50,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.55,
                    stagger: 0.08,
                    delay: 0.25,
                    ease: "power3.out",
                }
            );

        } else {

            gsap.to(overlayRef.current, {
                opacity: 0,
                duration: 0.35,
                ease: "power2.inOut",
                pointerEvents: "none",
            });

            gsap.to(menuRef.current, {
                x: "100%",
                duration: 0.6,
                ease: "power4.inOut",
            });
        }

    }, [menuOpen]);


    /* =====================================================
       CLOSE MENU
    ===================================================== */

    const closeMenu = () => {
        setMenuOpen(false);
    };


    return (
        <>
            {/* =================================================
                NAVBAR
            ================================================= */}

            <header
                className="
                    fixed
                    left-0
                    top-0
                    z-[1000]
                    w-full
                "
            >
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

                        SAME SIZE / COLOR / STRUCTURE
                    ================================================= */}

                    <Link
                        to="/"
                        aria-label="CodeLens home"
                        className="
                            cl-nav__mark
                            flex
                            items-center
                            text-[18px]
                            font-semibold
                            tracking-[-0.045em]
                            text-[#211812]
                            no-underline
                            transition-opacity
                            duration-300
                            hover:opacity-70
                        "
                    >
                        C<Lens />

                        <span>
                            delens
                        </span>
                    </Link>


                    {/* =================================================
                        CENTER LINKS
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
                            href="/#reads"
                            className="
                                text-[14px]
                                font-medium
                                tracking-[-0.02em]
                                text-[#211812]
                                no-underline
                                transition-opacity
                                duration-300
                                hover:opacity-60
                            "
                        >
                            What it reads
                        </a>


                        <a
                            href="/#process"
                            className="
                                text-[14px]
                                font-medium
                                tracking-[-0.02em]
                                text-[#211812]
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
                                text-[#211812]
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
                                    bg-[#211812]
                                    px-[17px]
                                    text-[14px]
                                    font-medium
                                    text-[#f3eadb]
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
                                    bg-[#211812]
                                    text-[#f3eadb]
                                "
                            >
                                <ArrowTile />
                            </span>

                        </Link>


                        {/* =================================================
                            THREE LINE CIRCLE

                            APPEARS AFTER SCROLL
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
                                bg-[#211812]
                                text-[#f3eadb]
                                transition-all
                                duration-500

                                ${
                                    solid
                                        ? "pointer-events-auto scale-100 opacity-100"
                                        : "pointer-events-none scale-90 opacity-0"
                                }
                            `}
                        >

                            <span
                                className="
                                    block
                                    h-[1.5px]
                                    w-[22px]
                                    bg-[#f3eadb]
                                "
                            />

                            <span
                                className="
                                    block
                                    h-[1.5px]
                                    w-[22px]
                                    bg-[#f3eadb]
                                "
                            />

                            <span
                                className="
                                    block
                                    h-[1.5px]
                                    w-[22px]
                                    bg-[#f3eadb]
                                "
                            />

                        </button>

                    </div>

                </div>
            </header>


            {/* =========================================================
                DARK OVERLAY
            ========================================================= */}

            <div
                ref={overlayRef}
                onClick={closeMenu}
                className="
                    pointer-events-none
                    fixed
                    inset-0
                    z-[1050]
                    bg-black/60
                    opacity-0
                "
            />


            {/* =========================================================
                SIDE MENU
            ========================================================= */}

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
                    translate-x-full
                    flex-col
                    bg-[#211812]
                    px-8
                    py-8
                    text-[#eeeae1]
                    shadow-2xl
                "
            >

                {/* =================================================
                    MENU HEADER
                ================================================= */}

                <div className="flex items-center justify-between">

                    {/* CODELENS */}

                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="
                            flex
                            items-center
                            text-[18px]
                            font-semibold
                            tracking-[-0.045em]
                            text-[#eeeae1]
                            no-underline
                        "
                    >
                        C<Lens />

                        <span>
                            delens
                        </span>
                    </Link>


                    {/* =================================================
                        CLOSE BUTTON
                    ================================================= */}

                    <button
                        type="button"
                        aria-label="Close menu"
                        onClick={(e) => {
                            e.stopPropagation();
                            closeMenu();
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

                        {/* CROSS */}

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
                    MENU OPTIONS
                ================================================= */}

                <nav
                    className="
                        mt-auto
                        flex
                        flex-col
                        pb-12
                    "
                >

                    {/* WHAT IT READS */}

                    <a
                        ref={(el) => (menuItemsRef.current[0] = el)}
                        href="/#reads"
                        onClick={closeMenu}
                        className="
                            border-b
                            border-[#eeeae1]/20
                            py-5
                            text-[32px]
                            font-medium
                            tracking-[-0.05em]
                            text-[#eeeae1]
                            no-underline
                            opacity-0
                            transition-all
                            duration-300
                            hover:pl-2
                        "
                    >
                        What it reads
                    </a>


                    {/* PROCESS */}

                    <a
                        ref={(el) => (menuItemsRef.current[1] = el)}
                        href="/#process"
                        onClick={closeMenu}
                        className="
                            border-b
                            border-[#eeeae1]/20
                            py-5
                            text-[32px]
                            font-medium
                            tracking-[-0.05em]
                            text-[#eeeae1]
                            no-underline
                            opacity-0
                            transition-all
                            duration-300
                            hover:pl-2
                        "
                    >
                        Process
                    </a>


                    {/* ABOUT */}

                    <Link
                        ref={(el) => (menuItemsRef.current[2] = el)}
                        to="/about"
                        onClick={closeMenu}
                        className="
                            border-b
                            border-[#eeeae1]/20
                            py-5
                            text-[32px]
                            font-medium
                            tracking-[-0.05em]
                            text-[#eeeae1]
                            no-underline
                            opacity-0
                            transition-all
                            duration-300
                            hover:pl-2
                        "
                    >
                        About
                    </Link>


                    {/* REVIEW */}

                    <Link
                        ref={(el) => (menuItemsRef.current[3] = el)}
                        to="/review"
                        onClick={closeMenu}
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
                            no-underline
                            opacity-0
                            transition-all
                            duration-300
                            hover:pl-2
                        "
                    >

                        <span>
                            Review a repo
                        </span>

                        <ArrowTile />

                    </Link>

                </nav>


                {/* =================================================
                    FOOTER
                ================================================= */}

                <div
                    className="
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-[#eeeae1]/40
                    "
                >
                    CodeLens
                </div>

            </aside>
        </>
    );
};

export default NavbarAbout;