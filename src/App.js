// src/App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import InfoBoxes from "./components/InfoBoxes";
import Mission from "./components/Mission";
import Partners from "./components/Partners";
import FooterCTA from "./components/FooterCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-poppins bg-white text-gray-900">
      <div className="max-w-[1440px] mx-auto px-6">
        <Header />
        <Hero />
        <Slider />
        <InfoBoxes />
        <Mission />
        <Partners />
        <FooterCTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;