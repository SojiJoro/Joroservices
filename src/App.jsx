import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./component/navbar";
import CookieConsent from "./component/CookieConsent";
import { FaArrowUp } from "react-icons/fa6";

// Main Pages
const Homepage = lazy(() => import("./pages/Homepage"));
const UnderDevelopment = lazy(() => import("./pages/under-development"));
const DigitalMarketing = lazy(() => import("./pages/digitalMarketing"));
const Development = lazy(() => import("./pages/development"));
const Careers = lazy(() => import("./pages/career"));
const CreativeSolution = lazy(() => import("./pages/creativeSolutions"));
const TechnicalServices = lazy(() => import("./pages/technicalServices"));
const Services = lazy(() => import("./pages/services"));
const Contact = lazy(() => import("./pages/contact"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));

// Creative Solutions Subpages (slug-aligned)
const WebsiteDesign = lazy(() => import("./pages/creativeSolutions/WebsiteDesign"));
const GraphicDesignAndBranding = lazy(() => import("./pages/creativeSolutions/GraphicDesignAndBranding"));
const UserInterfaceAndExperience = lazy(() => import("./pages/creativeSolutions/UserInterfaceAndExperience"));

// Development Subpages
const WebDevelopment = lazy(() => import("./pages/development/WebDevelopment"));
const MobileAppDevelopment = lazy(() => import("./pages/development/MobileAppDevelopment"));
const DataManagement = lazy(() => import("./pages/development/DataManagement"));

// Digital Marketing Subpages
const SEOAndContentStrategy = lazy(() => import("./pages/digitalMarketing/SEOAndContentStrategy"));
const SocialMediaManagement = lazy(() => import("./pages/digitalMarketing/SocialMediaManagement"));
const PPCAndOnlineCampaigns = lazy(() => import("./pages/digitalMarketing/PPCAndOnlineCampaigns"));

// Technical Services Subpages
const ItSupportAndMaintenance = lazy(() => import("./pages/technicalServices/ItSupportAndMaintenance"));
const Cybersecurity = lazy(() => import("./pages/technicalServices/Cybersecurity"));
const CloudInfrastructure = lazy(() => import("./pages/technicalServices/CloudInfrastructure"));

// Location Pages
const Aldershot = lazy(() => import("./pages/locations/Aldershot"));
const Farnborough = lazy(() => import("./pages/locations/Farnborough"));
const Guildford = lazy(() => import("./pages/locations/Guildford"));
const Camberley = lazy(() => import("./pages/locations/Camberley"));
const Hampshire = lazy(() => import("./pages/locations/Hampshire"));
const Surrey = lazy(() => import("./pages/locations/Surrey"));

// New High-Value Service Pages
const ItServicesCareProviders = lazy(() => import("./pages/ItServicesCareProviders"));
const DevopsSmallBusiness = lazy(() => import("./pages/DevopsSmallBusiness"));
const FractionalCTO = lazy(() => import("./pages/FractionalCTO"));

// Service-Location Pages
const ItSupportAldershot = lazy(() => import("./pages/locations/ItSupportAldershot"));
const WebDesignAldershot = lazy(() => import("./pages/locations/WebDesignAldershot"));
const ItSupportFarnham = lazy(() => import("./pages/locations/ItSupportFarnham"));
const WebDesignFarnham = lazy(() => import("./pages/locations/WebDesignFarnham"));
const ItSupportFleet = lazy(() => import("./pages/locations/ItSupportFleet"));
const ItSupportCamberley = lazy(() => import("./pages/locations/ItSupportCamberley"));
const WebDesignGuildford = lazy(() => import("./pages/locations/WebDesignGuildford"));

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
        <Suspense
          fallback={
            <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-[#14b8a6] border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
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
            <Route path="/services/:id" element={<ServiceDetail />} />

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

            {/* New High-Value Service Pages */}
            <Route path="/it-services-care-providers" element={<ItServicesCareProviders />} />
            <Route path="/devops-small-business" element={<DevopsSmallBusiness />} />
            <Route path="/fractional-cto" element={<FractionalCTO />} />

            {/* Service-Location Pages */}
            <Route path="/it-support-aldershot" element={<ItSupportAldershot />} />
            <Route path="/web-design-aldershot" element={<WebDesignAldershot />} />
            <Route path="/it-support-farnham" element={<ItSupportFarnham />} />
            <Route path="/web-design-farnham" element={<WebDesignFarnham />} />
            <Route path="/it-support-fleet" element={<ItSupportFleet />} />
            <Route path="/it-support-camberley" element={<ItSupportCamberley />} />
            <Route path="/web-design-guildford" element={<WebDesignGuildford />} />

            {/* Fallback */}
            <Route path="*" element={<UnderDevelopment />} />
          </Routes>
        </Suspense>

        <CookieConsent />
      </div>
    </BrowserRouter>
  );
}

export default App;
