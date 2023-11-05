import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isLoggedIn = localStorage.getItem("authUserEmail") !== null;

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default PrivateRoutes;
