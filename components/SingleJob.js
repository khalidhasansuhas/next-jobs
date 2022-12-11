import React from "react";

const SingleJob = (props) => {
  const { companyName, location, jobType, Category, salary, title } = props.job;
  return (
    <div className="card shadow-md bg-gradient-to-r from-[#cfe6ff] to-[#d9fffb] rounded-md">
      <div className="card-body">
        <h2 className="card-title text-2xl">
          {title}
          <div className="badge badge-secondary">{jobType}</div>
        </h2>
        <p className="text-xl text-blue-700">Company Name:{companyName}</p>
        <p>Catrgory:{Category}</p>
        <div className="flex justify-between w-full">
          <p className="text-sm">Location:{location}</p>
          <p>Salary: {salary}</p>
        </div>
        <div className="flex justify-between">
          <button className="py-1 px-5 text-sm">Details</button>
          <button className="py-1 px-5 text-sm">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
