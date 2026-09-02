import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureBar from "../components/FeatureBar";
import WhatIsCodeLens from "../components/WhatIsCodeLens";
import AnalysisFeatures from "../components/AnalysisFeatures";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#030504] text-white">
      <Navbar />

      <main>
        <Hero />

        <WhatIsCodeLens />

        <AnalysisFeatures />

        <HowItWorks />

        <CTA />

        <Footer />
      </main>
    </div>
  );
};

export default Home;