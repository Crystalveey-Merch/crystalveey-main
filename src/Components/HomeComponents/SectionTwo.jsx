import React from "react";
import exploreImg from "../../Images/travelling.jpg";
import atelierImg from "../../Images/fashionista-2.jpg";
import wholesomeImg from "../../Images/picnic.jpg";
import CvCImg from "../../Images/charity.jpg";
import  {ReactComponent as Flight} from "../../Images/flight.svg";
import  {ReactComponent as Fashion} from "../../Images/fashion.svg";
import  {ReactComponent as Community} from "../../Images/community.svg";
import  {ReactComponent as Charity} from "../../Images/charity.svg";

export const SectionTwo = () => {
  return (
    <div className="py-14 flex flex-col gap-16 px-28">
      <h3 className="text-gray-900 font-bold text-5xl font-serif">
      Our Diversified Portfolio
      </h3>
      <div className="flex justify-around gap-10">
        <div className=" flex flex-col items-center w-96 gap-4 bg-gradient-to-br from-green-50 via-white to-gray-200 shadow-2xl rounded-xl pb-7 px-4 py-4">
          <img
            src={exploreImg}
            alt="exploreImg"
            className="rounded-xl w-full h-52"
          />
          <div className=" flex flex-col gap-4 px-4">
            <h4 className="text-slate-600 font-bold text-2xl font-serif">
              Explore Crystalveey <Flight className="w-8 h-8 inline-block ml-2" />
            </h4>
            <p className="text-slate-600 font-light text-base">
              Explore Crystalveey is a fashion brand that specializes in
              African-inspired clothing and accessories.
            </p>
          </div>
          <button className=" bg-sky-950 text-white font-medium text-base rounded-xl py-2 px-4 w-max  transition duration-300 ease-in-out hover:bg-sky-900
          ">
            Learn More
          </button>
        </div>
        <div className=" flex flex-col items-center w-96 gap-4 bg-gradient-to-br from-green-50 via-white to-gray-200 shadow-2xl rounded-xl pb-7 px-4 py-4">
          <img
            src={atelierImg}
            alt="exploreImg"
            className="rounded-xl w-full h-52"
          />
          <div className=" flex flex-col gap-4 px-4">
            <h4 className="text-slate-600 font-bold text-2xl font-serif">
            Crystalveey's Atelier <Fashion className="w-7 h-7 inline-block ml-2" />
            </h4>
            <p className="text-slate-600 font-light text-base">
              Explore Crystalveey is a fashion brand that specializes in
              African-inspired clothing and accessories.
            </p>
          </div>
          <button className=" bg-sky-950 text-white font-medium text-base rounded-xl py-2 px-4 w-max  transition duration-300 ease-in-out hover:bg-sky-900
          ">
            Learn More
          </button>
        </div>
        <div className=" flex flex-col items-center w-96 gap-4 bg-gradient-to-br from-green-50 via-white to-gray-200 shadow-2xl rounded-xl pb-7 px-4 py-4">
          <img
            src={wholesomeImg}
            alt="exploreImg"
            className="rounded-xl w-full h-52"
          />
          <div className=" flex flex-col gap-4 px-4">
            <h4 className="text-slate-600 font-bold text-2xl font-serif">
            Wholesome <Community className="w-7 h-7 inline-block ml-2" />
            </h4>
            <p className="text-slate-600 font-light text-base">
              Explore Crystalveey is a fashion brand that specializes in
              African-inspired clothing and accessories.
            </p>
          </div>
          <button className=" bg-sky-950 text-white font-medium text-base rounded-xl py-2 px-4 w-max  transition duration-300 ease-in-out hover:bg-sky-900
          ">
            Learn More
          </button>
        </div>
        <div className=" flex flex-col items-center w-96 gap-4 bg-gradient-to-br from-green-50 via-white to-gray-200 shadow-2xl rounded-xl pb-7 px-4 py-4">
          <img
            src={CvCImg}
            alt="exploreImg"
            className="rounded-xl w-full h-52"
          />
          <div className=" flex flex-col gap-4 px-4">
            <h4 className="text-slate-600 font-bold text-2xl font-serif">
              CVC Charity <Charity className="w-6 h-6 inline-block ml-2" />
            </h4>
            <p className="text-slate-600 font-light text-base">
              Explore Crystalveey is a fashion brand that specializes in
              African-inspired clothing and accessories.
            </p>
          </div>
          <button className=" bg-sky-950 text-white font-medium text-base rounded-xl py-2 px-4 w-max  transition duration-300 ease-in-out hover:bg-sky-900
          ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
