const WhatIsCodeLens = () => {
  return (
    <section className="cl-section" id="about">
      <div className="cl-shell cl-rail">
        <div className="cl-rail__label">
          <p className="cl-mono">(the gap)</p>
        </div>

        <div>
          <p className="cl-statement">
            A review that takes four minutes is not a review. It is a signature.
            Most pull requests get approved by someone who scrolled to the
            bottom, and the bug ships anyway.
          </p>

          <p className="cl-statement" style={{ marginTop: "2.2rem" }}>
            CodeLens reads what nobody has time to read. It follows the change
            through the code that calls it, then tells you what breaks and why.
          </p>

          <div
            className="cl-rule"
            style={{ margin: "3.5rem 0 1.25rem", maxWidth: "34rem" }}
          />

          <p className="cl-prose">
            Point it at a repository or a single pull request. It reports back
            in plain language, with the line, the reason, and the fix.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCodeLens;
