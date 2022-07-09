import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn category-btn">
          Select category
        </Link>
      </div>
    </div>
  );
};

export { CategoryItem };
