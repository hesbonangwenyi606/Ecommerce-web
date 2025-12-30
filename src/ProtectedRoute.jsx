import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("token"); // Check if user is logged in

  if (!isLoggedIn) {
    return <Navigate to="/login" />; // Redirect to login if not logged in
  }

  return children;
};

export default ProtectedRoute;

