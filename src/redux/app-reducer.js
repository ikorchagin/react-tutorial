import { authMe } from "./auth-reducer";

const INITIALIZE = "INITIALIZE";

const initialState = {
  isInitialized: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return { ...state, isInitialized: true };

    default:
      return state;
  }
};

const initializeAC = () => ({
  type: INITIALIZE,
});

export const initializeApp = () => (dispatch) => {
  Promise.all([authMe()(dispatch)]).then(() => {
    dispatch(initializeAC());
  });
};
