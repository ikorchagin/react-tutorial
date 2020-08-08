import { profileAPI } from "../api/api";
import { reset } from "redux-form";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const SET_PROFILE = "SET-PROFILE";
const SET_STATUS = "SET-STATUS";
const SET_IMAGE_SUCCESS = "SET-IMAGE-SUCCESS";
const UPDATE_PHOTOS = "UPDATE-PHOTOS";

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
  currentStatus: null,
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
            text: action.text,
            likesCount: 0,
          },
        ],
      };

    case SET_PROFILE:
      return { ...state, currentProfile: action.profile };

    case CHANGE_NEW_POST_TEXT:
      return { ...state, newPostText: action.text };

    case SET_IMAGE_SUCCESS:
      return { ...state, currentImage: action.image };

    case UPDATE_PHOTOS:
      return {
        ...state,
        currentProfile: { ...state.currentProfile, photos: action.photos },
      };

    case SET_STATUS:
      return { ...state, currentStatus: action.status };
    default:
      return state;
  }
};

const addPostAC = ({ text }) => ({ type: ADD_POST, text });

export const addPost = (data) => (dispatch) => {
  dispatch(addPostAC(data));
  dispatch(reset("addPost"));
};

export const setProfile = (profile) => ({ type: SET_PROFILE, profile });

export const changeNewPostText = (newText) => ({
  type: CHANGE_NEW_POST_TEXT,
  text: newText,
});

const getProfile = (userId) => (dispatch) => {
  return profileAPI.getProfile(userId).then((response) => {
    dispatch(setProfile(response));
  });
};

const getStatus = (userId) => (dispatch) => {
  return profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatusAC(response));
  });
};

export const getInfo = (userId) => (dispatch) => {
  getStatus(userId)(dispatch).then(() => {
    getProfile(userId)(dispatch);
  });
};

const setStatusAC = (status) => ({
  type: SET_STATUS,
  status,
});

const updatePhotos = (photos) => ({
  type: UPDATE_PHOTOS,
  photos,
});

export const updateProfileImage = (image) => (dispatch) => {
  profileAPI.setPhoto(image).then((response) => {
    if (response.resultCode === 0) {
      console.log(response.data);
      dispatch(updatePhotos(response.data.photos));
    }
  });
};

export const setStatus = (status) => (dispatch) => {
  profileAPI.setStatus(status).then((response) => {
    if (response.resultCode == 0) {
      dispatch(setStatusAC(status));
    }
  });
};

export default profileReducer;
