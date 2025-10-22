// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/images/bluebg10.jpg";

const listVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-between bg-gray-950 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A83C7]/20 via-[#1A83C7]/10 to-[#1A83C7]/0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#1A83C7]/0 to-[#01355b]" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, x: -36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl px-4 sm:px-6 md:px-20 flex flex-col justify-center text-left mt-16 sm:mt-20 mb-12 sm:mb-20"
      >
        <div className="mb-6">
          <p
            dir="rtl"
            className="text-xl sm:text-3xl md:text-5xl font-bold text-yellow-300 tracking-wide mt-2"
            style={{ fontFamily: "'Amiri', serif" }}
          >
            عبدالوهاب للتجارة ش.ذ.م.م
          </p>
          <br />
          <div className="inline-block p-3 sm:p-4 border-2 border-white/70 rounded-xl shadow-xl shadow-blue-900/40">
            <h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-snug flex flex-col"
              style={{
                WebkitTextStroke: "1.5px white",
                color: "transparent",
                fontFamily: "sans-serif",
                lineHeight: "0.95",
              }}
            >
              <span className="flex items-center">ABDULWAHAB</span>
              <span>TRADING LLC</span>
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="max-w-full sm:max-w-2xl"
        >
          <p className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base text-gray-300 mb-2 sm:mb-3">
            <span className="inline-block w-8 sm:w-10 h-[1px] bg-gradient-to-r from-yellow-400 to-white opacity-80" />
            <span className="font-medium tracking-wide pt-2 sm:pt-4 text-gray-200">
              Beyond Borders —{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-white to-yellow-300 font-semibold">
                Trade that builds trust
              </span>
            </span>
          </p>

          <h2 className="text-sm sm:text-lg md:text-2xl font-semibold text-gray-100 leading-snug">
            Providing specialized products and services with uncompromised
            quality and trust.
          </h2>
        </motion.div>
      </motion.div>

      {/* Feature Cards */}
      <motion.ul
        variants={listVariant}
        initial="hidden"
        animate="show"
        aria-label="feature-cards-row"
        className="relative z-20 flex flex-wrap justify-center gap-4 px-4 sm:px-6 pb-10 md:pb-16 mx-auto"
        style={{
          width: "95vw",
          maxWidth: "1400px",
          boxSizing: "border-box",
        }}
      >
        {[
          {
            title: "Global Sourcing",
            desc: "Curated suppliers, verified quality across continents.",
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12h20M12 2c2.5 3 2.5 9 0 12M12 22c-2.5-3-2.5-9 0-12"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
          },
          {
            title: "Regional Distribution",
            desc: "Reliable MENA network with compliant, timely delivery.",
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 7h11v10H3zM14 10h4l3 4v3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="7.5" cy="18.5" r="1.5" fill="currentColor" />
                <circle cx="18.5" cy="18.5" r="1.5" fill="currentColor" />
              </svg>
            ),
          },
          {
            title: "Custom Logistics",
            desc: "Warehousing, kitting & tailored fulfillment solutions.",
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 16V8l-9-5-9 5v8l9 5 9-5zM3.5 8.5l8.5 5 8.5-5"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
          },
          {
            title: "Quality Assurance",
            desc: "Inspections, certifications & compliance checks.",
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2l7 4v6c0 5-3.134 9.5-7 10-3.866-.5-7-5-7-10V6l7-4zM9 12l2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
          },
          {
            title: "Market Intelligence",
            desc: "Data-driven insights and demand forecasting.",
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 19V9M10 19V5M16 19v-7M22 19v-3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
          },
        ].map((card, i) => (
          <motion.li
            key={i}
            variants={itemVariant}
            className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-white/15 hover:border-yellow-400/40 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all duration-300 transform hover:scale-[1.03] flex-1 min-w-[160px] sm:min-w-[180px] bg-black/20"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg text-yellow-300 transition-transform duration-300 group-hover:scale-110">
              {card.icon}
            </div>
            <div>
              <p className="font-semibold text-gray-100 text-sm sm:text-base">{card.title}</p>
              <p className="text-xs sm:text-sm text-gray-300">{card.desc}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
