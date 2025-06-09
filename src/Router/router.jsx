import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import signUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails";
import JobApply from "../Pages/JobApply";
import PrivateRouter from "./PrivateRouter";
import MyApplications from "../Pages/MyApplications";
import AddJob from "../Pages/AddJob";
import MyAddedJobs from "../Pages/MyAddedJobs";
import ViewApplicants from "../Pages/ViewApplicants";

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
        path: "/jobs/myaddedjobs",
        element: (
          <PrivateRouter>
            <MyAddedJobs></MyAddedJobs>
          </PrivateRouter>
        ),
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
        path: "/addjobs",
        element: (
          <PrivateRouter>
            <AddJob></AddJob>
          </PrivateRouter>
        ),
      },
      {
        path: "/applications/:jobId",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/applications/job/${params.jobId}`),
        element: (
          <PrivateRouter>
            <ViewApplicants></ViewApplicants>
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
