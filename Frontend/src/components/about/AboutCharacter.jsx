import React from "react";
import { MacbookScroll } from "./MacbookScroll";

import codeLensDashboard from "../../assets/codelens-dashboard.png";

const AboutCharacter = () => {
    return (
        <section className="relative bg-[#121213] text-white">

            <div className="mx-auto max-w-7xl px-6 pt-30">

                <div className="max-w-5xl">

                    <p className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/40">

                        <span className="h-px w-8 bg-white/25" />

                        See it in action

                    </p>

                    <h2 className="text-5xl font-medium tracking-[-0.055em] sm:text-6xl lg:text-7xl">

                        Your repository.

                        <span className="text-white/35">
                            Understood.
                        </span>

                    </h2>

                    <p className="mt-7 max-w-xl text-base leading-8 text-white/45 sm:text-lg">

                        CodeLens turns your codebase into an actionable
                        engineering report using specialized AI agents.

                    </p>

                </div>

            </div>


            <MacbookScroll
                src={codeLensDashboard}
                showGradient={false}
                title=""
            />

        </section>
    );
};

export default AboutCharacter;