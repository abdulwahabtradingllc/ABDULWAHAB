'use client';

import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import textlogo from "../assets/images/Companylogo.png";

export default function Navbar() {
  const menuItems = ["HOME", "ABOUT", "WHYUS", "SERVICES", "PRODUCT", "CONTACT"];

  const [active, setActive] = useState("HOME");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverNav, setHoverNav] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const sectionRefs = useRef({});

  const isProductPage = location.pathname.toLowerCase().includes("product");

  /* SCROLL HANDLER */
  useEffect(() => {
    if (isProductPage) {
      setScrolled(true);
      setActive("PRODUCT");
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProductPage]);

  /* INTERSECTION OBSERVER */
  useEffect(() => {
    if (isProductPage) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible?.target?.id) setActive(visible.target.id);
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
  }, [isProductPage]);

  /* ON MENU CLICK */
  const handleClick = (item) => {
    setActive(item);
    setIsOpen(false);

    if (isProductPage && item !== "PRODUCT") {
      navigate("/", { state: { scrollTo: item } });
      return;
    }

    const section = document.getElementById(item);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* RETURN SCROLLING FIX */
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 300);
    }
  }, [location]);

  const navbarBg = scrolled || hoverNav ? "bg-white shadow-md" : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${navbarBg}`}
      onMouseEnter={() => setHoverNav(true)}
      onMouseLeave={() => setHoverNav(false)}
    >
      {/* TOP NAVBAR – using your ORIGINAL HEIGHT */}
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex justify-between items-center h-16">

        {/* LOGO — restored original size */}
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

        {/* DESKTOP MENU — restored original spacing, font size */}
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
                  onClick={() => handleClick(item)}
                  className={`${isActive ? "font-bold" : "font-medium"}`}
                >
                  {item}
                </button>

                <div
                  className={`absolute left-0 bottom-0 h-1 w-full rounded origin-left transition duration-200 ${
                    isActive
                      ? "bg-primaryBlue scale-x-100"
                      : "bg-gray-400 scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* MOBILE MENU BUTTON — restored original icon size */}
        <button
          className={`md:hidden transition-all duration-300 ${
            scrolled || hoverNav ? "text-gray-800" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN — absolute so it never pushes content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg"
          >
            <ul className="flex flex-col py-4 px-4 space-y-4 text-center">
              {menuItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleClick(item)}
                    className="text-lg"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
