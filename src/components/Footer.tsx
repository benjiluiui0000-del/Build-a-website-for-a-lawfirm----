import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full py-8 px-8 bg-[#FFD600]/30 text-[#222] text-center font-medium mt-16">
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
      <span>
        &copy; {new Date().getFullYear()} Nini Law, Las Vegas, NV. All rights reserved.
      </span>
      <span>
        <a
          href="mailto:contact@ninilaw.com"
          className="underline hover:text-black"
        >
          contact@ninilaw.com
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;