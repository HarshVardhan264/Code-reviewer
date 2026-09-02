function RepoInput({
    repoUrl,
    setRepoUrl,
    handleReview,
    loading
}) {

    return (

        <div className="mx-auto w-full max-w-3xl">

            <div className="flex flex-col sm:flex-row gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-2 shadow-2xl shadow-black/20">

                {/* GitHub */}

                <div className="hidden sm:flex items-center px-4 text-xs font-medium text-zinc-500">
                    GitHub
                </div>


                {/* Input */}

                <input
                    type="text"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleReview();
                        }
                    }}
                    disabled={loading}
                    placeholder="https://github.com/user/project"
                    className="min-w-0 flex-1 rounded-xl bg-transparent px-3 py-3.5 text-sm text-white outline-none placeholder:text-zinc-600 disabled:opacity-50"
                />


                {/* Button */}

                <button
                    onClick={handleReview}
                    disabled={loading}
                    className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
                >

                    {loading
                        ? "Reviewing..."
                        : "Review Repository"
                    }

                </button>

            </div>

        </div>
    );
}

export default RepoInput;