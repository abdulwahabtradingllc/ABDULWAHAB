"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star } from "lucide-react";

import thermowell from '../assets/images/thermowell.jpg';
import guages from '../assets/images/Guages.jpg';
import indicators from '../assets/images/indicators.jpg';
import cables from '../assets/images/cables.jpg';
import steelShots from '../assets/images/steelShot.jpg';
import solenoidValves from '../assets/images/solenoidValve.jpg';
import Collectors from '../assets/images/Collectors-Hepas.jpg';
import ceramicBlanket from '../assets/images/ceramicBlanket.jpg';
import bricks from '../assets/images/bricks.jpg';
import mortar from '../assets/images/mortar.jpeg';
import steel from '../assets/images/steelbars.jpeg';
import processValves from '../assets/images/processValves.jpeg';
import cylinders from '../assets/images/cylinders.png';
import gaskets from '../assets/images/gaskets.jpeg';
import coating from '../assets/images/marineCoating.jpg';
import battery from '../assets/images/battery.jpg';
import liquidFilter from '../assets/images/liquidFilter.jpg';
//import airFilter from '../assets/images/airfilter.jpg';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const allProducts = [
  { id: 1, title: "THERMOCOUPLE / THERMOWELL / RTD’S", desc: "High accuracy and durable temperature sensors for industrial applications.", category: "Temperature", image: thermowell, price: "AED 120.00", rating: 4.5 },
  { id: 2, title: "GAUGES / TRANSMITTERS", desc: "Reliable measurement and transmission of pressure and process data.", category: "Pressure", image: guages, price: "AED 89.00", rating: 4.2 },
  { id: 3, title: "INDICATORS / CONTROLLERS", desc: "Smart display and control systems for industrial automation.", category: "Automation", image: indicators, price: "AED 199.00", rating: 4.6 },
  { id: 4, title: "CABLES", desc: "Premium-grade thermocouple and signal cables with superior insulation.", category: "Electrical", image: cables, price: "AED 45.00", rating: 4.1 },
  { id: 5, title: "STEEL SHOTS / GRITS", desc: "High-strength blasting materials for cleaning and surface finishing.", category: "Materials", image: steelShots, price: "AED 65.00", rating: 4.0 },
  { id: 6, title: "CERAMIC BLANKETS & ACCESSORIES", desc: "High-temperature insulation materials for furnace and kiln applications.", category: "Refractory", image: ceramicBlanket, price: "AED 250.00", rating: 4.7 },
  { id: 7, title: "REFRACTORY BRICKS", desc: "Durable heat-resistant bricks for lining furnaces, kilns, and reactors.", category: "Refractory", image: bricks, price: "AED 18.00", rating: 4.3 },
  { id: 8, title: "REFRACTORY MORTAR", desc: "High-bonding mortar for joining refractory bricks in high-temperature systems.", category: "Refractory", image: mortar, price: "AED 35.00", rating: 4.2 },
  { id: 9, title: "STEEL ROUND BARS", desc: "Precision-engineered round bars with high tensile strength for industrial use.", category: "Materials", image: steel, price: "AED 300.00", rating: 4.4 },
  { id: 10, title: "PROCESS VALVES", desc: "Durable industrial valves for precise control of process flow and pressure.", category: "Flow Control", image: processValves, price: "AED 420.00", rating: 4.6 },
  { id: 11, title: "SOLENOID VALVES", desc: "Electrically operated valves for automation of fluid and gas control systems.", category: "Automation", image: solenoidValves, price: "AED 150.00", rating: 4.3 },
  { id: 12, title: "PNEUMATIC CYLINDERS", desc: "High-performance actuators for efficient motion control in automation systems.", category: "Pneumatics", image: cylinders, price: "AED 280.00", rating: 4.5 },
  { id: 13, title: "FILTER SOLUTIONS (DUST FILTER)", desc: "Industrial dust filtration systems ensuring clean air and equipment protection.", category: "Filtration", image: Collectors, price: "AED 990.00", rating: 4.4 },
 // { id: 14, title: "FILTER SOLUTIONS (AIR FILTER)", desc: "Efficient air filtration for clean airflow, equipment protection, and improved performance.", category: "Filtration", image: airFilter, price: "AED 220.00", rating: 4.1 },
  { id: 15, title: "FILTER SOLUTIONS (LIQUID FILTER)", desc: "Reliable liquid filtration ensuring purity, system efficiency, and reduced maintenance.", category: "Filtration", image: liquidFilter, price: "AED 350.00", rating: 4.2 },
  { id: 16, title: "METALLIC GASKETS (ALL TYPES)", desc: "Leak-proof sealing solutions designed for high-pressure and high-temperature applications.", category: "Sealing Solutions", image: gaskets, price: "AED 75.00", rating: 4.0 },
  { id: 17, title: "INDUSTRIAL / MARINE COATINGS", desc: "Protective coatings engineered to resist corrosion and harsh marine environments.", category: "Surface Protection", image: coating, price: "AED 180.00", rating: 4.3 },
  { id: 18, title: "BATTERY HEALTH MONITORING SYSTEM", desc: "Real-time monitoring solution to track battery performance and prevent failures.", category: "Electronics", image: battery, price: "AED 1,250.00", rating: 4.6 },
];

function Rating({ value }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex items-center gap-1 text-sm">
      {[...Array(full)].map((_, i) => <Star key={`f${i}`} size={14} className="text-yellow-400 fill-yellow-400" />)}
      {half && <Star key="half" size={14} className="text-yellow-400 fill-yellow-400" style={{ clipPath: "inset(0 50% 0 0)" }} />}
      {[...Array(empty)].map((_, i) => <Star key={`e${i}`} size={14} className="text-gray-300" />)}
    </div>
  );
}

export default function Commodities() {
  const [likedProducts, setLikedProducts] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleLike = (id) => {
    setLikedProducts(prevLiked => ({
      ...prevLiked,
      [id]: !prevLiked[id]
    }));
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 pt-16 md:pt-20 md:p-12 bg-gray-50">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="z-10 text-center  md:text-left max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl mt-7 font-poppins font-thin text-[#1A83C7]">
              Our Industrial Products
            </h2>
            <center>
   <p className="max-w-3xl mx-auto md:mx-0 text-sm md:text-base mt-3 font-light text-gray-700 leading-snug">
              Through our strong global sourcing network, <span className="font-bold">ABDULWAHAB TRADING LLC</span> connects you to world-class manufacturers and suppliers, offering only the finest quality products.
            </p>
            </center>
         
          </motion.div>

          {/* Product Grid */}
          <section className="relative max-w-7xl mx-auto px-0 py-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {allProducts.map((product, idx) => {
                const cardVariants = {
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: idx * 0.03 } },
                };

                const isLiked = likedProducts[product.id];
                const heartClass = isLiked 
                    ? "text-red-500 fill-red-500"
                    : "text-gray-600 hover:text-red-500 hover:fill-red-500";

                return (
                  <motion.article key={product.id} variants={cardVariants} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                    <div className="relative">
                      <div className="absolute z-20 left-3 top-3">
                        <span className="inline-block bg-yellow-400 text-xs font-medium text-black px-2 py-1 rounded">Best Seller</span>
                      </div>

                      <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 250, damping: 20 }} className="w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                        <img src={product.image} alt={product.title} className="object-cover w-full h-full" loading="lazy" />
                      </motion.div>

                      <div className="absolute inset-0 z-30 flex items-end justify-center pointer-events-none">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4 pointer-events-auto">
                         {/*  <div className="flex gap-2">
                            <button onClick={() => handleLike(product.id)} aria-label="Add to wishlist" className="flex items-center gap-2 px-3 py-2 bg-white bg-opacity-90 rounded-full shadow hover:bg-opacity-100">
                              <Heart size={16} className={heartClass} /> 
                              <span className="text-xs">Wishlist</span>
                            </button>
                            <button aria-label="Quick view" className="flex items-center gap-2 px-3 py-2 bg-white bg-opacity-90 rounded-full shadow hover:bg-opacity-100">
                              <ShoppingCart size={16} />
                              <span className="text-xs">Enquire</span>
                            </button>
                          </div> */}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 flex flex-col gap-3">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2" title={product.title}>
                        {product.title}
                      </h3>

                      <p className="text-xs text-gray-500 line-clamp-2">{product.desc}</p>

                      <div className="flex items-center justify-between mt-2">
                       {/*  <div className="flex items-center gap-2">
                          <Rating value={product.rating} />
                          <span className="text-xs text-gray-500">({(product.rating * 20).toFixed(0)})</span>
                        </div> */}
                      </div>

                      {/* <div className="mt-2 flex gap-2">
                        <button className="w-12 flex-shrink-0 flex items-center justify-center rounded-md border border-gray-200 bg-white hover:bg-gray-100 transition" aria-label="Add to wishlist" onClick={() => handleLike(product.id)}>
                          <Heart size={16} className={heartClass} />
                        </button>
                      </div> */}
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </section>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}
