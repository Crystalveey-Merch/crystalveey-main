import React from "react";
import { SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix } from "../Components/HomeComponents";
import vecOne from "../Images/vec-one.png";

export const Home = () => {
  return (
    <div className="px28 text-center relative flex flex-col gap-20 xl:gap-16 lg:gap-12">
        <img src={vecOne} alt="vecOne" className="absolute right-0 w-96 lg:hidden" />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
    </div>
  );
};
