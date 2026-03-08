import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'What digital marketing services do you offer?',
    answer:
      'We cover SEO, PPC advertising, social media management, email marketing, and content strategy. We build each campaign around what your business actually needs.',
  },
  {
    question: 'How do you measure campaign success?',
    answer:
      'We look at traffic growth, conversion rates, engagement, and return on investment. You get regular reports so you can see exactly what is working.',
  },
  {
    question: 'Can you work with our in-house team?',
    answer:
      'Yes, we do this all the time. We can work alongside your team, help with strategy, offer training, and fill in the gaps where you need extra support.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We offer both project-based and retainer pricing, depending on the scope and duration of your requirements. Contact us for a custom quote.',
  },
  {
    question: 'How long until we see results?',
    answer:
      'Paid campaigns like Google Ads can bring results quickly. SEO takes longer, usually 3 to 6 months before you see real traction. We will be upfront about timelines from the start.',
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
