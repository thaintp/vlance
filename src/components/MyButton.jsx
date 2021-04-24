import "./style.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MyButton = (props) => {
  return (
    <Link
      to={props.href ?? "#"}
      style={{ textDecoration: "none" }}
      onClick={(e) => (props.onClick ? props.onClick(e) : {})}
    >
      <Button
        className={"button " + (props.className ?? "")}
        style={{
          width: props.width ?? "140px",
          height: props.height ?? "40px",
          fontSize: props.fontSize ?? "14px",
          backgroundColor: props.backgroundColor ?? "#ffa15f",
        }}
      >
        <span
          className="button__text"
          style={{
            color: props.color ?? "#ffffff",
          }}
        >
          {props.title ?? "Click"}
        </span>
      </Button>
    </Link>
  );
};

export default MyButton;
