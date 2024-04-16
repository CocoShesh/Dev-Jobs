import React, { useState } from "react";
import { Link } from "react-router-dom";
import { listJobs } from "../../context/ListJobsContext";
const Header = () => {
  const { toggleTheme, setToggleTheme } = listJobs();
  const handleToggleTheme = () => {
    setToggleTheme(document.documentElement.classList.toggle("dark"));
  };
  return (
    <header className="bg-dektop-header w-full bg-cover  h-[170px]  2xl:h-[220px] flex flex-col items-center justify-center bg-no-repeat max-md:bg-mobile-header">
      <section className="w-[75%] flex justify-between items-center max-md:w-full max-md:px-5 2xl:pb-5">
        <Link to="/">
          <img src="/assets/desktop/logo.svg" alt="" />
        </Link>
        <section className="flex items-center gap-3">
          <img src="/assets/desktop/icon-sun.svg" alt="" />
          <section
            className="w-12 h-6 bg-[#fefefd] relative rounded-full cursor-pointer"
            onClick={handleToggleTheme}
          >
            <div
              className={`w-4 h-4 absolute top-1 bg-[#5863d6] rounded-full transition-transform duration-300 ease-in-out ${
                toggleTheme ? "translate-x-7" : "translate-x-1"
              }`}
            ></div>
          </section>
          <img src="/assets/desktop/icon-moon.svg" alt="" />
        </section>
      </section>
    </header>
  );
};

export default Header;
