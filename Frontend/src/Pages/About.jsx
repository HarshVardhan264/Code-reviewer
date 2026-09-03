import React from "react";

import NavbarAbout from "../components/about/NavbarAbout";
import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import AboutReviewAreas from "../components/about/AboutReviewAreas";
import AboutHowItWorks from "../components/about/AboutHowItWorks";
import AboutCharacter from "../components/about/AboutCharacter";
import AboutFAQ from "../components/about/AboutFAQ";
import AboutCTA from "../components/about/AboutCTA";

const About = () => {
    return (
        <main className="min-h-screen overflow-hidden bg-[#f3eadb] text-[#211812]">

            <NavbarAbout />

            <AboutHero />

            <AboutIntro />

            <AboutReviewAreas />

            <AboutHowItWorks />

            <AboutCharacter />

            <AboutFAQ />

            <AboutCTA />

        </main>
    );
};

export default About;