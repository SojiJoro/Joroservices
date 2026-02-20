// src/components/faq.jsx
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'What digital marketing services do you offer?',
    answer:
      'We cover SEO, PPC, social media management, email marketing, and content strategy. We set up each campaign based on what your business is trying to achieve.',
  },
  {
    question: 'How do you measure campaign success?',
    answer:
      'We track traffic, conversion rates, engagement, and ROI using tools like Google Analytics and Search Console. You get regular reports showing exactly how things are going.',
  },
  {
    question: 'Can you work with our in‑house team?',
    answer:
      'Yes, we do that regularly. We can work alongside your internal team, provide training, or handle specific areas while your team focuses on other things.',
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
