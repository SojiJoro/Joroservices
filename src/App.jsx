import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./component/navbar";
import Homepage from "./pages/Homepage";
import UnderDevelopment from "./pages/under-development";
import CookieConsent from "./component/CookieConsent";
import { FaArrowUp } from "react-icons/fa6";

// Main Pages
import DigitalMarketing from "./pages/digitalMarketing";
import Development from "./pages/development";
import Careers from "./pages/career";
import CreativeSolution from "./pages/creativeSolutions";
import TechnicalServices from "./pages/technicalServices";
import Services from "./pages/services";
import Contact from "./pages/contact";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

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

// Location Pages
import Aldershot from "./pages/locations/Aldershot";
import Farnborough from "./pages/locations/Farnborough";
import Guildford from "./pages/locations/Guildford";
import Camberley from "./pages/locations/Camberley";
import Hampshire from "./pages/locations/Hampshire";
import Surrey from "./pages/locations/Surrey";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

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
      <ScrollToTop />
      <div className="bg-background min-h-screen w-full font-inter antialiased">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-accent text-white rounded-xl shadow-lg shadow-accent/20 hover:bg-accent-dark transition-all duration-300 z-40"
          >
            <FaArrowUp className="text-sm" />
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
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

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

          {/* Location Pages */}
          <Route path="/locations/aldershot" element={<Aldershot />} />
          <Route path="/locations/farnborough" element={<Farnborough />} />
          <Route path="/locations/guildford" element={<Guildford />} />
          <Route path="/locations/camberley" element={<Camberley />} />
          <Route path="/locations/hampshire" element={<Hampshire />} />
          <Route path="/locations/surrey" element={<Surrey />} />

          {/* Fallback */}
          <Route path="*" element={<UnderDevelopment />} />
        </Routes>

        <CookieConsent />
      </div>
    </BrowserRouter>
  );
}

export default App;
