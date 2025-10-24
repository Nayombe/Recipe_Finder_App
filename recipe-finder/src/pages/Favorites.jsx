import React from "react";
import RecipeCard from "../components/RecipeCard";

export default function Favorites({ favorites, onView, onRemove }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6 text-orange-600">Your Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">No favorites yet. Add some from Home!</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((fav) => (
            <RecipeCard
              key={fav.idMeal}
              meal={fav}
              onView={onView}
              onFavorite={() => onRemove(fav.idMeal)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

