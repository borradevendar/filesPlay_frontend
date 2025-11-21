// src/pages/AuthCallback.tsx
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { setTokens, clearAuth } from "../services/authService";
import { AuthContext } from "../context/AuthContext";

export default function AuthCallback() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    async function handleAuth() {
      const url = new URL(window.location.href);
      const accessToken = url.searchParams.get("accessToken");
      const refreshToken = url.searchParams.get("refreshToken");

      if (!accessToken) {
        navigate("/");
        return;
      }

      // 1) persist tokens so api interceptor works
      setTokens({ accessToken, refreshToken, user: null });

      try {
        // 2) fetch user (now will include Authorization header)
        const res = await api.get("/auth/profile");
        const user = res.data;

        // 3) update localStorage + context
        setTokens({ accessToken, refreshToken, user });
        setUser(user); // update AuthContext immediately

        navigate("/dashboard");
      } catch (err) {
        clearAuth();
        navigate("/");
      }
    }

    handleAuth();
  }, []);
  return null;
}
