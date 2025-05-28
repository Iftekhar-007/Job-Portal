import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const JobDetails = () => {
  const [jobDetail, setJobDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobDetail(data);
        setLoading(false);
      })
      .then((error) => {
        console.log(error);
      });
  }, [id]);

  if (loading) {
    return <div>Loading........</div>;
  }

  if (!jobDetail) {
    return <div>Job NOt Found..............</div>;
  }
  return (
    <div className="w-[1440px] mx-auto">
      <h2>{jobDetail.title}</h2>
      <Link to={`/jobapply/${jobDetail._id}`}>Apply Now!</Link>
    </div>
  );
};

export default JobDetails;
