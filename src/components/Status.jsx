import "./style.scss";

const map_status = {
  offer: "Chào giá",
  pending: "Đang làm",
  completed: "Đã hoàn thành",
  canceled: "Đã hủy",
};

const Status = ({ status }) => {
  return (
    <span className={`status status--${status.toLowerCase()}`}>
      {map_status[status.toLowerCase()]}
    </span>
  );
};

export default Status;
