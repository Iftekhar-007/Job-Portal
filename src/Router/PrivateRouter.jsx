import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user } = use(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRouter;
