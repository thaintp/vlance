import "./style.scss";
import { map_status } from "utils/status";

const Status = ({ status }) => {
  return (
    <span className={`status status--${status.toLowerCase()}`}>
      {map_status[status.toLowerCase()]}
    </span>
  );
};

export default Status;
