import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const SET_PROFILE = "SET-PROFILE";

const initialState = {
  posts: [
    { text: "блаблабла", likesCount: 10 },
    { text: "Я балван", likesCount: 228 },
    { text: "и рыбку съел и везде преуспел", likesCount: 1337 },
    { text: "Хахаха", likesCount: 69 },
    { text: "че", likesCount: 21 },
    { text: "привет", likesCount: 34 },
    { text: "Добавил новый элемент", likesCount: 54 },
  ],
  newPostText: "",
  currentProfile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 5,
            text: state.newPostText,
            likesCount: 0,
          },
        ],
        newPostText: "",
      };

    case SET_PROFILE:
      return { ...state, currentProfile: action.profile };

    case CHANGE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return { ...state, newPostText: action.text };
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });

export const setProfile = (profile) => ({ type: SET_PROFILE, profile });

export const changeNewPostText = (newText) => ({
  type: CHANGE_NEW_POST_TEXT,
  text: newText,
});

export const getProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((response) => {
    dispatch(setProfile(response));
  });
};

export default profileReducer;
