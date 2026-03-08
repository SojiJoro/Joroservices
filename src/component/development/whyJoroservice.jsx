import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const features = [
  {
    title: 'Bespoke Web Solutions',
    description:
      'We build custom websites tailored to your brand and business objectives, ensuring a seamless user experience and robust performance.',
  },
  {
    title: 'Proven Track Record',
    description:
      'With over a decade of experience and hundreds of successful projects, our team delivers solutions you can trust.',
  },
  {
    title: 'Easy Management',
    description:
      'Our sites come with intuitive content management systems, giving you full control over updates without technical overhead.',
  },
  {
    title: 'Dedicated Support',
    description:
      'From initial training to ongoing maintenance, our support team ensures your site stays secure, updated, and optimised.',
  },
];

const WhyJoroService = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-8">
          {/* Headline */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Why Us</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Joro Services as Your{' '}
              <Typewriter
                words={[
                  'web development partner?',
                  'software solutions provider?'
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>

          {/* Feature List */}
          <div className="space-y-6">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-accent-dark mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoroService;
