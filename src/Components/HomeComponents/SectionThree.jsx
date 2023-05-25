import React from "react";
import { ReactComponent as Kite } from "../../Images/kite.svg";
import manchesterImg from "../../Images/manchester.jpg";
import riyadhImg from "../../Images/riyadh.jpg";
import kigaliImg from "../../Images/kigali.jpg";
import portoImg from "../../Images/porto.jpg";

export const SectionThree = () => {
  return (
    <div className="py-14 flex flex-col gap-16 bg-gray-300 rounded-lg mx-28">
      <h3 className="text-gray-900 font-bold text-5xl font-serif">
        Top Selling Travel Packages
      </h3>
      <div className="flex justify-around gap-10 ">
        <div className="w-72 shadow-xl rounded-xl flex flex-col gap-6 pb-10 bg-gradient-to-br from-blue-100 via-white to-purple-100">
          <img
            src={kigaliImg}
            alt="kigaliImg"
            className="w-full h-60 rounded-t-xl"
          />
          <div className="px-5 flex flex-col gap-5">
            <div className="flex justify-between">
              <h5 className="font-semibold text-base text-gray-900">
                Kigali, Rwanda
              </h5>
              <p className="font-medium text-sm text-gray-900">$5,42k</p>
            </div>
            <div className="flex gap-4">
              <Kite className="w-5 h-5 text-green-800" />
              <p className="font-light text-sm text-gray-900">10 Days Trip</p>
            </div>
          </div>
        </div>

        <div className="w-72 shadow-xl rounded-xl flex flex-col gap-6 pb-10 bg-gradient-to-br from-blue-100 via-white to-purple-100">
          <img
            src={riyadhImg}
            alt="riyadhImg"
            className="w-full h-60 rounded-t-xl"
          />
          <div className="px-5 flex flex-col gap-5">
            <div className="flex justify-between">
              <h5 className="font-semibold text-base text-gray-900">
                Riyadh, Saudi Arabia
              </h5>
              <p className="font-medium text-sm text-gray-900">$5,42k</p>
            </div>
            <div className="flex gap-4">
              <Kite className="w-5 h-5 text-green-800" />
              <p className="font-light text-sm text-gray-900">10 Days Trip</p>
            </div>
          </div>
        </div>
        <div className="w-72 shadow-xl rounded-xl flex flex-col gap-6 pb-10 bg-gradient-to-br from-blue-100 via-white to-purple-100">
          <img
            src={manchesterImg}
            alt="manchesterImg"
            className="w-full h-60 rounded-t-xl"
          />
          <div className="px-5 flex flex-col gap-5">
            <div className="flex justify-between">
              <h5 className="font-semibold text-base text-gray-900">
                Manchester, UK
              </h5>
              <p className="font-medium text-sm text-gray-900">$5,42k</p>
            </div>
            <div className="flex gap-4">
              <Kite className="w-5 h-5 text-green-800" />
              <p className="font-light text-sm text-gray-900">10 Days Trip</p>
            </div>
          </div>
        </div>
        <div className="w-72 shadow-xl rounded-xl flex flex-col gap-6 pb-10 bg-gradient-to-br from-blue-100 via-white to-purple-100">
          <img
            src={portoImg}
            alt="portoImg"
            className="w-full h-60 rounded-t-xl"
          />
          <div className="px-5 flex flex-col gap-5">
            <div className="flex justify-between">
              <h5 className="font-semibold text-base text-gray-900">
                Porto, Portugal
              </h5>
              <p className="font-medium text-sm text-gray-900">$5,42k</p>
            </div>
            <div className="flex gap-4">
              <Kite className="w-5 h-5 text-green-800" />
              <p className="font-light text-sm text-gray-900">10 Days Trip</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
