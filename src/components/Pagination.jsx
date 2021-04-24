import "./style.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  return (
    <div className="pagination">
      <Link to={`${props.current > 1 ? props.current - 1 : props.current}`}>
        <Button variant="light">
          <FaAngleLeft />
        </Button>
      </Link>
      <span>
        {props.current}/{props.max}
      </span>
      <Link
        to={`${props.current < props.max ? props.current + 1 : props.current}`}
      >
        <Button variant="light">
          <FaAngleRight />
        </Button>
      </Link>
    </div>
  );
};

export default Pagination;
