import React from "react";
import { useParams } from "react-router-dom";
import { listJobs } from "../../context/ListJobsContext";
import Header from "../../components/Header/Header";
const JobDetails = () => {
  const { jobs } = listJobs();
  const { id } = useParams();

  const job = jobs.find(job => job?.id.toString() === id);

  return (
    <>
      <Header />
      <section className="flex  items-center justify-center w-full    h-[130px]  absolute max-md:top-44 top-32 ">
        <section className="w-[60%] max-lg:w-full max-lg:mx-3  max-lg:relative  flex  max-md:h-fit  h-full  max-md:pb-10 bg-white rounded-lg dark:bg-[#19202d]  transition-colors duration-500 ">
          <section
            style={{ background: `${job?.logoBackground}` }}
            className="w-[160px] h-full flex items-center justify-center max-lg:absolute  top-[-20px] left-1/2  max-lg:transform max-lg:-translate-x-1/2 max-lg:h-[60px] max-lg:w-16 max-lg:rounded-lg rounded-l-lg"
          >
            <div className="flex items-center justify-center w-full">
              <img src={job?.logo} alt="" className="w-full px-5 max-lg:px-1" />
            </div>
          </section>

          <section className="flex items-center max-md:flex-col max-md:mt-14  max-md:gap-3  max-md:text-center justify-between w-full px-5">
            <section>
              <h1 className="font-bold text-[#1c2230]  dark:text-white text-xl mb-1">
                {job?.company}
              </h1>
              <span className="text-[#acb0ba] "> {job?.website}</span>
            </section>
            <section>
              <button className="w-fit bg-[#eeedfa] dark:bg-[#242b36] dark:text-white  p-3  hover:bg-[#c5c9f4] transition-colors duration-500  text-[#5e63b1] font-semibold rounded-sm">
                {" "}
                Company Site
              </button>
            </section>
          </section>
        </section>
      </section>
      <section className="min-h-screen   w-full  flex flex-col items-center  justify-between pt-32 max-md:pt-[13rem]  max-lg:px-3 ">
        <section className="h-fit bg-white dark:bg-[#19202d] dark:text-white lg:w-[60%] max-lg:w-full  rounded-lg p-8 ">
          <section className="text-[#939ba4] flex items-center gap-2">
            <span> {job.postedAt} </span>
            <span className="text-2xl"> • </span>
            <span c>{job.contract}</span>
          </section>
          <section className="flex justify-between  max-md:flex-col  max-md:items-start items-center mt-2 ">
            <section>
              <h1 className="text-2xl font-bold"> {job?.position}</h1>
              <span className="text-[#5864e0] font-bold text-sm">
                {job?.location}
              </span>
            </section>
            <button className="w-fit max-md:w-full  bg-[#5864e0] hover:bg-[#939bf4] transition-colors duration-500 px-5 py-2 max-md:py-5 max-md:mt-3 rounded-md text-white">
              Apply Now
            </button>
          </section>
          <section className="my-10">
            <p className="text-[#708098] leading-7">{job?.description}</p>
          </section>
          <section className="my-10">
            <h1 className="mb-5 font-bold text-xl"> Requirements</h1>
            <p className="text-[#708098] leading-7">
              {job?.requirements?.content}
            </p>
            <ul className="  list-disc mt-5 px-5">
              {job?.requirements?.items.map((item, index) => {
                return (
                  <li key={index} className="mb-2 text-[#708098]  text-lg pl-5">
                    {item}
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="my-10">
            <h1 className="mb-5 font-bold text-xl"> What You Will Do</h1>
            <p className="text-[#708098] leading-7">{job?.role?.content}</p>

            <ul className="  list-decimal mt-5 px-5 ">
              {job?.role?.items.map((item, index) => {
                return (
                  <li key={index} className="mb-2 text-[#708098]  text-lg pl-5">
                    {item}
                  </li>
                );
              })}
            </ul>
          </section>
        </section>
        <section className="h-[100px] bg-white w-full  dark:bg-[#19202d] dark:text-white mt-20 flex items-center justify-center ">
          <section className=" lg:w-[60%] max-lg:w-full max-lg:px-5 flex items-center justify-between">
            <section className="max-md:hidden">
              <h1 className="font-bold text-[#1c2230]  dark:text-white text-xl mb-1">
                {job?.position}
              </h1>
              <span>{job?.company}</span>
            </section>
            <button className="w-fit max-md:w-full bg-[#5864e0] px-5 py-3 rounded-md text-white hover:bg-[#939bf4] transition-colors duration-500">
              Apply Now
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

export default JobDetails;
