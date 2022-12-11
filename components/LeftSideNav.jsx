import React from "react";

const LeftSideNav = () => {
  return (
    <div className="container bg-[#fafafad7] p-4 w-full">
      <h1 className="text-3xl text-blue-500 py-4">Search Jobs</h1>

      <div className="w-full py-3">
        <label>Job Title</label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-md"
          required
          placeholder="Job Title"
        />
      </div>
      <div className="w-full py-3">
        <label htmlFor="Select Job Category"> Select Job Type</label>
        <select
          name="categoryName"
          className="w-full px-4 py-3 rounded-md"
          required
        >
          <option selected disabled>
            Job Type
          </option>
          <option>On Site</option>
          <option>Remote</option>
          <option>Hybrid</option>
        </select>
      </div>
      <div className="w-full py-3">
        <label htmlFor="Select Job Category"> Select Job Type</label>
        <select
          name="categoryName"
          className="w-full px-4 py-3 rounded-md"
          required
        >
          <option selected disabled>
            Job Category
          </option>
          <option>Internship</option>
          <option>Full Time</option>
          <option>Part Time</option>
        </select>
      </div>
      <div className="w-full py-3">
        <h3>Minimum Salary Expectation</h3>
        <fieldset className="space-y-1 dark:text-gray-100">
          <input
            type="range"
            className="w-full accent-violet-400"
            min="1"
            max="5"
          />
          <div aria-hidden="true" className="flex justify-between px-1">
            <span>0</span>
            <span>2k</span>
            <span>5k</span>
            <span>10k</span>
            <span>20k</span>
          </div>
        </fieldset>
      </div>
      <button className="py-3 w-full">
        <a className=" btn-xs">Search</a>
      </button>
    </div>
  );
};

export default LeftSideNav;
