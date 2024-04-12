import React, { useState } from "react";
import { listJobs } from "../../context/ListJobsContext";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
const InputUser = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { jobs, setFilterJobs } = listJobs();
  const [search, setSearch] = useState({ info: "", location: "" });
  const [toggleFilter, setToggleFilter] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const handleToggleFilter = () => {
    setToggleFilter(prev => !prev);
  };
  const handleToggleCheck = () => {
    setIsChecked(prev => !prev);
  };

  const onSubmit = data => {
    setSearch(data);
  };
  useEffect(() => {
    const filteredData = jobs.filter(job => {
      const info = search?.info.toLowerCase();
      const location = search?.location.toLowerCase();

      const matchesInfo =
        job?.position?.toLowerCase().includes(info) ||
        job?.company?.toLowerCase().includes(info);

      const matchesLocation = job?.location?.toLowerCase().includes(location);

      if (isChecked) {
        return matchesInfo && matchesLocation && job?.contract === "Full Time";
      }

      return matchesInfo && matchesLocation;
    });

    setFilterJobs(filteredData);
  }, [jobs, search, isChecked, setFilterJobs]);
  return (
    <>
      <section className="h-[100px] bg-transparent flex items-center lg:w-[80%]  max-lg:relative justify-center pt-20 max-lg:w-full  ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex max-lg:w-full max-lg:items-center max-lg:justify-center   "
        >
          <section className="relative max-lg:w-full">
            <input
              type="text"
              placeholder="Filter by title, companies, expertise..."
              className="pl-14  h-16 bg-white  dark:bg-[#19202d]  dark:text-white    transition-colors duration-500  max-md:border-r-transparent dark:border-r-transparent lg:w-[350px] max-md:overflow-hidden text-ellipsis  max-lg:w-full outline-none  py-3 font-semibold shadow-l-lg border-r-2 border-[#f1f1f1] dark:border-[#333c4b] rounded-l-md"
              {...register("info")}
            />
            <img
              src="/assets/desktop/icon-search.svg"
              alt="search"
              className="absolute top-1/2 transform -translate-y-1/2 left-5 w-5 h-5"
            />
          </section>
          <section className="relative max-lg:hidden">
            <input
              type="text"
              placeholder="Filter by location..."
              className="pl-12 h-16 bg-white lg:w-[250px]  dark:bg-[#19202d]  dark:text-white transition-colors duration-500  max-lg:w-full  outline-none  max-sm:w-full py-3 font-semibold  border-r-2 border-[#f1f1f1]  dark:border-[#333c4b] "
              {...register("location")}
            />
            <img
              src="/assets/desktop/icon-location.svg"
              alt="search"
              className="absolute top-1/2 transform -translate-y-1/2 left-5 w-4  h-6"
            />
          </section>
          <section className="relative">
            <section className="pl-10  select-none pr-3 h-16  dark:bg-[#19202d]  dark:text-white flex transition-colors duration-500  items-center gap-3 justify-between bg-white lg:w-[350px] max-lg:w-full  py-3  shadow-r-lg rounded-r-md">
              <section className="flex gap-3 items-center font-bold max-lg:hidden">
                <div
                  className={`h-5 w-5  rounded-sm  relative cursor-pointer ${
                    isChecked ? "bg-[#5763df]" : "bg-[#e8e8ea]"
                  }`}
                  onClick={handleToggleCheck}
                >
                  {isChecked && (
                    <img
                      src="/assets/desktop/icon-check.svg"
                      className="absolute top-1 left-[3px]"
                      alt=""
                    />
                  )}
                </div>
                <span>Full Time Only</span>
              </section>
              <button
                type="submit"
                className="h-11 w-28 text-white rounded-md bg-[#5763df]"
              >
                Search
              </button>
            </section>

            <img
              src="/assets/mobile/icon-filter.svg"
              alt="filter"
              className="absolute top-6 right-[8.5rem] cursor-pointer lg:hidden max-lg:visible"
              onClick={handleToggleFilter}
            />
          </section>
          {toggleFilter && (
            <section className="h-fit pb-5 w-full  px-5  top-[120px] shadow-lg border-t border-zinc-500 z-10  bg-white  dark:bg-[#19202d] absolute  transition-colors duration-500">
              <section className="relative ">
                <input
                  type="text"
                  placeholder="Filter by location..."
                  className="pl-8 h-16 bg-white lg:w-[250px]  dark:bg-[#19202d]  dark:text-white  max-lg:w-full  outline-none  max-sm:w-full py-3 font-semibold    dark:border-[#333c4b] "
                  {...register("location")}
                />
                <img
                  src="/assets/desktop/icon-location.svg"
                  alt="search"
                  className="absolute top-1/2 transform -translate-y-1/2 left-1 w-4  h-6"
                />
              </section>
              <section className="flex gap-3 items-center font-bold dark:text-white ">
                <div
                  className={`h-5 w-5  rounded-sm  relative cursor-pointer ${
                    isChecked ? "bg-[#5763df]" : "bg-[#e8e8ea]"
                  }`}
                  onClick={handleToggleCheck}
                >
                  {isChecked && (
                    <img
                      src="/assets/desktop/icon-check.svg"
                      className="absolute top-1 left-[3px]"
                      alt=""
                    />
                  )}
                </div>
                <span>Full Time Only</span>
              </section>
              <button
                type="submit"
                className="h-11 w-full mt-5  text-white rounded-md bg-[#5763df]"
                onClick={e => {
                  e.preventDefault();
                  setToggleFilter(false);
                  handleSubmit(onSubmit)();
                }}
              >
                Search
              </button>
            </section>
          )}
        </form>
      </section>
    </>
  );
};

export default InputUser;
