import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

export default function App() {
  const [favorites, setFavorites] = useState(() =>
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [page, setPage] = useState("home");

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    document.body.classList.toggle("bg-gray-900", darkMode);
    document.body.classList.toggle("text-white", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  function toggleFavorite(meal) {
    if (favorites.find((f) => f.idMeal === meal.idMeal)) {
      setFavorites(favorites.filter((f) => f.idMeal !== meal.idMeal));
    } else {
      setFavorites([...favorites, meal]);
    }
  }

  return (
    <div>
      <Navbar
        toggleTheme={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
      />
      {page === "home" ? (
        <Home onFavorite={toggleFavorite} />
      ) : (
        <Favorites
          favorites={favorites}
          onRemove={(id) => setFavorites(favorites.filter((f) => f.idMeal !== id))}
        />
      )}
      <footer className="bg-gray-100 text-gray-600 text-center py-4 mt-10">
        Powered by TheMealDB API
      </footer>
    </div>
  );
}
