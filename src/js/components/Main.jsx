import React from "react";
import { useState, useEffect } from "react";
import { getAllCategories } from "../api.js";
import { Preloader } from "./Preloader.jsx";
import { CategoryList } from "./CategoryList.jsx";
import { CategoryTitle } from "./CategoryTitle.jsx";
import { Search } from "./Search.jsx";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [alertCategory, setAlertCategory] = useState(true);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setFilteredCategories(
      categories.filter((item) => {
        return item.strCategory.toLowerCase().includes(str.toLowerCase());
      })
    );
    navigate(`?search=${str}`);
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data.categories);
      setFilteredCategories(
        search.length > 8
          ? data.categories.filter((item) => {
              return item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase());
            })
          : data.categories
      );
    });

    const timeoutAlert = setTimeout(() => setAlertCategory(false), 5000);

    return () => clearTimeout(timeoutAlert);
  }, [search]);
  return (
    <>
      {categories.length ? (
        <>
          {!filteredCategories.length ? (
            <>
              <Search cb={handleSearch} />
              <h1 className="not-found">Not found</h1>
            </>
          ) : (
            <>
              <div className="categories-div title-div">
                <h2 className="categories-title h2-title">Categories</h2>
                <Search cb={handleSearch} />
              </div>{" "}
            </>
          )}

          {!Number(localStorage.getItem("alert")) ? ( //проверка локального хранилища, который устанавливается в компоненте категорий. Если установлен - подсказывающая уведа пропадет
            alertCategory ? (
              <CategoryTitle />
            ) : (
              <CategoryTitle right="-800px" />
            )
          ) : (
            false
          )}
          <CategoryList categories={filteredCategories} />
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
};
export { Main };
