import React, { use } from "react";
import JobCard from "./JobCard";
import { Link } from "react-router";
// import { keyframes } from "motion";
// import { div } from "motion/react-client";

const AddedjobsList = ({ MyAddedJobsApi }) => {
  const jobs = use(MyAddedJobsApi);
  return (
    <div className="lg:w-[1440px] lg:mx-auto my-20">
      <h2>Jobs Ceated by Me : {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Dead Line</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {jobs.map((job, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.company}</div>
                    </div>
                  </div>
                </td>
                <td>{job.location}</td>
                <td>{job.applicationDeadline}</td>
                <th>
                  <Link to={`/applications/${job._id}`}>View Details</Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddedjobsList;
