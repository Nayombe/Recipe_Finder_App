import React from "react";

export default function Navbar({ toggleTheme, darkMode }) {
  return (
    <header className="bg-orange-500 text-white py-4 shadow sticky top-0 z-50 flex justify-between items-center px-6">
      <h1 className="text-2xl font-bold flex items-center gap-2">🍴 Recipe Finder</h1>
      <nav className="hidden md:flex gap-8">
        <a href="/" className="hover:text-yellow-300">Home</a>
        <a href="/favorites" className="hover:text-yellow-300">Favorites</a>
      </nav>
      <button
        onClick={toggleTheme}
        className="bg-white text-orange-600 px-3 py-2 rounded-full font-semibold border border-orange-400 hover:bg-orange-100 transition"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}
