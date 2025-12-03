"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import aboutImg from "../assets/images/image.jpg";

export default function AboutSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imgSrc =
    aboutImg && typeof aboutImg === "string"
      ? aboutImg
      : (aboutImg && (aboutImg.src || aboutImg.default || aboutImg)) || "";

  return (
    <section
      className="relative w-full min-h-[70vh] overflow-hidden font-inter flex flex-col justify-between bg-primaryBlue "
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* 🔹 Glow Accent */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl z-10 pointer-events-none" />

      {/* MAIN WRAPPER */}
      <div className="relative z-20 w-full flex flex-col md:flex-row h-auto">
        {/* 🔹 Top soft gradient */}
        <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-primaryBlue  to-transparent z-30 pointer-events-none" />

        {/* LEFT IMAGE SECTION — slope for desktop only */}
        <div
          className="relative flex-[1.25] h-[300px] sm:h-[400px] md:h-auto overflow-hidden" // ✅ increased from flex-[1.2] → flex-[1.25]
          style={{
            // ✅ Slightly widened slope — from 80% → 78% (adds ~0.5 cm width visually)
            clipPath: "polygon(0 0, 100% 0, 78% 100%, 0% 100%)",
          }}
        >
          {/* For mobile, remove slope */}
          <div className="md:hidden absolute inset-0 bottom-0">
            <motion.img
              src={imgSrc}
              alt="About"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* For desktop (slope version) */}
          <div className="hidden md:block absolute inset-0 bottom-0">
            <motion.img
              src={imgSrc}
              alt="About"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 🔹 Top & Bottom blue overlays */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primaryBlue /70 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primaryBlue /70 to-transparent z-20 pointer-events-none" />
        </div>

        {/* RIGHT TEXT SECTION */}
        <div className="flex-1 flex items-center justify-center py-20 px-6 sm:px-10 md:px-20 lg:px-28 text-white z-30 bg-primaryBlue  md:bg-transparent">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl text-center md:text-left space-y-5"
          >
            <motion.h1
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-5xl md:text-6xl font-thin tracking-wide font-roboto text-white"
            >
              About Us
            </motion.h1>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-thin font-roboto text-gray-100">
              <span className="font-semibold text-white">ABDULWAHAB TRADING LLC</span>{" "}
              has established a strong reputation as one of the leading suppliers of specialized
              industrial goods and services in the Middle East. We proudly deliver high-quality
              products sourced from top global manufacturers, supporting industries across Saudi
              Arabia, the United Arab Emirates, and beyond.
              <br />
              <br />
              Through innovation, integrity, and consistency, we have built long-term partnerships
              with our clients and adapted to the evolving demands of the global and GCC markets.
              Our unwavering focus on quality and service has positioned us as a key collaborator
              for industries seeking excellence and reliability.
            </p>
          </motion.div>
        </div>

        {/* 🔹 Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primaryBlue  to-transparent z-30 pointer-events-none" />
      </div>

      {/* 🔹 Mission & Vision Section */}
      <div className="w-full font-inter px-4 md:px-12 py-12 md:py-16 flex items-center bg-white relative z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-10">
          {/* MISSION */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-roboto font-light tracking-tight text-center mb-3 text-gray-900">
              Our Mission
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base  font-light font-roboto text-gray-700 leading-relaxed text-left">
              <li>Engage in trade with a focus on quality services to customers and professional competences.</li>
              <li>Develop new markets and products, and expand business in Industrial Raw Materials, Commodities, and Engineering Equipment and Projects.</li>
              <li>Serve as an effective instrument of public policy and social responsibility.</li>
            </ul>
          </div>

          {/* VISION */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-roboto font-light tracking-tight text-center mb-3 text-gray-900">
              Our Vision
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base font-light font-roboto text-gray-700 leading-relaxed text-left">
              <li>To be the trading company of choice of the customers, principals, and investors through dedicated professionalism.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
