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
  
    className="py-20 flex flex-col gap-16 px-28 bg-gray-50 2xl:px-10 xl:px-7 xl:gap-10 lg:justify-center lg:items-center lg:py-6 sm:gap-10">
      <h3 className="text-gray-900 font-bold text-4xl Aceh xl:text-4xl sm:text-2xl">
        Our Diversified Portfolio
      </h3>
      <div className="flex justify-around gap-10 2xl:gap-6 lg:grid lg:grid-cols-2 lg:grid-flow-row lg:gap-y-12 lg:justify-center lg:w-max sm:flex sm:flex-col sm:gap-6 sm:gap-y-6 sm:px-0 sm:w-full">
        <div className="relative flex flex-col items-center w-96 gap-4 shadow-lg  pb-7   lg:w-80 sm:w-full ">
          
          <img
            src={exploreImg}
            alt="exploreImg"
            className=" w-full h-52 text-black "
          />
         
          <div className=" flex flex-col gap-4 px-4">
          <Flight className="w-10 h-10 inline-block m-auto  xl:w-6 xl:h-6" />
            <h4 className="text-black font-bold text-xl Aceh xl:text-xl">
              Explore Crystalveey{" "}
             
            </h4>
            <span className="relative flex m-auto ">
            <p className="text-slate-800  italic font-bold text-center rounded-full bg-slate-300/25  w-auto px-4  ">
            Explore the world
          </p>
            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>

            </span>
           
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
        <div className="relative flex flex-col items-center w-96 gap-4 shadow-lg  pb-7   lg:w-80 sm:w-full">
          
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
            <span className="relative flex m-auto ">
            <p className="text-slate-800  italic font-bold text-center rounded-full bg-slate-300/25  w-auto px-4  ">
            Wear something new
          </p>
            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>

            </span>
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
        <div className="relative flex flex-col items-center w-96 gap-4 shadow-lg  pb-7   lg:w-80 sm:w-full">
       
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
            <span className="relative flex m-auto ">
            <p className="text-slate-800  italic font-bold text-center rounded-full bg-slate-300/25  w-auto px-4  ">
            Find your joyful balance
          </p>
            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>

            </span>
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
        <div className="relative flex flex-col items-center w-96 gap-4 shadow-lg  pb-7   lg:w-80 sm:w-full">
       
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
            <span className="relative flex m-auto ">
            <p className="text-slate-800  italic font-bold text-center rounded-full bg-slate-300/25  w-auto px-4  ">
            Be a part of the breakthrough
          </p>
            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>

            </span>
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
