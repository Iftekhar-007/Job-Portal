import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loader } = use(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loader) {
    return <span className="loading loading-spinner text-error"></span>;
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRouter;
