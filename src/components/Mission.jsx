// src/components/Mission.jsx
import React from "react";

const Mission = () => {
  return (
    <section className="bg-[#FFF3E0] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-futuristic text-orange-600 mb-8">Our Mission</h2>
        <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-12">
          At iCog Labs, we are committed to pioneering artificial intelligence research and applying it to real-world challenges across Africa and beyond. Our mission is to make AI accessible, ethical, and impactful.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {["Research", "Innovation", "Empowerment"].map((item, i) => (
            <div
              key={i}
              className="bg-white text-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-2">{item}</h3>
              <p>
                {item === "Research" && "Pushing the boundaries of AI through rigorous scientific exploration."}
                {item === "Innovation" && "Building cutting-edge technologies that transform industries."}
                {item === "Empowerment" && "Equipping youth and professionals with AI literacy and tools."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;