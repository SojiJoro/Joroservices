import React from "react";
import DigitalHeroSection from "../component/digitalMarketing/heroSection";
import Footer from "../component/Footer";
import MarketingServices from "../component/digitalMarketing/marketingServices";
import InsightsSection from "../component/insightSection";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-white text-text font-poppins">
      <DigitalHeroSection />
      <MarketingServices />
      <InsightsSection />
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
