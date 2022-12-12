import React from "react";

const resume = () => {
  return (
    <div className="pt-20">
      <h2 className="text-3xl text-blue-500 bolder text-center font-semibold py-3">
        Create Your Resume
      </h2>
      <div className="shadow-xl my-5 p-4 max-w-[1000px] mx-auto">
        <div className="form-control grid grid-cols-2 gap-3">
        <div className="col-span-2"><h1 className="text-xl py-3 text-center font-semibold">BASIC INFO</h1></div>
          <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">FIRST NAME</span>
            </label>
            <input
              type="text"
              placeholder="jone doe"
              className="input input-bordered w-full"
            />
          </div>

          <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">SURNAME</span>
            </label>
            <input
              type="text"
              placeholder="Jone doe"
              className="input input-bordered w-full"
            />
          </div>

          <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">CITY</span>
            </label>
            <input
              type="text"
              placeholder="Dhaka"
              className="input input-bordered w-full"
            />
          </div>

          <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">COUNTRY</span>
            </label>
            <input
              type="text"
              placeholder="Bangladesh"
              className="input input-bordered w-full"
            />
          </div>

          <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">PHONE</span>
            </label>
            <input
              type="text"
              placeholder="017********"
              className="input input-bordered w-full"
            />
          </div>


          <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">EMAIL</span>
            </label>
            <input
              type="email"
              placeholder="jone@gmail.com"
              className="input input-bordered w-full"
            />
          </div>


          <div className="col-span-2"><h1 className="text-xl py-3 text-center font-semibold">EDUCATION</h1></div>

        <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">INSTITUTION NAME</span>
            </label>
            <input
              type="text"
              placeholder="Dhaka Univercity"
              className="input input-bordered w-full"
            />
          </div>

        <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">SCHOOL LOCATION</span>
            </label>
            <input
              type="text"
              placeholder="Dhaka, Bangladesh"
              className="input input-bordered w-full"
            />
          </div>

        <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">DEGREE</span>
            </label>
            <input
              type="text"
              placeholder="Degree"
              className="input input-bordered w-full"
            />
          </div>


        <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">FIELD OF STUDY</span>
            </label>
            <input
              type="text"
              placeholder="Type your study field"
              className="input input-bordered w-full"
            />
          </div>


 
          <div className="col-span-2"><h1 className="text-xl py-3 text-center font-semibold">WORK HISTORY</h1></div>

          <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">JOB TITLE</span>
            </label>
            <input
              type="text"
              placeholder="React Developer"
              className="input input-bordered w-full"
            />
          </div>

          <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">EMPLOYER </span>
            </label>
            <input
              type="text"
              placeholder="DEV LTD"
              className="input input-bordered w-full"
            />
          </div>

          <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">LOCATION </span>
            </label>
            <input
              type="text"
              placeholder="Dhaka bangladesh"
              className="input input-bordered w-full"
            />
          </div>

          <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">START DATE </span>
            </label>
            <input
              type="date"
              placeholder="01-05-2021"
              className="input input-bordered  w-full"
            />
          </div>

          <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">END DATE </span>
            </label>
            <input
              type="date"
              placeholder="01-09-2021"
              className="input input-bordered w-full"
            />
          </div>

          <div className="col-span-2"><h1 className="text-xl py-3 text-center font-semibold">SKILLS</h1></div>



          <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">SKILLS </span>
            </label>
            <input
              type="text"
              placeholder="HTML, CSS, React...."
              className="input input-bordered  w-full"
            />
          </div>


          <div className="col-span-2"><h1 className="text-xl py-3 text-center font-semibold">SUMMARY</h1></div>

          <div className="single-form">
            <label className="label">
              <span className="label-text text-sm">Write Your self</span>
            </label>
            <textarea  placeholder="I am a web developer..."
              className="textarea textarea-bordered h-24 w-full">
            </textarea>
          </div>   



        </div>
        <button className="py-3 px-8 mx-auto text-center">Done</button>
      </div>
    </div>
  );
};

export default resume;
