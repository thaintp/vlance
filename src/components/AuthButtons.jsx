import "./style.scss";
import { RegisterModal, LoginModal, Account } from "components";
import { useDispatch, useSelector } from "react-redux";
import { openSigninModal, openSignupModal } from "actions/modal";

const AuthButtons = () => {
  const { isLoggedIn, account } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="auth-buttons">
      {isLoggedIn ? (
        <Account account={account} />
      ) : (
        <>
          <LoginModal />
          <RegisterModal />
          <button
            className="auth-buttons__registerBtn auth-buttons__text"
            onClick={() => dispatch(openSignupModal())}
          >
            Đăng kí
          </button>
          <button
            className="auth-buttons__loginBtn"
            onClick={() => dispatch(openSigninModal())}
          >
            <span className="auth-buttons__loginBtn__text auth-buttons__text">
              Đăng nhập
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
