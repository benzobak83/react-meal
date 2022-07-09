import { API_URL } from "./config.js";

const getMealById = async (mealId) => {
  const responce = await fetch(`${API_URL}lookup.php?i=${mealId}`);
  return await responce.json();
};

const getAllCategories = async () => {
  const responce = await fetch(`${API_URL}categories.php`);
  return await responce.json();
};

const getFilterByCategory = async (catFilter) => {
  const responce = await fetch(`${API_URL}filter.php?c=${catFilter}`);
  return await responce.json();
};

export { getMealById, getAllCategories, getFilterByCategory };
