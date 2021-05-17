import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CHANGE_INFORMATION,
  CHANGE_PASSWORD
} from "../actions/types";

const account = JSON.parse(localStorage.getItem("user"));

const initialState = account
  ? { isLoggedIn: true, account }
  : { isLoggedIn: false, account: undefined };

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
        account: payload.user_record,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        account: undefined,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        account: undefined,
      };
    case CHANGE_INFORMATION:
    case CHANGE_PASSWORD:
      return {
        ...state,
        account: payload.data
      }
    default:
      return state;
  }
};

export default authReducer;
