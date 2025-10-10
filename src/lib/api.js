import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // if you're using cookies (JWT via cookie)
});

// ===== AUTH ROUTES =====

// Register a new user
export const registerUser = async (userData) => {
  const res = await API.post("/auth/register", userData);
  return res.data;
};

// Login
export const loginUser = async (credentials) => {
  const res = await API.post("/auth/login", credentials);
  return res.data;
};

// Verify OTP (if needed)
export const verifyOTP = async (data) => {
  const res = await API.post("/auth/verify-otp", data);
  return res.data;
};

export default API;
