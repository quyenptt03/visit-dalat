import axiosClient from "./axiosClient";

const destinationApi = {
  async getAll(params: object) {
    return axiosClient.get(`/api/v1/destinations`, { params });
  },
  async getFeatured() {
    return axiosClient.get(`/api/v1/destinations/featured`);
  },
  async getTotal() {
    return axiosClient.get(`/api/v1/destinations/total`);
  },
  async get(id: string) {
    return axiosClient.get(`/api/v1/destinations/${id}`);
  },
};

export default destinationApi;
