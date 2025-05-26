import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import signUp from "../Pages/SignUp";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/signup",
        Component: signUp,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

export default router;
