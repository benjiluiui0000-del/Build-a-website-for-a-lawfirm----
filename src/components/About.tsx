import React from "react";

const About: React.FC = () => (
  <section
    id="about"
    className="py-20 px-8 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto"
    aria-label="About Nini Law"
  >
    <div className="flex-1">
      <img
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
        alt="Attorney at Nini Law"
        className="rounded-2xl shadow-xl border-4 border-[#FFD600]/40 bg-white/60"
      />
    </div>
    <div className="flex-1 space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-[#222] font-['Space_Grotesk']">
        About Nini Law
      </h2>
      <p className="text-lg text-[#444]">
        Founded in the heart of Las Vegas, Nini Law is dedicated to providing top-tier legal services with a personal touch. Our experienced attorneys are committed to achieving the best outcomes for our clients, whether in the courtroom or at the negotiation table.
      </p>
      <ul className="space-y-2 text-[#222]">
        <li>🌟 Over 15 years of legal experience</li>
        <li>🌟 Local expertise in Nevada law</li>
        <li>🌟 Client-focused, transparent communication</li>
      </ul>
    </div>
  </section>
);

export default About;