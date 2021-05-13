import "./style.scss";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "react-bootstrap/Modal";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import { Error, Button } from "components";

import { register } from "actions/auth";
import { clearMessage } from "actions/message";
import { closeSignupModal, openSigninModal } from "actions/modal";

const RegisterModal = () => {
  const form = useRef();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
    successful: false,
  });

  const { message } = useSelector((state) => state.message);
  const { signup } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const onChangeName = (e) => {
    setState({ ...state, name: e.target.value });
  };
  const onChangeEmail = (e) => {
    setState({ ...state, email: e.target.value });
  };
  const onChangePassword = (e) => {
    setState({ ...state, password: e.target.value });
  };
  const onChangeRepassword = (e) => {
    setState({ ...state, repassword: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setState({ ...state, successful: false });

    dispatch(register(state.name, state.email, state.password, state.repassword))
      .then(() => {
        setState({ ...state, successful: true });
      })
      .catch(() => {
        setState({ ...state, successful: false });
      });
  };

  return (
    <>
      <Modal
        show={signup.visible}
        onHide={() => dispatch(closeSignupModal())}
        animation={false}
        className="register-modal"
      >
        <Modal.Header closeButton />

        <div className="register-modal__text register-modal__title">
          Đăng kí
        </div>
        {message && <Error message={message} />}
        <Modal.Body>
          <Form onSubmit={(e) => handleRegister(e)} ref={form}>
            <div className="form-group">
              <label htmlFor="name" className="login-modal__label">
                Tên
              </label>
              <Input
                type="text"
                className="form-control"
                name="name"
                value={state.name}
                onChange={onChangeName}
                placeholder="Nhập tên của bạn..."
                required
              />
            </div>

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
                placeholder="Nhập email của bạn..."
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
            <div className="form-group">
              <label htmlFor="repassword" className="login-modal__label">
              Nhập lại mật khẩu
              </label>
              <Input
                type="password"
                className="form-control"
                name="repassword"
                value={state.repassword}
                onChange={onChangeRepassword}
                placeholder="Nhập lại mật khẩu của bạn..."
                required
              />
            </div>
            <div className="register-modal__policy">
              By creating an account you agree to the{" "}
              <span className="register-modal__link">Terms of Service</span> and
              <span className="register-modal__link">Privacy Policy</span>
            </div>

            <div className="form-group">
              <Button
                href="/seller/products/add"
                width="100%"
                height="50px"
                title="Đăng kí"
                onClick={(e) => handleRegister(e)}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="login-modal__footer login-modal__text">
          Đã có tài khoản?{" "}
          <span
            className="register-modal__link"
            onClick={() => {
              dispatch(closeSignupModal());
              dispatch(openSigninModal());
            }}
          >
            Đăng nhập
          </span>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;
