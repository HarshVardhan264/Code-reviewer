import { Link } from "react-router-dom";

import { Lens } from "./Navbar";

const Footer = () => {
  return (
    <footer className="cl-foot">
      <div className="cl-shell cl-foot__grid">
        <nav>
          <p className="cl-mono">(navigation)</p>

          <div style={{ marginTop: "1.25rem" }}>
            <Link to="/review" className="cl-foot__link cl-rule">
              Review a repo
            </Link>

            <a href="#reads" className="cl-foot__link cl-rule">
              What it reads
            </a>

            <a href="#process" className="cl-foot__link cl-rule">
              Process
            </a>

            <Link to="/about" className="cl-foot__link cl-rule">
              About
            </Link>
          </div>
        </nav>

        <div className="cl-foot__aside">
          <div>
            <p className="cl-mono">(get in touch)</p>

            <p style={{ marginTop: "1rem", fontWeight: 600 }}>
              <a href="mailto:hello@codelens.dev" className="cl-foot__mail">
                hello@codelens.dev
              </a>
            </p>

            <p className="cl-prose" style={{ marginTop: "0.75rem" }}>
              Works with GitHub and GitLab repositories, public or private.
            </p>
          </div>

          <div>
            <p className="cl-mono">(status)</p>

            <p style={{ marginTop: "1rem", color: "var(--ash)" }}>
              Reviewing normally. No queue.
            </p>
          </div>
        </div>
      </div>

      <div className="cl-shell cl-foot__base">
        <span className="cl-nav__mark" style={{ opacity: 0.7 }}>
          C<Lens />
          <span>delens</span>
        </span>

        <span className="cl-mono">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
