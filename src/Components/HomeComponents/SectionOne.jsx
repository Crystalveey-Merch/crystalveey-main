import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
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
    <div className="  text-left  items-center 
  
  ">
      
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
            style={{}}
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
     
      
      <div className="w-8/12 absolute lg:top-40 z-10 sm:relative sm:text-center sm:p-4 m-auto   top-80 bg-black/50 sm:bg-white sm:bg-black  p-10 sm:top-0 flex flex-col gap-8 xl:gap-5 lg:w-full ">

        <div className="flex flex-col gap-4 xl:gap-2">
          <h1 className="font-bold text-5xl Aceh text-white sm:text-black xl:text-4xl sm:text-2xl sm:font-semibold">
            Welcome To Crystalveey
          </h1>
          <p className="text-gray-300 sm:text-gray-800 Andis text-xl font-light text-base xl:text-sm italic">
            Explore the intersection of philanthropy, style, adventure, and
            expert advice at Crystalveey.
          </p>
        </div>
        <p className="text-white sm:text-black Andis text-xl sm:leading-5  xl:text-base sm:font-light">
          Crystalveey is a unique platform that combines the exciting worlds of travel, fashion, charity and community, encompassing a fashion brand, a charity organization, 
          a community for Nigerians to connect and a travel company offering affordable vacation packages to various destinations, including flight arrangements, visa and hotel bookings. 
          We provide travel consultations and organize events for all occasions, ranging from company retreats, to birthdays, proposals and honeymoons. We have a trusted team of talented individuals 
          readily available to ensure that every experience is unforgettable.
        </p>
      </div>
      {/* <div className="text-black absolute flex text-2xl m-14 flex-col gap-10 right-0 z-30 top-80 sm:top-0 sm:gap-4 sm:text-xl sm:right-0 ">
        <FontAwesomeIcon icon={faFacebook} className="bg-white/50 p-2 rounded" />
        <FontAwesomeIcon icon={faTwitter} className="bg-white/50 p-2 rounded" />
        <FontAwesomeIcon icon={faInstagram} className="bg-white/50 p-2 rounded" />
      </div> */}
    </div>
  );
};
