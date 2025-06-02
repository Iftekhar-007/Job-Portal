import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import UseAuth from "../Components/CustomHooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();
  const [job, setJob] = useState({});
  console.log(user);

  console.log(jobId);

  useEffect(() => {
    fetch(`http://localhost:3000/jobs/${jobId}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
      });
  }, [jobId]);

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const applicantData = Object.fromEntries(formData.entries());
    console.log(applicantData);
    const newApplicant = {
      ...applicantData,
      jobId,
    };
    axios
      .post(`http://localhost:3000/applications`, newApplicant)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          console.log("error");
        }
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="lg:my-36">
      <h2 className="text-4xl font-bold text-center mb-10">
        Apply for This Job
      </h2>
      <form className="lg:w-[1440px] mx-auto" onSubmit={handleApply}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Applicant</label>
            <input
              type="email"
              className="input w-full"
              placeholder="user email"
              defaultValue={user.email}
              name="applicant"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Job Sector</label>
            <input
              type="text"
              className="input w-full"
              placeholder=""
              defaultValue={job.title}
              name="sector"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">LinkedIn</label>
            <input
              type="url"
              className="input w-full"
              placeholder="Your LinkedIn profile"
              name="linkedin"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">GitHub Link</label>
            <input
              type="url"
              className="input w-full"
              placeholder="Your GitHub Link"
              name="github"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Facebook</label>
            <input
              type="url"
              className="input w-full"
              placeholder="Your Facebook"
              name="fb"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">X</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Your X Handle"
              name="x"
            />
          </fieldset>
        </div>

        <button className="btn mt-5 w-full">Apply</button>
      </form>
    </div>
  );
};

export default JobApply;
