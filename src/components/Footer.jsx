"use client";

import {
  PhoneCall,
  MailCheck,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
} from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/images/Companylogo.png';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const services = [
    'Aluminum (Primary & Secondary)',
    'Iron & Steel Industry',
    'Oil & Gas',
    'Cement Industry',
    'Glass Industry',
  ];

  const products = [
  "Thermocouple /RTD's",
  "Transmitters",
  "Cables",
  "Process Valves",
  "Filter Solutions",
  "Solenoid Valves",
  "Indicators",
  "PneumaticCylinders"
];


  const socialIcons = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  // Scroll to section on homepage
  const handleServiceClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'SERVICES' } });
    } else {
      const section = document.getElementById('SERVICES');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to top of products page
  const handleProductClick = () => {
    if (location.pathname !== '/products') {
      navigate('/products', { state: { scrollToTop: true } });
    } else {
      // <-- FIXED: scroll page to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderServiceLinks = (arr) =>
    arr.map((item, i) => (
      <li
        key={i}
        className="mb-1 last:mb-0 cursor-pointer hover:text-[#5bd1ff] transition-colors duration-200 text-[13px] text-gray-300"
        onClick={handleServiceClick}
      >
        {item}
      </li>
    ));

  const renderProductLinks = (arr) =>
    arr.map((item, i) => (
      <li
        key={i}
        className="mb-1 last:mb-0 cursor-pointer hover:text-[#5bd1ff] transition-colors duration-200 text-[13px] text-gray-300"
        onClick={handleProductClick}
      >
        {item}
      </li>
    ));

  return (
    <footer className="relative w-full bg-black text-gray-200 px-6 sm:px-10 lg:px-14 pt-4">
      {/* Main Footer Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start py-6 px-4 sm:px-8 gap-4">
        {/* Logo Section */}
        <div className="flex flex-col items-start space-y-2 w-full md:w-1/4">
          <img src={Logo} alt="Company Logo" className="w-32 md:w-36 object-contain" />
          <h3 className="uppercase font-thin mb-2 text-[12px] tracking-widest text-white font-roboto">
            ABDULWAHAB TRADING LLC
          </h3>
          <p className="text-[11px] text-gray-400 leading-snug">
            Supplying industrial solutions with precision and reliability across the Gulf region.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="uppercase font-thin mb-1 text-[12px] tracking-widest text-white font-roboto">
            Our Services
          </h3>
          <ul className="space-y-0.5">{renderServiceLinks(services)}</ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="uppercase font-thin mb-1 text-[12px] tracking-widest text-white font-roboto">
            Products
          </h3>
          <ul className="space-y-0.5">{renderProductLinks(products)}</ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="uppercase font-thin mb-1 text-[12px] tracking-widest text-white font-roboto">
            Get In Touch
          </h3>
          <div className="space-y-1 text-[12px] text-gray-300 leading-tight">
            <div className="flex items-center space-x-2 hover:text-[#5bd1ff] transition-colors duration-200">
              <PhoneCall size={14} className="text-[#1A83C7]" />
              <a href="tel:+971558016768" className="hover:underline">
                +971 55 801 6768
              </a>
            </div>
            <div className="flex items-center space-x-2 hover:text-[#5bd1ff] transition-colors duration-200">
              <MailCheck size={14} className="text-[#1A83C7]" />
              <a href="mailto:raju@wahabintl.com" className="hover:underline">
                raju@wahabintl.com
              </a>
            </div>
            <div className="flex items-center space-x-2 hover:text-[#5bd1ff] transition-colors duration-200">
              <MapPin size={14} className="text-[#1A83C7]" />
              <span>Dubai, U.A.E</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="w-full border-t border-cyan-900/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 py-3 gap-2 text-center md:text-left">
          {/* Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {socialIcons.map(({ icon: Icon, label, href }, idx) => (
              <a
                key={idx}
                href={href}
                aria-label={label}
                className="flex items-center text-[12px] text-gray-300 hover:text-[#5bd1ff] transition-colors duration-200"
              >
                <Icon size={16} className="text-[#1A83C7] mr-1" />
                {label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[10px] md:text-[11px] font-light text-gray-400 tracking-wide">
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-[#1A83C7]">Abdulwahab Trading LLC</span> — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
