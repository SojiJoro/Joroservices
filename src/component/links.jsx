import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CreativeSolutionOverlay,
  DevelopmentOverlay,
  DigitalMarketingOverlay,
  Serv,
  TechnicalServicesOverlay,
} from "./navlinkOverlay";

// eslint-disable-next-line react-refresh/only-export-components

const NavLink = () => {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState(null); // Store hovered link title

  return (
    <div className="hidden lg:flex items-center justify-center w-3/5">
      <div className="flex flex-row justify-center items-center whitespace-nowrap relative mx-auto w-full tracking-wider">
        {Serv.map((link, i) => (
          <div
            key={i}
            className="relative group"
            onMouseEnter={() =>
              setHoveredLink(
                location.pathname === link.path ? null : link.category
              )
            }
            onMouseLeave={() => setHoveredLink(null)} // Hide dropdown when mouse leaves
          >
            <Link
              to={link.path}
              onClick={() => setHoveredLink(null)}
              className={`text-[16px] lg:text-[13px] font-semibold relative lg:font-bold hover:bg-neutral-700/70 xl:px-8 lg:px-2 py-2 ${
                location.pathname === link.path ? "text-accent" : "text-white"
              } group transition-all duration-300`}
            >
              {link.category}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-accent group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-300 ease-in-out"></span>
            </Link>

            {/* Conditionally Render Only the Hovered Dropdown */}
            {hoveredLink === link.category && (
              <div className="absolute -left-40 top-full mt-[6px] w-64 bg-black/90 text-white shadow-lg rounded-md z-50">
                {link.category === "Creative Solutions" && (
                  <CreativeSolutionOverlay />
                )}
                {link.category === "Development" && <DevelopmentOverlay />}
                {link.category === "Digital Marketing" && (
                  <DigitalMarketingOverlay />
                )}
                {link.category === "Technical Services" && (
                  <TechnicalServicesOverlay />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavLink;
