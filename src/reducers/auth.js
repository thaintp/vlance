import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

// const account = JSON.parse(localStorage.getItem("user"));
const account = {
  id: 1,
  name: "Tào Mạnh Đức",
  job: "Software Engineer",
  avatar: "https://i.loli.net/2021/04/16/BnZIhjMmzTDecEH.jpg",
  city: "TP Hồ Chí Minh",
  created_at: "2021-04-14 20:32:15",
  posted: 3,
};

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
