const { default: Axios } = require("axios");

const instance = Axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "1544ae06-e60e-44ea-8095-1021ba4b226d",
  },
});

export const usersAPI = {
  getUsers: (pageNumber, pageSize) =>
    instance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => response.data),

  follow: (userId) =>
    instance.post(`follow/${userId}`).then((response) => response.data),

  unFollow: (userId) =>
    instance.delete(`follow/${userId}`).then((response) => response.data),
};

export const authAPI = {
  authMe: () => instance.get("auth/me").then((response) => response.data),
  goLogin: (data) =>
    instance.post("auth/login", data).then((response) => response.data),
  logout: () => instance.delete("auth/login").then((response) => response.data),
};

export const profileAPI = {
  getProfile: (userId) =>
    instance.get(`profile/${userId}`).then((response) => response.data),

  getStatus: (userId) =>
    instance.get(`profile/status/${userId}`).then((response) => response.data),

  setStatus: (status) => {
    return instance
      .put("profile/status", { status })
      .then((response) => response.data);
  },
};
