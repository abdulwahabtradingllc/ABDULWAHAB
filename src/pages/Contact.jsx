"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { TextField, Button } from "@mui/material";
import contactImg from "../assets/images/contact.jpg";

export default function ContactModernFlipped() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const subject = encodeURIComponent("New Message from Contact Form");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:raju@wahabintl.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      id="contact"
      className="relative min-h-[90vh] w-full flex flex-col md:flex-row overflow-hidden bg-primaryBlue "
    >
      {/* LEFT SIDE - FORM */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-[45%] flex items-center justify-center py-14 px-6 bg-primaryBlue "
        style={{
          clipPath: "polygon(0 0, 96% 0, 89% 100%, 0% 100%)",
        }}
      >
        <div className="w-full max-w-md p-8 sm:p-10 border shadow-white/20 border-white/40 bg-primaryBlue  shadow-lg">
          <h2 className="text-4xl font-thin font-roboto text-center text-white mb-8">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <TextField
              name="name"
              label="Full Name"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.6)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "rgba(255,255,255,0.7)",
                  "&.Mui-focused": {
                    color: "white",
                    transform: "translate(14px, -9px) scale(0.75)",
                  },
                },
              }}
            />

            <TextField
              name="email"
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              InputProps={{
                sx: {
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.6)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "rgba(255,255,255,0.7)",
                  "&.Mui-focused": {
                    color: "white",
                    transform: "translate(14px, -9px) scale(0.75)",
                  },
                },
              }}
            />

            <TextField
              name="message"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              InputProps={{
                sx: {
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.6)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "rgba(255,255,255,0.7)",
                  "&.Mui-focused": {
                    color: "white",
                    transform: "translate(14px, -9px) scale(0.75)",
                  },
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#ffffff",
                "&:hover": { backgroundColor: "#f2f2f2" },
                fontWeight: "thin",
                fontFamily: "roboto",
                color: "#000000",
                py: 1.3,
              }}
            >
              Send Message
            </Button>
          </form>
        </div>
      </motion.div>

      {/* RIGHT SIDE - IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-[55%] h-[340px] sm:h-[440px] md:h-auto flex items-center justify-center overflow-hidden"
      >
        {/* IMAGE */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center contact-img"
          style={{
            backgroundImage: `url(${contactImg})`,
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60 contact-overlay" />

        {/* CONTENT */}
        <div className="relative z-10 text-center md:text-left text-white px-6 sm:px-10 py-10 md:py-14 space-y-5 sm:space-y-6 max-w-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light font-roboto">
            Let’s Connect
          </h2>
          <p className="text-white text-sm sm:text-base font-roboto leading-relaxed">
            Reach out to us for inquiries, collaborations, or project discussions.
            We’d love to hear from you.
          </p>

          <div className="space-y-4 text-white text-sm sm:text-base">
            <div className="flex items-center justify-center font-roboto md:justify-start gap-3">
              <Phone className="text-white" size={20} />
              <span>+971 55 801 67 68 (UAE) / +966 59 883 78 50 (KSA)</span>
            </div>

            <div className="flex items-center font-roboto justify-center md:justify-start gap-3">
              <Mail className="text-white" size={20} />
              <a
                href="mailto:raju@wahabintl.com"
                className="text-white hover:underline font-roboto break-all"
              >
                raju@wahabintl.com
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2 justify-center  md:justify-start">
                <MapPin className="text-white mt-1" size={20} />
                <div className="text-sm  font-roboto sm:text-base">
                  Abdulwahab Trading LLC <br />
                  Silver Home, Hor Al Anz East <br />
                  Abu Hail, Dubai
                </div>
              </div>

              <div className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin className="text-white mt-1" size={20} />
                <div className="text-sm font-roboto sm:text-base">
                  EHAB8674, Bldg: 8674 <br />
                  King Khalid Ibn Abdulaziz <br />
                  Dammam, KSA
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
