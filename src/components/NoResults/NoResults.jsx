import React from "react";

const NoResults = () => {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center pb-20 mt-10">
      <section className="bg-[#ffffff] lg:w-[74%] max-lg:w-[95%]  dark:bg-[#19202d]  dark:text-white flex flex-col items-center justify-center relative h-screen p-5 cursor-pointer rounded-lg">
        <img
          src="/assets/desktop/not-found.png"
          alt=""
          className="w-[350px] h-[350px]"
        />
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          No results found
        </p>
        <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
          Try refining your search criteria or check back later.
        </p>
      </section>
    </section>
  );
};

export default NoResults;
