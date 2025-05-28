import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const PrivateRouter = ({ children }) => {
  const { user } = use(AuthContext);
  return children;
};

export default PrivateRouter;
