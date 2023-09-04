import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import imgOne from "../../Images/one.jpg";
import imgTwo from "../../Images/two.jpg";
import imgThree from "../../Images/seven.jpg";
import imgFour from "../../Images/four.jpg";
import imgFive from "../../Images/eight.jpg";
import imgSix from "../../Images/nine.jpg";
import imgSeven from "../../Images/ten.jpg";
import imgEight from "../../Images/five.jpg";
import imgNine from "../../Images/eleven.jpg";
import imgTen from "../../Images/twelve.jpg";
import imgEleven from "../../Images/thirteen.jpg";
import imgTwelve from "../../Images/fourteen.jpg";


export const SectionOne = () => {
  const breakpoints = {
    639: {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        hideOnClick: true,
      },
    },
  };

  return (
    <div className=" relative h-screen text-left  items-center 
  
  ">
<div className=" ">
      <Swiper
        slidesPerView={1}
        // spaceBetween={30}
        breakpoints={breakpoints}
        loop={true}
        // direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        // navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper z-0 swiper-v h-full"
      >
        <SwiperSlide><img
          src={imgSix}
          alt="imgSeven"
          className="h-full w-screen  shadow-lg " /></SwiperSlide>
        
        <SwiperSlide><img
          src={imgEleven}
          alt="imgSeven"
          style={{ }}
          className="h-full w-screen  shadow-lg " /></SwiperSlide>
        <SwiperSlide>
          <img
            src={imgEight}
            alt="fashion"
            className=" h-full w-screen shadow-lg  " /></SwiperSlide>
        <SwiperSlide>
          <img
            src={imgTwo}
            alt="imgTwo"
            className=" h-full w-screen  shadow-lg  " /></SwiperSlide>
        <SwiperSlide><img
          src={imgTen}
          alt="imgTen"
          className=" h-full w-screen  shadow-lg " /></SwiperSlide>
        <SwiperSlide><img
          src={imgOne}
          alt="imgTen"
          className=" h-full w-screen  shadow-lg " /></SwiperSlide>
        <SwiperSlide><img
          src={imgThree}
          alt="imgTen"
          className=" h-full w-screen  shadow-lg " /></SwiperSlide>
        <SwiperSlide><img
          src={imgFour}
          alt="imgTen"
          className=" h-full w-screen  shadow-lg " /></SwiperSlide>
           <SwiperSlide><img
              src={imgFive}
              alt="imgTen"
              className=" h-full w-screen  shadow-lg " /></SwiperSlide>

      </Swiper>
      </div>
      {/* <div className="w-6/12 pr-16 lg:w-full lg:pr-0">
        <Swiper
          //   spaceBetween={30}
          //   centeredSlides={true}
          breakpoints={breakpoints}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          effect="cards"
          modules={[Autoplay, Pagination, Navigation, EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={imgSeven}
              alt="imgSeven"
              className=" h-96 rounded-xl shadow-lg w-11/12 sm:h-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgEight}
              alt="fashion"
              className=" h-96 rounded-xl shadow-lg w-11/12 sm:h-72" />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={imgTwo}
              alt="imgTwo"
              className=" h-96 rounded-xl shadow-lg w-11/12 sm:h-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgTen}
              alt="imgTen"
              className=" h-96 rounded-xl shadow-lg w-11/12 sm:h-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgOne}
              alt="imgOne"
              className=" h-96 rounded-xl shadow-lg w-11/12 sm:h-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgThree}
              alt="imgThree"
              className=" h-96 rounded-xl shadow-lg w-11/12 sm:h-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgFour}
              alt="imgFour"
              className=" h-96 rounded-xl shadow-lg w-11/12 sm:h-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgFive}
              alt="imgFive"
              className=" h-96 rounded-xl shadow-lg w-11/12 sm:h-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgSix}
              alt="imgSix"
              className=" h-96 rounded-xl shadow-lg w-11/12 sm:h-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgNine}
              alt="imgNine"
              className=" h-96 rounded-xl shadow-lg w-11/12 sm:h-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgEleven}
              alt="imgEleven"
              className=" h-96 rounded-xl shadow-lg w-11/12 sm:h-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgTwelve}
              alt="imgTwelve"
              className=" h-96 rounded-xl shadow-lg w-11/12 sm:h-72" />
          </SwiperSlide>
        </Swiper>
      </div>*/}
      <div className="w-8/12 absolute z-10 sm:relative  sm:p-4 m-auto   top-80 bg-black/50 p-10 sm:top-0 flex flex-col gap-8 xl:gap-5 lg:w-full ">
     
         <div className="flex flex-col gap-4 xl:gap-2">
          <h1 className="font-bold text-5xl Aceh text-white xl:text-4xl sm:text-2xl sm:font-semibold">
            Welcome To Crystalveey
          </h1>
          <p className="text-gray-300 Andis text-xl font-light text-base xl:text-sm italic">
            Explore the intersection of philanthropy, style, adventure, and
            expert advice at Crystalveey.
          </p>
        </div>
        <p className="text-gray-300 Andis text-xl sm:leading-5  xl:text-base sm:font-light">
          Crystalveey is a unique platform that combines the worlds of charity,
          fashion, travel, and travel consultation. Discover our charitable
          initiatives, supporting communities and partnering with impactful
          organizations. Experience the latest fashion trends at Crystalveey's
          exclusive events. Embark on unforgettable travel journeys, from beach
          getaways to mountain expeditions. Get expert travel consultation
          services for personalized itineraries and recommendations. Book your
          stay, cutting-edge fashion, support our charitable initiatives, and
          embark on a journey with Crystalveey.
        </p>
        
       
          
        
    
     
    </div>
    <div className="text-black absolute flex text-2xl m-14 flex-col gap-10 right-0 z-30 top-80 sm:top-0 sm:gap-4 sm:text-xl sm:right-0 "> 
      <FontAwesomeIcon icon={faFacebook} className="bg-white p-2 rounded"/>
        <FontAwesomeIcon icon={faTwitter}  className="bg-white p-2 rounded"/>
        <FontAwesomeIcon icon={faInstagram}  className="bg-white p-2 rounded"/>
        </div>
    </div>
  );
};
