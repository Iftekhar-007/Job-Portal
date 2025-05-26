import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const ContextProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const signUpWithEmail = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(email, password, auth);
  };
  const userInfo = {
    signUpWithEmail,
    loader,
  };
  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default ContextProvider;
