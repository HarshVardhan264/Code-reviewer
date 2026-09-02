import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import RepoInput from "../components/RepoInput";
import Loading from "../components/Loading";
import ReviewResult from "../components/ReviewResult";

function Review() {
    const [repoUrl, setRepoUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handleReview = async () => {

        if (!repoUrl.trim()) {
            setError("Please enter a GitHub repository URL");
            return;
        }

        setLoading(true);
        setError("");
        setResult(null);

        try {

            const response = await axios.post(
                "http://localhost:5000/api/review",
                {
                    repoUrl
                }
            );

            setResult(response.data);

        } catch (err) {

            console.error(err);

            setError(
                err.response?.data?.message ||
                "Something went wrong while reviewing the repository."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="min-h-screen bg-[#030704] text-white">

            <Navbar />

            <main className="pt-[76px]">

                {/* REVIEW HEADER */}

                <section className="px-5 py-20">

                    <div className="mx-auto max-w-4xl text-center">

                        <p className="mb-5 text-xs font-semibold tracking-[0.25em] text-[#7fa96c]">
                            CODE REVIEW
                        </p>

                        <h1 className="text-5xl font-medium tracking-[-0.06em] sm:text-6xl md:text-7xl">
                            Review your{" "}
                            <span className="text-[#9be86a]">
                                repository.
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
                            Enter your GitHub repository and let CodeLens
                            analyze your code for bugs, security issues,
                            performance problems and code quality.
                        </p>

                        {/* INPUT */}

                        <div className="mx-auto mt-12 max-w-3xl">

                            <RepoInput
                                repoUrl={repoUrl}
                                setRepoUrl={setRepoUrl}
                                handleReview={handleReview}
                                loading={loading}
                            />

                        </div>

                        {error && (
                            <p className="mt-4 text-sm text-red-400">
                                {error}
                            </p>
                        )}

                    </div>

                </section>

                {/* LOADING */}

                {loading && <Loading />}

                {/* RESULT */}

                {result && !loading && (
                    <ReviewResult result={result} />
                )}

            </main>

        </div>
    );
}

export default Review;