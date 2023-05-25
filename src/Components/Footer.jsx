import React from "react";
import logo from "../Images/logo.jpg";
import { ReactComponent as Logo } from "../Images/logo.svg";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-10 px-72 pt-16 pb-8">
      <div className="flex justify-between">
        {/* <div className="relative h-max">
          <div className="w-max h-max rounded-lg bg-black ">
            <img src={logo} alt="logo" className="h w-60 rounded-lg inline-block" />
          </div>

          <h4 className="Ysabeau text-sm font-medium text-white w-max bottom-2 absolute pl-2">
            Fashion| Travel| Events| Consultations.
          </h4>
        </div> */}
        <div className="flex gap-40 pr-28">
          <ul className="flex flex-col gap-6 ">
            <li className="middle hover:text-gray-750 cursor-pointer w-max">
              Company
            </li>
            <li className="middle text-gray-900 font-medium text-sm cursor-pointer w-max">
              About Us
            </li>
            <li className="middle text-gray-900 font-medium text-sm cursor-pointer w-max">
              FAQs
            </li>
            <li className="middle text-gray-900 font-medium text-sm cursor-pointer w-max">
              Contact US
            </li>
            {/* <li className="middle text-gray-900 font-medium text-sm cursor-pointer w-max">
              Cookie Policy
            </li>
            <li className="middle text-gray-900 font-medium text-sm cursor-pointer w-max">
              {" "}
              Terms and Condition
            </li> */}
          </ul>
          <ul className="flex flex-col gap-6 w-max">
            <li className="middle  hover:text-gray-750 cursor-pointer">
              Resources
            </li>
            <li className="middle text-gray-900 font-medium text-sm cursor-pointer w-max">
              Cookie Policy
            </li>
            <li className="middle text-gray-900 font-medium text-sm cursor-pointer w-max">
              {" "}
              Terms and Condition
            </li>
          </ul>
          <div>
            <h4 className=" text-gray-900 text-base font-semibold ">Address</h4>
            <p></p>
          </div>
          <Logo className="h-24 w-60 " />
        </div>
      </div>
      <div className=" border-gray-100 pt-6 text-center">
        <p className="font-semibold base">
          &copy; {new Date().getFullYear()} Crystalveey
          <span className="text-gray-400 pl-2"> All Rights Reserved</span>
        </p>
      </div>
    </div>
  );
};
