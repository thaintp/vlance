import "./style.scss";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="category">
      <div className="sidebar__title sidebar__text--bold">Category</div>
      <div className="category__list">
        <Link to="#" className="category__tag--active">
          All dresses
        </Link>
        <Link to="#" className="category__tag">
          Rompers / Jumpsuits
        </Link>
        <Link to="#" className="category__tag">
          Casual dresses
        </Link>
        <Link to="#" className="category__tag">
          Going out dresses
        </Link>
        <Link to="#" className="category__tag">
          Party / Occasion dresses
        </Link>
        <Link to="#" className="category__tag">
          Mini dresses
        </Link>
        <Link to="#" className="category__tag">
          Maxi / Midi dresses
        </Link>
        <Link to="#" className="category__tag">
          Sets
        </Link>
      </div>
    </div>
  );
};

export default Category;
