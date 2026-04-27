import React from 'react';

const features = [
  {
    title: 'Custom-built websites',
    description:
      'We build websites from scratch to match your brand and your goals. Designed to work well and be easy for your visitors to use.',
  },
  {
    title: 'A track record',
    description:
      'Four years and 35+ shipped projects across healthcare, recruitment, and financial services. We have done this before.',
  },
  {
    title: 'Easy to manage yourself',
    description:
      'Your site comes with a content management system, so you can update copy and images yourself without calling a developer every time.',
  },
  {
    title: 'Support after launch',
    description:
      'We train you when the site goes live and stay on for ongoing maintenance to keep everything secure and running well.',
  },
];

const WhyJoroService = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why pick us
            </h2>
          </div>
          <div className="space-y-6">
            {features.map((item, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoroService;
