import React from "react";

const Hero: React.FC = () => (
  <section
    className="relative flex flex-col md:flex-row items-center justify-between px-8 py-20 md:py-32 gap-12 bg-gradient-to-br from-[#FFFDE4] via-[#FFF9B0] to-[#FFD600]/40"
    aria-label="Hero section"
  >
    <div className="max-w-xl space-y-8">
      <h1 className="text-4xl md:text-6xl font-bold text-[#222] leading-tight font-['Space_Grotesk']">
        Trusted Legal Expertise in <span className="text-[#FFD600]">Las Vegas</span>
      </h1>
      <p className="text-lg md:text-xl text-[#444] font-medium">
        Nini Law delivers personalized, results-driven legal solutions for individuals and businesses in Nevada. Your justice is our mission.
      </p>
      <a
        href="#contact"
        className="inline-block mt-4 px-8 py-4 rounded-full bg-[#FFD600] text-black font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
      >
        Schedule Your Free Consultation
      </a>
    </div>
    <div className="w-full md:w-[420px] flex-shrink-0">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        alt="Lawyer in Las Vegas"
        className="rounded-3xl shadow-2xl border-4 border-[#FFD600]/60 bg-white/60 backdrop-blur-xl"
      />
    </div>
    <div className="absolute left-0 bottom-0 w-32 h-32 bg-[#FFD600]/30 rounded-full blur-3xl -z-10"></div>
    <div className="absolute right-0 top-0 w-24 h-24 bg-[#FFD600]/20 rounded-full blur-2xl -z-10"></div>
  </section>
);

export default Hero;