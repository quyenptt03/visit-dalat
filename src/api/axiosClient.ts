import axios from "axios";

export const URL = "http://localhost:5000";
// export const URL = "https://visit-dalat-api.vercel.app/";

const axiosClient = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.log({ error });
    const { config, status, data } = error.response;
    if (
      (config.url === "/api/v1/auth/register" && status === 400) ||
      (config.url === "/api/v1/auth/login" && status === 401)
    ) {
      const newError = data.msg;
      throw new Error(newError);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
