"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import thermowell from '../assets/images/thermo.png';
import guages from '../assets/images/Guages.jpg';
import cables from '../assets/images/cables.jpeg';
import steelShots from '../assets/images/steelShot.jpg';
import solenoidValves from '../assets/images/solvalves.png';
import Collectors from '../assets/images/Collectors-Hepas.jpg';
import ceramicBlanket from '../assets/images/ceramicBlanket.jpg';
import bricks from '../assets/images/bricks.jpeg';
import mortar from '../assets/images/mortar1.jpeg';
import steel from '../assets/images/steelbars.jpeg';
import processValves from '../assets/images/processValves1.jpeg';
import cylinders from '../assets/images/cylinders.png';
import gaskets from '../assets/images/gaskets.jpeg';
import coating from '../assets/images/marineCoating.jpg';
import battery from '../assets/images/batteryhelth.jpeg';
import liquidFilter from '../assets/images/liquidFilter.jpg';

// NEW PRODUCTS
import insulationJacketing from '../assets/images/insulation.jpeg';
import masterAlloys from '../assets/images/masteralloys.jpeg';
import pigIron from '../assets/images/pigiron.jpeg';
import mgIngots from '../assets/images/Mgingots.jpeg';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ALL PRODUCTS
const allProducts = [
  {
    id: 1,
    title: "THERMOCOUPLE / THERMOWELL / RTD’S / CABLES",
    desc: "High accuracy and durable temperature sensors for industrial applications.",
    category: "Temperature",
    image: [thermowell, cables], // MULTIPLE IMAGES
    price: "AED 120.00",
    rating: 4.5
  },

  { id: 2, title: "GAUGES / TRANSMITTERS", desc: "Reliable measurement and transmission of pressure and process data.", category: "Pressure", image: guages },
  { id: 12, title: "PNEUMATIC CYLINDERS", desc: "High-performance actuators for automation systems.", category: "Pneumatics", image: cylinders },
  { id: 11, title: "SOLENOID VALVES", desc: "Electrically operated valves for fluid/gas control.", category: "Automation", image: solenoidValves },

  { id: 5, title: "STEEL SHOTS / GRITS", desc: "High-strength blasting materials for cleaning & finishing.", category: "Materials", image: steelShots },
  { id: 9, title: "STEEL ROUND BARS", desc: "High tensile round bars for industrial use.", category: "Materials", image: steel },

  { id: 20, title: "MASTER ALLOYS", desc: "Used for alloying control and metallurgical enhancement.", category: "Metallurgy", image: masterAlloys },
  { id: 21, title: "PIG IRON", desc: "Premium-grade pig iron for casting & steelmaking.", category: "Metals", image: pigIron },
  { id: 22, title: "MG INGOTS", desc: "High-purity magnesium ingots for manufacturing.", category: "Metals", image: mgIngots },

  { id: 6, title: "CERAMIC BLANKETS", desc: "High-temp insulation for furnaces & kilns.", category: "Refractory", image: ceramicBlanket },
  { id: 7, title: "REFRACTORY BRICKS", desc: "Heat-resistant bricks for furnaces.", category: "Refractory", image: bricks },
  { id: 8, title: "REFRACTORY MORTAR", desc: "High-bond mortar for refractory systems.", image: mortar },

  { id: 10, title: "PROCESS VALVES", desc: "Industrial valves for precise flow control.", category: "Flow Control", image: processValves },
  { id: 16, title: "METALLIC GASKETS", desc: "Leak-proof high-pressure sealing solutions.", image: gaskets },
  { id: 17, title: "INDUSTRIAL / MARINE COATINGS", desc: "Corrosion-resistant protective coatings.", image: coating },

  { id: 13, title: "FILTER SOLUTIONS (DUST FILTER)", desc: "Clean-air dust filtration systems.", image: Collectors },
  { id: 15, title: "FILTER SOLUTIONS (LIQUID FILTER)", desc: "High-efficiency liquid filtration.", image: liquidFilter },

  { id: 18, title: "BATTERY HEALTH MONITORING", desc: "Real-time battery performance monitoring.", image: battery },

  { id: 19, title: "FLEXIBLE INSULATION JACKETING", desc: "Thermal protection insulation jacketing.", image: insulationJacketing },
];

export default function Commodities() {
  const [slideshowIndex, setSlideshowIndex] = useState(0);

  // AUTO-SLIDES ONLY FOR PRODUCT 1
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideshowIndex((prev) => prev === 0 ? 1 : 0);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen p-6 pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
 <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl mt-7 font-poppins font-thin text-[#0183c4]">
              Our Industrial Products
            </h2>
            <center>
   <p className="max-w-3xl mx-auto md:mx-0 text-sm md:text-base mt-3 font-light text-gray-700 leading-snug">
              Through our strong global sourcing network, <span className="font-bold">ABDULWAHAB TRADING LLC</span> connects you to world-class manufacturers and suppliers, offering only the finest quality products.
            </p>
            </center>
         
          </motion.div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {allProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-3">

                {/* IMAGE AREA */}
                <div className="w-full h-56 bg-gray-100 rounded-md overflow-hidden flex justify-center items-center">

                {Array.isArray(product.image) ? (
  <motion.img
    key={slideshowIndex}
    src={product.image[slideshowIndex]}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="w-full h-full object-cover"
  />
) : (
  <img
    src={product.image}
    className="w-full h-full object-cover"
  />
)}


                </div>

                {/* TEXT AREA */}
                <h3 className="mt-3 text-sm font-medium text-gray-900 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {product.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
