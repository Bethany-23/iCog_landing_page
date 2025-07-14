// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="backdrop-blur-lg bg-black/60 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold tracking-wide font-logo">
          <span className="text-orange-500">i</span>Cog Labs
        </a>
        <nav className="hidden md:flex space-x-6 font-medium font-body">
          <a href="/" className="hover:text-orange-400 transition">Home</a>
          <a href="/about-us" className="hover:text-orange-400 transition">About Us</a>
          <a href="/analytics-3" className="hover:text-orange-400 transition">Solutions</a>
          <a href="/articles" className="hover:text-orange-400 transition">Articles</a>
          <a href="/transparent_ai" className="hover:text-orange-400 transition">Transparent AI</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;