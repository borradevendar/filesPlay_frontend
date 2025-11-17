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

      const access = url.searchParams.get("access");
      const refresh = url.searchParams.get("refresh");

      if (!access) {
        navigate("/");
        return;
      }

      // temporary save
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh || "");

      try {
        // Fetch user profile using token
        const res = await api.get("/auth/profile");

        const user = res.data;

        setTokens({
          accessToken: access,
          refreshToken: refresh || "",
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
