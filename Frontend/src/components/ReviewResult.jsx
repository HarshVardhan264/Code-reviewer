function ReviewResult({ result }) {
    const report = result.report;

    return (
        <section className="mx-auto w-full max-w-6xl pb-24">

            {/* =========================================
                REVIEW SUMMARY HEADER
            ========================================= */}

            <div className="mb-10 border-b border-[#eeeae1]/10 pb-8">

                <div className="flex items-end justify-between gap-6">

                    <div>

                        <p className="mb-4 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-[#eeeae1]/30">
                            <span className="h-px w-7 bg-[#eeeae1]/20" />
                            Review complete
                        </p>

                        <h3 className="text-3xl font-medium tracking-[-0.035em] text-[#eeeae1] sm:text-4xl">
                            Your code,
                            <span className="text-[#eeeae1]/30">
                                {" "}reviewed.
                            </span>
                        </h3>

                        <p className="mt-3 text-sm text-[#eeeae1]/25">
                            {result.filesReviewed} files analyzed ·{" "}
                            {result.chunksReviewed} chunks analyzed
                        </p>

                    </div>

                    {/* SCORE MINI INDICATOR */}

                    <div className="hidden text-right sm:block">

                        <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#eeeae1]/25">
                            Overall health
                        </p>

                        <p className="mt-1 text-2xl font-medium text-[#eeeae1]/80">
                            {report.score}
                            <span className="ml-1 text-sm text-[#eeeae1]/25">
                                /100
                            </span>
                        </p>

                    </div>

                </div>

            </div>


            {/* =========================================
                SCORE CARDS
            ========================================= */}

            <div className="grid gap-3 md:grid-cols-5">

                {/* CODE HEALTH */}

                <div
                    className="
                        group
                        relative
                        overflow-hidden
                        rounded-xl
                        border
                        border-[#eeeae1]/10
                        bg-[#111110]/60
                        p-6
                        transition-all
                        duration-300
                        hover:border-[#eeeae1]/20
                    "
                >

                    <div className="flex items-start justify-between">

                        <p className="text-[9px] uppercase tracking-[0.18em] text-[#eeeae1]/30">
                            Code Health
                        </p>

                        <span className="text-[10px] text-[#eeeae1]/20">
                            01
                        </span>

                    </div>

                    <p className="mt-7 text-5xl font-medium tracking-[-0.05em] text-[#eeeae1]/90">
                        {report.score}
                    </p>

                    <p className="mt-1 text-xs text-[#eeeae1]/20">
                        / 100
                    </p>

                    {/* subtle progress */}

                    <div className="mt-6 h-px w-full bg-[#eeeae1]/10">

                        <div
                            className="h-px bg-[#eeeae1]/45"
                            style={{
                                width: `${Math.min(
                                    Math.max(report.score, 0),
                                    100
                                )}%`,
                            }}
                        />

                    </div>

                </div>


                <SeverityCard
                    title="Critical"
                    count={report.issueCounts.critical}
                    number="02"
                />

                <SeverityCard
                    title="High"
                    count={report.issueCounts.high}
                    number="03"
                />

                <SeverityCard
                    title="Medium"
                    count={report.issueCounts.medium}
                    number="04"
                />

                <SeverityCard
                    title="Low"
                    count={report.issueCounts.low}
                    number="05"
                />

            </div>


            {/* =========================================
                SUMMARY
            ========================================= */}

            <div
                className="
                    mt-5
                    rounded-xl
                    border
                    border-[#eeeae1]/10
                    bg-[#111110]/40
                    p-6
                    sm:p-7
                "
            >

                <div className="mb-5 flex items-center justify-between">

                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#eeeae1]/30">
                        Executive summary
                    </p>

                    <span className="font-mono text-[8px] tracking-[0.15em] text-[#eeeae1]/15">
                        CODELENS
                    </span>

                </div>

                <p className="max-w-4xl text-sm leading-7 text-[#eeeae1]/45">
                    {report.summary}
                </p>

            </div>


            {/* =========================================
                ISSUES
            ========================================= */}

            <div className="mt-16">

                <div className="mb-7 flex items-end justify-between">

                    <div>

                        <p className="mb-3 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#eeeae1]/25">
                            <span className="h-px w-7 bg-[#eeeae1]/15" />
                            Findings
                        </p>

                        <h3 className="text-3xl font-medium tracking-[-0.04em]">
                            Issues found
                        </h3>

                        <p className="mt-2 text-sm text-[#eeeae1]/25">
                            Problems detected by the AI review agents.
                        </p>

                    </div>

                    <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-[#eeeae1]/20 sm:block">
                        {report.issues.length} findings
                    </span>

                </div>


                <div className="space-y-3">

                    {report.issues.length === 0 ? (

                        <div
                            className="
                                rounded-xl
                                border
                                border-[#eeeae1]/10
                                bg-[#111110]/40
                                p-10
                                text-center
                            "
                        >

                            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#eeeae1]/15">

                                <span className="text-lg text-[#eeeae1]/60">
                                    ✓
                                </span>

                            </div>

                            <p className="text-lg font-medium text-[#eeeae1]/80">
                                No issues found
                            </p>

                            <p className="mt-2 text-sm text-[#eeeae1]/25">
                                Your selected code looks good.
                            </p>

                        </div>

                    ) : (

                        report.issues.map((issue, index) => (
                            <IssueCard
                                key={index}
                                issue={issue}
                                index={index}
                            />
                        ))

                    )}

                </div>

            </div>


            {/* =========================================
                RECOMMENDATIONS
            ========================================= */}

            <div className="mt-16">

                <div className="mb-7">

                    <p className="mb-3 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#eeeae1]/25">
                        <span className="h-px w-7 bg-[#eeeae1]/15" />
                        Next steps
                    </p>

                    <h3 className="text-3xl font-medium tracking-[-0.04em]">
                        Recommendations
                    </h3>

                    <p className="mt-2 text-sm text-[#eeeae1]/25">
                        Practical improvements suggested by CodeLens.
                    </p>

                </div>


                <div className="space-y-2">

                    {report.recommendations.map(
                        (recommendation, index) => (

                            <div
                                key={index}
                                className="
                                    group
                                    flex
                                    items-start
                                    gap-5
                                    rounded-xl
                                    border
                                    border-[#eeeae1]/10
                                    bg-[#111110]/35
                                    p-5
                                    transition-all
                                    duration-300
                                    hover:border-[#eeeae1]/20
                                "
                            >

                                <span
                                    className="
                                        shrink-0
                                        font-mono
                                        text-[9px]
                                        tracking-[0.15em]
                                        text-[#eeeae1]/20
                                    "
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <p className="text-sm leading-6 text-[#eeeae1]/40 transition-colors duration-300 group-hover:text-[#eeeae1]/60">
                                    {recommendation}
                                </p>

                            </div>

                        )
                    )}

                </div>

            </div>

        </section>
    );
}


/* =====================================================
   SEVERITY CARD
===================================================== */

function SeverityCard({ title, count, number }) {

    return (
        <div
            className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-[#eeeae1]/10
                bg-[#111110]/45
                p-6
                transition-all
                duration-300
                hover:border-[#eeeae1]/20
            "
        >

            <div className="flex items-start justify-between">

                <p className="text-[9px] uppercase tracking-[0.18em] text-[#eeeae1]/25">
                    {title}
                </p>

                <span className="text-[9px] text-[#eeeae1]/15">
                    {number}
                </span>

            </div>

            <p className="mt-7 text-3xl font-medium tracking-[-0.04em] text-[#eeeae1]/80">
                {count}
            </p>

            <div className="mt-7 h-px w-full bg-[#eeeae1]/[0.06]" />

        </div>
    );
}


/* =====================================================
   ISSUE CARD
===================================================== */

function IssueCard({ issue, index }) {

    const severityStyle = {
        Critical:
            "border-red-400/20 bg-red-400/[0.04] text-red-300/70",

        High:
            "border-orange-400/20 bg-orange-400/[0.04] text-orange-300/70",

        Medium:
            "border-yellow-400/20 bg-yellow-400/[0.04] text-yellow-300/70",

        Low:
            "border-[#eeeae1]/10 bg-[#eeeae1]/[0.02] text-[#eeeae1]/35",
    };


    return (
        <div
            className="
                group
                rounded-xl
                border
                border-[#eeeae1]/10
                bg-[#111110]/35
                p-6
                transition-all
                duration-300
                hover:border-[#eeeae1]/20
                sm:p-7
            "
        >

            {/* TOP */}

            <div className="flex flex-wrap items-center justify-between gap-4">

                <div className="flex flex-wrap items-center gap-2">

                    <span
                        className={`
                            rounded-full
                            border
                            px-3
                            py-1
                            text-[9px]
                            uppercase
                            tracking-[0.12em]
                            ${severityStyle[issue.severity] ||
                            severityStyle.Low}
                        `}
                    >
                        {issue.severity}
                    </span>


                    <span
                        className="
                            rounded-full
                            border
                            border-[#eeeae1]/10
                            px-3
                            py-1
                            text-[9px]
                            uppercase
                            tracking-[0.12em]
                            text-[#eeeae1]/25
                        "
                    >
                        {issue.category}
                    </span>

                </div>


                <span
                    className="
                        font-mono
                        text-[9px]
                        tracking-[0.15em]
                        text-[#eeeae1]/15
                    "
                >
                    {String(index + 1).padStart(2, "0")}
                </span>

            </div>


            {/* TITLE */}

            <h4
                className="
                    mt-5
                    text-xl
                    font-medium
                    tracking-[-0.025em]
                    text-[#eeeae1]/80
                "
            >
                {issue.title}
            </h4>


            {/* FILE */}

            <div
                className="
                    mt-3
                    flex
                    flex-wrap
                    items-center
                    gap-2
                    font-mono
                    text-[10px]
                    text-[#eeeae1]/25
                "
            >

                <span>
                    {issue.file}
                </span>

                <span className="text-[#eeeae1]/10">
                    /
                </span>

                <span>
                    Line {issue.line}
                </span>

            </div>


            {/* DESCRIPTION */}

            <p
                className="
                    mt-6
                    max-w-4xl
                    text-sm
                    leading-7
                    text-[#eeeae1]/40
                "
            >
                {issue.description}
            </p>


            {/* FIX */}

            <div
                className="
                    mt-6
                    border-l
                    border-[#eeeae1]/15
                    bg-[#eeeae1]/[0.025]
                    px-5
                    py-4
                "
            >

                <p
                    className="
                        mb-2
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-[#eeeae1]/25
                    "
                >
                    Suggested fix
                </p>

                <p
                    className="
                        text-sm
                        leading-6
                        text-[#eeeae1]/45
                    "
                >
                    {issue.suggestedFix}
                </p>

            </div>

        </div>
    );
}


export default ReviewResult;