import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & About */}
          <div className="lg:col-span-4">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              Joro<span className="text-accent-light">Services</span>
            </Link>
            <p className="mt-5 text-gray-400 text-sm leading-relaxed">
              We help UK businesses with digital marketing, web development,
              and design. From SEO and PPC to custom web apps and IT support.
            </p>
            <div className="mt-5 space-y-2">
              <p className="text-gray-400 text-sm">
                <span className="text-gray-300 font-medium">Phone:</span>{' '}
                <a href="tel:+4407867374034" className="hover:text-accent-light transition-colors">07867 374034</a>
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-gray-300 font-medium">Email:</span>{' '}
                <a href="mailto:info@joroservices.org" className="hover:text-accent-light transition-colors">info@joroservices.org</a>
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {[
                { href: 'https://www.facebook.com/Joroservices', icon: FaFacebookF, label: 'Facebook' },
                { href: 'https://x.com/Joroservices', icon: FaXTwitter, label: 'X' },
                { href: 'https://www.linkedin.com/company/joro-services', icon: FaLinkedinIn, label: 'LinkedIn' },
                { href: 'https://www.instagram.com/joroservices', icon: FaInstagram, label: 'Instagram' },
                { href: 'https://wa.me/447867374034', icon: FaWhatsapp, label: 'WhatsApp' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm">
                Services
              </h3>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><Link to="/digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
                <li><Link to="/creative-solutions" className="hover:text-white transition-colors">Creative Solutions</Link></li>
                <li><Link to="/development" className="hover:text-white transition-colors">Development</Link></li>
                <li><Link to="/technical-services" className="hover:text-white transition-colors">Technical Services</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm">
                Company
              </h3>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/getintouch" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm">
                Legal
              </h3>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </nav>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-sm mb-4">
              Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest insights and news.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 text-sm transition-all"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition text-sm"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Joro Services Ltd. All rights reserved. | Company registered in England & Wales.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
