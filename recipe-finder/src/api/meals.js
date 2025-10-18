const BASE = "https://www.themealdb.com/api/json/v1/1";

export async function searchMeals(q) {
  try {
    const url = `${BASE}/search.php?s=${encodeURIComponent(q)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network response not ok");
    const json = await res.json();
    return json.meals;
  } catch (err) {
    throw err;
  }
}

export async function lookupMeal(id) {
  try {
    const url = `${BASE}/lookup.php?i=${encodeURIComponent(id)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network response not ok");
    const json = await res.json();
    return json.meals ? json.meals[0] : null;
  } catch (err) {
    throw err;
  }
}

