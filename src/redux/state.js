// Константы, чтобы не ошибиться
const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";

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
    },
  },

  _renderPage() {
    alert("State has been changed");
  },

  dispatch(action) {
    switch (action.type) {
      case "ADD-POST":
        this._state.profilePage.posts.push({
          id: 5,
          text: this._state.profilePage.newPostText,
          likesCount: 0,
        });
        this._state.profilePage.newPostText = "";
        this._renderPage(this._state);
        break;

      case "CHANGE-NEW-POST-TEXT":
        this._state.profilePage.newPostText = action.text;
        this._renderPage(this._state);
        break;
    }
  },

  getState() {
    return this._state;
  },

  // Слушатель, который принимает метод, которым будет рулить
  subscriber(observe) {
    this._renderPage = observe;
  },
};

// Экшн криейтеры
export const actionCreateAddPost = () => {
  return { type: ADD_POST };
};

export const actionCreateChangeNewPostText = (newText) => {
  return { type: CHANGE_NEW_POST_TEXT, text: newText };
};

export default store;
