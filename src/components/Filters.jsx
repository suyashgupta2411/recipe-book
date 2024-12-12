import PropTypes from "prop-types"; // Import PropTypes for validation

const Filters = ({ onFilter }) => {
  const handleFilter = (event) => {
    event.preventDefault();

    const cuisine = event.target.cuisine.value.trim();
    const diet = event.target.diet.value.trim();
    const ingredients = event.target.ingredients.value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);

    onFilter({ cuisine, diet, ingredients });
  };

  return (
    <form onSubmit={handleFilter} className="mb-4">
      <input
        name="cuisine"
        type="text"
        placeholder="Cuisine (e.g., Italian)"
        className="p-2 border border-gray-300 rounded w-full mb-2"
      />
      <input
        name="diet"
        type="text"
        placeholder="Diet (e.g., Vegetarian)"
        className="p-2 border border-gray-300 rounded w-full mb-2"
      />
      <input
        name="ingredients"
        type="text"
        placeholder="Ingredients (e.g., Chicken, Rice)"
        className="p-2 border border-gray-300 rounded w-full mb-2"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Apply Filters
      </button>
    </form>
  );
};

// Add PropTypes for validation
Filters.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filters;
