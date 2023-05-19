import React from "react";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="px-36  flex justify-between py-8 items-center bg-gradient-to-br from-gray-200 via-gray-200 to-gray-100">
      <div className="relative">
        <img src={logo} alt="logo" className="h w-48" />
        <h4
          className="Ysabeau text-sm font-semibold text-gray-700 w-max pl-2"
        >
          Fashion, travel, events and consultations.
        </h4>
      </div>
      <div className=" ">
        <ul className="flex justify-center items-center gap-10">
            <li>
                <Link to="/" className="middle text-gray-900 text-base font-semibold hover:text-gray-750">Book A Trip</Link>
            </li>
            <li>
                <Link to="/" className="middle text-gray-900 text-base  font-semibold hover:text-gray-750">Wear Something New</Link>
            </li>
            <li>
                <Link to="/" className="middle text-gray-900 text-base  font-semibold hover:text-gray-750">Join Wholesome</Link>
            </li>
            <li>
                <Link to="/" className="middle text-gray-900 text-base  font-semibold hover:text-gray-750">Free Consultation</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};
