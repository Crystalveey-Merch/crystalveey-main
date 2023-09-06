import React from "react";
import { SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix } from "../Components/HomeComponents";
import vecOne from "../Images/vec-one.png";

export const Home = () => {
  return (
    <div className=" text-center relative flex Andis flex-col  ">
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
