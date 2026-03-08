import React from "react";
import DigitalHeroSection from "../component/digitalMarketing/heroSection";
import Footer from "../component/Footer";
import MarketingServices from "../component/digitalMarketing/marketingServices";
import InsightsSection from "../component/insightSection";
import SEO from '../component/SEO';
import pagesSEO from '../seo/pagesSEO';
import { serviceSchema, breadcrumbSchema } from '../seo/schemas';

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-white text-text font-poppins">
      <SEO
        {...pagesSEO['/digital-marketing']}
        jsonLd={[
          serviceSchema({
            name: 'Digital Marketing',
            description: 'Results-driven digital marketing services in Aldershot, Hampshire. SEO, PPC advertising, social media management, and content strategy.',
            url: '/digital-marketing',
            category: 'Digital Marketing Services',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Digital Marketing', path: '/digital-marketing' },
          ]),
        ]}
      />
      <DigitalHeroSection />
      <MarketingServices />
      <InsightsSection />
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
