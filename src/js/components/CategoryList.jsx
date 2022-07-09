import { CategoryItem } from "./CategoryItem.jsx";

const CategoryList = (props) => {
  const { categories = [] } = props;

  return (
    <div className="categories-wrapper content-wrapper">
      {categories.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
};

export { CategoryList };
