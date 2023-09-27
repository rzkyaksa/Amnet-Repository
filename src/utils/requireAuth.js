import React from "react";
//import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import AdminLayout from "../components/layout/adminLayout";
//import { getAuthorization } from "./apiConfig";

const RequireAuth = ({ children }) => {
  const cookies = new Cookies();
  const accessToken = cookies.get("token");

  if (!accessToken) {
    return <Navigate to="/" />;
  }

  return <AdminLayout>{children}</AdminLayout>;
};

export default RequireAuth;
