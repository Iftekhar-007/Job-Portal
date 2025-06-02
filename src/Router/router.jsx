import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import signUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails";
import JobApply from "../Pages/JobApply";
import PrivateRouter from "./PrivateRouter";
import MyApplications from "../Pages/MyApplications";

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
        path: "/jobs/:id",
        Component: JobDetails,
      },
      {
        path: "/signup",
        Component: signUp,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/myapplications",
        element: (
          <PrivateRouter>
            <MyApplications></MyApplications>
          </PrivateRouter>
        ),
      },
      {
        path: "/jobapply/:id",
        element: (
          <PrivateRouter>
            <JobApply></JobApply>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
