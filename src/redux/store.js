import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sitebarReducer from "./sitebar-reducer";

const store = {
  _state: {
    profilePage: {
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
    },

    dialogsPage: {
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
    },

    sitebar: {},
  },

  _renderPage() {
    alert("State has been changed");
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.sitebar = sitebarReducer(this._state.sitebar, action);
    this._renderPage();
  },

  getState() {
    return this._state;
  },

  // Слушатель, который принимает метод, которым будет рулить
  subscriber(observe) {
    this._renderPage = observe;
  },
};

window.state = store._state;
export default store;
