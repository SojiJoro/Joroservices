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

  useEffect(() => {
    setOpenNav(false);
  }, [location.pathname]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
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

  const getNavbarClasses = () => {
    if (scrolled) {
      return "bg-primary/95 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/5";
    }
    if (location.pathname === "/") {
      return "bg-transparent";
    }
    return "bg-primary/90 backdrop-blur-xl";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openNav ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openNav]);

  const toggleNav = useCallback(() => setOpenNav((prev) => !prev), []);
  const closeNav = useCallback(() => setOpenNav(false), []);

  return (
    <>
      <nav
        className={`${getNavbarClasses()} fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 lg:h-[72px] px-4 lg:px-8 text-white">
          <Logo />
          <NavLink />
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/getintouch"
              className="px-6 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-accent/20"
            >
              Get in Touch
            </Link>
          </div>

          <button
            className="lg:hidden p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors touch-manipulation"
            onClick={toggleNav}
            aria-label={openNav ? "Close menu" : "Open menu"}
          >
            {openNav ? <X size={20} color="white" /> : <Menu size={20} color="white" />}
          </button>
        </div>
      </nav>

      <MobileNavbar isOpen={openNav} toggleNav={closeNav} />
    </>
  );
};

export default Navbar;
