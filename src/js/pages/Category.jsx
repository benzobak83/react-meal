import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilterByCategory } from "../api.js";
import { Preloader } from "../components/Preloader.jsx";
import { MealsList } from "../components/MealsList.jsx";
import { Search } from "../components/Search.jsx";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Category = () => {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const handleSearch = (str) => {
    setFilteredMeals(
      meals.filter((item) => {
        return item.strMeal.toLowerCase().includes(str.toLowerCase());
      })
    );
    navigate(`?search=${str}`);
  };

  useEffect(() => {
    localStorage.setItem("alert", 1);
    window.scrollTo({
      top: "0px",
    });
    getFilterByCategory(name).then((data) => {
      setMeals(data.meals);
      setFilteredMeals(
        search.length > 8
          ? data.meals.filter((item) => {
              return item.strMeal
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase());
            })
          : data.meals
      );
    });
  }, [name]);

  return (
    <>
      <div className="categories-div title-div">
        <h2 className="categories-title h2-title">Recipes {name}`s</h2>
        <Search cb={handleSearch} />
      </div>{" "}
      <div className="meals-list">
        {!meals.length ? <Preloader /> : <MealsList meals={filteredMeals} />}
      </div>
      {meals.length && (
        <button onClick={() => navigate(-1)} className="btn back-btn">
          Go back
        </button>
      )}
    </>
  );
};

export { Category };
