// src/services/api.ts
import axios from "axios";
import { getAccessToken, getRefreshToken, setTokens, clearAuth } from "./authService";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

// Attach token
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Auto refresh on 401
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response?.status === 401) {
      const refreshToken = getRefreshToken();
      const user = JSON.parse(localStorage.getItem("user") || "null");

      if (!refreshToken || !user) {
        clearAuth();
        window.location.href = "/";
        return;
      }

      const res = await axios.post("http://localhost:4000/auth/refresh", {
        userId: user.id,
        refreshToken,
      });

      setTokens({
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
        user,
      });

      err.config.headers.Authorization = `Bearer ${res.data.accessToken}`;
      return axios(err.config);
    }

    return Promise.reject(err);
  }
);

export default api;
