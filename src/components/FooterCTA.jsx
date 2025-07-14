// src/components/FooterCTA.jsx
import React from "react";

const FooterCTA = () => {
  return (
    <section className="bg-orange-600 py-16 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-futuristic mb-6">
          Ready to Collaborate with Africa’s Leading AI Innovators?
        </h2>
        <a
          href="/contact"
          className="inline-block mt-4 bg-white text-orange-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default FooterCTA;