'use client';

import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import textlogo from "../assets/images/Companylogo.png";

export default function Navbar() {
  const menuItems = ["HOME", "ABOUT", "WHYUS", "SERVICES", "PRODUCT", "CONTACT"];

  const [active, setActive] = useState("HOME");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverNav, setHoverNav] = useState(false);

  const sectionRefs = useRef({});
  const location = useLocation();
  const navigate = useNavigate();

  const isProductPage = location.pathname.toLowerCase().includes("product");

  useEffect(() => {
    if (isProductPage) {
      setScrolled(true);
      setActive("PRODUCT");
    } else {
      setScrolled(window.scrollY > 50);
    }
  }, [isProductPage, location.pathname]);

  useEffect(() => {
    if (isProductPage) return;

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProductPage]);

  useEffect(() => {
    if (isProductPage) return;

    // IntersectionObserver to update active section
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const id = visible.target.id;
          if (id && id !== active) setActive(id);
        }
      },
      { threshold: 0.5 }
    );

    menuItems.forEach((item) => {
      const el = document.getElementById(item);
      if (el) {
        sectionRefs.current[item] = el;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProductPage]); // don't include `active` to avoid excessive re-creating

  const handleClick = (item) => {
    setActive(item);
    setIsOpen(false);

    if (isProductPage && item !== "PRODUCT") {
      navigate("/", { state: { scrollTo: item } });
      return;
    }

    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);

  const navbarBg = scrolled || hoverNav ? "bg-white shadow-md" : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${navbarBg}`}
      onMouseEnter={() => setHoverNav(true)}
      onMouseLeave={() => setHoverNav(false)}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex justify-between items-center h-16">
        {/* LOGO */}
        <motion.div
          className="cursor-pointer"
          onClick={() => navigate("/")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img
            src={textlogo}
            alt="logo"
            className={`h-12 md:h-14 transition-all duration-300 ${
              scrolled || hoverNav ? "opacity-100" : "brightness-0 invert"
            }`}
          />
        </motion.div>

        {/* DESKTOP MENU */}
        <ul
          className={`hidden md:flex items-center space-x-6 text-sm font-medium transition-colors duration-300 ${
            scrolled || hoverNav ? "text-gray-800" : "text-white"
          }`}
        >
          {menuItems.map((item) => {
            const isActive = active === item || (item === "PRODUCT" && isProductPage);

            return (
              <li key={item} className="relative group pb-2">
                <button
                  type="button"
                  onClick={() => handleClick(item)}
                  className={`cursor-pointer bg-transparent border-0 p-0 ${
                    isActive ? "font-bold" : "font-medium"
                  }`}
                >
                  {item}
                </button>

                {/* UNDERLINE USING CSS scaleX (no layoutId) */}
                {isActive ? (
                  <div
                    className="absolute left-0 bottom-0 h-1 w-full bg-[#0183c4] rounded origin-left transform scale-x-100 transition-transform duration-200"
                    style={{ transformOrigin: "left" }}
                    aria-hidden
                  />
                ) : (
                  <div
                    className="absolute left-0 bottom-0 h-1 w-full bg-gray-400 rounded origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                    style={{ transformOrigin: "left" }}
                    aria-hidden
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`md:hidden transition-all duration-300 ${
            scrolled || hoverNav ? "text-gray-800" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={isOpen ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
        transition={{ duration: 0.2 }}
        style={{ transformOrigin: "top" }}
        className="md:hidden bg-white shadow-lg"
      >
        <ul className="flex flex-col py-4 px-4 space-y-4 text-center">
          {menuItems.map((item) => {
            const isActive = active === item;

            return (
              <li key={item}>
                <button
                  type="button"
                  className={`cursor-pointer text-lg ${
                    isActive ? "text-blue-600 font-bold" : "text-gray-800"
                  }`}
                  onClick={() => handleClick(item)}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </nav>
  );
}
