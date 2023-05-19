import React from "react";
import { SectionOne, SectionTwo } from "../Components";
import vecOne from "../Images/vec-one.png";

export const Home = () => {
  return (
    <div className="px-28 text-center relative">
        <img src={vecOne} alt="vecOne" className="absolute right-0 w-96" />
        <SectionOne />
        <SectionTwo />
    </div>
  );
};
