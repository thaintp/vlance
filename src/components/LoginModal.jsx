import "./style.scss";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "react-bootstrap/Modal";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import { Error, Button } from "components";

import { login } from "actions/auth";
import { clearMessage } from "actions/message";
import { closeSigninModal, openSignupModal } from "actions/modal";

const LoginModal = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
  });
  const form = useRef();
  const checkBtn = useRef();
  const dispatch = useDispatch();

  const { signin } = useSelector((state) => state.modal);
  const { message } = useSelector((state) => state.message);
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const onChangeEmail = (e) => {
    setState({ ...state, email: e.target.value });
  };
  const onChangePassword = (e) => {
    setState({ ...state, password: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setState({ ...state, loading: true });

    dispatch(login(state.email, state.password))
      .then(() => {})
      .catch((err) => {
        setState({ ...state, loading: false });
      });
  };

  return (
    <>
      <Modal
        show={signin.visible}
        onHide={() => dispatch(closeSigninModal())}
        animation={false}
        className="login-modal"
      >
        <Modal.Header closeButton />

        <div className="login-modal__text login-modal__title">Đăng nhập</div>
        {message && <Error message={message} />}
        <Modal.Body>
          <Form ref={form}>
            <div className="form-group">
              <label htmlFor="email" className="login-modal__label">
                E-MAIL
              </label>
              <Input
                type="email"
                className="form-control"
                name="email"
                value={state.email}
                onChange={onChangeEmail}
                placeholder="Nhập emmail của bạn..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="login-modal__label">
                Mật khẩu
              </label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={state.password}
                onChange={onChangePassword}
                placeholder="Nhập mật khẩu của bạn..."
                required
              />
            </div>

            <div className="login-modal__password">
              <div className="login-modal__rememberPassword">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="login-modal__checkbox"
                />
                <label
                  className="login-modal__text login-modal__label_2"
                  htmlFor="remember"
                >
                  Nhớ mật khẩu
                </label>
              </div>
              <div className="login-modal__forgotPassword login-modal__text">
                Quên mật khẩu?
              </div>
            </div>

            <div className="form-group">
              <Button
                href="/seller/products/add"
                width="100%"
                height="50px"
                title="Login"
                onClick={(e) => handleLogin(e)}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="login-modal__footer login-modal__text">
          <span className="login-modal__footer__text">
            Không có tài khoản?{" "}
          </span>
          <span
            className="login-modal__link"
            onClick={() => {
              dispatch(closeSigninModal());
              dispatch(openSignupModal());
            }}
          >
            Đăng kí
          </span>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
