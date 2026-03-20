import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'What services does Joro Services offer?',
    answer:
      'We offer web design, web development, mobile app development, graphic design and branding, UI/UX design, SEO, social media management, PPC advertising, IT support, cybersecurity, cloud infrastructure, and data management. All from one team based in Aldershot, Hampshire.',
  },
  {
    question: 'Where are you based and which areas do you cover?',
    answer:
      'We are based in Aldershot, Hampshire. We serve businesses across Aldershot, Farnborough, Farnham, Fleet, Camberley, Guildford, Basingstoke, Woking, and the wider Hampshire and Surrey area. We also work with clients across the UK.',
  },
  {
    question: 'How is Joro Services different from other agencies?',
    answer:
      'We combine technical infrastructure expertise with creative and marketing services. Most web agencies can\'t fix server performance issues. Most IT companies don\'t do marketing. We do both, which means your website is fast, secure, and gets found on Google.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We offer both project-based and monthly retainer pricing. Web design starts from £1,500, IT support from £30 per user per month, and SEO from £500 per month. Every quote is fixed price with no hidden fees. Contact us for a custom quote.',
  },
  {
    question: 'Do you offer free consultations?',
    answer:
      'Yes. We offer free consultations, free SEO audits, free security health checks, and free AWS cost audits. No obligation, no sales pressure. Just an honest conversation about what your business needs.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 lg:py-28" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-5 gap-4"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
