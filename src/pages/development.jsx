import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Footer from '../component/Footer';
import ExperienceSection from '../component/development/experienceSection';
import DevHeroSection from '../component/development/heroSection';
import DevServices from '../component/development/devServices';
import WhyJoroservice from '../component/development/whyJoroservice';
import SEO from '../component/SEO';
import pagesSEO from '../seo/pagesSEO';
import { serviceSchema, breadcrumbSchema, webDevServiceSchema, faqPageSchema } from '../seo/schemas';

const devFaqData = [
  {
    question: 'What type of websites does Joro Services build?',
    answer: 'We build custom websites, web applications, e-commerce stores, landing pages, and SaaS products for UK businesses. We use modern frameworks and build sites that are fast, secure, and optimised for search engines.',
  },
  {
    question: 'How much does a website cost from Joro Services?',
    answer: 'Website pricing depends on scope and complexity. A professional business website typically starts from £1,500. Web applications and e-commerce stores are priced based on requirements. Contact us for a free scoping call and quote.',
  },
  {
    question: 'How long does a website project take?',
    answer: 'A standard business website typically takes 3 to 6 weeks from kickoff to launch. Larger web applications take longer. We provide a clear timeline at the start of every project.',
  },
  {
    question: 'Do you offer website maintenance after launch?',
    answer: 'Yes. We offer ongoing website maintenance packages covering security updates, performance monitoring, content updates, and technical support.',
  },
];

function Development() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-white text-gray-900">
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
          webDevServiceSchema,
          faqPageSchema(devFaqData),
        ]}
      />
      <DevHeroSection />
      <ExperienceSection />
      <DevServices />
      <WhyJoroservice />

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {devFaqData.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left p-5 gap-4"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown size={20} className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Development;
