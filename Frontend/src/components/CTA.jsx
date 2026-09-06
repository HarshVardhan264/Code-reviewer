import { Link } from "react-router-dom";

import { ArrowTile } from "./Navbar";

const CTA = () => {
  return (
    <section className="cl-cta">
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
