const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT";

const initialState = {
  dialogs: [
    { name: "Игорь", id: 1, isActive: true },
    { name: "Павел", id: 2, isActive: false },
    { name: "Дмитрий", id: 3, isActive: false },
    { name: "Константин", id: 4, isActive: false },
  ],

  messages: [
    { text: "Привет" },
    { text: "Как дела?" },
    { text: "Как твой React?" },
    { text: "Говна пожуй" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            text: state.newMessageText,
          },
        ],
        newMessageText: "",
      };
    case CHANGE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.messageText;
      return { ...state, newMessageText: state.newMessageText };
    default:
      return state;
  }
};

export default dialogsReducer;

export const changeMessageText = (text) => ({
  type: CHANGE_NEW_MESSAGE_TEXT,
  messageText: text,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});
