import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const video1 = new URL("../assets/videos/video1.mp4", import.meta.url).href;
const video2 = new URL("../assets/videos/video6.mp4", import.meta.url).href;
const video3 = new URL("../assets/videos/video5.mp4", import.meta.url).href;
const video4 = new URL("../assets/videos/video3.mp4", import.meta.url).href;
const video5 = new URL("../assets/videos/video2.mp4", import.meta.url).href;

const services = [
  {
    title: "IRON & STEEL",
    description:
      "Delivering strength and precision with our premium range of iron and steel products. From raw materials to industrial tools and maintenance components, we ensure consistent performance, high durability, and global-grade quality for modern infrastructure and machinery.",
    image: video1,
  },
  {
    title: "ALUMINIUM",
    description:
      "Providing high-grade raw materials, smelting technology, and sustainability-driven aluminum solutions. We offer a complete range of aluminum products and support industrial clients with lightweight, corrosion-resistant materials suitable for manufacturing, construction, and engineering applications.",
    image: video2,
  },
  {
    title: "OIL & GAS",
    description:
      "Our oil and gas division delivers reliable process equipment, precision tools, and energy-efficient solutions for exploration, production, and refining. We empower energy industries with innovative technologies that drive productivity and sustainability.",
    image: video3,
  },
  {
    title: "CEMENT INDUSTRY",
    description:
      "Optimizing cement production with automation, control systems, and durable parts. We provide engineering solutions that reduce downtime, increase productivity, and promote sustainable industrial practices for the global cement sector.",
    image: video4,
  },
  {
    title: "GLASS INDUSTRY",
    description:
      "Supporting glass manufacturers with raw materials, machinery, and precision processing technologies. Our innovative systems ensure clarity, consistency, and energy efficiency throughout the glass production process.",
    image: video5,
  },
];

const Services = () => {
  return (
 <section className="w-full min-h-screen pt-16 sm:pt-20 overflow-hidden bg-[#1A83C7] text-white">
  {/* Header */}
  <div className="text-center mb-0 px-2 sm:px-4">
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-3xl sm:text-5xl md:text-6xl font-thin mb-4 tracking-wide font-roboto text-gray-100"
    >
      Our Services
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-gray-200 pb-12 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-thin font-roboto"
    >
      We provide cutting-edge industrial materials, tools, and technologies
      that empower global industries to perform better and greener.
    </motion.p>
  </div>

  {/* Swiper Carousel */}
  <Swiper
    modules={[Navigation, Pagination, A11y, Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    loop={true}
    className="w-full"
  >
    {services.map((service, index) => (
      <SwiperSlide key={index}>
        <div className="flex flex-col md:flex-row items-stretch justify-center  relative overflow-hidden w-full h-auto md:h-[80vh]">
          {/* Left Image / Video */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-full overflow-hidden"
          >
            {service.image.endsWith(".mp4") ? (
              <video
                src={service.image}
                className="w-full h-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-300 hover:scale-105"
              />
            )}
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 w-full md:w-1/2 px-4 sm:px-8 md:px-10 py-8 sm:py-10 flex flex-col justify-center bg-gray-100"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-thin mb-4 text-black font-roboto text-center md:text-left">
              {service.title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-thin text-justify">
              {service.description}
            </p>
          </motion.div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

  );
};

export default Services;
