'use client';
import React, { useEffect, useState } from 'react';

// SAME ORDER — but using valid HTML ID names
const sections = ["HOME", "ABOUT", "SERVICES", "PRODUCT", "WHY_US", "CONTACT"];

export default function SideDotsNav() {
  const [activeSection, setActiveSection] = useState("HOME");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50 flex flex-col gap-5">
      {sections.map((id) => (
        <button
          key={id}
          onClick={() => handleClick(id)}
          className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
            activeSection === id
              ? 'bg-white border-white scale-110'
              : 'border-white/60 hover:scale-110'
          }`}
        />
      ))}
    </div>
  );
}
