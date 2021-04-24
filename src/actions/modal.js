import {
  OPEN_SIGNIN_MODAL,
  OPEN_SIGNUP_MODAL,
  CLOSE_SIGNIN_MODAL,
  CLOSE_SIGNUP_MODAL,
  CLOSE_ALL_MODAL,
} from "actions/types";

export const openSigninModal = () => (dispatch) => {
  dispatch({
    type: OPEN_SIGNIN_MODAL,
  });
};
export const openSignupModal = () => (dispatch) => {
  dispatch({
    type: OPEN_SIGNUP_MODAL,
  });
};

export const closeSigninModal = () => (dispatch) => {
  dispatch({
    type: CLOSE_SIGNIN_MODAL,
  });
};
export const closeSignupModal = () => (dispatch) => {
  dispatch({
    type: CLOSE_SIGNUP_MODAL,
  });
};
export const closeAllModal = () => (dispatch) => {
  dispatch({
    type: CLOSE_ALL_MODAL,
  });
};
