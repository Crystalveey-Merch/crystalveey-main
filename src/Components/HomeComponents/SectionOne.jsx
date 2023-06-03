import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper";

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
  return (
    <div className=" flex gap-20 py-10 text-left px-56 items-center 2xl:px-16 2xl:gap-0 2xl:justify-between xl:px-10 lg:flex-col-reverse lg:gap-8">
      <div className="w-6/12 pr-16 lg:w-full lg:pr-0">
        <Swiper
          //   spaceBetween={30}
          //   centeredSlides={true}
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
              className=" h-96 rounded-xl shadow-lg w-11/12"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgEight}
              alt="fashion"
              className=" h-96 rounded-xl shadow-lg w-11/12"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={imgTwo}
              alt="imgTwo"
              className=" h-96 rounded-xl shadow-lg w-11/12"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgTen}
              alt="imgTen"
              className=" h-96 rounded-xl shadow-lg w-11/12"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgOne}
              alt="imgOne"
              className=" h-96 rounded-xl shadow-lg w-11/12"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgThree}
              alt="imgThree"
              className=" h-96 rounded-xl shadow-lg w-11/12"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgFour}
              alt="imgFour"
              className=" h-96 rounded-xl shadow-lg w-11/12"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgFive}
              alt="imgFive"
              className=" h-96 rounded-xl shadow-lg w-11/12"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgSix}
              alt="imgSix"
              className=" h-96 rounded-xl shadow-lg w-11/12"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgNine}
              alt="imgNine"
              className=" h-96 rounded-xl shadow-lg w-11/12"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgEleven}
              alt="imgEleven"
              className=" h-96 rounded-xl shadow-lg w-11/12"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgTwelve}
              alt="imgTwelve"
              className=" h-96 rounded-xl shadow-lg w-11/12"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-6/12 flex flex-col gap-8 xl:gap-5 lg:w-full">
        <div className="flex flex-col gap-4 xl:gap-2">
          <h1 className="font-bold text-5xl text-gray-900 xl:text-4xl">
            Welcome To Crystalveey
          </h1>
          <p className="text-gray-600 font-light text-base xl:text-sm">
            Explore the intersection of philanthropy, style, adventure, and
            expert advice at Crystalveey.
          </p>
        </div>
        <p className="text-gray-600 font-normal text-lg xl:text-base">
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
    </div>
  );
};
