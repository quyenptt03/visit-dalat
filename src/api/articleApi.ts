import axiosClient from "./axiosClient";

const articleApi = {
  async getAll(params: object) {
    return axiosClient.get(`/api/v1/articles`, { params });
  },
  async getFeatured() {
    return axiosClient.get(`/api/v1/articles/featured`);
  },
  async getTotal(params: object) {
    return axiosClient.get(`/api/v1/articles/total`, { params });
  },
  async get(id: string) {
    return axiosClient.get(`/api/v1/articles/${id}`);
  },
};

export default articleApi;
