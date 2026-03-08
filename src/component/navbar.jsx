import React, { useEffect, useState, useCallback, useRef } from "react";
import NavLink from "./links";
import MobileNavbar from "./mobileNav";
import Logo from "./logo";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const rafRef = useRef(null);

  // Close mobile nav on route change
  useEffect(() => {
    setOpenNav(false);
  }, [location.pathname]);

  // Throttled scroll handler using rAF
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(() => {
          const hero = document.getElementById("hero");
          const heroHeight = hero ? hero.offsetHeight : 300;
          setScrolled(window.scrollY > heroHeight);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const getNavbarBg = () => {
    if (location.pathname === "/") {
      return scrolled ? "bg-black/60 backdrop-blur-md shadow-lg" : "bg-black/30";
    }
    return "bg-black/60 backdrop-blur-md";
  };

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = openNav ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openNav]);

  const toggleNav = useCallback(() => setOpenNav((prev) => !prev), []);
  const closeNav = useCallback(() => setOpenNav(false), []);

  return (
    <>
      <nav
        className={`${getNavbarBg()} fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-14 lg:h-16 px-4 text-white transition-colors duration-300`}
      >
        <Logo />
        <NavLink />
        <div className="hidden lg:flex items-center mr-4">
          <Link
            to="/getintouch"
            className="px-5 py-2 text-sm font-semibold border border-accent rounded-md text-white hover:bg-accent hover:text-black transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md bg-accent/20 touch-manipulation"
          onClick={toggleNav}
          aria-label={openNav ? "Close menu" : "Open menu"}
        >
          {openNav ? <X size={22} color="white" /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navbar */}
      <MobileNavbar isOpen={openNav} toggleNav={closeNav} />
    </>
  );
};

export default Navbar;
