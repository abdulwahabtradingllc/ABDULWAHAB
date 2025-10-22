import React from "react";
import { motion } from "framer-motion";
import Logo11 from "../assets/images/logo11.jpg";
import Logo12 from "../assets/images/logo12.jpg";
import Logo13 from "../assets/images/logo13.jpg";

export default function PrincipalSuppliers() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* 🔵 Soft Brand Bubbles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-64 h-64 bg-[#1A83C7]/20 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-[#1A83C7]/30 rounded-full blur-3xl bottom-20 right-10"></div>
        <div className="absolute w-48 h-48 bg-[#1A83C7]/10 rounded-full blur-2xl top-1/2 left-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* 🏷 Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black tracking-wide font-roboto">
            Our Principal Suppliers
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-700 pb-12 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light font-roboto"
        >
          We are proud to collaborate with world-class suppliers who share our
          values of quality, innovation, and reliability.
        </motion.p>

        {/* 🌍 Supplier Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
          <SupplierCard img={Logo11} name="Pneumatic Solutions" />
          <SupplierCard img={Logo12} name="Industrial Temperature Control" />
          <SupplierCard img={Logo13} name="Embedded & IoT Solutions." />
        </div>
      </div>
    </section>
  );
}

function SupplierCard({ img, name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center text-center"
    >
      {/* 🖼 Circular Logo Container */}
      <div className="w-56 h-56 rounded-full border-2 border-gray-200 hover:border-[#1A83C7]/50 bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-44 h-44 object-contain rounded-full transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* 🔖 Optional Supplier Name */}
      <h3 className="mt-4 text-lg font-thin  text-gray-700 font-roboto">
        {name}
      </h3>
    </motion.div>
  );
}
