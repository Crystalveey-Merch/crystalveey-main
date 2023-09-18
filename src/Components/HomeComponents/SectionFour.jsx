import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import image1 from "../../Images/topproduct/image1.jpeg";
import image2 from "../../Images/topproduct/image2.jpeg";
import image3 from "../../Images/topproduct/image3.jpeg";
import image4 from "../../Images/topproduct/image4.jpeg";
import image5 from "../../Images/topproduct/image5.jpeg";
import image6 from "../../Images/topproduct/image6.jpeg";
import image7 from "../../Images/topproduct/image7.jpeg";
import image8 from "../../Images/topproduct/image8.jpeg";
import image9 from "../../Images/topproduct/image9.jpeg";
import image10 from "../../Images/topproduct/image10.jpeg";
import image11 from "../../Images/topproduct/image11.jpeg";
import image12 from "../../Images/topproduct/image12.jpeg";
import image13 from "../../Images/topproduct/image13.jpeg";
import image14 from "../../Images/topproduct/image14.jpeg";
import image15 from "../../Images/topproduct/image15.jpeg";
import image16 from "../../Images/topproduct/image16.jpeg";
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
                src={image9}
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
                src={image10}
                alt="imgNine"
                className=" sec4ImgH w-96 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    N16,000
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Viva
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
              <div className="w-96 sec4ImgH overflow overflow-hidden">
              <img
                src={image11}
                alt="imgNine"
                className="   2xl:w-80 xl:w-72 md:w-60 sm:w-full"
                style={{height: '400px', width: '500px'}}

              />
              </div>
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    N15,000
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Bloom dress
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
            <div className="w-96 sec4ImgH overflow-hidden">
              <img
                src={image12}
                alt="imgNine"
                className=" 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
                style={{height: '400px', width: '500px'}}
              />
              </div>
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    N12,500
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Luxe Maxi
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
            <div className="w-96 sec4ImgH overflow-hidden">
              <img
                src={image13}
                alt="imgNine"
                className=" 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
                style={{height: '400px', width: '500px'}}
              />
              </div>

              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                   N9500
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Zendra
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
            <div className="w-96 sec4ImgH overflow-hidden">
              <img
                src={image14}
                alt="imgNine"
                className="  2xl:w-80 xl:w-72 md:w-60 sm:w-full"
                style={{height: '400px', width: '500px'}}

              />
              </div>
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    N10,500
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Tia Dress
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
                src={image15}
                alt="imgNine"
                className=" sec4ImgH w-96 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    N14,000
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Luxe midi
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
                src={image16}
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
                src={image2}
                alt="imgOne"
                className=" sec4ImgH w-full 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    N19,000
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Fiesta
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
                src={image3}
                alt="imgThree"
                className=" sec4ImgH w-full 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
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
                src={image4}
                alt="imgFour"
                className=" sec4ImgH w-full 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                  N17,000
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                  Luxe maxi wrap
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
                src={image5}
                alt="imgFive"
                className=" sec4ImgH w-full 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    N18,000
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                  Honora
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
                src={image6}
                alt="imgSix"
                className=" sec4ImgH w-full 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    N23,000
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                  Sizzler
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
                src={image7}
                alt="imgSeven"
                className=" sec4ImgH w-96 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    N15,000
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Pomp
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
                src={image8}
                alt="imgNine"
                className=" sec4ImgH w-96 2xl:w-80 xl:w-72 md:w-60 sm:w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-gray-900 font-semibold text-xl text-left md:text-lg">
                    N16,000
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm Aceh text-left md:font-medium">
                    Audrey
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
