import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PracticeAreas from "../components/PracticeAreas";
import About from "../components/About";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

const Home: React.FC = () => (
  <div className="bg-[#fffbea] font-['Space_Grotesk'] min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <Hero />
      <PracticeAreas />
      <About />
      <ContactCTA />
    </main>
    <Footer />
  </div>
);

export default Home;