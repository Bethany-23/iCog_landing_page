// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} iCog Labs. All rights reserved.</p>
        <div className="flex space-x-6 text-sm justify-end">
          <a href="/about-us" className="hover:text-orange-400">About</a>
          <a href="/contact" className="hover:text-orange-400">Contact</a>
          <a href="/articles" className="hover:text-orange-400">Articles</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
