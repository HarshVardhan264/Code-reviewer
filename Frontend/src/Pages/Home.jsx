import Hero from "../components/Hero";
import WhatIsCodeLens from "../components/WhatIsCodeLens";
import AnalysisFeatures from "../components/AnalysisFeatures";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="cl-grain">
      <main>
        <Hero />

        <WhatIsCodeLens />

        <AnalysisFeatures />

        <HowItWorks />

        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
