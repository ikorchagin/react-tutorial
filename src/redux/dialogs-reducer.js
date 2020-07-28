const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT";

const initialState = {
  dialogs: [
    { name: "Игорь", id: 1 },
    { name: "Павел", id: 2 },
    { name: "Дмитрий", id: 3 },
    { name: "Константин", id: 4 },
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

export const actionCreateChangeMessageText = (text) => ({
  type: CHANGE_NEW_MESSAGE_TEXT,
  messageText: text,
});

export const actionCreateAddMessage = () => ({
  type: ADD_MESSAGE,
});
