import "./style.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryService from "services/category";
import classnames from "classnames";

const Category = ({ onChange }) => {
  const [category, setCategory] = useState({});
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    CategoryService.get().then((data) => {
      setCategories(data.data);
    });
  }, []);

  const handleOnclick = (item) => {
    console.log(item);
    setCategory(item);
    onChange(item);
  };

  return (
    <div className="category">
      <div className="sidebar__title sidebar__text--bold">Category</div>
      <div className="category__list">
        <Link
          to="#"
          className={classnames("category__tag bold-link", {
            "bold-link--active": category.id === null,
          })}
          onClick={() => handleOnclick({ id: null })}
        >
          All dresses
        </Link>
        {categories.map((c) => (
          <Link
            to="#"
            className={classnames("category__tag bold-link", {
              "bold-link--active": category.id === c.id,
            })}
            key={c.id}
            onClick={() => handleOnclick(c)}
          >
            {c.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
