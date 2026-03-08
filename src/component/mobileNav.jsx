import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ArrowUpRight, Palette, Code2, BarChart3, Shield, Briefcase, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Serv } from "./navlinkOverlay";

function toSlug(label) {
  return label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const categoryIcons = {
  "Creative Solutions": Palette,
  "Development": Code2,
  "Digital Marketing": BarChart3,
  "Technical Services": Shield,
  "Careers": Briefcase,
};

const MobileNavbar = ({ isOpen, toggleNav }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    if (!isOpen) {
      setOpenIndex(null);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[60] bg-[#060d1b] text-white overflow-y-auto lg:hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-white/5">
            <Link to="/" onClick={toggleNav} className="text-xl font-bold tracking-tight">
              Joro<span className="text-accent-light">Services</span>
            </Link>
            <button
              onClick={toggleNav}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 active:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="px-5 pt-6 pb-32">
            <ul className="space-y-1">
              {Serv.map((item, index) => {
                const Icon = categoryIcons[item.category] || Code2;
                const hasOfferings = item.offerings && item.offerings.length > 0;
                const isExpanded = openIndex === index;

                return (
                  <li key={index}>
                    {hasOfferings ? (
                      <>
                        <div className="flex items-center gap-3 rounded-xl hover:bg-white/[0.03] transition-colors">
                          <Link
                            to={item.path}
                            onClick={toggleNav}
                            className="flex items-center gap-3 flex-1 py-3.5 pl-3"
                          >
                            <span className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                              <Icon size={16} className="text-accent" />
                            </span>
                            <span className="text-[15px] font-medium">{item.category}</span>
                          </Link>
                          <button
                            onClick={() => toggleAccordion(index)}
                            className="p-3 mr-1 rounded-lg active:bg-white/5 transition-colors"
                            aria-label={`Expand ${item.category}`}
                          >
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={16} className="text-gray-500" />
                            </motion.div>
                          </button>
                        </div>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-[52px] py-1 space-y-0.5">
                                {item.offerings.map((service, i) => (
                                  <Link
                                    key={i}
                                    to={`${item.path}/${toSlug(service)}`}
                                    onClick={toggleNav}
                                    className="block py-2.5 px-3 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/[0.03] transition-colors"
                                  >
                                    {service}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={toggleNav}
                        className="flex items-center justify-between py-3.5 px-3 rounded-xl hover:bg-white/[0.03] transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Icon size={16} className="text-accent" />
                          </span>
                          <span className="text-[15px] font-medium">{item.category}</span>
                        </div>
                        <ArrowUpRight size={16} className="text-gray-500" />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Divider */}
            <div className="my-6 border-t border-white/5" />

            {/* Quick Links */}
            <div className="space-y-1">
              <Link
                to="/about"
                onClick={toggleNav}
                className="block py-3 px-3 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/[0.03] transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                onClick={toggleNav}
                className="block py-3 px-3 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/[0.03] transition-colors"
              >
                All Services
              </Link>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                onClick={toggleNav}
                to="/getintouch"
                className="block bg-accent text-white text-center py-3.5 rounded-xl font-semibold text-[15px] hover:bg-accent-dark active:bg-accent-dark transition-colors"
              >
                Get in Touch
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-6 flex items-center justify-center gap-6 text-gray-500 text-xs">
              <a href="tel:+4407867374034" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
                <Phone size={12} />
                07867 374034
              </a>
              <a href="mailto:info@joroservices.org" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
                <Mail size={12} />
                info@joroservices.org
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
