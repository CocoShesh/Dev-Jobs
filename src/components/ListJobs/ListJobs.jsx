import React, { useState, useEffect } from "react";
import { listJobs } from "../../context/ListJobsContext";
import JobItem from "../JobItem.jsx/JobItem";
import NoResults from "../NoResults/NoResults";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const ListJobs = () => {
  const { filterJobs, isLoading } = listJobs();
  const [loadMore, setLoadMore] = useState(false);

  const handleLoadMore = () => {
    setLoadMore(prev => !prev);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {isLoading && (
        <section className="w-full flex items-center justify-center ">
          <section className="bg-[#ffffff]  flex items-center justify-center   mt-10 max-lg:w-[95%]   lg:w-[72%] dark:bg-[#19202d]  dark:text-white   h-[150px] p-5 cursor-pointer rounded-lg">
            <div className="custom-loader"></div>
          </section>
        </section>
      )}
      {!isLoading && filterJobs?.length === 0 && <NoResults />}
      {!isLoading && filterJobs?.length > 0 && (
        <main className="h-full w-full flex flex-col items-center justify-center z-10 pb-20 mt-24 max-md:mt-20">
          <section
            data-aos="zoom-in-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-out"
            className="lg:w-[85%] grid lg:grid-cols-3 gap-x-8 gap-y-14 sm:grid-cols-2  pb-10 h-fit max-lg:w-[95%] "
          >
            {filterJobs?.slice(0, loadMore ? 15 : 12).map(job => {
              return (
                <Link to={`${job?.id}`} key={job?.id}>
                  <JobItem job={job} />
                </Link>
              );
            })}
          </section>
          {filterJobs?.length > 12 && (
            <button
              onClick={handleLoadMore}
              className="w-28 h-10 bg-[#5864de] text-white rounded-md hover:bg-[#939bf4] transition-colors duration-500"
            >
              {loadMore ? "Show Less" : "Load More"}
            </button>
          )}
        </main>
      )}
    </>
  );
};

export default ListJobs;
