import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipeDetails } from "../redux/recipesSlice";

const RecipeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { recipeDetails } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipeDetails(id));
  }, [dispatch, id]);

  if (!recipeDetails) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <img
        src={recipeDetails.image}
        alt={recipeDetails.title}
        className="w-full h-64 object-cover"
      />
      <h1 className="text-2xl font-bold mt-4">{recipeDetails.title}</h1>
      <p className="mt-2">{recipeDetails.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
