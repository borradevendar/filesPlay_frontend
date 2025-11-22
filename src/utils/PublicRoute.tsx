import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function PublicRoute({ children }: any) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  // If user is logged in → redirect to dashboard
  if (user) return <Navigate to="/dashboard" />;

  // Else show the public page
  return children;
}
