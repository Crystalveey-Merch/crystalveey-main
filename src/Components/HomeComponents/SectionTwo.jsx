import React from "react";
import exploreImg from "../../Images/travelling.jpg";
import atelierImg from "../../Images/fashionista-2.jpg";
import wholesomeImg from "../../Images/picnic.jpg";
import CvCImg from "../../Images/charity.jpg";
import { ReactComponent as Flight } from "../../Images/flight.svg";
import { ReactComponent as Fashion } from "../../Images/fashion.svg";
import { ReactComponent as Community } from "../../Images/community.svg";
import { ReactComponent as Charity } from "../../Images/charity.svg";

export const SectionTwo = () => {
  return (
    <div className="py-14 flex flex-col gap-16 px-28 bg-gray-50 2xl:px-10 xl:px-7 xl:gap-10 lg:justify-center lg:items-center lg:py-6 sm:gap-10">
      <h3 className="text-gray-900 font-bold text-5xl font-serif xl:text-4xl sm:text-2xl">
        Our Diversified Portfolio
      </h3>
      <div className="flex justify-around gap-10 2xl:gap-6 lg:grid lg:grid-cols-2 lg:grid-flow-row lg:gap-y-12 lg:justify-center lg:w-max sm:flex sm:flex-col sm:gap-6 sm:gap-y-6 sm:px-0 sm:w-full">
        <div className=" flex flex-col items-center w-96 gap-4 bg-gradient-to-br from-green-50 via-white to-gray-200 shadow-2xl rounded-xl pb-7 px-4 py-4 lg:w-80 sm:w-full ">
          <img
            src={exploreImg}
            alt="exploreImg"
            className="rounded-xl w-full h-52"
          />
          <div className=" flex flex-col gap-4 px-4">
            <h4 className="text-slate-600 font-bold text-2xl font-serif xl:text-xl">
              Explore Crystalveey{" "}
              <Flight className="w-8 h-8 inline-block ml-2 xl:w-6 xl:h-6" />
            </h4>
            <p className="text-slate-600 font-light text-base xl:text-sm">
              Explore Crystalveey is a fashion brand that specializes in
              African-inspired clothing and accessories.
            </p>
          </div>
          <button
            className=" bg-sky-950 text-white font-medium text-base rounded-xl py-2 px-4 w-max  transition duration-300 ease-in-out hover:bg-sky-900
          "
          >
            Learn More
          </button>
        </div>
        <div className=" flex flex-col items-center w-96 gap-4 bg-gradient-to-br from-green-50 via-white to-gray-200 shadow-2xl rounded-xl pb-7 px-4 py-4 lg:w-80  sm:w-full">
          <img
            src={atelierImg}
            alt="exploreImg"
            className="rounded-xl w-full h-52"
          />
          <div className=" flex flex-col gap-4 px-4">
            <h4 className="text-slate-600 font-bold text-2xl font-serif xl:text-xl">
              Crystalveey's Atelier{" "}
              <Fashion className="w-7 h-7 inline-block ml-2 xl:h-6 xl:w-6" />
            </h4>
            <p className="text-slate-600 font-light text-base xl:text-sm">
              Explore Crystalveey is a fashion brand that specializes in
              African-inspired clothing and accessories.
            </p>
          </div>
          <button
            className=" bg-sky-950 text-white font-medium text-base rounded-xl py-2 px-4 w-max  transition duration-300 ease-in-out hover:bg-sky-900
          "
          >
            Learn More
          </button>
        </div>
        <div className=" flex flex-col items-center w-96 gap-4 bg-gradient-to-br from-green-50 via-white to-gray-200 shadow-2xl rounded-xl pb-7 px-4 py-4 lg:w-80  sm:w-full">
          <img
            src={wholesomeImg}
            alt="exploreImg"
            className="rounded-xl w-full h-52"
          />
          <div className=" flex flex-col gap-4 px-4">
            <h4 className="text-slate-600 font-bold text-2xl font-serif xl:text-xl">
              Wholesome{" "}
              <Community className="w-7 h-7 inline-block ml-2 xl:h-6 xl:w-6" />
            </h4>
            <p className="text-slate-600 font-light text-base xl:text-sm">
              Explore Crystalveey is a fashion brand that specializes in
              African-inspired clothing and accessories.
            </p>
          </div>
          <button
            className=" bg-sky-950 text-white font-medium text-base rounded-xl py-2 px-4 w-max  transition duration-300 ease-in-out hover:bg-sky-900
          "
          >
            Learn More
          </button>
        </div>
        <div className=" flex flex-col items-center w-96 gap-4 bg-gradient-to-br from-green-50 via-white to-gray-200 shadow-2xl rounded-xl pb-7 px-4 py-4 lg:w-80  sm:w-full">
          <img
            src={CvCImg}
            alt="exploreImg"
            className="rounded-xl w-full h-52"
          />
          <div className=" flex flex-col gap-4 px-4">
            <h4 className="text-slate-600 font-bold text-2xl font-serif xl:text-xl">
              CVC Charity{" "}
              <Charity className="w-6 h-6 inline-block ml-2 xl:h-6 xl:w-6" />
            </h4>
            <p className="text-slate-600 font-light text-base xl:text-sm">
              Explore Crystalveey is a fashion brand that specializes in
              African-inspired clothing and accessories.
            </p>
          </div>
          <button
            className=" bg-sky-950 text-white font-medium text-base rounded-xl py-2 px-4 w-max  transition duration-300 ease-in-out hover:bg-sky-900
          "
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
