import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Lens = ({ size = "0.78em" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    style={{ display: "inline-block", verticalAlign: "-0.02em" }}
  >
    <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="2.4" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2.4" />
  </svg>
);

export const ArrowTile = () => (
  <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M2 10L10 2M10 2H3.5M10 2V8.5"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

const Navbar = () => {
  // Past the hero the bar needs its own ground, otherwise headings scroll
  // straight through it.
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.7);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"cl-nav" + (solid ? " cl-nav--solid" : "")}>
      <Link to="/" className="cl-nav__mark" aria-label="CodeLens home">
        C<Lens />
        <span>delens</span>
      </Link>

      <nav className="cl-nav__links">
        <a href="#reads">What it reads</a>
        <a href="#process">Process</a>
        <Link to="/about">About</Link>
      </nav>

      <Link to="/review" className="cl-chip">
        <span>Review a repo</span>
        <span>
          <ArrowTile />
        </span>
      </Link>
    </header>
  );
};

export default Navbar;
