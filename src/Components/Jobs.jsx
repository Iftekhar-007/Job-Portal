import React, { lazy, Suspense, useEffect, useState } from "react";
// import Job from "./Job";
const Job = lazy(() => import("./Job"));

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
      });
  }, []);
  return (
    <Suspense
      fallback={
        <span className="loading loading-spinner text-error text-center text-4xl"></span>
      }
    >
      <h2 className="text-center text-5xl font-bold mt-36">Hot Jobs For You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-[1440px] lg:mx-auto gap-5 lg:mb-36 lg:mt-20">
        {jobs.map((job) => (
          <Job key={job._id} job={job}></Job>
        ))}
      </div>
    </Suspense>
  );
};

export default Jobs;
