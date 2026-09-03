import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const NavbarAbout = () => {
    const navRef = useRef(null);
    const lastScrollY = useRef(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                navRef.current,
                {
                    y: -100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                }
            );
        }, navRef);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Always show navbar near the top
            if (currentScrollY < 80) {
                setIsVisible(true);
            }
            // Scrolling down → hide
            else if (currentScrollY > lastScrollY.current) {
                setIsVisible(false);
            }
            // Scrolling up → show
            else {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            ctx.revert();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        gsap.to(navRef.current, {
            y: isVisible ? 0 : -120,
            opacity: isVisible ? 1 : 0,
            duration: 0.45,
            ease: "power3.out",
        });
    }, [isVisible]);

    return (
        <header
            ref={navRef}
            className="
                fixed
                left-0
                right-0
                top-0
                z-[9999]
            "
        >
            <div className="mx-auto max-w-[1440px] px-6 pt-5 sm:px-10 lg:px-14">

                <nav
                    className="
                        flex
                        h-[60px]
                        items-center
                        justify-between
                    "
                >

                    {/* LOGO */}

                    <Link
                        to="/"
                        className="
                            group
                            flex
                            items-center
                            gap-3
                            text-[18px]
                            font-semibold
                            tracking-[-0.045em]
                            text-[#211812]
                        "
                    >
                        <span
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-[10px]
                                border
                                border-[#211812]/20
                                bg-[#f3eadb]/70
                                text-[#a9682f]
                                transition-all
                                duration-300
                                group-hover:border-[#a9682f]/50
                                group-hover:bg-[#e8d8c0]
                            "
                        >
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="6.5"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                />

                                <path
                                    d="M16 16L21 21"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>

                        <span>
                            Code
                            <span className="text-[#a9682f]">
                                Lens
                            </span>
                        </span>
                    </Link>


                    {/* CENTER NAV */}

                    <div
                        className="
                            absolute
                            left-1/2
                            hidden
                            -translate-x-1/2
                            items-center
                            gap-1
                            rounded-full
                            border
                            border-[#211812]/15
                            bg-[#eee2cf]/90
                            px-2
                            py-2
                            shadow-[0_4px_20px_rgba(33,24,18,0.04)]
                            backdrop-blur-md
                            md:flex
                        "
                    >

                        <Link
                            to="/"
                            className="
                                rounded-full
                                px-5
                                py-2
                                text-[12px]
                                font-medium
                                text-[#211812]/70
                                transition-all
                                duration-300
                                hover:bg-[#211812]/[0.07]
                                hover:text-[#211812]
                            "
                        >
                            Home
                        </Link>

                        <Link
                            to="/review"
                            className="
                                rounded-full
                                px-5
                                py-2
                                text-[12px]
                                font-medium
                                text-[#211812]/70
                                transition-all
                                duration-300
                                hover:bg-[#211812]/[0.07]
                                hover:text-[#211812]
                            "
                        >
                            Review
                        </Link>

                        

                        <a
                            href="/#how-it-works"
                            className="
                                rounded-full
                                px-5
                                py-2
                                text-[12px]
                                font-medium
                                text-[#211812]/70
                                transition-all
                                duration-300
                                hover:bg-[#211812]/[0.07]
                                hover:text-[#211812]
                            "
                        >
                            How it works
                        </a>

                        <span
                            className="
                                rounded-full
                                bg-[#211812]/[0.09]
                                px-5
                                py-2
                                text-[12px]
                                font-semibold
                                text-[#211812]
                            "
                        >
                            About
                        </span>

                    </div>


                    {/* GET STARTED */}

                    <Link
                        to="/review"
                        className="
                            group
                            flex
                            items-center
                            gap-3
                            rounded-full
                            bg-[#211812]
                            px-5
                            py-3
                            text-[12px]
                            font-semibold
                            text-[#f3eadb]
                            shadow-[0_5px_20px_rgba(33,24,18,0.12)]
                            transition-all
                            duration-300
                            hover:-translate-y-[2px]
                            hover:bg-[#35271e]
                            hover:shadow-[0_8px_25px_rgba(33,24,18,0.18)]
                        "
                    >
                        Get Started

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

                </nav>
            </div>
        </header>
    );
};

export default NavbarAbout;