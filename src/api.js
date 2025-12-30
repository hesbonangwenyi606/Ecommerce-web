import axios from "axios";

// Create Axios instance
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add a request interceptor to include JWT token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth
export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);
export const getCurrentUser = () => API.get("/auth/me");

// Products
export const getProducts = () => API.get("/products");
export const getProduct = (id) => API.get(`/products/${id}`);

// Orders
export const createOrder = (orderData) => API.post("/orders", orderData);
export const getUserOrders = () => API.get("/orders/user");

// Payments
export const createCheckoutSession = (data) =>
  API.post("/payments/create-checkout-session", data);

