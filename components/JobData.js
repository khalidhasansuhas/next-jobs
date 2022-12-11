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
    <div>
      <h1 className="text-3xl text-blue-500 py-4 text-center">All JOBS</h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-2  gap-5">
        {jobs.map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default JobData;
