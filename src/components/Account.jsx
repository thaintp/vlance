import "./style.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "actions/auth";
import { closeAllModal } from "actions/modal";
import { AccordionContext } from "react-bootstrap";

const Account = ({ account, size }) => {
  const dispatch = useDispatch();
  return (
    <div className="account">
      <label
        style={{
          marginRight: "10px",
        }}
      >
        {"Xin chào, "} <b>{account?.name}</b>{" "}
      </label>
      <img
        src={
          account?.avatar ?? "https://i.loli.net/2021/04/16/BnZIhjMmzTDecEH.jpg"
        }
        alt="avatar"
        className="account__avatar"
        style={{
          width: size ?? "28px",
          height: size ?? "28px",
        }}
      />
      <div className="account__dropdown">
        <Link className="account__action" to="/profile">
          Thông tin tài khoản
        </Link>
        <Link className="account__action" to="/edit-profile">
          Chỉnh sửa thông tin
        </Link>
        <Link className="account__action" to="/job-manager/employer">
          Công việc đã đăng
        </Link>
        <Link className="account__action" to="/job-manager/freelancer">
          Công việc làm
        </Link>
        <Link
          className="account__action"
          onClick={() => {
            dispatch(logout());
            dispatch(closeAllModal());
          }}
          to="#"
        >
          Log out
        </Link>
      </div>
    </div>
  );
};

export default Account;
