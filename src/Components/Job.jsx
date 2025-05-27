import React from "react";
import { IoBookmarksOutline } from "react-icons/io5";
import location from "../assets/location.json";
import Lottie from "lottie-react";
import { VscGitStashApply } from "react-icons/vsc";

const Job = ({ job }) => {
  //   console.log(jobs);
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-3">
              <img src={job.company_logo} className="w-[60px]" alt="" />
              <div>
                <h2 className="card-title">{job.title}</h2>
                <div className="flex justify-start items-center gap-2">
                  <Lottie
                    className="w-[28px]"
                    animationData={location}
                    loop={true}
                  ></Lottie>
                  <p className="text-[12px] font-light">{job.company}</p>
                </div>
              </div>
            </div>

            <div>
              <button className="btn bg-transparent border-0 shadow-none">
                <IoBookmarksOutline />
              </button>
            </div>
          </div>

          <p>{job.description}</p>
          <div className="grid grid-cols-2 max-w-[230px] gap-2">
            {job.requirements.map((req, index) => (
              <div
                className="p-2 border-white border-2 rounded-2xl"
                key={index}
              >
                {req}
              </div>
            ))}
          </div>
          <div className="card-actions">
            <button className="btn border-white bg-transparent w-full rounded-4xl flex items-center gap-2">
              Apply Now
              <VscGitStashApply />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
