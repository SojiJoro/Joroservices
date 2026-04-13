// src/pages/technicalServices/index.jsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Footer from '../../component/Footer';
import TechHeroSection from '../../component/technicalServices/techHeroSection';
import TechServices    from '../../component/technicalServices/techServices';
import SEO from '../../component/SEO';
import pagesSEO from '../../seo/pagesSEO';
import { serviceSchema, breadcrumbSchema, devopsServiceSchema, itSupportServiceSchema, faqPageSchema } from '../../seo/schemas';

const techFaqData = [
  {
    question: 'What DevOps services does Joro Services offer?',
    answer: 'Joro Services provides DevOps engineering including CI/CD pipeline setup, infrastructure as code with Terraform, containerisation with Docker and Kubernetes, cloud migration, and ongoing managed DevOps support for UK businesses.',
  },
  {
    question: 'Do you work with AWS and Azure?',
    answer: 'Yes. Joro Services works with both AWS and Azure. We handle initial setup, migration from on-premise or other providers, cost optimisation, security configuration, and ongoing management.',
  },
  {
    question: 'Can a small business afford DevOps services?',
    answer: 'Yes. Joro Services specialises in making DevOps accessible to small and medium UK businesses. We offer project-based and retainer pricing that scales to the size of your organisation rather than enterprise-level contracts.',
  },
  {
    question: 'What does managed IT support from Joro Services include?',
    answer: 'Our managed IT support covers proactive infrastructure monitoring, incident response, helpdesk access, cloud management, security updates, and regular reporting. We act as your external IT team.',
  },
];

const TechnicalServices = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-white text-gray-900">
      <SEO
        {...pagesSEO['/technical-services']}
        jsonLd={[
          serviceSchema({
            name: 'Technical Services',
            description: 'Professional IT support, cybersecurity, and cloud infrastructure services in Aldershot, Hampshire.',
            url: '/technical-services',
            category: 'IT and Technical Services',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Technical Services', path: '/technical-services' },
          ]),
          devopsServiceSchema,
          itSupportServiceSchema,
          faqPageSchema(techFaqData),
        ]}
      />
      {/* Hero */}
      <TechHeroSection />

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Managed IT Services Built for Growing Businesses
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            From proactive IT support and cybersecurity to AWS cloud management, all built for small and mid-sized businesses. No junior handoffs, no hidden fees.
          </p>
        </div>
        <TechServices />
      </section>

      {/* Expertise Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Expertise</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why UK Businesses Choose Joro
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            AWS Solutions Architect certified. GDPR compliant. Professional indemnity insured. We manage production infrastructure for regulated industries including financial services and healthcare.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {techFaqData.map((faq, index) => (
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
};

export default TechnicalServices;
