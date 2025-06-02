import React, { use } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { loading } = use(AuthContext);
  console.log(jobId);
  return (
    <div>
      <h1>Job Apply</h1>
    </div>
  );
};

export default JobApply;
