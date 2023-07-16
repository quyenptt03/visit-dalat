import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://visit-dalat-api.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
