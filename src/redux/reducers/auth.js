import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

const accessToken = JSON.parse(localStorage.getItem("accessToken"));
const data = accessToken
  ? { isLoggedIn: true, accessToken: accessToken }
  : { isLoggedIn: false, accessToken: null };
const initialState = data;

export default function (state = initialState, action) {
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
        accessToken: payload.accessToken,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        accessToken: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        accessToken: null,
      };
    default:
      return state;
  }
}
