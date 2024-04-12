import React from "react";

const JobItem = ({ job }) => {
  return (
    <section className="bg-[#ffffff]  dark:bg-[#19202d]   transition-colors duration-500 dark:text-white flex flex-col justify-between relative h-[230px] p-5 cursor-pointer z-10 rounded-lg">
      <section
        className={`p-1 h-10 w-10 flex items-center justify-center absolute top-[-20px] rounded-xl`}
        style={{ backgroundColor: job.logoBackground }}
      >
        <img src={job.logo} alt="" className="object-cover" />
      </section>

      <section className="mt-5 flex flex-col gap-2">
        <section className="text-[#90959b] font-[500] flex items-center  gap-3">
          <span> {job.postedAt} </span>
          <span className="text-2xl"> •</span>
          <span>{job.contract}</span>
        </section>
        <h1 className="text-xl font-bold"> {job.position}</h1>
        <span className="text-[#90959b]"> {job.company}</span>
      </section>
      <span className="text-[#8788d7] font-[800]"> {job.location}</span>
    </section>
  );
};

export default JobItem;
