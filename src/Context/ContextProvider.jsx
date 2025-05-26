import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth/web-extension";

const ContextProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const signUpWithEmail = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
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
