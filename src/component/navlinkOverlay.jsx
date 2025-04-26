// src/component/navlinkOverlay.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCircleDot } from 'react-icons/fa6';

export const Serv = [
  {
    category: 'Creative Solutions',
    path: '/creative-solutions',
    offerings: [
      'Website Design',
      'Graphic Design and Branding',
      'User Interface and Experience',
    ],
  },
  {
    category: 'Development',
    path: '/development',
    offerings: ['Web Development', 'Mobile App Development', 'Data Management'],
  },
  {
    category: 'Digital Marketing',
    path: '/digital-marketing',
    offerings: [
      'SEO and Content Strategy',
      'Social Media Management',
      'PPC and Online Campaigns',
    ],
  },
  {
    category: 'Technical Services',
    path: '/technical-services',
    offerings: [
      'IT Support and Maintenance',
      'Cybersecurity',
      'Cloud Infrastructure',
    ],
  },
  {
    category: 'Careers',
    path: '/careers',
    offerings: [],
  },
];

/**
 * Generate a URL‑safe slug from an offering label
 */
function toSlug(label) {
  return label
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Factory to create each overlay component
 */
const makeOverlay = (category) => {
  const service = Serv.find((s) => s.category === category);
  if (!service || service.offerings.length === 0) return null;

  return (
    <div className="absolute left-4 top-full w-[500px] bg-black/80 shadow-lg rounded-lg text-sm text-white transition duration-300 ease-in-out">
      <div className="flex">
        {/* Category Header */}
        <div className="w-2/5">
          <Link
            to={service.path}
            className="block text-accent bg-[#072731] rounded-l-lg h-full flex items-center justify-center font-semibold text-base"
          >
            {service.category}
          </Link>
        </div>

        {/* Offerings */}
        <ul className="w-3/5 p-6 space-y-2">
          {service.offerings.map((label, idx) => (
            <li key={idx}>
              <Link
                to={`${service.path}/${toSlug(label)}`}
                className="flex items-center gap-2 hover:text-yellow-400"
              >
                <FaCircleDot className="text-yellow-600 text-xs" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Export one overlay per category
export const CreativeSolutionOverlay = () =>
  makeOverlay('Creative Solutions');
export const DevelopmentOverlay = () => makeOverlay('Development');
export const DigitalMarketingOverlay = () =>
  makeOverlay('Digital Marketing');
export const TechnicalServicesOverlay = () =>
  makeOverlay('Technical Services');
export const CareersOverlay = () => makeOverlay('Careers');
