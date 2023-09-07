import React from "react";

import { ReactComponent as Community } from "../../Images/community.svg";

export const SectionSix = () => {
  return (
    <div  style={{backgroundColor:"#d7dde4"}}  className="m-auto py-20 px-20 w-4/5 sm:w-full sm:px-10">
      <div className=" flex text-center flex-col gap-2 md:gap-3" >
      <Community className="w-10 h-10 inline-block m-auto  xl:w-6 xl:h-6" />
        <h6 className="text-gray-700 font-semibold Aceh text-xl md:text-lg">
        JOIN WHOLESOME COMMUNITY
        </h6>
        <p className="text-gray-600 font-normal text-xl md:text-sm">
          Connect and chat with likeminds on Wholesome!!
        </p>
        <button
            className="px-4 py-2 h-12 rounded-lg bg-black text-white text-base font-normal hover:bg-gray-900 transition duration-300 ease-in-out w-max
            xl:px-3 xl:text-sm xl:py-1 md:px-3 md:text-sm md:h-10 md:w-max m-auto 
          "
          >
            Join Wholesome
          </button>
      </div>
      
        
        
        {/* <p className="text-gray-600 font-normal text-base">
          Refer a friend and earn $20 - $200 when they make their first
          purchase. Learn more{" "}
          <a
            href="#referral"
            target="_blank"
            className="text-blue-500 hover:text-blue-700 hover:border-b border-blue-700 transition ease-in-out duration-300 pb-1"
          >
            here
          </a>
        </p> */}

        {/* <form className="flex  gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-96 h-12 rounded-lg px-5 border-none focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
            required
          />
          <button
            className="px-4 py-2 h-12 rounded-lg bg-black text-white text-base font-normal hover:bg-gray-900 transition duration-300 ease-in-out
          "
          >
            Subscribe
          </button>
        </form> */}
    
      {/*  <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h6 className="text-gray-900 font-bold text-base"> Call Us</h6>
          <div className="flex gap-4 text-sm text-gray-700">
            <p>+234 812 609 1411</p>
            <p>office.crystalveey@gmail.com</p>
          </div>
        </div>
        <div className="flex  flex-col gap-2">
          <h5 className="text-gray-900 font-bold text-base capitalize">
            Location & Language
          </h5>
          <p className="text-sm text-gray-700">English</p>
        </div> 
        <div>Social Medias</div>
      </div>*/}
    </div>
  );
};
