import React from "react";

const ContactCTA: React.FC = () => (
  <section
    id="contact"
    className="py-20 px-8 bg-[#FFD600]/40 flex flex-col items-center justify-center text-center rounded-3xl max-w-5xl mx-auto shadow-xl mt-16"
    aria-label="Contact Nini Law"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-6 font-['Space_Grotesk']">
      Ready to Protect Your Rights?
    </h2>
    <p className="text-lg text-[#444] mb-8">
      Contact Nini Law today for a free, confidential consultation. Let us fight for you.
    </p>
    <a
      href="mailto:contact@ninilaw.com"
      className="inline-block px-8 py-4 rounded-full bg-[#FFD600] text-black font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
      aria-label="Email Nini Law"
    >
      Email Us: contact@ninilaw.com
    </a>
    <div className="mt-6 text-[#222] font-medium">
      Or call us at <a href="tel:+17025551234" className="underline hover:text-black">702-555-1234</a>
    </div>
  </section>
);

export default ContactCTA;