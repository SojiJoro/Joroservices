import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CreativeSolutionOverlay,
  DevelopmentOverlay,
  DigitalMarketingOverlay,
  Serv,
  TechnicalServicesOverlay,
} from "./navlinkOverlay";

const NavLink = () => {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="hidden lg:flex items-center justify-center flex-1">
      <div className="flex flex-row justify-center items-center whitespace-nowrap relative gap-1">
        {Serv.map((link, i) => (
          <div
            key={i}
            className="relative group"
            onMouseEnter={() =>
              setHoveredLink(
                location.pathname === link.path ? null : link.category
              )
            }
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link
              to={link.path}
              onClick={() => setHoveredLink(null)}
              className={`text-[13px] font-medium relative px-4 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === link.path
                  ? "text-accent-light"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.category}
            </Link>

            {hoveredLink === link.category && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
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
