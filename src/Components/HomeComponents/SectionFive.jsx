import React from "react";
import { ReactComponent as QuoteImg } from "../../Images/Feedback/quote.svg";
import { ReactComponent as StarImg } from "../../Images/Feedback/star.svg";
import { ReactComponent as VectorImg } from "../../Images/Feedback/Vector.svg";
import { ReactComponent as HighlightOne } from "../../Images/Feedback/highlight-one.svg";
import { ReactComponent as HighlightTwo } from "../../Images/Feedback/highlight-two.svg";
import reviewImg from "../../Images/Feedback/review-one.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

export const SectionFive = () => {
  return (
    <div className="py-24 flex flex-col gap-16  rounded-lg  bg-white mx-28 2xl:mx-16 xl:mx-10 xl:py-10 lg:mx-0 lg:gap-10 sm:py-6 sm:px-4">
      <h3 className="text-gray-900 font-bold text-4xl Aceh 2xl:text-4xl xl:text-4xl md:text-2xl">
        Check What Our Clients are Saying
      </h3>
      <div className="flex gap-20 justify-center px-28 items-center xl:px-10 xl:gap-10 md:px-4 md:gap-4 sm:flex-col sm:px-0">
        <div className=" w-5/12 relative p-12 z-10 2xl:p-4 lg:p-1 sm:w-11/12">
          {/* <div className="absolute right-0 top-0 z-0 ">
            <VectorImg className="w-40 h-40 " />
          </div> */}
          {/* <HighlightOne className="absolute left-0 top-0 z-0" />
          <HighlightTwo className="absolute right-0 bottom-0 z-0" /> */}
          <img
            src={reviewImg}
            alt="reviewImg"
            className="reviewImgH w-full rounded-lg z-10 bg-gray-100"
          />
        </div>

        <div className=" w-6/12 h-max sm:w-11/12">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex gap-10 flex-col text-left  p-8 2xl:p-4 lg:gap-6 lg:p-1">
                <div className="flex flex-col gap-7 lg:gap-4">
                  <QuoteImg className="w-7 h-7 lg:h-6 lg:w-6" />
                  <div className="flex">
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                  </div>
                  <h4 className=" text-gray-600 font-medium text-2xl xl:text-xl">
                    Vacation is expensive but God bless explore Crystalveey for me.
                    Initially when I saw their cost in comparison to other people, I was
                    like its too cheap to be flawless but then I had an amazing
                    experience. The tour guide went over and above to make sure we
                    had a good time,
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-gray-900 font-semibold text-lg">
                    Jennifer
                  </h5>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-10 flex-col text-left  p-8 2xl:p-4 lg:gap-6 lg:p-1">
                <div className="flex flex-col gap-7 lg:gap-4">
                  <QuoteImg className="w-7 h-7 lg:h-6 lg:w-6" />
                  <div className="flex">
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                  </div>
                  <h4 className=" text-gray-600 font-medium text-2xl xl:text-xl">
                    hello Vicky, how are you doing? I’ve been so sleepy since we got
                    back. I really want to extend my gratitude to you on our trip. I
                    really enjoyed myself and thank you for making it stress free for
                    us.
                    Again, I will be making my trip with you now
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-gray-900 font-semibold text-lg">
                    Stephanie
                  </h5>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-10 flex-col text-left  p-8 2xl:p-4 lg:gap-6 lg:p-1">
                <div className="flex flex-col gap-7 lg:gap-4">
                  <QuoteImg className="w-7 h-7 lg:h-6 lg:w-6" />
                  <div className="flex">
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                  </div>
                  <h4 className=" text-gray-600 font-medium text-2xl xl:text-xl">
                    I had the best time thanks to youuuu. The vacation was worth it.
                    Two countries on that budget? That was a steal!
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-gray-900 font-semibold text-lg lg:text-base">
                    Faith
                  </h5>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-10 flex-col text-left  p-8 2xl:p-4 lg:gap-6 lg:p-1">
                <div className="flex flex-col gap-7 lg:gap-4">
                  <QuoteImg className="w-7 h-7 lg:h-6 lg:w-6" />
                  <div className="flex">
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                  </div>
                  <h4 className=" text-gray-600 font-medium text-2xl xl:text-xl">
                    Thanks so very much. I had fun and the trip was truly worth it
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-gray-900 font-semibold text-lg lg:text-base">
                    Davidson
                  </h5>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-10 flex-col text-left  p-8 2xl:p-4 lg:gap-6 lg:p-1">
                <div className="flex flex-col gap-7 lg:gap-4">
                  <QuoteImg className="w-7 h-7 lg:h-6 lg:w-6" />
                  <div className="flex">
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                  </div>
                  <h4 className=" text-gray-600 font-medium text-2xl xl:text-xl">
                    It was a niceeeeeeee experience! Thank you so so much for
                    being helpful
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-gray-900 font-semibold text-lg lg:text-base">
                    Anjola
                  </h5>

                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
