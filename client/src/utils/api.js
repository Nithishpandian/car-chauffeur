import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api", // replace with your API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token in headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // assuming you store the token in localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
