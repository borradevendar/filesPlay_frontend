// src/pages/AuthCallback.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { setTokens } from "../services/authService";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    async function handleAuth() {
      const url = new URL(window.location.href);

      const accessToken = url.searchParams.get("accessToken");
      const refreshToken = url.searchParams.get("refreshToken");

      if (!accessToken) {
        navigate("/");
        return;
      }

      // temporary save
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      try {
        // Fetch user profile using token
        const res = await api.get("/auth/profile");

        const user = res.data;
        
        setTokens({
          accessToken: accessToken,
          refreshToken: refreshToken,
          user,
        });

        navigate("/dashboard");
      } catch {
        navigate("/");
      }
    }

    handleAuth();
  }, []);

  return <p>Processing login...</p>;
}
