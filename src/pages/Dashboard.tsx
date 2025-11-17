// src/pages/Dashboard.tsx
import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    api.get("/auth/profile").then((res) => setProfile(res.data));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}
