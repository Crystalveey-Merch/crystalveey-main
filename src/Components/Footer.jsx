import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import reminato from "../Images/paertners/REMINATO.png"
import covenant from "../Images/paertners/covenant.png"
import airp from "../Images/paertners/airp.png"
import turkey from "../Images/paertners/turkey.png"
import awa from "../Images/paertners/awa.png"
import qatar from "../Images/paertners/qatar.png"
import kenya from "../Images/paertners/kenya.png"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";





import "swiper/css";

export const Footer = () => {
  return (
    <div className="flex Andis flex-col gap-10 px-20 pl-48 pt-16 pb-8 bg-black 2xl:pl-20 xl:pl-7 sm:gap-6 sm:pl-4 sm:px-5">
      <div className="flex justify-between pr-40 2xl:pr-16 xl:pr-7  lg:flex lg:flex-wrap lg:gap-16 sm:gap-8 sm:pr-0">
        <div className="flex flex-col gap-4 w-64 lg:w-5/12 lg:order-1 sm:w-full">
          <h2 className="font-bold text-4xl text-white font-pro sm:text-2xl">
            {" "}
            CRYSTALVEÉY
          </h2>
          <p className=" text-gray-300 font-semibold text-base xl:text-sm xl:font-medium">
            Fashion| Travel| Events| Consultations.
          </p>
          <p>Partners:</p>
          <Swiper
            // breakpoints={breakpoints}
            slidesPerView={3}
            spaceBetween={1}

            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay,]}
            className="mySwiper py-10 text-white w-full"
          >
            <SwiperSlide className="text-white" >
              <img src={turkey} alt="turkey" className="w-20 h-10" />
            </SwiperSlide>
            <SwiperSlide className="text-white" >
              <img src={reminato} alt="reminato" className="w-20 h-10" />
            </SwiperSlide>
            <SwiperSlide className="text-white" >
              <img src={airp} alt="airpeace" className="w-20 h-10" />
            </SwiperSlide>
            <SwiperSlide className="text-white" >
              <img src={covenant} alt="covenant" className="w-20 h-10" />
            </SwiperSlide>
            <SwiperSlide className="text-white" >
              <img src={kenya} alt="kenya" className="w-20 h-10" />
            </SwiperSlide>

            <SwiperSlide className="text-white" >
              <img src={qatar} alt="qutar" className="w-20 h-10" />
            </SwiperSlide>
            <SwiperSlide className="text-white" >
              <img src={awa} alt="awa" className="w-20 h-10" />
            </SwiperSlide>

          </Swiper>

        </div>
        <div className="flex gap-40  2xl:gap-20 xl:gap-12 lg:w-full lg:order-3 lg:justify-between lg:pr-10 sm:flex-wrap">
          <ul className="flex flex-col gap-6  text-gray-200">
            <li className="middle hover:text-gray-400 text-lg cursor-pointer w-max">
              Company
            </li>
            <li className="middle hover:text-gray-400 fnt-medium text-lg cursor-pointer w-max">
              About Us
            </li>
            <li className="middle  hover:text-gray-400 font-medium text-lg cursor-pointer w-max">
              {" "}
              Privacy Policy
            </li>

          </ul>
          <ul className="flex flex-col gap-6 w-max text-white">


            <li className="middle  hover:text-gray-400 font-medium text-lg cursor-pointer w-max">
              <Link
                to="http://attelier.vercel.app/" target="_blank">
                Atelier
              </Link>
            </li>
            <li className="middle  hover:text-gray-400 font-medium text-lg cursor-pointer w-max"
              to="http://explore-crystalveey.vercel.app" target="_blank"
            >

              Explore Crystalveey
            </li>
            <li className="middle  hover:text-gray-400 cursor-pointer">
              Wholesome
            </li>
            <li className="middle  hover:text-gray-400 font-medium text-lg cursor-pointer w-max">
              CVC Charity
            </li>
          </ul>
          <ul className="flex flex-col gap-6 w-full break-words text-white">
            <li className="middle underline   hover:text-gray-400 cursor-pointer">
              Contact
            </li>
            <li className=" flex gap-1 items-center  font-medium text-lg cursor-pointer w-max" style={{ color: "rgb(56 189 248)" }}>
              <a
                href="mailto:office.crystalveey@gmail.com"
                className="hover:text-gray-750"
              >
                <FontAwesomeIcon icon={faEnvelope} className="px-2" />
                office.crystalveey@gmail.com
              </a>
            </li>
            <li className=" flex gap-1 items-center  font-medium text-lg cursor-pointer w-max" style={{ color: "rgb(56 189 248)" }} >
              <a href="tel:+2548126091411" className="hover:text-gray-750" style={{ color: "rgb(56 189 248)" }}>
                <FontAwesomeIcon icon={faPhone} className="px-2" />

                +254 812 609 1411
              </a>
            </li>
            <li className=" flex gap-1 items-center  font-medium text-lg cursor-pointer w-full" style={{ color: "rgb(56 189 248)" }}>
             
                <FontAwesomeIcon icon={faMapLocation} className="px-2" />

                Olu-Olusegun avenue off Mobil road, Lekki. Lagos state, Nigeria             
            </li>
          </ul>
        </div>

      </div>
      <div className=" border-gray-100 pt-6 text-center">
        <p className="font-semibold base text-gray-200">
          &copy; {new Date().getFullYear()} Explore Crystalveey
          <span className="text-gray-400 pl-2"> All Rights Reserved</span>
        </p>
      </div>
    </div>
  );
};
