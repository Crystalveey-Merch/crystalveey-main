import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import imgOne from "../../Images/male-model.jpg";
import imgTwo from "../../Images/model-one.jpg";
import imgThree from "../../Images/male-model-2.jpg";
import imgFour from "../../Images/model-two.jpg";
import imgFive from "../../Images/male-model-3.jpg";
import imgSix from "../../Images/model-three.jpg";
import imgSeven from "../../Images/male-model-4.jpg";
import imgEight from "../../Images/model-four.jpg";
import imgNine  from "../../Images/male-model-5.jpg";
import imgTen from "../../Images/model-five.jpg";

export const SectionFour = () => {
  const breakpoints = {
    // Define the breakpoints where you want to change the slidesPerView
    300: {
      slidesPerView: 1,
      spaceBetween: 2,
    },
    639: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <div className="py-14 px-14 flex flex-col gap-16   bg-gray-50 rounded-lg mx-20 xl:mx-10 xl:gap-12 xl:px-8 sm:px-3 sm:mx-7">
      <h3 className="text-gray-900 font-bold text-4xl Aceh  xl:text-4xl md:text-2xl">
        Top Selling Designs
      </h3>
      <div className=" flex justify-center items-center">
        <Swiper
          breakpoints={breakpoints}
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2 sm:px-5 sm:w-full sm:border-none">
              <img
                src={imgTwo}
                alt="imgTwo"
                className=" sec4ImgH w-96 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2 sm:px-5 sm:w-full sm:border-none">
              <img
                src={imgOne}
                alt="imgOne"
                className=" sec4ImgH w-96 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2 sm:px-5 sm:w-full sm:border-none">
              <img
                src={imgThree}
                alt="imgThree"
                className=" sec4ImgH w-96 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2 sm:px-5 sm:w-full sm:border-none">
              <img
                src={imgFour}
                alt="imgFour"
                className=" sec4ImgH w-96 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2 sm:px-5 sm:w-full sm:border-none">
              <img
                src={imgFive}
                alt="imgFive"
                className=" sec4ImgH w-96 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2 sm:px-5 sm:w-full sm:border-none">
              <img
                src={imgSix}
                alt="imgSix"
                className=" sec4ImgH w-96 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2 sm:px-5 sm:w-full sm:border-none">
              <img
                src={imgSeven}
                alt="imgSeven"
                className=" sec4ImgH w-96 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2 sm:px-5 sm:w-full sm:border-none">
              <img
                src={imgEight}
                alt="imgEight"
                className=" sec4ImgH w-96 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2 sm:px-5 sm:w-full sm:border-none">
              <img
                src={imgNine}
                alt="imgNine"
                className=" sec4ImgH w-96 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2 sm:px-5 sm:w-full sm:border-none">
              <img
                src={imgTen}
                alt="imgTen"
                className=" sec4ImgH w-96 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
