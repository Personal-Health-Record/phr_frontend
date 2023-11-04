import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { isAuthenticated } = { isAuthenticated: true };

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
