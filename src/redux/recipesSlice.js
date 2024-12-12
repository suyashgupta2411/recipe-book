import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  searchRecipesAPI,
  searchByIngredientsAPI,
  fetchRecipeDetailsAPI,
} from "../api/recipes";

// Thunks for API calls
export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (filters) => await searchRecipesAPI(filters)
);

export const fetchByIngredients = createAsyncThunk(
  "recipes/fetchByIngredients",
  async (ingredients) => await searchByIngredientsAPI(ingredients)
);

export const fetchRecipeDetails = createAsyncThunk(
  "recipes/fetchRecipeDetails",
  async (id) => await fetchRecipeDetailsAPI(id)
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    recipeDetails: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipeDetails.fulfilled, (state, action) => {
        state.recipeDetails = action.payload;
      });
  },
});

export default recipesSlice.reducer;
