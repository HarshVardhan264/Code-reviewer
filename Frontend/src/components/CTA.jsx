import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ArrowTile } from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cl-cta",
          start: "top 80%",
          once: true,
        },
      });

      // Heading reveal
      tl.from(".cl-cta__head", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Button reveal
      tl.from(
        ".cl-chip--lg",
        {
          y: 40,
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="cl-cta">
      <div className="cl-shell" style={{ textAlign: "center" }}>
        <h2 className="cl-display cl-cta__head">
          Point it at
          <br />
          your repo
        </h2>

        <Link
          to="/review"
          className="cl-chip cl-chip--lg"
          style={{ marginTop: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          <span>Review a repository</span>

          <span>
            <ArrowTile />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default CTA;