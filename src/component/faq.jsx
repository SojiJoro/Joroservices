// src/components/faq.jsx
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'What digital marketing services do you offer?',
    answer:
      'We specialise in SEO, PPC, social media management, email marketing, and content strategy. Each campaign is tailored to meet your unique business goals.',
  },
  {
    question: 'How do you measure campaign success?',
    answer:
      'We track key metrics such as traffic growth, conversion rates, engagement levels, and ROI using industry‑leading analytics tools to ensure transparent reporting.',
  },
  {
    question: 'Can you work with our in‑house team?',
    answer:
      'Absolutely. We collaborate seamlessly with your internal teams, offering strategic guidance, training, and full support to amplify your existing efforts.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We offer both project‑based and retainer pricing, depending on the scope and duration of your requirements. Contact us for a custom quote.',
  },
  {
    question: 'How long until we see results?',
    answer:
      'While paid campaigns can yield quick wins, organic strategies like SEO typically take 3–6 months to fully mature. We set realistic timelines and milestones from the start.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-16 px-4 lg:px-32" id="faq">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              {openIndex === index ? (
                <FaMinus className="text-accent-dark" />
              ) : (
                <FaPlus className="text-accent-dark" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
