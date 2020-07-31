import { authAPI } from "../api/api";

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
        isAuth: true,
        login: action.login,
        email: action.email,
        userId: action.userId,
      };

    default:
      return state;
  }
};

export default dialogsReducer;

export const setLogin = (login, email, userId) => ({
  type: SET_LOGIN,
  login,
  email,
  userId,
});

export const authMe = () => (dispatch) => {
  authAPI.authMe().then((response) => {
    let user = response.data;
    dispatch(setLogin(user.login, user.email, user.id));
  });
};
