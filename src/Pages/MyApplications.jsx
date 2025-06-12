import React, { useEffect, useState } from "react";
import UseAuth from "../Components/CustomHooks/UseAuth";
import ApplicationCard from "../Components/ApplicationCard";

const MyApplications = () => {
  const { user } = UseAuth();
  const [applications, setApplications] = useState([]);
  //   console.log(applications);

  useEffect(() => {
    fetch(`http://localhost:3000/applications?email=${user.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setApplications(data);
        console.log(data);
      });
  }, [user.email]);
  return (
    <div className="lg:w-[1440px] mx-auto my-20">
      <h3 className="text-4xl text-center font-bold">
        My Applications : {applications.length}
      </h3>

      {applications.map((app) => (
        <ApplicationCard key={app._id} app={app}></ApplicationCard>
      ))}
    </div>
  );
};

export default MyApplications;
