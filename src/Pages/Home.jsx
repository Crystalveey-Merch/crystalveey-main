import React from "react";
import { SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive } from "../Components/HomeComponents";
import vecOne from "../Images/vec-one.png";

export const Home = () => {
  return (
    <div className="px-28 text-center relative flex flex-col gap-20">
        <img src={vecOne} alt="vecOne" className="absolute right-0 w-96" />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
    </div>
  );
};
