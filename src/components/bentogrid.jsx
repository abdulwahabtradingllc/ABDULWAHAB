"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import thermowell from '../assets/images/thermo.jpg'
import guages from '../assets/images/Guages.jpg'
import indicators from '../assets/images/indicators.jpg'
import cables from '../assets/images/cables.jpeg'
import steelShot from '../assets/images/steelShot.jpg'
import solenoidValve from '../assets/images/solvalves.jpg' 
import Collectors from '../assets/images/Collectors-Hepas.jpg'

const images = [
  { src: thermowell, title: "THERMOCOUPLE / THERMOWELL / RTD’S" },
  { src: guages, title: "GAUGES / TRANSMITTERS" },
  { src: indicators, title: "INDICATORS / CONTROLLERS" },
  { src: cables, title: "CABLES" },
  { src: steelShot, title: "STEEL SHOTS / GRITS" },
  { src: solenoidValve, title: "SOLENOID VALVES" },
  { src: Collectors, title: "FILTER SOLUTIONS (DUST FILTER)" },
];

export default function BentoGrid() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="m-3  flex items-center justify-center p-4 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
     
      <div
        className="
          grid gap-4 
          w-full max-w-6xl 
          h-[70vh] 
          auto-rows-[minmax(80px,_1fr)]
          grid-cols-2
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-4
        "
        
      >
        <BentoItem src={images[0].src} title={images[0].title} className="col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-1 md:col-span-2 "  />
        <BentoItem src={images[1].src} title={images[1].title} className=" col-span-1 md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-1" />
        <BentoItem src={images[5].src} title={images[5].title} className="md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-1" />
        <BentoItem src={images[3].src} title={images[3].title} className="md:col-span-2 md:row-span-1 sm:col-span-1 sm:row-span-1" />
        <BentoItem src={images[4].src} title={images[4].title} className="md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-1" />
        <BentoItem src={images[6].src} title={images[6].title} className="md:col-span-3 md:row-span-2 md:col-span-3 sm:col-span-1 sm:row-span-1" />
      </div>
    </div>
  );
}

function BentoItem({ src, title, className }) {
  const navigate = useNavigate()
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate("/products")}
      className={`relative overflow-visible   ${className}`}
    >
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-500"
         
      />
      {/* Overlay with centered title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/40 flex items-center justify-center"
      >
        <span className="text-white text-sm sm:text-xl md:text-2xl font-thin font-roboto text-center px-2">
          {title}
        </span>
      </motion.div>
    </motion.div>
  );
}
