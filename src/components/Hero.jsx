// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
    {
    src: "https://icog-labs.com/wp-content/uploads/2019/07/IMG_20190710_140947_280.jpg",
    alt: "Innovate Africa"
  },
  {
    src: "https://icog-labs.com/wp-content/uploads/2015/06/icog.jpg",
    alt: "Developer Team"
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-tr from-orange-50 via-white to-orange-100 py-24 text-center overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6}}
          className="text-5xl md:text-6xl font-bold font-futuristic text-black leading-tight mb-6"
        >
          AI Research and <span className="text-orange-500">Software Development</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-700 mb-12"
        >
          iCog Labs is a team of visionary software professionals, dedicated to advancing the frontier of artificial intelligence research and applications and delivering quality products to customers, based in Addis Ababa, Ethiopia.
        </motion.p>

        <motion.div
          key={images[currentIndex].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[300px] w-full mb-10"
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="rounded-xl shadow-xl object-cover w-full h-full transition-all duration-500"
          />
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="https://icog-labs.com/about-us/"
          className="inline-block bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white py-3 px-8 rounded-full shadow-md transition-transform hover:scale-105"
        >
          About iCog Labs
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;