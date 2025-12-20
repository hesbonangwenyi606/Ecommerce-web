import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    // Not logged in, redirect to login
    return <Navigate to="/login" />;
  }

  // Logged in, show children
  return children;
}
