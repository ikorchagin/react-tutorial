const actionChangeFollow = "CHANGE-FOLLOW";
const actionSetUsers = "SET-USERS";

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionChangeFollow: {
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

    case actionSetUsers: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }

    default:
      return state;
  }
};

export const actionCreateChangeFollow = (id, value) => ({
  type: actionChangeFollow,
  id: id,
  value: value,
});

export const actionCreateSetUsers = (users) => ({
  type: actionSetUsers,
  users: users,
});

export default usersReducer;
