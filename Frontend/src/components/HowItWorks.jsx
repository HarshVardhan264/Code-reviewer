const steps = [
  {
    step: "01",
    title: "You hand it the code",
    body: "Paste a repository URL or a pull request. Nothing to install, no branch to prepare.",
    sample: "$ codelens github.com/acme/checkout#418",
  },
  {
    step: "02",
    title: "It reads the whole path",
    body: "Not just the diff. It follows the change into the functions that call it and the tests that cover it, so a two-line edit is judged by what it touches.",
    sample: "reading 41 files · 6 call sites · 2 test suites",
  },
  {
    step: "03",
    title: "You get a review, not a score",
    body: "Findings ordered by what would hurt most in production, each with the line, the reason it matters, and the change that fixes it.",
    sample: "7 findings · 2 correctness · 1 security · 4 clarity",
  },
];

const HowItWorks = () => {
  return (
    <section className="cl-section" id="process">
      <div className="cl-shell">
        <p className="cl-mono">(process)</p>

        <div style={{ marginTop: "2rem" }}>
          {steps.map((item) => (
            <div className="cl-step cl-rule" key={item.step}>
              <p className="cl-mono cl-step__index">step · {item.step}</p>

              <div>
                <h3 className="cl-row__title">{item.title}</h3>

                <p className="cl-prose" style={{ marginTop: "0.9rem" }}>
                  {item.body}
                </p>
              </div>

              <p className="cl-mono cl-step__sample">{item.sample}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
