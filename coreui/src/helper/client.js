import axios from "axios";
let http = new axios.create({
  // baseURL: 'dev.news.com/api/v1',
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
// Response interceptor
http.interceptors.response.use(
  (config) => {
    if (localStorage.getItem("api_token")) {
      config.headers["Authorization"] = "Bearer " + localStorage.getItem("api_token");
    }
    return config;
  },
  (response) => response,
  (error) => {
    const { status, data } = error.response || {};
    if (status >= 500) {
    }
    if (status === 401) {
      window.location.href = "/login";
    }
    if (status === 403) {
    }

    return Promise.reject(error);
  }
);
export default http;
