"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { CheckCircle, Lightbulb, Shield } from "lucide-react";
import Navbar from "../components/Navbar";

const features = [
  {
    icon: <CheckCircle className="text-3xl text-cyan-300" />,
    title: "Expertise",
    description:
      "Our skilled professionals bring years of hands-on industry experience, ensuring precise, efficient, and effective solutions.",
  },
  {
    icon: <Lightbulb className="text-3xl  text-cyan-300" />,
    title: "Innovation",
    description:
      "We constantly embrace new technologies and creative approaches to deliver cutting-edge, forward-looking results.",
  },
  {
    icon: <Shield className="text-3xl  text-cyan-300" />,
    title: "Reliability",
    description:
      "Count on us for consistent quality, transparent communication, and dependable results across every project.",
  },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: "-50px" });
  const headingControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      headingControls.start("visible");
    } else {
      headingControls.start("hidden");
    }
  }, [isInView, headingControls]);

  return (
    <>
      <div className="relative font-sans">
        <Navbar />
      </div>

      {/* Background with Parallax */}
      <div
        className="relative min-h-[80vh] bg-cover bg-center bg-fixed"
        style={{
          // backgroundImage: "url('/images/whyus.jpg')",
          background: 'linear-gradient(to bottom, #1A83C7, #012b2b)'
        }}
      >
        <div className="bg-primaryBlue  bg-opacity-60 min-h-[80vh] flex items-center">
          <section
            ref={headingRef}
            className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full"
          >
            {/* Title Section */}
            <motion.div
              className="text-center mb-12"
              variants={fadeUp}
              initial="hidden"
              animate={headingControls}
              whileHover={{ scale: 1.02 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                scale: { duration: 0.4 },
              }}
            >

              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
              >
                <h2 className="text-5xl sm:text-6xl  font-roboto font-thin text-white ">
                  Why Choose Us
                </h2>
                <p className="mt-6 text-gray-300 text-sm sm:text-xl font-roboto font-thin max-w-3xl mx-auto leading-relaxed">
                  We are committed to excellence, innovation, and reliability —
                  delivering results that exceed expectations across industries.
                </p>
              </motion.div>
            </motion.div>

            {/* Feature Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{
                    y: -4,
                    scale: 1.04,
                    backgroundColor: "rgba(6, 182, 212, 0.18)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="border-l-2 border-cyan-300 pl-5 cursor-pointer transition-transform duration-300 p-5">
                  <div className="flex items-start gap-3 mb-2">
                    {item.icon}
                    <h3 className="text-xl font-thin tracking-wide text-white font-roboto">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-200  text-sm sm:text-base font-roboto font-thin leading-snug max-w-xl ">
                    {item.description}
                  </p>

                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
}
