import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const features = [
  {
    title: 'Custom-Built Websites',
    description:
      'We build websites from scratch to match your brand and your goals. Everything is designed to work well and be easy for your visitors to use.',
  },
  {
    title: 'We Have the Runs on the Board',
    description:
      'Over ten years and hundreds of projects. We have done this before, and we know how to get it right.',
  },
  {
    title: 'Easy to Manage Yourself',
    description:
      'Your site comes with a simple content management system, so you can update things yourself without needing a developer every time.',
  },
  {
    title: 'Support When You Need It',
    description:
      'We train you up when the site launches, and we are here for ongoing maintenance to keep everything secure and running well.',
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
