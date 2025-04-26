import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Serv } from "./navlinkOverlay";

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
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: isOpen ? "100%" : 0 }}
      className={`fixed top-0 left-0 w-screen h-screen bg-bgImage2 backdrop-blur-lg bg-cover text-white transition-all duration-300 ${
        isOpen ? "opacity-100 " : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Menu List */}
      <ul
        className={`flex flex-col items-center pt-20 h-screen text-white transition-all duration-300  space-y-3 px-6 `}
      >
        {Serv.map((item, index) => (
          <li key={index} className="w-full">
            {item.offerings && item.offerings.length > 0 ? (
              // Dropdown for categories with offerings
              <>
                <div
                  onMouseEnter={() => toggleAccordion(index)}
                  onMouseLeave={() => setOpenIndex(null)}
                  className="flex flex-col cursor-pointer w-full py-2 px-6 text-lg font-medium border-b border-gray-500 hover:text-accent transition-all"
                >
                  <Link
                    to={item.path}
                    onClick={toggleNav}
                    className="flex w-full flex-row justify-between items-center"
                  >
                    <span>{item.category}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>{" "}
                  </Link>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-gray-900 bg-opacity-30 rounded-lg mt-2 overflow-hidden"
                      >
                        {item.offerings.map((service, i) => (
                          <Link
                            key={i}
                            to={item.path}
                            onClick={toggleNav}
                            className="block py-3 px-6 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300"
                          >
                            {service}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              // Direct link for categories without offerings
              <Link
                to={item.path}
                onClick={toggleNav}
                className="flex justify-between items-center w-full py-4 px-6 text-lg font-medium border-b border-gray-500 hover:text-accent transition-all"
              >
                {item.category}
                <ArrowUpRight size={20} />
              </Link>
            )}
          </li>
        ))}
        {/* CTA Button */}
        <div className="flex justify-center w-full mt-10 px-6">
          <Link
            onClick={toggleNav}
            className="bg-accent-dark w-full text-center py-3 rounded-lg font-semibold text-white hover:bg-accent transition-all duration-300"
            to={"/getintouch"}
          >
            Get in Touch
          </Link>
        </div>
      </ul>
    </motion.div>
  );
};

export default MobileNavbar;
