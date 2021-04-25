import "./style.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "actions/auth";
import { closeAllModal } from "actions/modal";

const Account = ({ account, size }) => {
  const dispatch = useDispatch();
  return (
    <div className="account">
      <img
        src={account?.avatar}
        alt="avatar"
        className="account__avatar"
        style={{
          width: size ?? "28px",
          height: size ?? "28px",
        }}
      />
      <div className="account__dropdown">
        <Link className="account__action" to="/profile">
          Chỉnh sửa thông tin
        </Link>
        <Link className="account__action" to="/job-manager">
          Quản lý công việc
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
