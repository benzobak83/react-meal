const RecipeItem = (props) => {
  const { recipe } = props;
  const { strMeal, strCategory, strArea, strInstructions, strMealThumb } =
    recipe;

  return (
    <>
      <h1>{strMeal}</h1>
    </>
  );
};

export { RecipeItem };
