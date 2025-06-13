import React, { useEffect, useState } from "react";
import UseAuth from "../Components/CustomHooks/UseAuth";
import ApplicationCard from "../Components/ApplicationCard";

const MyApplications = () => {
  const { user, getToken } = UseAuth();
  const [applications, setApplications] = useState([]);
  //   console.log(applications);

  // useEffect(() => {
  //   // if (!user || !user.accessToken) return;
  //   fetch(`http://localhost:3000/applications?email=${user.email}`, {
  //     headers: {
  //       authorization: `Bearer ${user.accessToken}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setApplications(data);
  //       console.log(data);
  //     });
  // }, [user.email, user?.accessToken]);

  useEffect(() => {
    const fetchApplications = async () => {
      if (!user) return;

      const token = await getToken();

      fetch(`http://localhost:3000/applications?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setApplications(data);
          console.log(data);
        })
        .catch((error) => console.error("Error fetching applications:", error));
    };

    fetchApplications();
  }, [user, getToken]);

  // console.log(user.accessToken);
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
