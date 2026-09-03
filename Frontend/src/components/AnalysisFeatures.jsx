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
  {
    number: "04",
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
];

const AnalysisFeatures = () => {
  return (
    <section
      id="features"
      className="
        relative
        overflow-hidden
        bg-[#0b0907]
        px-[6vw]
        py-28
        text-[#f4ead8]
        sm:py-32
        lg:py-40
      "
    >
      {/* ==========================================
          ATMOSPHERE
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[18%]
          h-[650px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#c8872d]/[0.045]
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[15%]
          top-[40%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#8c5b20]/[0.025]
          blur-[160px]
        "
      />

      <div className="relative mx-auto max-w-[1500px]">

        {/* ==========================================
            SECTION INTRO
        ========================================== */}

        <div className="mb-20 sm:mb-24 lg:mb-28">

          {/* small label */}

          <div className="mb-10 flex items-center gap-4">

            <span
              className="
                h-px
                w-12
                bg-[#d99532]
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.32em]
                text-[#d99532]
              "
            >
              What CodeLens looks for
            </span>

          </div>

          {/* heading */}

          <h2
            className="
              max-w-[1050px]
              text-[clamp(4rem,7.5vw,8.5rem)]
              font-medium
              leading-[0.88]
              tracking-[-0.065em]
            "
          >
            More than just
            <br />

            <span className="text-[#f4ead8]/25">
              finding bugs.
            </span>
          </h2>

          {/* description */}

          <p
            className="
              mt-10
              max-w-[620px]
              text-[15px]
              font-normal
              leading-[1.75]
              text-[#f4ead8]/45
              sm:text-[16px]
            "
          >
            CodeLens looks at your repository from multiple perspectives —
            finding the problems that are easy to miss and explaining what
            you should do about them.
          </p>

        </div>

        {/* ==========================================
            FEATURE STACK
        ========================================== */}

        <div className="relative mt-10">

          <ScrollStack
            useWindowScroll={true}
            itemDistance={90}
            itemScale={0.025}
            itemStackDistance={32}
            stackPosition="16%"
            scaleEndPosition="8%"
            baseScale={0.94}
            rotationAmount={0}
            blurAmount={0}
          >

            {features.map((feature) => (

              <ScrollStackItem key={feature.number}>

                <div
                  className="
                    feature-stack-card
                    overflow-hidden
                    rounded-[14px]
                    border
                    border-[#d99532]/20
                    bg-[#110e0a]
                    shadow-[0_25px_80px_rgba(0,0,0,0.28)]
                  "
                >

                  {/* ==================================
                      CARD TOP
                  ================================== */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-[#f4ead8]/[0.08]
                      px-7
                      py-5
                      sm:px-9
                    "
                  >

                    <div className="flex items-center gap-5">

                      <span
                        className="
                          font-mono
                          text-[11px]
                          tracking-[0.18em]
                          text-[#d99532]
                        "
                      >
                        {feature.number}
                      </span>

                      <span
                        className="
                          text-[9px]
                          font-medium
                          uppercase
                          tracking-[0.28em]
                          text-[#f4ead8]/40
                        "
                      >
                        {feature.label}
                      </span>

                    </div>

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-[9px]
                        uppercase
                        tracking-[0.22em]
                        text-[#d99532]/70
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#d99532]
                          shadow-[0_0_10px_rgba(217,149,50,0.7)]
                        "
                      />

                      Analysis
                    </div>

                  </div>

                  {/* ==================================
                      CARD CONTENT
                  ================================== */}

                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-12
                      px-7
                      py-12
                      sm:px-9
                      sm:py-14
                      lg:grid-cols-[0.9fr_1.1fr]
                      lg:gap-20
                      lg:px-14
                      lg:py-16
                    "
                  >

                    {/* TEXT */}

                    <div
                      className="
                        flex
                        flex-col
                        justify-center
                      "
                    >

                      <h3
                        className="
                          max-w-[650px]
                          text-[clamp(3rem,5vw,5.8rem)]
                          font-medium
                          leading-[0.91]
                          tracking-[-0.055em]
                          text-[#f4ead8]
                        "
                      >
                        {feature.title}

                        <br />

                        <span className="text-[#d99532]">
                          {feature.highlight}
                        </span>
                      </h3>

                      <p
                        className="
                          mt-8
                          max-w-[480px]
                          text-[15px]
                          leading-[1.8]
                          text-[#f4ead8]/45
                          sm:text-[16px]
                        "
                      >
                        {feature.description}
                      </p>

                    </div>

                    {/* CODE WINDOW */}

                    <div
                      className="
                        overflow-hidden
                        rounded-[10px]
                        border
                        border-[#f4ead8]/[0.09]
                        bg-[#090806]
                      "
                    >

                      {/* window header */}

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          border-b
                          border-[#f4ead8]/[0.07]
                          px-5
                          py-4
                        "
                      >

                        <div className="flex items-center gap-2">

                          <span
                            className="
                              h-2
                              w-2
                              rounded-full
                              bg-[#d99532]/60
                            "
                          />

                          <span
                            className="
                              h-2
                              w-2
                              rounded-full
                              bg-[#f4ead8]/20
                            "
                          />

                          <span
                            className="
                              h-2
                              w-2
                              rounded-full
                              bg-[#f4ead8]/20
                            "
                          />

                        </div>

                        <span
                          className="
                            font-mono
                            text-[9px]
                            tracking-[0.18em]
                            text-[#f4ead8]/30
                          "
                        >
                          CODELENS / {feature.number}
                        </span>

                      </div>

                      {/* code */}

                      <pre
                        className="
                          min-h-[230px]
                          overflow-x-auto
                          px-6
                          py-7
                          font-mono
                          text-[12px]
                          leading-[1.9]
                          text-[#f4ead8]/65
                          sm:text-[13px]
                        "
                      >
                        <code>{feature.code}</code>
                      </pre>

                      {/* AI insight */}

                      <div
                        className="
                          flex
                          flex-wrap
                          items-center
                          gap-x-4
                          gap-y-2
                          border-t
                          border-[#f4ead8]/[0.07]
                          px-6
                          py-5
                        "
                      >

                        <div className="flex items-center gap-2">

                          <span
                            className="
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-[#d99532]
                              shadow-[0_0_12px_rgba(217,149,50,0.7)]
                            "
                          />

                          <span
                            className="
                              text-[9px]
                              uppercase
                              tracking-[0.2em]
                              text-[#d99532]
                            "
                          >
                            AI Insight
                          </span>

                        </div>

                        <span
                          className="
                            text-[12px]
                            text-[#f4ead8]/55
                          "
                        >
                          {feature.result}
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </ScrollStackItem>

            ))}

          </ScrollStack>

        </div>

      </div>
    </section>
  );
};

export default AnalysisFeatures;