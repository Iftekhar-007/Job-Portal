import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplicants = () => {
  const detailData = useLoaderData();
  const { jobId } = useParams();
  console.log(jobId);
  //   const [viewApplication, setViewApplication] = useState([]);
  //   useEffect((jobId) => {
  //     fetch(`http://localhost:3000/applications/job/${jobId}`)
  //       .then((res) => res.json())
  //       .then((data) => setViewApplication(data));
  //   }, []);
  return (
    <div className="lg:w-[1440px] lg:mx-auto my-20">
      <h1>
        {detailData.length}:application details of {jobId}
      </h1>
    </div>
  );
};

export default ViewApplicants;
