import React, { useEffect, useState } from "react";
import Button from "./button";
import NavLink from "./links";
import MobileNavbar from "./mobileNav";
import Logo from "./logo";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero").offsetHeight;
      setScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to determine navbar background based on route
  const getNavbarBg = () => {
    if (location.pathname === "/") {
      return `bg-black/30 ${
        scrolled ? "bg-black/20 shadow-lg" : "bg-transparent"
      }`;
    } else {
      return "bg-black/60 backdrop-blur-sm";
    }
  };

  // Close the mobile menu when window size is larger than lg (1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={` z-50   flex justify-between py-2  items-center  rounded-md fixed top-0  w-full bg-transparent text-white   transition-all duration-300`}
    >
      <div
        className={`${getNavbarBg()} shadow-sm z-50 shadow-accent/40 flex justify-between py-2 h-[50px] items-center backdrop-blur-md lg:h-16 rounded-md  top-4 mx-4 w-full  text-white transition-all duration-300`}
      >
        <Logo />
        <NavLink />
        <div className="md:flex hidden justify-center w-[150px] mr-16 ">
          <Link to={"/getintouch"}>
            <Button bg={"black"} title={"Get in Touch"} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden absolute bg-accent/20 p-1 lg:p-2 right-4 rounded-md"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <X size={24} color="white" /> : <Menu size={24} />}
        </button>
      </div>{" "}
      {/* Mobile Navbar */}
      {openNav && (
        <MobileNavbar isOpen={openNav} toggleNav={() => setOpenNav(false)} />
      )}
    </div>
  );
};

export default Navbar;
