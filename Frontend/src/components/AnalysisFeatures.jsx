const diff = [
  { n: "41", sign: " ", text: "export async function getUser(id) {" },
  { n: "42", sign: "-", text: "  const res = await fetch('/api/users/' + id)" },
  { n: "43", sign: "-", text: "  return res.json()" },
  { n: "42", sign: "+", text: "  const res = await fetch('/api/users/' + encodeURIComponent(id))" },
  { n: "43", sign: "+", text: "  if (!res.ok) throw new ApiError(res.status, id)" },
  { n: "44", sign: "+", text: "  return res.json()" },
  { n: "45", sign: " ", text: "}" },
];

const areas = [
  {
    title: "Correctness",
    body: "Unhandled branches, off-by-one loops, promises nobody awaits, state that two callers can write at once.",
    finding: "cart.js:88 — total recomputed inside the loop, drifts on retry",
  },
  {
    title: "Security",
    body: "Untrusted input reaching a query, a shell, or a file path. Secrets committed by accident. Auth checks that only guard the happy path.",
    finding: "auth.py:12 — token compared with ==, timing-leaks the prefix",
  },
  {
    title: "Performance",
    body: "Queries inside loops, work repeated per render, payloads that grow with the table rather than the page.",
    finding: "orders.rb:204 — N+1 across 1 200 rows on the checkout path",
  },
  {
    title: "Clarity",
    body: "The parts a new teammate will misread at 2am: names that lie, dead branches, comments that stopped being true three refactors ago.",
    finding: "sync.go:57 — comment describes the old retry policy",
  },
];

const AnalysisFeatures = () => {
  return (
    <section className="cl-section" id="reads">
      <div className="cl-reads">
        <h2 className="cl-display cl-reads__head">
          Every line
          <br />
          in context
        </h2>

        <div className="cl-reads__card">
          <div className="cl-diff">
            <div className="cl-diff__bar">
              <span>src/api/users.js</span>
              <span>#418 · feat/user-profile</span>
            </div>

            <div className="cl-diff__body">
              {diff.map((line, i) => (
                <div
                  key={i}
                  className={
                    "cl-diff__line" +
                    (line.sign === "+" ? " cl-diff__line--add" : "") +
                    (line.sign === "-" ? " cl-diff__line--del" : "")
                  }
                >
                  <span>{line.n}</span>
                  <span>{line.sign}</span>
                  <span>{line.text}</span>
                </div>
              ))}
            </div>

            <div className="cl-diff__note">
              <span className="cl-diff__sev">correctness</span>
              <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.5 }}>
                A 404 came back as a parse error two layers up, so the retry
                loop kept asking for a user that was never there.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cl-shell" style={{ marginTop: "clamp(4rem, 9vw, 8rem)" }}>
        <p className="cl-mono">(what it reads)</p>

        <div style={{ marginTop: "1.5rem" }}>
          {areas.map((area) => (
            <div className="cl-row cl-rule" key={area.title}>
              <h3 className="cl-row__title">{area.title}</h3>

              <div>
                <p className="cl-prose" style={{ margin: 0 }}>
                  {area.body}
                </p>

                <p className="cl-mono" style={{ marginBottom: 0 }}>
                  {area.finding}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalysisFeatures;
