import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
  withCredentials: true, // if using cookies
});

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
