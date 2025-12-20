import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true // needed for cookies if you use JWT later
});

export default api;

