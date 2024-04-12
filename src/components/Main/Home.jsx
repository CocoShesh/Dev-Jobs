import React from "react";
import InputUser from "../InputUser/InputUser";
import Header from "../Header/Header";

const Home = () => {
  return (
    <nav className="bg-dektop-header w-full bg-cover pt-14  h-[170px] 2xl:h-[220px] px-3 flex flex-col items-center justify-center bg-no-repeat max-sm:bg-mobile-header">
      <Header />
      <InputUser />
    </nav>
  );
};

export default Home;
