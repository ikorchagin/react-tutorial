const { default: Axios } = require("axios");

const instance = Axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "387a3c10-8229-41cf-8f56-a9dad8eb6786",
  },
});

export const usersAPI = {
  getUsers(pageNumber, pageSize) {
    return instance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => response.data);
  },

  follow: (userId) =>
    instance.post(`follow/${userId}`).then((response) => response.data),

  unFollow: (userId) =>
    instance.delete(`follow/${userId}`).then((response) => response.data),
};

export const authAPI = {
  authMe: () => instance.get("auth/me/").then((response) => response.data),
};

export const profileAPI = {
  getProfile: (userId) =>
    instance.get(`profile/${userId}`).then((response) => response.data),
};
