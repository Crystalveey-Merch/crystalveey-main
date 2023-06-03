import React from "react";

export const SectionSix = () => {
  return (
    <div className="py-14 flex  gap-60 bg-slate-50  pl-72  text-left 2xl:pl-24 2xl:gap-32 xl:gap-16 xl:pl-10 md:flex-col md:pl-16 md:px-16 sm:pl-8 sm:px-8 md:gap-8">
      <div className="sec6DW flex flex-col gap-6 md:gap-3" >
        <h6 className="text-gray-700 font-semibold text-xl md:text-lg">
          Enjoy 15% off your first order
        </h6>
        <p className="text-gray-600 font-normal text-base md:text-sm">
          Claim your exclusive discount code when you subscribe to our emails.
          Terms and conditions apply
        </p>
        <form className="flex  gap-4 lg:flex-col md:gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-96 h-12 rounded-lg px-5 border-none focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out md:h-10 md:w-full"
            required
          />
          <button
            className="px-4 py-2 h-12 rounded-lg bg-black text-white text-base font-normal hover:bg-gray-900 transition duration-300 ease-in-out md:px-3 md:text-sm md:h-10 md:w-max
          "
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-6 md:gap-3">
        <h6 className="text-gray-700 font-semibold text-xl xl:text-lg md:font-medium md:text-base">
          Enjoy free $20 - $200 free with our referral program.
        </h6>
        <button
            className="px-4 py-2 h-12 rounded-lg bg-black text-white text-base font-normal hover:bg-gray-900 transition duration-300 ease-in-out w-max
            xl:px-3 xl:text-sm xl:py-1 md:px-3 md:text-sm md:h-10 md:w-max
          "
          >
            Refer a friend
          </button>
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
      </div>
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
