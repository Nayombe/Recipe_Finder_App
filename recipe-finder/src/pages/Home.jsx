import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import RecipeDetails from "../components/RecipeDetails";

export default function Home({ onFavorite }) {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  async function fetchRecipes() {
    if (!query) return;
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();
    setMeals(data.meals || []);
  }

  async function viewRecipe(id) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    setSelectedMeal(data.meals[0]);
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-6 text-orange-600">Discover Amazing Recipes </h2>
      <SearchBar value={query} onChange={setQuery} onSearch={fetchRecipes} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} onView={viewRecipe} onFavorite={onFavorite} />
        ))}
      </div>
      {selectedMeal && <RecipeDetails meal={selectedMeal} onClose={() => setSelectedMeal(null)} />}
    </div>
  );
}


