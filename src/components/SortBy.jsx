import "./style.scss";

const SortBy = () => {
  return (
    <form className="sort-by">
      <label style={{ margin: "0" }}>Sort by:</label>
      <select name="choice" className="sort-by__choice">
        <option value="popularity">Popularity</option>
        <option value="nameAsc">Name: A- Z</option>
        <option value="priceAsc">Price: lowest to highest</option>
        <option value="priceDes">Price: highest to lowest</option>
      </select>
    </form>
  );
};

export default SortBy;
