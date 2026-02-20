// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {/* Brand & About */}
        <div className="lg:col-span-3">
          <Link to="/" className="text-2xl font-bold">
            Joro Services
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Empowering businesses and individuals with tailored digital marketing,
            development, and design solutions that drive growth and engagement.
          </p>
          <div className="mt-4">
            <p className="text-gray-400 text-sm">
              <strong className="text-white">Phone:</strong>{' '}
              <a href="tel:+4407345019824" className="hover:text-accent">07345 019824</a>
            </p>
            <p className="text-gray-400 text-sm mt-1">
              <strong className="text-white">Email:</strong>{' '}
              <a href="mailto:info@joroservices.org" className="hover:text-accent">info@joroservices.org</a>
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="text-accent-dark font-semibold mb-2 uppercase text-sm">
              Services
            </h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li><Link to="/digital-marketing" className="hover:text-white">Digital Marketing</Link></li>
              <li><Link to="/creative-solutions" className="hover:text-white">Creative Solutions</Link></li>
              <li><Link to="/development" className="hover:text-white">Development</Link></li>
              <li><Link to="/technical-services" className="hover:text-white">Technical Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-accent-dark font-semibold mb-2 uppercase text-sm">
              Company
            </h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/getintouch" className="hover:text-white">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-accent-dark font-semibold mb-2 uppercase text-sm">
              Legal
            </h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </nav>

        {/* Newsletter & Social */}
        <div className="lg:col-span-3">
          <h3 className="text-accent-dark font-semibold uppercase text-sm mb-2">
            Newsletter
          </h3>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-dark"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-accent-dark text-black font-semibold rounded hover:bg-opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-6 flex space-x-4">
            <a href="https://www.facebook.com/Joroservices" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
            <a href="https://x.com/Joroservices" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaXTwitter /></a>
            <a href="https://www.linkedin.com/company/joroservices" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/joroservices" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaInstagram /></a>
            <a href="https://wa.me/447345019824" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Joro Services Ltd. All rights reserved. | Company No. 14079588 | Registered in England & Wales.
      </div>
    </footer>
  );
};

export default Footer;
