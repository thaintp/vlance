import {
  OPEN_SIGNIN_MODAL,
  OPEN_SIGNUP_MODAL,
  CLOSE_SIGNIN_MODAL,
  CLOSE_SIGNUP_MODAL,
  CLOSE_ALL_MODAL,
} from "actions/types";
import _ from "lodash";

const initialState = {
  signin: {
    visible: false,
  },
  signup: {
    visible: false,
  },
};

const modalReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case CLOSE_ALL_MODAL:
      return _.mapValues(state, (modal) => ({ ...modal, visible: false }));
    case OPEN_SIGNIN_MODAL:
      return { ...state, signin: { visible: true } };
    case OPEN_SIGNUP_MODAL:
      return { ...state, signup: { visible: true } };
    case CLOSE_SIGNIN_MODAL:
      return { ...state, signin: { visible: false } };
    case CLOSE_SIGNUP_MODAL:
      return { ...state, signup: { visible: false } };
    default:
      return state;
  }
};

export default modalReducer;
