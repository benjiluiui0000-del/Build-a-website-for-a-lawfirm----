import React from "react";

const areas = [
  {
    icon: "⚖️",
    title: "Criminal Defense",
    desc: "Aggressive representation for criminal charges, protecting your rights every step of the way.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Law",
    desc: "Compassionate guidance for divorce, custody, and family matters.",
  },
  {
    icon: "💼",
    title: "Business Law",
    desc: "Strategic counsel for startups, contracts, and business disputes.",
  },
  {
    icon: "🚗",
    title: "Personal Injury",
    desc: "Fighting for maximum compensation after accidents and injuries.",
  },
];

const PracticeAreas: React.FC = () => (
  <section
    id="practice-areas"
    className="py-20 px-8 bg-white/70 backdrop-blur-xl"
    aria-label="Practice Areas"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-12 text-center font-['Space_Grotesk']">
      Practice Areas
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
      {areas.map((area) => (
        <div
          key={area.title}
          className="flex flex-col items-center bg-[#FFD600]/10 rounded-2xl shadow-xl p-8 gap-4 hover:scale-105 transition-all duration-500"
        >
          <span className="text-4xl">{area.icon}</span>
          <h3 className="text-xl font-bold text-[#FFD600]">{area.title}</h3>
          <p className="text-[#444] text-center">{area.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PracticeAreas;