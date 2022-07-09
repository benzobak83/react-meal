import { Meal } from "./Meal.jsx";

const MealsList = (props) => {
  const { meals = [] } = props;

  return (
    <div className="meals-wrapper content-wrapper">
      {meals.map((el) => (
        <Meal key={el.idMeal} {...el} />
      ))}
      {!meals.length ? <h1>Not found</h1> : null}
    </div>
  );
};

export { MealsList };
