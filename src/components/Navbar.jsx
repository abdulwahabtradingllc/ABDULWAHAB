'use client';

import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // ✅ React Router
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import textlogo from '../assets/images/textlogo.png'

export default function Navbar() {
  const menuItems = ["HOME", "ABOUT", "SERVICES", "PRODUCT", "WHY US", "CONTACT"];
  const [active, setActive] = useState("HOME");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverNav, setHoverNav] = useState(false);
  const sectionRefs = useRef({});
  const location = useLocation();
  const navigate = useNavigate();

  const isProductPage = location.pathname.toLowerCase().includes("product");

  // ✅ Initialize scroll + active state
  useEffect(() => {
    if (isProductPage) {
      setScrolled(true);
      setActive("PRODUCT");
    } else {
      setScrolled(window.scrollY > 50);
    }
  }, [isProductPage, location.pathname]);

  // ✅ Scroll listener (skip on product page)
  useEffect(() => {
    if (isProductPage) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProductPage]);

  // ✅ IntersectionObserver (only on homepage)
  useEffect(() => {
    if (isProductPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const sectionId = visible.target.id;
          if (sectionId && sectionId !== active) {
            setActive(sectionId);
          }
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
  }, [active, isProductPage]);

  // ✅ Handle click (navigate or scroll)
  const handleClick = (item) => {
    setActive(item);
    setIsOpen(false);

    // if product page clicked → go to /products
    /* if (item === "PRODUCT") {
      navigate("/products");
      return;
    } */

    // if we're NOT on home page, go home first
    if (isProductPage && item !== "PRODUCT") {
      navigate("/", { state: { scrollTo: item } });
      return;
    }

    // if already on home → smooth scroll
    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // ✅ Handle scroll after navigating back home
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 300); // small delay to allow render
      }
    }
  }, [location]);

  const navbarBg = scrolled || hoverNav ? "bg-white shadow-md" : "bg-transparent";
  const showLogo = scrolled || hoverNav;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${navbarBg}`}
      onMouseEnter={() => setHoverNav(true)}
      onMouseLeave={() => setHoverNav(false)}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo */}
<motion.div
  className="w-auto cursor-pointer"
  onClick={() => navigate("/")}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  <div
    className="flex flex-col justify-center items-center h-16 leading-tight text-center transition-all duration-300 drop-shadow-none"
  >
    {/* Arabic text */}
    <p
      className={`text-[17px] font-semibold font-sans tracking-wide whitespace-nowrap transition-colors duration-300 ${
        scrolled || hoverNav ? "text-[#1A83C7]" : "text-white"
      }`}
    >
      عبدالوهاب للتجارة ش.ذ.م.م
    </p>

    {/* English text */}
    <p
      className={`text-[14px] font-bold tracking-wide uppercase whitespace-nowrap transition-colors duration-300 ${
        scrolled || hoverNav ? "text-[#1A83C7]" : "text-white"
      }`}
    >
      ABDULWAHAB TRADING LLC
    </p>
  </div>
</motion.div>



        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-6 font-medium font-heading relative transition-colors duration-300 text-sm ${scrolled || hoverNav ? "text-gray-800" : "text-white"
            }`}
        >
          {menuItems.map((item) => {
            const isActive =
              active === item || (item === "PRODUCT" && isProductPage);
            return (
              <li key={item} className="relative group">
                <div
                  onClick={() => handleClick(item)}
                  className="relative cursor-pointer z-20 h-14 flex flex-col items-center justify-center px-3"
                >
                  <span
                    className={`transition-all duration-300 ${item === "HOME"
                        ? "font-medium"
                        : isActive
                          ? "font-bold text-[#1A83C7]"
                          : "font-medium"
                      }`}
                  >
                    {item}
                  </span>

                  {/* Underline */}
                  {isActive && (
                    <motion.div
                      className="h-1 w-full rounded mt-1 bg-[#1A83C7]"
                      layout
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {!isActive && (
                    <div className="h-1 w-0 bg-black rounded mt-1 group-hover:w-full transition-all duration-300" />
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${scrolled || hoverNav ? "text-gray-800" : "text-white"
            }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 py-5 px-6 text-center text-sm">
            {menuItems.map((item) => {
              const isActive =
                active === item || (item === "PRODUCT" && isProductPage);
              return (
                <li key={item}>
                  <span
                    onClick={() => handleClick(item)}
                    className={`cursor-pointer py-1 ${isActive ? "text-blue-600 font-bold" : "text-gray-700"
                      }`}
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
