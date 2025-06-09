import React, { Suspense } from "react";
import AddedjobsList from "../Components/AddedjobsList";
import UseAuth from "../Components/CustomHooks/UseAuth";
import { MyAddedJobsApi } from "../Components/JobsApi";

const MyAddedJobs = () => {
  //   const jobData = use(MyAddedJobsApi);
  const { user } = UseAuth();
  return (
    <div>
      <Suspense>
        <AddedjobsList
          MyAddedJobsApi={MyAddedJobsApi(user.email)}
        ></AddedjobsList>
      </Suspense>
    </div>
  );
};

export default MyAddedJobs;
