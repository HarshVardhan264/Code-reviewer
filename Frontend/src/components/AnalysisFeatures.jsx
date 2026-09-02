import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import "./ScrollStack.css";

const features = [
  {
    number: "01",
    label: "BUG DETECTION",
    title: "Catch problems",
    highlight: "before production.",
    description:
      "CodeLens examines your code for logical errors, edge cases and patterns that can lead to unexpected behavior.",
    code: `if (!user) {
  return;
}

// possible null access`,
    result: "Potential null access",
  },
  {
    number: "02",
    label: "SECURITY",
    title: "Find vulnerabilities",
    highlight: "before attackers do.",
    description:
      "Identify insecure patterns, exposed secrets, unsafe inputs and other potential security risks hiding in your repository.",
    code: `const query =
  "SELECT * FROM users WHERE id="
  + userId;

// unsafe input`,
    result: "Unsafe input detected",
  },
  {
    number: "03",
    label: "CODE QUALITY",
    title: "Make your code",
    highlight: "easier to maintain.",
    description:
      "Get practical suggestions for improving readability, structure, duplication, complexity and overall maintainability.",
    code: `function process(data) {
  // too much responsibility
  // complex logic
  // hard to test
}`,
    result: "High complexity",
  },
  {
    number: "04",
    label: "PERFORMANCE",
    title: "Spot inefficient",
    highlight: "code paths.",
    description:
      "Surface unnecessary operations and inefficient patterns that could affect the performance of your application.",
    code: `users.forEach(user => {
  users.find(
    item => item.id === user.id
  );
});

// O(n²)`,
    result: "Inefficient operation",
  },
];

const AnalysisFeatures = () => {
  return (
    <section
      id="features"
      className="
        relative
        overflow-hidden
        bg-[#020504]
        py-32
        sm:py-40
        lg:py-48
      "
    >
      {/* subtle atmosphere */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[15%]
          h-[700px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#315526]/[0.035]
          blur-[180px]
        "
      />

      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="relative mx-auto max-w-[1500px] px-8 sm:px-12 lg:px-16">
        <div className="max-w-[850px]">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-9 bg-[#9be86a]/60" />

            <span
              className="
                font-mono
                text-[9px]
                tracking-[0.3em]
                text-[#9be86a]/65
              "
            >
              WHAT CODELENS LOOKS FOR
            </span>
          </div>

          <h2
            className="
              text-[clamp(3.5rem,6.5vw,7rem)]
              font-medium
              leading-[0.92]
              tracking-[-0.065em]
              text-white
            "
          >
            More than just
            <br />

            <span className="text-white/25">
              finding bugs.
            </span>
          </h2>

          <p
            className="
              mt-10
              max-w-[650px]
              text-[15px]
              leading-7
              text-white/45
              sm:text-[16px]
            "
          >
            CodeLens looks at your repository from multiple perspectives —
            finding the problems that are easy to miss and explaining what
            you should do about them.
          </p>
        </div>
      </div>

      {/* ==========================================
          SCROLL STACK
      ========================================== */}

      <div className="relative mt-24 sm:mt-32">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={100}
          itemScale={0.035}
          itemStackDistance={38}
          stackPosition="18%"
          scaleEndPosition="8%"
          baseScale={0.88}
          rotationAmount={0}
          blurAmount={0}
        >
          {features.map((feature) => (
            <ScrollStackItem key={feature.number}>
              <div className="feature-stack-card">
                {/* --------------------------------
                    CARD HEADER
                --------------------------------- */}

                <div className="feature-stack-top">
                  <div className="feature-stack-number">
                    {feature.number}
                  </div>

                  <div className="feature-stack-label">
                    {feature.label}
                  </div>

                  <div className="feature-stack-status">
                    <span />
                    ANALYSIS
                  </div>
                </div>

                {/* --------------------------------
                    CARD BODY
                --------------------------------- */}

                <div className="feature-stack-content">
                  {/* text */}

                  <div className="feature-stack-copy">
                    <h3>
                      {feature.title}
                      <br />

                      <span>
                        {feature.highlight}
                      </span>
                    </h3>

                    <p>
                      {feature.description}
                    </p>
                  </div>

                  {/* code */}

                  <div className="feature-stack-code">
                    <div className="code-window-top">
                      <div className="code-dots">
                        <span />
                        <span />
                        <span />
                      </div>

                      <span>
                        CODELENS / {feature.number}
                      </span>
                    </div>

                    <pre>
                      <code>{feature.code}</code>
                    </pre>

                    <div className="code-insight">
                      <span className="insight-dot" />

                      <span>AI INSIGHT</span>

                      <strong>{feature.result}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default AnalysisFeatures;