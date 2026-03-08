import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

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

function toSlug(label) {
  return label
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const makeOverlay = (category) => {
  const service = Serv.find((s) => s.category === category);
  if (!service || service.offerings.length === 0) return null;

  return (
    <div className="w-[280px] bg-primary border border-white/10 shadow-2xl shadow-black/30 rounded-xl overflow-hidden">
      <div className="p-2">
        <Link
          to={service.path}
          className="block px-4 py-3 text-accent-light font-semibold text-sm border-b border-white/10 mb-1"
        >
          {service.category}
        </Link>
        <ul className="space-y-0.5">
          {service.offerings.map((label, idx) => (
            <li key={idx}>
              <Link
                to={`${service.path}/${toSlug(label)}`}
                className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {label}
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const CreativeSolutionOverlay = () =>
  makeOverlay('Creative Solutions');
export const DevelopmentOverlay = () => makeOverlay('Development');
export const DigitalMarketingOverlay = () =>
  makeOverlay('Digital Marketing');
export const TechnicalServicesOverlay = () =>
  makeOverlay('Technical Services');
export const CareersOverlay = () => makeOverlay('Careers');
