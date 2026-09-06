import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import Navbar, { Lens } from "./Navbar";

const Hero = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-lens", { opacity: 0, scale: 0.7, duration: 0.7 })
        .from(
          ".hero-line",
          { opacity: 0, y: 14, duration: 0.7, stagger: 0.09 },
          "-=0.4"
        )
        .from(
          ".hero-mark",
          { yPercent: 100, duration: 1.15, ease: "power4.out" },
          "-=0.45"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cl-hero cl-grain" ref={rootRef}>
      <div className="cl-hero__vignette" />

      <Navbar />

      <div className="cl-hero__copy cl-shell">
        <span className="hero-lens" style={{ fontSize: "2.6rem", opacity: 0.7 }}>
          <Lens size="1em" />
        </span>

        <p className="cl-hero__lead hero-line">
          Every pull request gets read the way your most careful reviewer would
          read it. Line by line, in context, before it ships.
        </p>

        <p className="cl-hero__sub hero-line">
          For teams shipping faster than they can review.
        </p>
      </div>

      <div className="cl-hero__mark">
        <h1 className="cl-display hero-mark">Codelens</h1>
      </div>
    </section>
  );
};

export default Hero;
