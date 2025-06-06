import axios from "axios";
import React from "react";

const AddJob = () => {
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { requirements, responsibilities, max, min, currency, ...jobData } =
      Object.fromEntries(formData.entries());
    console.log(jobData);

    jobData.salaryRnage = {
      max: max,
      min: min,
      currency: currency,
    };

    jobData.status = "active";

    jobData.requirements = requirements
      .split(/\n|,/)
      .map((item) => item.trim(" "))
      .filter((item) => item);

    jobData.responsibilities = responsibilities
      .split(/\n|,/)
      .map((item) => item.trim(" "))
      .filter((item) => item);

    axios
      .post("http://localhost:3000/jobs", jobData)
      .then((res) => console.log(res.data))
      .then((error) => console.log(error));
  };
  return (
    <div className="lg:w-[1440px] mx-auto my-20">
      <form onSubmit={handleAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 w-full">
          <label className="label">Title</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Job Title"
            name="title"
          />

          <label className="label">Location</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Location"
            name="location"
          />

          <label className="label">Job Type</label>
          {/* <input
            type="text"
            className="input w-full"
            placeholder="My awesome page"
            name="jobType"
          /> */}

          <select
            defaultValue="Select Job type"
            className="select w-full"
            name="jobType"
          >
            <option disabled={true}>Select job type</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>On Site</option>
          </select>

          <label className="label">category</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Category"
            name="category"
          />

          <label className="label">Deadline</label>
          <input
            type="date"
            className="input w-full"
            placeholder="Deadline"
            name="applicationDeadline"
          />

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Salary Range</legend>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label className="label">Max Amount</label>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="Max amount"
                  name="max"
                />
              </div>

              <div className="flex flex-col">
                <label className="label">Minimum Amount</label>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="minimum amount"
                  name="min"
                />
              </div>

              <div className="flex flex-col">
                <label className="label">Currency</label>
                <select
                  defaultValue="Select a currency"
                  className="select w-full"
                  name="currency"
                >
                  <option disabled={true}>Select a currency</option>
                  <option>USD</option>
                  <option>BDT</option>
                  <option>Euro</option>
                </select>
              </div>
            </div>
          </fieldset>

          <label className="label">Description</label>
          <textarea
            type="text"
            className="textarea w-full"
            placeholder="Description"
            name="description"
          />

          <label className="label">Company Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Your Company Name"
            name="company"
          />

          <label className="label">Requirements</label>
          <textarea
            type="text"
            className="textarea w-full"
            placeholder="Requirements"
            name="requirements"
          />

          <label className="label">Responsibility</label>
          <textarea
            type="text"
            className="textarea w-full"
            placeholder="Responsibility"
            name="responsibilities"
          />

          <label className="label">Hr Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="HR Email"
            name="hr_email"
          />

          <label className="label">Hr Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="HR Name"
            name="hr_name"
          />

          <label className="label">Company Logo URL</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Photo URL"
            name="company_logo"
          />
        </fieldset>

        <button className="btn w-full">ADD A NEW JOB</button>
      </form>
    </div>
  );
};

export default AddJob;
