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
  return (
    <div className="py-14 px-14 flex flex-col gap-16   bg-gray-300 rounded-lg">
      <h3 className="text-gray-900 font-bold text-5xl font-serif">
        Top Selling Designs
      </h3>
      <div className=" flex justify-center items-center">
        <Swiper
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
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2">
              <img
                src={imgTwo}
                alt="imgTwo"
                className=" w-96"
                style={{ height: "500px" }}
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm font-serif text-left">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Add To Cart
                </button>

                <button className="text-gray-900 font-semibold text-base  text-left">
                  Add To Wishlist
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2">
              <img
                src={imgOne}
                alt="imgOne"
                className=" w-96"
                style={{ height: "500px" }}
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm font-serif text-left">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Add To Cart
                </button>

                <button className="text-gray-900 font-semibold text-base  text-left">
                  Add To Wishlist
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2">
              <img
                src={imgThree}
                alt="imgThree"
                className=" w-96"
                style={{ height: "500px" }}
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm font-serif text-left">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Add To Cart
                </button>

                <button className="text-gray-900 font-semibold text-base  text-left">
                  Add To Wishlist
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2">
              <img
                src={imgFour}
                alt="imgFour"
                className=" w-96"
                style={{ height: "500px" }}
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm font-serif text-left">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Add To Cart
                </button>

                <button className="text-gray-900 font-semibold text-base  text-left">
                  Add To Wishlist
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2">
              <img
                src={imgFive}
                alt="imgFive"
                className=" w-96"
                style={{ height: "500px" }}
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm font-serif text-left">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Add To Cart
                </button>

                <button className="text-gray-900 font-semibold text-base  text-left">
                  Add To Wishlist
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2">
              <img
                src={imgSix}
                alt="imgSix"
                className=" w-96"
                style={{ height: "500px" }}
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm font-serif text-left">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Add To Cart
                </button>

                <button className="text-gray-900 font-semibold text-base  text-left">
                  Add To Wishlist
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2">
              <img
                src={imgSeven}
                alt="imgSeven"
                className=" w-96"
                style={{ height: "500px" }}
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm font-serif text-left">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Add To Cart
                </button>

                <button className="text-gray-900 font-semibold text-base  text-left">
                  Add To Wishlist
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2">
              <img
                src={imgEight}
                alt="imgEight"
                className=" w-96"
                style={{ height: "500px" }}
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm font-serif text-left">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Add To Cart
                </button>

                <button className="text-gray-900 font-semibold text-base  text-left">
                  Add To Wishlist
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2">
              <img
                src={imgNine}
                alt="imgNine"
                className=" w-96"
                style={{ height: "500px" }}
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm font-serif text-left">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Add To Cart
                </button>

                <button className="text-gray-900 font-semibold text-base  text-left">
                  Add To Wishlist
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 w-max border-b border-gray-700 pb-2">
              <img
                src={imgTen}
                alt="imgTen"
                className=" w-96"
                style={{ height: "500px" }}
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left">
                    $295
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm font-serif text-left">
                    Hooded cotton sweatshirt
                  </p>
                </div>
                <button className="w-full bg-gray-900 text-white font-medium text-base py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                  Add To Cart
                </button>

                <button className="text-gray-900 font-semibold text-base  text-left">
                  Add To Wishlist
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
