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

  return (
    <section className="w-full overflow-hidden font-inter relative">

      {/* 🔹 ABOUT SECTION (with overlay) */}
      <div className="relative flex flex-col md:flex-row md:min-h-screen">
        {/* 🔹 Full-section overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002143] via-[#00000000] to-[#01355b]/0 opacity-80 z-10 pointer-events-none"></div>

        {/* LEFT TEXT */}
        <div className="relative flex-1 flex items-center justify-center bg-[#1A83C7] text-white px-6 py-10 md:p-16 overflow-hidden">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl text-center md:text-left z-20"
          >
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-5xl md:text-6xl font-thin mb-4 tracking-wide font-roboto text-white text-center"
            >
              About Us
            </motion.h1>

            <p className="text-base sm:text-lg md:text-[17px] leading-relaxed font-light font-roboto text-gray-100 text-center md:text-center">
              <span className="font-semibold text-white">
                ABDULWAHAB TRADING LLC
              </span>{" "}
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

        {/* RIGHT IMAGE */}
        <div className="relative flex-1 overflow-hidden group cursor-pointer h-[300px] sm:h-auto">
          <div
            className="w-full h-[300px] sm:h-[400px] md:h-full bg-center bg-cover transition-transform duration-[1500ms] ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${aboutImg})` }}
          ></div>
        </div>
      </div>

      {/* 🔹 MISSION & VISION SECTION (No overlay here) */}
      <div className="w-full font-inter px-4 md:px-12 py-12 md:py-16 min-h-[200px] flex items-center bg-white relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-10">
          {/* MISSION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-roboto font-light tracking-tight text-center mb-3 text-gray-900">
              Our Mission
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm font-light font-roboto text-gray-700 leading-relaxed text-left">
              <li>Engage in trade with a focus on quality services to customers and professional competences.</li>
              <li>Develop new markets and products, and expand business in Industrial Raw Materials, Commodities, and Engineering Equipment and Projects.</li>
              <li>Serve as an effective instrument of public policy and social responsibility.</li>
            </ul>
          </motion.div>

          {/* VISION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-roboto font-light tracking-tight text-center mb-3 text-gray-900">
              Our Vision
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm font-light font-roboto text-gray-700 leading-relaxed text-left">
              <li>To be the trading company of choice of the customers, principals, and investors through dedicated professionalism.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}