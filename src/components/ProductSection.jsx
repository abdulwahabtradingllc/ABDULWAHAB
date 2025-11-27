"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BentoGrid from "./bentogrid";
import { ArrowForward } from "@mui/icons-material";

export default function ProductSection() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-full min-h-[90vh] items-center px-8 py-10 md:px-19 bg-[#0183c4] overflow-visible">
      {/* LEFT TEXT */}
      <div className="flex w-full flex-col justify-center items-start md:items-center px-5 text-center md:text-left">
        <div className="text-center my-12 px-4">
          {/* Heading Animation */}
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-thin mb-4 tracking-wide font-roboto text-white"
          >
            Explore Our Products
          </motion.h1>

          {/* Paragraph Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto font-thin font-roboto"
          >
            Through our strong global sourcing network,{" "}
            <span className="font-semibold text-white">ABDULWAHAB TRADING LLC</span> connects you to
            world-class manufacturers and suppliers, offering only the finest quality products.
          </motion.p>
        </div>
      </div>

      {/* Bento Grid with visible shadow */}
      <div className="relative overflow-visible">
        <BentoGrid />
      </div>

      {/* Button */}
      <div className="w-full flex justify-center">
        <motion.button
          className="relative px-8 py-3 rounded-full font-light font-roboto text-white bg-white bg-opacity-20 backdrop-blur-md border border-white/30 transition-all duration-300 hover:bg-opacity-30 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-105 m-10"
          onClick={() => navigate("/products")}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <div className="flex">
            Explore
            <motion.span
              className="ms-3 flex"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowForward />
            </motion.span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}
