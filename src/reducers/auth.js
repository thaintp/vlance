import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

const account = JSON.parse(localStorage.getItem("user"));

const initialState = account
  ? { isLoggedIn: true, account }
  : { isLoggedIn: false, account: null };

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        account: payload.account,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        account: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        account: null,
      };
    default:
      return state;
  }
};

export default authReducer;
