import React from "react";

export default function RecipeCard({ meal, onView, onFavorite }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg hover:scale-[1.02] transition">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-lg mb-3 w-full h-40 object-cover" />
      <h3 className="font-semibold italic text-lg">{meal.strMeal}</h3>
      <p className="text-sm text-gray-600 mb-3">{meal.strArea} • {meal.strCategory}</p>
      <div className="flex justify-between">
        <button onClick={() => onView(meal.idMeal)} className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition">
          View
        </button>
        <button onClick={() => onFavorite(meal)} className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500 transition">
          ❤️
        </button>
      </div>
    </div>
  );
}

