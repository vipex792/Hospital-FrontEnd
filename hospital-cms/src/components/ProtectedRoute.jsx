import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  // If no user is logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user exists, show the dashboard
  return children;
};

// CRITICAL: This must be 'export default'
export default ProtectedRoute;