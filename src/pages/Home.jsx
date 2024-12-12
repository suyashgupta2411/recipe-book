import { useEffect } from "react"; // Import React and useEffect
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks
import { fetchRecipes } from "../redux/recipesSlice"; // Import Redux action
import RecipeCard from "../components/RecipeCard"; // Import RecipeCard component
import SearchBar from "../components/SearchBar"; // Import SearchBar component
import Filters from "../components/Filters"; // Import Filters component

const Home = () => {
  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector((state) => state.recipes); // Access Redux state

  // Handle search queries
  const handleSearch = (query) => {
    dispatch(fetchRecipes({ query })); // Dispatch the Redux action for fetching recipes
  };

  // Handle filters
  const handleFilter = (filters) => {
    dispatch(fetchRecipes(filters)); // Dispatch the Redux action with filter parameters
  };

  // Fetch default recipes on page load
  useEffect(() => {
    dispatch(fetchRecipes({})); // Dispatch the action with no filters
  }, [dispatch]);

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      <Filters onFilter={handleFilter} />

      {/* Render loading, error, or recipes */}
      {loading && <p>Loading...</p>}
      {error && (
        <p className="text-red-500">
          Error: {error.message || "Failed to fetch recipes."}
        </p>
      )}
      {!loading && !error && recipes.length === 0 && <p>No recipes found.</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} /> // Pass each recipe to RecipeCard
        ))}
      </div>
    </div>
  );
};

export default Home;
