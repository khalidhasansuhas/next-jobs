import React, { useEffect, useState } from "react";

const blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("blogData.json")
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);
  return (
    <div className="pt-20 w-10/12 mx-auto h-full">
      <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Blog</h2>
            <p className="font-serif text-sm dark:text-gray-400">
              Find the dream job, read here how effective search.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {blogData.map((data) => (
              <>
                <article className="flex flex-col hover-up shadow-md dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-52 dark:bg-gray-500"
                      src={data.img}
                    />
                  </a>
                  <div className="flex flex-col flex-1 p-6">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    ></a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                    >
                      Next-Jobs.com
                    </a>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                      {data.title}
                    </h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                      <span>{data.date}</span>
                      <span>{data.view} views</span>
                    </div>
                  </div>
                </article>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default blog;
