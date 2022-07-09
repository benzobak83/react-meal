import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../api.js";
import { Preloader } from "../components/Preloader.jsx";
import { useNavigate } from "react-router-dom";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
    window.scrollTo({
      top: "0px",
    });
  }, [id]);

  return (
    <>
      {!recipe ? (
        <Preloader />
      ) : (
        <>
          <div className="recipe-wrapper">
            <h1 id="strMeal">{recipe.strMeal}</h1>
            <div className="recipe__item">
              <img src={recipe.strMealThumb} id="strMealThumb"></img>

              <div className="recipe__item-desc">
                <h6 id="strCategory" className="desc">
                  <i className="material-icons icon-desc">restaurant_menu</i>
                  Category: {recipe.strCategory}
                </h6>
                {recipe.strArea ? (
                  <h6 id="strArea" className="desc">
                    <i className="material-icons icon-desc">add_location</i>
                    Area: {recipe.strArea}
                  </h6>
                ) : null}
              </div>
            </div>

            <div className="description">
              <h3 className="description__title title">Instruction</h3>
              <div className="description__text">{recipe.strInstructions}</div>
            </div>
            <div className="ingridients">
              <h3 className="ingridients__title title">Ingridients</h3>
              <table className="centered">
                <thead>
                  <tr>
                    <th>Food product</th>
                    <th>Amount</th>
                  </tr>
                </thead>

                <tbody>
                  {Object.keys(recipe).map((key) => {
                    if (key.includes("strIngredient") && recipe[key]) {
                      return (
                        <tr key={key}>
                          <td>{recipe[key]}</td>
                          <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                        </tr>
                      );
                    } else return null;
                  })}
                </tbody>
              </table>
            </div>
            {recipe.strYoutube ? (
              <div className="iframe-wrapper">
                <h3 className="iframe__title title">Video instruction</h3>
                <iframe
                  title={recipe.strMeal}
                  src={
                    "https://www.youtube.com/embed/" +
                    recipe.strYoutube.slice(-11)
                  }
                  allowFullScreen
                ></iframe>
              </div>
            ) : null}
          </div>
          {recipe.strInstructions && (
            <button onClick={() => navigate(-1)} className="btn back-btn">
              Go back
            </button>
          )}
        </>
      )}
    </>
  );
};

export { Recipe };
