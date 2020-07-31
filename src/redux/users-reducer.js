import { usersAPI } from "../api/api";

const CHANGE_FOLLOW = "CHANGE-FOLLOW";
const SET_USERS = "SET-USERS";
const CHANGE_PAGE = "CHANGE-PAGE";
const SET_FETCHING = "SET-FETCHING";
const ADD_FOLOWING = "ADD-FOLOWING";
const REMOVE_FOLOWING = "REMOVE-FOLOWING";

const initialState = {
  users: [],
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  isFolowing: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FOLLOW: {
      return {
        ...state,
        users: [
          ...state.users.map((x) => {
            if (x.id === action.id) return { ...x, followed: action.value };
            return x;
          }),
        ],
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
        totalCount: action.totalCount,
      };
    }

    case ADD_FOLOWING: {
      return { ...state, isFolowing: [...state.isFolowing, action.userId] };
    }

    case REMOVE_FOLOWING: {
      return {
        ...state,
        isFolowing: [...state.isFolowing.filter((x) => x !== action.userId)],
      };
    }

    case CHANGE_PAGE:
      return { ...state, users: [...state.users], currentPage: action.page };

    case SET_FETCHING:
      return { ...state, isFetching: action.isFetch };

    default:
      return state;
  }
};

export const changeFollow = (id, value) => ({
  type: CHANGE_FOLLOW,
  id: id,
  value: value,
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page: page,
});

export const setUsers = (users, totalCount) => ({
  type: SET_USERS,
  users: users,
  totalCount: totalCount,
});

export const setFetching = (isFetch) => ({
  type: SET_FETCHING,
  isFetch: isFetch,
});

export const addFolowing = (userId) => ({
  type: ADD_FOLOWING,
  userId,
});

export const removeFolowing = (userId) => ({
  type: REMOVE_FOLOWING,
  userId,
});

export const getUsers = (pageNumber, pageSize) => (dispatch) => {
  dispatch(changePage(pageNumber));
  dispatch(setFetching(true));
  usersAPI.getUsers(pageNumber, pageSize).then((response) => {
    dispatch(setFetching(false));
    dispatch(setUsers(response.items, response.totalCount));
  });
};

export const follow = (userId) => (dispatch) => {
  dispatch(addFolowing(userId));
  usersAPI.follow(userId).then((response) => {
    if (response.resultCode === 0) {
      dispatch(changeFollow(userId, true));
    }
    dispatch(removeFolowing(userId));
  });
};

export const unFollow = (userId) => (dispatch) => {
  dispatch(addFolowing(userId));
  usersAPI.unFollow(userId).then((response) => {
    if (response.resultCode === 0) {
      dispatch(changeFollow(userId, false));
    }
    dispatch(removeFolowing(userId));
  });
};

export default usersReducer;
