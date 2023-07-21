import axiosClient from "./axiosClient";

const userApi = {
  register(data: object) {
    const url = "/api/v1/auth/register";
    return axiosClient.post(url, data);
  },
  login(data: object) {
    const url = "/api/v1/auth/login";
    return axiosClient.post(url, data);
  },
  logout() {
    const url = "/api/v1/auth/logout";
    return axiosClient.get(url);
  },
};

export default userApi;
