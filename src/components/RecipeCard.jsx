import PropTypes from "prop-types"; // Import PropTypes for validation
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <div className="p-4 bg-white shadow rounded">
      <img
        src={recipe.image || "https://via.placeholder.com/150"}
        alt={recipe.title || "Recipe"}
        className="w-full h-32 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">
        {recipe.title || "Untitled Recipe"}
      </h2>
      <Link to={`/recipe/${recipe.id}`} className="text-blue-500 mt-4 block">
        View Details
      </Link>
    </div>
  );
};

// Add PropTypes for validation
RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired, // Recipe ID is required
    title: PropTypes.string.isRequired, // Recipe title is required
    image: PropTypes.string, // Recipe image is optional
  }).isRequired,
};

export default RecipeCard;
