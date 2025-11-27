import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bg1 from "../assets/images/smelting-aluminum.webp";
import bg2 from "../assets/images/oilandgas 1.webp"; // ✅ renamed file (no spaces)
import bg3 from "../assets/images/steel.webp";

export default function HeroSection() {
  const heroImages = [bg1, bg2, bg3];
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  /* ✅ Preload all images */
  useEffect(() => {
    let loadedCount = 0;
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === heroImages.length) setLoaded(true);
      };
    });
  }, []);

  /* ✅ Smooth image rotation */
  useEffect(() => {
    if (!loaded) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [loaded]);

  const cards = [
    { title: "Global Sourcing", desc: "Curated suppliers, verified quality across continents." },
    { title: "Regional Distribution", desc: "Reliable MENA network with compliant, timely delivery." },
    { title: "Custom Logistics", desc: "Warehousing, kitting & tailored fulfillment solutions." },
    { title: "Quality Assurance", desc: "Inspections, certifications & compliance checks." },
    { title: "Market Intelligence", desc: "Data-driven insights and demand forecasting." },
  ];
  const repeatedCards = [...cards, ...cards];

  return (
    <section
      className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-[#0183c4]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* 🔹 Top gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-14 mt-14 bg-gradient-to-b from-[#0183c4] to-transparent z-30 pointer-events-none" />

      {/* MAIN WRAPPER */}
      <div className="relative z-20 w-full flex flex-col lg:flex-row items-center lg:items-start md:ps-20 pe-0 pt-14 gap-10 flex-grow">
        
        {/* LEFT TEXT SECTION */}
        <div className="flex-1 max-w-[650px] z-30 flex flex-col pt-10 justify-center px-0 sm:px-0 md:px-0">
          <div className="self-end text-right w-full px-4 sm:px-6 md:px-0">
            <p
              dir="rtl"
              className="text-xl sm:text-3xl md:text-5xl font-bold text-yellow-300 tracking-wide"
              style={{ fontFamily: "'Amiri', serif" }}
            >
              عبدالوهاب للتجارة ش.ذ.م.م
            </p>
          </div>

          {/* English Title */}
          <div className="inline-block mt-6 p-3 sm:p-4 rounded-xl relative px-4 sm:px-6 md:px-0">
            <h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
              style={{
                WebkitTextStroke: "1.5px white",
                color: "white",
                lineHeight: "0.95",
                whiteSpace: "nowrap",
              }}
            >
              ABDULWAHAB <br /> TRADING LLC
            </h1>

            <div className="flex grid grid-cols-10">
              <div className="col-span-1 flex justify-center items-center">
                <div className="w-full h-[3px] bg-yellow-300 mt-3 opacity-80"></div>
              </div>
              <div className="col-span-9">
                <p className="text-white text-lg sm:text-xl md:text-2xl mt-3 tracking-wide ms-3">
                  Beyond Borders —{" "}
                  <span className="text-yellow-300">Trade That Builds Trust</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 max-w-xl px-4 sm:px-6 md:px-0">
            <h6 className="text-sm sm:text-lg md:text-lg font-semibold text-gray-100 leading-snug">
              Providing specialized products and services with uncompromised quality and trust.
            </h6>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex-1 relative flex justify-end items-end h-full z-10 w-full">
          
          {/* ✅ Desktop & iPad Pro */}
          <div
            className="hidden md:block hero-right absolute bottom-0 right-0 w-[55vw] sm:w-[60vw] md:w-[58vw] lg:w-[55vw] xl:w-[52vw] h-full overflow-hidden"
            style={{
              clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)",
              backgroundColor: "#00acf0",
            }}
          >
            {heroImages.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`Hero ${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: i === index ? 1 : 0 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="absolute bottom-0 w-full h-full object-cover object-center"
              />
            ))}
          </div>

          {/* ✅ Mobile / iPad Mini */}
          <div className="block md:hidden relative bottom-0 left-0 right-0 w-full h-[250px] sm:h-[300px] overflow-hidden m-0 p-0">
            {heroImages.map((src, i) => (
              <motion.img
                key={`mobile-${i}`}
                src={src}
                alt={`Hero Mobile ${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: i === index ? 1 : 0 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            ))}
          </div>
        </div>
      </div>

      {/* FLOATING CARDS */}
      <div className="absolute bottom-12 sm:bottom-16 left-0 w-full z-40 overflow-hidden px-4 sm:px-6 md:px-20">
        <motion.div
          className="flex gap-4 sm:gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        >
          {repeatedCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="flex flex-col justify-center text-center gap-2 px-6 sm:px-8 py-5 sm:py-6 rounded-md border border-white/15 bg-black/30 text-white hover:border-yellow-400/60 hover:bg-white/10 transition-all duration-300 min-w-[200px] sm:min-w-[240px] md:min-w-[270px] backdrop-blur-sm shadow-lg"
            >
              <p className="font-semibold text-yellow-300 text-sm sm:text-base md:text-lg">
                {card.title}
              </p>
              <p className="text-xs sm:text-sm text-gray-200 leading-snug px-1">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0183c4] to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}
