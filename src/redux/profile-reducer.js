const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";

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

    case CHANGE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return { ...state, newPostText: action.text };
    default:
      return state;
  }
};

export const actionCreateAddPost = () => ({ type: ADD_POST });

export const actionCreateChangeNewPostText = (newText) => ({
  type: CHANGE_NEW_POST_TEXT,
  text: newText,
});

export default profileReducer;
