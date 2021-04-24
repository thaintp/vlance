import { useState } from "react";
import "./style.scss";

const FilterItemTag = ({ item }) => {
  const [click, setClick] = useState(false);
  return (
    <div className="filter-item-tag">
      <span
        className={
          click ? "filter-item-tag__title--active" : "filter-item-tag__title"
        }
      >
        {item}
      </span>
      <input
        type="checkbox"
        className="filter-item-tag__checkbox"
        onChange={(e) => setClick(e.target.value)}
      />
    </div>
  );
};

export default FilterItemTag;
