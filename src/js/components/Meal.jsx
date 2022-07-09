import { Link } from "react-router-dom";

const Meal = (props) => {
  const { idMeal, strMeal, strMealThumb } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn category-btn">
          Watch recipe
        </Link>
      </div>
    </div>
  );
};

export { Meal };
