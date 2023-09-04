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
    <div 
    style={{backgroundColor:"#d7dde4"}} 
    className="py-40 flex flex-col gap-16 px-28 bg-gray-50 2xl:px-10 xl:px-7 xl:gap-10 lg:justify-center lg:items-center lg:py-6 sm:gap-10">
      <h3 className="text-gray-900 font-bold text-4xl Aceh xl:text-4xl sm:text-2xl">
        Our Diversified Portfolio
      </h3>
      <div className="flex justify-around gap-10 2xl:gap-6 lg:grid lg:grid-cols-2 lg:grid-flow-row lg:gap-y-12 lg:justify-center lg:w-max sm:flex sm:flex-col sm:gap-6 sm:gap-y-6 sm:px-0 sm:w-full">
        <div className="relative flex flex-col items-center w-96 gap-4 bg-gradient-to-br from-green-50 via-white to-gray-200 shadow-2xl  pb-7   lg:w-80 sm:w-full ">
          
          <img
            src={exploreImg}
            alt="exploreImg"
            className=" w-full h-52 text-black "
          />
          <p className="text-left text-white font-bold  absolute z-10 left-0 bg-black/75 top-40 w-full p-2 pl-3 pr-8   shadow-md ">
            Explore the world
          </p>
          <div className=" flex flex-col gap-4 px-4">
          <Flight className="w-10 h-10 inline-block m-auto  xl:w-6 xl:h-6" />
            <h4 className="text-black font-bold text-xl Aceh xl:text-xl">
              Explore Crystalveey{" "}
             
            </h4>
            <p className="text-slate-800 Andis font-light text-lg xl:text-sm">
              Explore Crystalveey is a fashion brand that specializes in
              African-inspired clothing and accessories.
            </p>
          </div>
          <button
           style={{backgroundColor:"#d7dde4"}} 
            className=" text-slate-800 font-medium  Aceh  py-2 px-4 w-max  transition duration-300 ease-in-out hover:bg-black
          "
          >
          <span className="">
            Learn More
            </span>
          </button>
        </div>
        <div className="relative flex flex-col items-center w-96 gap-4 bg-gradient-to-br from-green-50 via-white to-gray-200 shadow-2xl  pb-7   lg:w-80 sm:w-full">
          <p className="text-left text-white font-bold  absolute z-10 left-0 bg-black/75 top-40 w-full p-2 pl-3 pr-8   shadow-md">
            Wear something new
          </p>
          <img
            src={atelierImg}
            alt="exploreImg"
            className=" w-full h-52"
          />
          <div className=" flex flex-col gap-4 px-4">
          <Fashion className="w-10 h-10 inline-block m-auto  xl:w-6 xl:h-6" />
            <h4 className="text-black font-bold text-xl Aceh xl:text-xl">
              Crystalveey's Atelier{" "}
            </h4>
            <p className="text-slate-800 Andis font-light text-lg xl:text-sm">
              Explore Crystalveey is a fashion brand that specializes in
              African-inspired clothing and accessories.
            </p>
          </div>
          <button
           style={{backgroundColor:"#d7dde4"}} 
            className="  text-slate-800 font-medium  Aceh  py-2 px-4 w-max  transition duration-300 ease-in-out hover:bg-purple-700
          "
          >
            Learn More
          </button>
        </div>
        <div className="relative flex flex-col items-center w-96 gap-4 bg-gradient-to-br from-green-50 via-white to-gray-200 shadow-2xl  pb-7   lg:w-80 sm:w-full">
          <p className="text-left text-white font-bold  absolute z-10 left-0 bg-black/75 top-40 w-full p-2 pl-3 pr-8   shadow-md">
            Find your joyful balance
          </p>
          <img
            src={wholesomeImg}
            alt="exploreImg"
            className=" w-full h-52"
          />
          <div className=" flex flex-col gap-4 px-4">
          <Community className="w-10 h-10 inline-block m-auto  xl:w-6 xl:h-6" />
            <h4 className="text-black font-bold text-xl Aceh xl:text-xl">
              Wholesome{" "}
            </h4>
            <p className="text-slate-800 Andis font-light text-lg xl:text-sm">
              Explore Crystalveey is a fashion brand that specializes in
              African-inspired clothing and accessories.
            </p>
          </div>
          <button
           style={{backgroundColor:"#d7dde4"}} 
            className="  text-slate-800 font-medium  Aceh  py-2 px-4 w-max  transition duration-300 ease-in-out hover:bg-purple-700
          "
          >
            Learn More
          </button>
        </div>
        <div className="relative flex flex-col items-center w-96 gap-4 bg-gradient-to-br from-green-50 via-white to-gray-200 shadow-2xl  pb-7   lg:w-80 sm:w-full">
          <p className="text-left text-white font-bold  absolute z-10 left-0 bg-black/75 top-40 w-full p-2 pl-3 pr-8   shadow-md">
            Be a part of the breakthrough
          </p>
          <img
            src={CvCImg}
            alt="exploreImg"
            className=" w-full h-52"
          />
          <div className=" flex flex-col gap-4 px-4">
          <Charity className="w-10 h-10 inline-block m-auto  xl:w-6 xl:h-6" />
            <h4 className="text-black font-bold text-xl Aceh xl:text-xl">
              CVC Charity{" "}
            </h4>
            <p className="text-slate-800 Andis font-light text-lg xl:text-sm">
              Explore Crystalveey is a fashion brand that specializes in
              African-inspired clothing and accessories.
            </p>
          </div>
          <button
           style={{backgroundColor:"#d7dde4"}} 
            className="  text-slate-800 font-medium  Aceh  py-2 px-4 w-max  transition duration-300 ease-in-out hover:bg-purple-700
          "
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
