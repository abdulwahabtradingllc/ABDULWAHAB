import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Logo1 from '../assets/images/logo1.png'
import Logo2 from '../assets/images/logo2.png'
import Logo3 from '../assets/images/logo3.png'
import Logo4 from '../assets/images/logo4.png'
import Logo5 from '../assets/images/logo5.png'
import Logo6 from '../assets/images/logo6 (2).webp'
import Logo7 from '../assets/images/logo7.png'
import Logo8 from '../assets/images/logo8.png'
import Logo9 from '../assets/images/logo9.png'
import Logo10 from '../assets/images/logo10.png'


const officeBrands = [
  { name: "Logo1", logo: Logo1 },
  { name: "Logo2", logo: Logo2 },
  { name: "Logo3", logo: Logo3 },
  { name: "Logo4", logo: Logo4 },
  { name: "Logo5", logo: Logo5 },
  { name: "Logo6", logo: Logo6 },
  { name: "Logo7", logo: Logo7 },
  { name: "Logo8", logo: Logo8 },
  { name: "Logo9", logo: Logo9 },
  { name: "Logo10", logo: Logo10 },
 
];

export default function OfficeSupplies() {
  return (
    <div className="relative py-14 px-6 text-center bg-white bg-cover bg-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-thin text-black font-roboto tracking-wide">
          Our Clients
        </h2>
      </motion.div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {officeBrands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <div className="w-32 h-20 sm:w-36 sm:h-24 flex items-center justify-center bg-transparent hover:scale-105 transition-transform duration-300">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
