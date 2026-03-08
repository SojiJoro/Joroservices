import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-xl lg:text-2xl font-bold tracking-tight flex items-center gap-0.5 flex-shrink-0"
    >
      <span className="text-white">Joro</span>
      <span className="text-accent-light">Services</span>
    </Link>
  );
};

export default Logo;
