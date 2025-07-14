// src/components/Partners.jsx

import { FaProjectDiagram, FaHandshake, FaNetworkWired, FaHeart } from "react-icons/fa";

const partnerIcons = [
  {
    Icon: FaProjectDiagram,
    name: "SingularityNET"
  },
  {
    Icon: FaHandshake,
    name: "Novamente LLC"
  },
  {
    Icon: FaNetworkWired,
    name: "Biomind LLC"
  },
  {
    Icon: FaHeart,
    name: "Humanity+"
  }
];

const Partners = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-futuristic text-gray-800 mb-6">Our Partners</h2>
        <div className="flex flex-wrap justify-center gap-12 items-center">
          {partnerIcons.map(({ Icon, name }, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <Icon className="text-orange-500 text-4xl hover:scale-110 transition-transform" />
              <span className="text-sm text-gray-700">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
