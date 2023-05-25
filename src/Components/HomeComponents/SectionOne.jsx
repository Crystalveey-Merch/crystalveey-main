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
    <div className=" flex gap-20 py-10 text-left px-56 items-center">
      <div className="w-6/12 pr-16 ">
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
      <div className="w-6/12 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-5xl text-gray-900">
            Welcome To Crystalveey
          </h1>
          <p className="text-gray-600 font-light text-base">
            Nigeria’s premium resort for leisure, entertainment and events.
          </p>
        </div>
        <p className="text-gray-600 font-normal text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          voluptates, nobis, voluptate, quibusdam quos voluptatum quas quod
          voluptas fugiat magni quidem. Quisquam, voluptatum. Quibusdam, quia
          voluptatibus. Quae, voluptas. Quisquam, voluptatum. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nesciunt voluptates, nobis,
          voluptate, quibusdam quos voluptatum quas quod voluptas fugiat magni
          quidem. Quisquam, voluptatum. Quibusdam, quia voluptatibus. Quae,
          voluptas. Quisquam, voluptatum.
        </p>
      </div>
    </div>
  );
};
