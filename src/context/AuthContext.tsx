import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
  getAccessToken,
  getRefreshToken,
  getUser,
  setTokens,
  clearAuth,
} from "../services/authService";

export const AuthContext = createContext<any>(null);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(getUser());
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const path = window.location.pathname;

  const init = async () => {
    const access = getAccessToken();
    const refresh = getRefreshToken();
    const storedUser = getUser();

    if (access) {
      setUser(storedUser);
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/refresh`, {
        userId: storedUser.id,
        refreshToken: refresh,
      });

      setTokens({
        accessToken: res.data.access,
        refreshToken: res.data.refresh,
        user: storedUser,
      });

      setUser(storedUser);
      
    } catch {
      clearAuth();
    }

    setLoading(false);
  };

  init();
}, []);


  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
