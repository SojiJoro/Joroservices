/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Footer from "../component/Footer";
import ExperienceSection from "../component/development/experienceSection";
import DevHeroSection from "../component/development/heroSection";
import DevServices from "../component/development/devServices";
import WhyJoroservice from "../component/development/whyJoroservice";
import SEO from '../component/SEO';
import pagesSEO from '../seo/pagesSEO';
import { serviceSchema, breadcrumbSchema } from '../seo/schemas';

function Development() {
  return (
    <div className="min-h-screen bg-black text-text font-poppins">
      <SEO
        {...pagesSEO['/development']}
        jsonLd={[
          serviceSchema({
            name: 'Software Development',
            description: 'Expert web development, mobile app development, and data management services in Aldershot, Hampshire.',
            url: '/development',
            category: 'Software Development Services',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Development', path: '/development' },
          ]),
        ]}
      />
      <DevHeroSection />
      <ExperienceSection />
      <DevServices />
      <WhyJoroservice />
      <Footer />
    </div>
  );
}

export default Development;
