import renderPage from "../render";

const state = {
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
};

export const addPost = (text) => {
  state.profilePage.posts.push({id: 5, text: text, likesCount: 0});
  renderPage(state);
};

export default state;
