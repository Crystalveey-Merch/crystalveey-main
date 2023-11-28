import React from "react";
import community from "../../Images/community.gif";
import { ReactComponent as Community } from "../../Images/community.svg";
import { Link } from "react-router-dom";

export const SectionSix = () => {
  return (
    <div   className="m-auto bg-gray-50 flex sm:flex-col justify-center py-20 px-20 w-full sm:w-full sm:px-10">
      <img src={community} alt="community" className="w-60 h-48 mx-10"         data-aos="slide-right" data-aos-delay="400"
/>
      <div className=" flex sm:text-center text-left flex-col gap-2 md:gap-3" >
      {/* <img src={community} alt="community" className="w-56 h-48"/> */}

      {/* <Community className="w-10 h-10 inline-block m-auto  xl:w-6 xl:h-6" /> */}
        <h6 className="text-gray-700 font-semibold Aceh text-4xl md:text-2xl"
        data-aos="slide-down"  data-aos-delay="200">
        JOIN WHOLESOME COMMUNITY
        </h6>
        <p className="text-gray-600 font-normal text-2xl italic md:text-sm"
        data-aos="slide-left" data-aos-delay="300">
          Connect and chat with likeminds on Wholesome!!
        </p>
        <form>
        <input type="email" className="px-4 py-2 w-full my-4 h-12 mr-4 bg-white border rounded-lg" placeholder="Email Address">

        </input>
        <Link to="http://wholesome.crystalveey.com/">
        <button type="submit"
            className="px-4 py-2 h-12 rounded-lg bg-black text-white text-base font-normal hover:bg-gray-900 transition duration-300 ease-in-out w-max
            xl:px-3 xl:text-sm xl:py-1 md:px-3 md:text-sm md:h-10 md:w-max sm:m-auto
          "
          data-aos="slide-up" data-aos-delay="400"        
                    >
            Join Wholesome
          </button></Link>
          </form>
      </div>
      
        
        
        
    </div>
  );
};
