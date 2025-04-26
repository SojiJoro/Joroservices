import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Homepage from "./pages/Homepage";
import UnderDevelopment from "./pages/under-development";
import { FaArrowUp } from "react-icons/fa6";

// Main Pages
import DigitalMarketing from "./pages/digitalMarketing";
import Development from "./pages/development";
import Careers from "./pages/career";
import CreativeSolution from "./pages/creativeSolutions";
import TechnicalServices from "./pages/technicalServices";
import Services from "./pages/services";
import Contact from "./pages/contact";

// Creative Solutions Subpages (slug-aligned)
import WebsiteDesign from "./pages/creativeSolutions/WebsiteDesign";
import GraphicDesignAndBranding from "./pages/creativeSolutions/GraphicDesignAndBranding";
import UserInterfaceAndExperience from "./pages/creativeSolutions/UserInterfaceAndExperience";

// Development Subpages
import WebDevelopment from "./pages/development/WebDevelopment";
import MobileAppDevelopment from "./pages/development/MobileAppDevelopment";
import DataManagement from "./pages/development/DataManagement";

// Digital Marketing Subpages
import SEOAndContentStrategy from "./pages/digitalMarketing/SEOAndContentStrategy";
import SocialMediaManagement from "./pages/digitalMarketing/SocialMediaManagement";
import PPCAndOnlineCampaigns from "./pages/digitalMarketing/PPCAndOnlineCampaigns";

// Technical Services Subpages
import ItSupportAndMaintenance from "./pages/technicalServices/ItSupportAndMaintenance";
import Cybersecurity from "./pages/technicalServices/Cybersecurity";
import CloudInfrastructure from "./pages/technicalServices/CloudInfrastructure";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <BrowserRouter>
      <div className="bg-background-dark min-h-[100vw] w-full font-nunito">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-800 transition z-50 duration-300 animate-bounce"
          >
            <FaArrowUp className="text-xl" />
          </button>
        )}

        <Navbar />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/development" element={<Development />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/creative-solutions" element={<CreativeSolution />} />
          <Route path="/technical-services" element={<TechnicalServices />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/getintouch" element={<Contact />} />

          {/* Creative Solutions Subpages */}
          <Route path="/creative-solutions/website-design" element={<WebsiteDesign />} />
          <Route path="/creative-solutions/graphic-design-and-branding" element={<GraphicDesignAndBranding />} />
          <Route path="/creative-solutions/user-interface-and-experience" element={<UserInterfaceAndExperience />} />

          {/* Development Subpages */}
          <Route path="/development/web-development" element={<WebDevelopment />} />
          <Route path="/development/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/development/data-management" element={<DataManagement />} />

          {/* Digital Marketing Subpages */}
          <Route path="/digital-marketing/seo-and-content-strategy" element={<SEOAndContentStrategy />} />
          <Route path="/digital-marketing/social-media-management" element={<SocialMediaManagement />} />
          <Route path="/digital-marketing/ppc-and-online-campaigns" element={<PPCAndOnlineCampaigns />} />

          {/* Technical Services Subpages */}
          <Route path="/technical-services/it-support-and-maintenance" element={<ItSupportAndMaintenance />} />
          <Route path="/technical-services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/technical-services/cloud-infrastructure" element={<CloudInfrastructure />} />

          {/* Fallback */}
          <Route path="*" element={<UnderDevelopment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
