import React from 'react';
import { FaDotCircle } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const features = [
  {
    title: 'Custom-Built Websites',
    description:
      'We build websites from scratch based on what your business actually needs — not from templates.',
  },
  {
    title: 'Proven Track Record',
    description:
      'We have completed projects across healthcare, recruitment, and e-commerce, so we understand real business needs.',
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
    <section className="bg-white text-black py-16 px-4 lg:px-32">
      <div className="lg:grid lg:grid-cols-2 gap-8">
        {/* Headline */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
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
              <FaDotCircle className="text-accent-dark mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-black">
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
    </section>
  );
};

export default WhyJoroService;
