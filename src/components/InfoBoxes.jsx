
// src/components/InfoBoxes.jsx
import React from "react";

const InfoBoxes = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-futuristic text-center text-gray-800 mb-14">
          The Future We’re Building
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 transition border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-orange-600 mb-2">AI Research</h3>
            <p className="text-gray-700">
              Conducting cutting-edge research in artificial intelligence and machine learning to push the boundaries of technology.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 transition border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Software Development</h3>
            <p className="text-gray-700">
              Building software solutions from mobile to web apps using modern technologies and agile development practices.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 transition border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-green-600 mb-2">Education & Innovation</h3>
            <p className="text-gray-700">
              Empowering the next generation with AI literacy and creative thinking through workshops and programs like ACC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;