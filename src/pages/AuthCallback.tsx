// src/pages/AuthCallback.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setTokens } from "../services/authService";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {     
    const url = new URL(window.location.href);

    const accessToken = url.searchParams.get("accessToken");
    const refreshToken = url.searchParams.get("refreshToken");
    const user = url.searchParams.get("user");

    if (accessToken && refreshToken && user) {
      setTokens({ accessToken, refreshToken, user: JSON.parse(user) });
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, []);

  return <p>Processing login...</p>;
}
