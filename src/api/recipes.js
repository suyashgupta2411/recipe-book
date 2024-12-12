import axios from "axios";

const API_KEY = "db01051147614e3a9002856c27af9de6";
const BASE_URL = "https://api.spoonacular.com/recipes";

// Common headers
const headers = {
  "Content-Type": "application/json",
};

// Search recipes by query, cuisine, diet, and ingredients
export const searchRecipesAPI = async (params) => {
  const { query, cuisine, diet, ingredients } = params;
  const response = await axios.get(`${BASE_URL}/complexSearch`, {
    headers,
    params: {
      apiKey: API_KEY,
      query,
      cuisine,
      diet,
      includeIngredients: ingredients,
      addRecipeInformation: true,
      number: 10,
    },
  });
  return response.data.results;
};

// Search recipes by ingredients
export const searchByIngredientsAPI = async (ingredients) => {
  const response = await axios.get(`${BASE_URL}/findByIngredients`, {
    headers,
    params: {
      apiKey: API_KEY,
      ingredients: ingredients.join(","),
      number: 10,
      ranking: 1,
      ignorePantry: true,
    },
  });
  return response.data;
};

// Fetch recipe details by ID
export const fetchRecipeDetailsAPI = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}/information`, {
    headers,
    params: { apiKey: API_KEY },
  });
  return response.data;
};
