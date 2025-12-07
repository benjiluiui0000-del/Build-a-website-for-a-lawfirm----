import React from "react";

const Navbar: React.FC = () => (
  <nav
    className="w-full px-8 py-4 flex items-center justify-between bg-white/80 backdrop-blur-xl shadow-xl sticky top-0 z-50"
    aria-label="Main navigation"
  >
    <div className="flex items-center gap-3">
      <span className="text-3xl font-bold text-[#FFD600]">⚖️</span>
      <span className="text-2xl font-bold text-[#222] tracking-wide font-['Space_Grotesk']">
        Nini Law
      </span>
    </div>
    <div className="hidden md:flex gap-8 text-lg font-medium">
      <a href="#practice-areas" className="hover:text-[#FFD600] transition-all duration-300">
        Practice Areas
      </a>
      <a href="#about" className="hover:text-[#FFD600] transition-all duration-300">
        About
      </a>
      <a href="#contact" className="hover:text-[#FFD600] transition-all duration-300">
        Contact
      </a>
    </div>
    <a
      href="#contact"
      className="ml-4 px-5 py-2 rounded-full bg-[#FFD600] text-black font-bold shadow-lg hover:scale-105 transition-all duration-300"
    >
      Free Consultation
    </a>
  </nav>
);

export default Navbar;