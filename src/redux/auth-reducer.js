import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_LOGIN = "SET-LOGIN";

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        isAuth: action.isAuth,
        login: action.login,
        email: action.email,
        userId: action.userId,
      };

    default:
      return state;
  }
};

export default dialogsReducer;

export const setLogin = (login, email, userId, isAuth) => ({
  type: SET_LOGIN,
  login,
  email,
  userId,
  isAuth,
});

export const authMe = () => (dispatch) => {
  return authAPI.authMe().then((response) => {
    if (response.resultCode === 0) {
      let user = response.data;
      dispatch(setLogin(user.login, user.email, user.id, true));
    } else {
      dispatch(setLogin(null, null, null, false));
    }
  });
};

export const goLogin = (data) => (dispatch) => {
  authAPI.goLogin(data).then((response) => {
    if (response.resultCode === 0) {
      authMe()(dispatch);
    } else {
      dispatch(
        stopSubmit("login", {
          _error:
            response.messages.length > 0 ? response.messages[0] : undefined,
        })
      );
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.resultCode === 0) {
      authMe()(dispatch);
    }
  });
};
