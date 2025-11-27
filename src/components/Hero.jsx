import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import bg1 from "../assets/images/herobg2.jpg";
import bg1 from "../assets/images/smelting-aluminum.webp";
import bg2 from "../assets/images/oilandgas 1.webp";
import bg3 from "../assets/images/steel.webp";

// import bg2 from "../assets/images/herobg3.jpg";
// import bg3 from "../assets/images/herobg6.jpg";

export default function HeroSection() {
  // ⭐ USE 5 IMAGES
  const heroImages = [bg1, bg2, bg3, bg4, bg5];
  const [index, setIndex] = useState(0);

  // ✅ Preload all images
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

  // ✅ Smooth image rotation
  useEffect(() => {
    if (!loaded) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

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
      className="relative w-full min-h-screen flex flex-col justify-between bg-[#0183c4] overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="hero-wrapper relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-start pt-20 sm:pt-24 gap-8 sm:gap-10 px-4 sm:px-6 lg:px-0">
        
        {/* LEFT TEXT AREA */}
        <div className="flex-1 max-w-3xl lg:ps-20 text-center sm:text-left">

          <p
            dir="rtl"
            className="
              text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
              font-extrabold text-white tracking-wide text-center whitespace-nowrap
            "
            style={{ fontFamily: "'Amiri', serif" }}
          >
            عبدالوهاب للتجارة ش.ذ.م.م
          </p>

          <div className="mt-4 sm:mt-6 p-2 sm:px-4 rounded-xl">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold"
              style={{
                WebkitTextStroke: "1.5px white",
                color: "white",
                lineHeight: "0.95",
              }}
            >
              ABDULWAHAB <br />
              TRADING LLC
            </h1>

            <div className="grid grid-cols-10 mt-3 items-center">
              <div className="col-span-1 flex items-center">
                <div className="w-full h-[2.5px] bg-yellow-300 opacity-80"></div>
              </div>

              <div className="col-span-9">
                <p className="text-white text-base sm:text-lg md:text-2xl mt-1 ms-3 leading-snug">
                  Beyond Borders —{" "}
                  <span className="text-yellow-300">Trade That Builds Trust</span>
                </p>
              </div>
            </div>
          </div>

          <h6 className="mt-3 sm:mt-4 max-w-xl px-2 sm:px-0 text-sm sm:text-lg md:text-lg font-semibold text-gray-100 leading-snug">
            Providing specialized products and services with uncompromised quality and trust.
          </h6>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex-1 relative flex justify-end items-end h-full z-10 w-full">
          
          {/* ✅ Desktop – Sloped image (unchanged) */}
          <div
            className="hidden md:block absolute bottom-0 right-0 w-[55vw] sm:w-[60vw] md:w-[58vw] lg:w-[55vw] xl:w-[52vw] h-full overflow-hidden"
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

          {/* ✅ Mobile – Full width, no padding, reduced height */}
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

      {/* SCROLLING CARDS — unchanged */}
      <div className="relative w-full mx-auto px-4 sm:px-6 md:px-20 mt-6 sm:mt-10 mb-16 overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 8, repeat: Infinity }}
        >
          {repeatedCards.map((card, i) => (
            <div
              key={i}
              className="
                card-item flex flex-col justify-center text-center gap-1 sm:gap-2 
                px-6 sm:px-8 py-4 sm:py-6 rounded-md 
                border border-white/15 bg-black/25 text-white 
                hover:border-yellow-400/60 hover:bg-white/10 
                transition-all duration-300 
                min-w-[200px] sm:min-w-[240px] md:min-w-[270px] 
                backdrop-blur-sm
              "
            >
              <p className="font-semibold text-yellow-300 text-sm sm:text-lg">
                {card.title}
              </p>
              <p className="text-xs sm:text-sm text-gray-200 leading-snug px-1">
                {card.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CSS FIXES */}
      <style>{`
        #hero-image-wrapper {
          clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
        }

        @media (max-width: 768px) {
          #hero-image-wrapper {
            clip-path: none !important;
            border-radius: 12px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-wrapper {
            padding-top: 4rem !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
