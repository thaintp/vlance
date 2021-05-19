import "./style.scss";
import { AuthButtons } from "components";
import { Link } from "react-router-dom";
import { useRef } from "react";

const TopBar = () => {
  const inputName = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("name", inputName.current.value);
    window.location.search = urlParams;
  };
  return (
    <div className="top-bar">
      <form
        className="top-bar__item top-bar__search"
        onSubmit={(e) => handleSearch(e)}
      >
        <input
          type="text"
          placeholder="Tìm kiếm..."
          name="name"
          className="top-bar__inputSearch"
          ref={inputName}
        />
        <img
          src="/images/search.svg"
          className="top-bar__iconSearch"
          alt="search"
        ></img>
      </form>

      <div className="top-bar__item top-bar__logo">
        <Link to="/">
          <img src="/images/logo.svg" className="top-bar__image" alt="logo" />
        </Link>
      </div>

      <div className="top-bar__item top-bar__utils">
        <AuthButtons />
      </div>
    </div>
  );
};

export default TopBar;
