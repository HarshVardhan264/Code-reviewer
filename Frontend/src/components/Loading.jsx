function Loading() {

    const agents = [
        "Repository Analyzer",
        "Bug Detection Agent",
        "Security Agent",
        "Quality Agent",
        "Final Review Agent"
    ];


    return (

        <section className="mx-auto max-w-2xl px-5 py-24 text-center">

            {/* Spinner */}

            <div className="mx-auto mb-7 h-11 w-11 animate-spin rounded-full border-2 border-zinc-800 border-t-white" />


            <h2 className="text-2xl font-semibold">
                AI agents are reviewing your repository
            </h2>


            <p className="mt-3 text-sm leading-6 text-zinc-600">
                This may take a little while depending on
                the size of your repository.
            </p>


            {/* Agents */}

            <div className="mt-10 space-y-2 text-left">

                {agents.map((agent, index) => (

                    <div
                        key={agent}
                        className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4"
                    >

                        <span
                            className={
                                index === 0
                                    ? "text-zinc-300"
                                    : "h-2 w-2 rounded-full bg-zinc-600"
                            }
                        >
                            {index === 0 ? "✓" : ""}
                        </span>

                        <span className="text-sm text-zinc-500">
                            {agent}
                        </span>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Loading;