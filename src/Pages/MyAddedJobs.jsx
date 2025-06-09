import React, { use } from "react";
import AddedjobsList from "../Components/AddedjobsList";
import UseAuth from "../Components/CustomHooks/UseAuth";
import { MyAddedJobsApi } from "../Components/JobsApi";

const MyAddedJobs = () => {
  //   const jobData = use(MyAddedJobsApi);
  const { user } = UseAuth();
  return (
    <div>
      <AddedjobsList jobData={() => MyAddedJobsApi(user.email)}></AddedjobsList>
    </div>
  );
};

export default MyAddedJobs;
