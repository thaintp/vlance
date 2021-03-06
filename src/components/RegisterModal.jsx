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
    fullname: "",
    phone: "",
    address: "",
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
  const onChangeFullName = (e) => {
    setState({ ...state, fullname: e.target.value });
  };
  const onChangePhone = (e) => {
    setState({ ...state, phone: e.target.value });
  };
  const onChangeAddress = (e) => {
    setState({ ...state, address: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setState({ ...state, successful: false });

    dispatch(
      register(
        state.name,
        state.email,
        state.password,
        state.repassword,
        state.fullname,
        state.phone,
        state.address
      )
    )
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
          ????ng k??
        </div>
        {message && <Error message={message} />}
        <Modal.Body>
          <Form onSubmit={(e) => handleRegister(e)} ref={form}>
            <div className="form-group">
              <label htmlFor="name" className="login-modal__label">
                Username
              </label>
              <Input
                type="text"
                className="form-control"
                name="name"
                value={state.name}
                onChange={onChangeName}
                placeholder="Nh???p t??n ????ng nh???p..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name" className="login-modal__label">
                H??? v?? t??n
              </label>
              <Input
                type="text"
                className="form-control"
                name="name"
                value={state.fullname}
                onChange={onChangeFullName}
                placeholder="Nh???p h??? v?? t??n..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name" className="login-modal__label">
                S??? ??i???n tho???i
              </label>
              <Input
                type="text"
                className="form-control"
                name="name"
                value={state.phone}
                onChange={onChangePhone}
                placeholder="S??? ??i???n tho???i..."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name" className="login-modal__label">
                ?????a ch???
              </label>
              <Input
                type="text"
                className="form-control"
                name="name"
                value={state.address}
                onChange={onChangeAddress}
                placeholder="?????a ch???..."
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
                placeholder="Nh???p email c???a b???n..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="login-modal__label">
                M???t kh???u
              </label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={state.password}
                onChange={onChangePassword}
                placeholder="Nh???p m???t kh???u c???a b???n..."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="repassword" className="login-modal__label">
                Nh???p l???i m???t kh???u
              </label>
              <Input
                type="password"
                className="form-control"
                name="repassword"
                value={state.repassword}
                onChange={onChangeRepassword}
                placeholder="Nh???p l???i m???t kh???u c???a b???n..."
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
                title="????ng k??"
                onClick={(e) => handleRegister(e)}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="login-modal__footer login-modal__text">
          ???? c?? t??i kho???n?{" "}
          <span
            className="register-modal__link"
            onClick={() => {
              dispatch(closeSignupModal());
              dispatch(openSigninModal());
            }}
          >
            ????ng nh???p
          </span>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;
