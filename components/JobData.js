import React, { useEffect, useState } from "react";
import SingleJob from "./SingleJob";

const JobData = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="">
      <div className="flex py-10 px-20  rounded-md shadow-md">
        <input type="text" placeholder="Search Your jobs here" className="input input-bordered input-info w-full" />
        <button className="py-3 w-1/2 sm:w-1/4">Search</button>
      </div>
      <h1 className="text-3xl text-blue-500 pb-4 pt-10 text-center">All JOBS</h1>
      <div className="grid md:grid-cols-1  gap-5">
        {jobs.map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default JobData;
