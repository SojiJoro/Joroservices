import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Serv } from "./navlinkOverlay";

function toSlug(label) {
  return label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

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
          className="fixed inset-0 z-[60] bg-primary/98 backdrop-blur-xl text-white overflow-y-auto lg:hidden"
        >
          <ul className="flex flex-col pt-20 pb-8 space-y-1 px-5">
            {Serv.map((item, index) => (
              <li key={index}>
                {item.offerings && item.offerings.length > 0 ? (
                  <>
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="flex w-full items-center justify-between py-4 px-4 text-base font-medium border-b border-white/5 active:bg-white/5 rounded-lg touch-manipulation"
                    >
                      <Link
                        to={item.path}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleNav();
                        }}
                        className="flex-1 text-left"
                      >
                        {item.category}
                      </Link>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-2 p-1"
                      >
                        <ChevronDown size={18} className="text-gray-400" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="bg-white/5 rounded-xl my-1 mx-2">
                            {item.offerings.map((service, i) => (
                              <Link
                                key={i}
                                to={`${item.path}/${toSlug(service)}`}
                                onClick={toggleNav}
                                className="block py-3 px-5 text-sm text-gray-400 hover:text-white active:bg-white/5 touch-manipulation rounded-lg"
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
                    className="flex justify-between items-center w-full py-4 px-4 text-base font-medium border-b border-white/5 active:bg-white/5 rounded-lg touch-manipulation"
                  >
                    {item.category}
                    <ArrowUpRight size={18} className="text-gray-400" />
                  </Link>
                )}
              </li>
            ))}

            {/* CTA Button */}
            <li className="pt-8 px-2">
              <Link
                onClick={toggleNav}
                className="block bg-accent text-white text-center py-4 rounded-xl font-semibold text-base hover:bg-accent-dark active:bg-accent-dark transition-colors touch-manipulation"
                to="/getintouch"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
