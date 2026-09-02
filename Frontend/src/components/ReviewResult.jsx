function ReviewResult({ result }) {

    const report = result.report;


    return (

        <section className="mx-auto w-[90%] max-w-6xl pb-24">

            {/* HEADER */}

            <div className="mb-10">

                <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-zinc-500">
                    REVIEW COMPLETE
                </p>

                <h2 className="text-4xl font-semibold tracking-tight">
                    Repository Analysis
                </h2>

                <p className="mt-3 text-sm text-zinc-600">
                    {result.filesReviewed} files analyzed ·{" "}
                    {result.chunksReviewed} chunks analyzed
                </p>

            </div>


            {/* SCORE */}

            <div className="grid gap-4 md:grid-cols-5">

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:col-span-1">

                    <p className="text-xs uppercase tracking-wider text-zinc-600">
                        Code Health
                    </p>

                    <p className="mt-4 text-5xl font-semibold">
                        {report.score}
                    </p>

                    <p className="mt-1 text-sm text-zinc-600">
                        / 100
                    </p>

                </div>


                <SeverityCard
                    title="Critical"
                    count={report.issueCounts.critical}
                />

                <SeverityCard
                    title="High"
                    count={report.issueCounts.high}
                />

                <SeverityCard
                    title="Medium"
                    count={report.issueCounts.medium}
                />

                <SeverityCard
                    title="Low"
                    count={report.issueCounts.low}
                />

            </div>


            {/* SUMMARY */}

            <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">

                <p className="mb-3 text-xs uppercase tracking-wider text-zinc-600">
                    Summary
                </p>

                <p className="leading-7 text-zinc-400">
                    {report.summary}
                </p>

            </div>


            {/* ISSUES */}

            <div className="mt-12">

                <div className="mb-5">

                    <h3 className="text-2xl font-semibold">
                        Issues Found
                    </h3>

                    <p className="mt-1 text-sm text-zinc-600">
                        Problems detected by the AI agents
                    </p>

                </div>


                <div className="space-y-4">

                    {report.issues.length === 0 ? (

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 text-center">

                            <p className="text-lg font-medium">
                                No issues found
                            </p>

                            <p className="mt-2 text-sm text-zinc-600">
                                Your selected code looks good.
                            </p>

                        </div>

                    ) : (

                        report.issues.map((issue, index) => (

                            <IssueCard
                                key={index}
                                issue={issue}
                            />

                        ))

                    )}

                </div>

            </div>


            {/* RECOMMENDATIONS */}

            <div className="mt-12">

                <h3 className="text-2xl font-semibold">
                    Recommendations
                </h3>


                <div className="mt-5 space-y-2">

                    {report.recommendations.map(
                        (recommendation, index) => (

                            <div
                                key={index}
                                className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-sm text-zinc-400"
                            >

                                <span className="mr-3 text-zinc-600">
                                    0{index + 1}
                                </span>

                                {recommendation}

                            </div>

                        )
                    )}

                </div>

            </div>

        </section>
    );
}


/* ----------------------------- */
/* Severity Card */
/* ----------------------------- */

function SeverityCard({ title, count }) {

    return (

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">

            <p className="text-xs uppercase tracking-wider text-zinc-600">
                {title}
            </p>

            <p className="mt-4 text-3xl font-semibold">
                {count}
            </p>

        </div>
    );
}


/* ----------------------------- */
/* Issue Card */
/* ----------------------------- */

function IssueCard({ issue }) {

    const severityStyle = {

        Critical: "border-red-900/60 bg-red-950/20 text-red-400",

        High: "border-orange-900/60 bg-orange-950/20 text-orange-400",

        Medium: "border-yellow-900/60 bg-yellow-950/20 text-yellow-400",

        Low: "border-zinc-700 bg-zinc-900 text-zinc-400"

    };


    return (

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">

            {/* Top */}

            <div className="flex flex-wrap items-center gap-3">

                <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        severityStyle[issue.severity] ||
                        severityStyle.Low
                    }`}
                >
                    {issue.severity}
                </span>


                <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-500">
                    {issue.category}
                </span>

            </div>


            {/* Title */}

            <h4 className="mt-4 text-lg font-semibold">
                {issue.title}
            </h4>


            {/* File */}

            <div className="mt-2 font-mono text-xs text-zinc-600">

                {issue.file}

                {" : "}

                Line {issue.line}

            </div>


            {/* Description */}

            <p className="mt-5 leading-7 text-sm text-zinc-400">
                {issue.description}
            </p>


            {/* Fix */}

            <div className="mt-5 rounded-xl border border-zinc-800 bg-black/20 p-4">

                <p className="mb-2 text-xs uppercase tracking-wider text-zinc-600">
                    Suggested Fix
                </p>

                <p className="text-sm leading-6 text-zinc-400">
                    {issue.suggestedFix}
                </p>

            </div>

        </div>
    );
}


export default ReviewResult;