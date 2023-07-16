import axiosClient from "./axiosClient";

const categoryApi = {
  async getAll() {
    return axiosClient.get(`/api/v1/categories`);
  },
};

export default categoryApi;
