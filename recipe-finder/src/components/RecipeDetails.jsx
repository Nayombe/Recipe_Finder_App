import React from "react";

export default function RecipeDetails({ meal, onClose }) {
  if (!meal) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) ingredients.push(`${ingredient} - ${measure}`);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto p-6 relative">
        <button onClick={onClose} className="text-red-500 font-bold text-xl absolute top-4 right-6">✖</button>
        <h2 className="text-2xl font-bold mb-4 text-orange-600">{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-lg mb-6" />
        <p className="text-gray-700 mb-4"><strong>Category:</strong> {meal.strCategory} | <strong>Area:</strong> {meal.strArea}</p>
        <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          {ingredients.map((i, index) => <li key={index}>{i}</li>)}
        </ul>
        <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
        <p className="text-gray-700 whitespace-pre-line mb-6">{meal.strInstructions}</p>
        {meal.strYoutube && (
          <iframe
            className="w-full h-64 rounded-lg"
            src={meal.strYoutube.replace("watch?v=", "embed/")}
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
