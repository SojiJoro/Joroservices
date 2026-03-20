import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SEO from '../component/SEO';

const popularServices = [
  { label: 'Web Development', path: '/development/web-development' },
  { label: 'IT Support', path: '/technical-services/it-support-and-maintenance' },
  { label: 'Cybersecurity', path: '/technical-services/cybersecurity' },
  { label: 'SEO & Content', path: '/digital-marketing/seo-and-content-strategy' },
  { label: 'Website Design', path: '/creative-solutions/website-design' },
  { label: 'Cloud Infrastructure', path: '/technical-services/cloud-infrastructure' },
];

const locationLinks = [
  { label: 'Aldershot', path: '/locations/aldershot' },
  { label: 'Farnborough', path: '/locations/farnborough' },
  { label: 'Guildford', path: '/locations/guildford' },
  { label: 'Camberley', path: '/locations/camberley' },
  { label: 'Hampshire', path: '/locations/hampshire' },
  { label: 'Surrey', path: '/locations/surrey' },
];

const UnderDevelopment = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <SEO
        title="Page Not Found | Joro Services - Web Development & IT Support in Aldershot"
        description="The page you are looking for does not exist. Browse our web development, IT support, cybersecurity, and digital marketing services in Aldershot, Hampshire."
        noIndex={true}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center mb-12">
          <div className="text-7xl font-bold text-accent/20 mb-6">404</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
            This page does not exist or has moved. Try one of the links below to find what you need.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* Popular Services */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-white mb-4 text-center">Popular Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {popularServices.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="group flex items-center justify-between p-4 bg-white/[0.04] border border-white/[0.06] rounded-xl hover:bg-white/[0.08] transition-all"
              >
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{item.label}</span>
                <ArrowRight size={14} className="text-gray-500 group-hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-white mb-4 text-center">Find Us Locally</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {locationLinks.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="text-center p-3 bg-white/[0.04] border border-white/[0.06] rounded-xl hover:bg-white/[0.08] transition-all"
              >
                <span className="text-sm text-gray-400 hover:text-white transition-colors">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-3">Need help? Get in touch directly.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/getintouch"
              className="text-accent hover:text-accent-dark text-sm font-medium transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:+4407867374034"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              07867 374034
            </a>
            <a
              href="mailto:info@joroservices.org"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              info@joroservices.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
