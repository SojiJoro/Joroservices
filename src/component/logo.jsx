import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="pl-4">
      <Link
        to={"/"}
        className=" text-2xl font-bold tracking-wide text-secondary-dark flex"
      >
        <span className=" text-white">Joro</span>{" "}
        <span className="text-accent-dark">Services</span>
      </Link>
    </div>
  );
};

export default Logo;
