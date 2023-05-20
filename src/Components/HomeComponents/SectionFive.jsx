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
    <div
      className="py-24 flex flex-col gap-16  rounded-lg bg-gradient-to-br
    from-gray-50 to-white  "
    >
      <h3 className="text-gray-900 font-bold text-6xl font-serif">
        Check What Our Clients are Saying
      </h3>
      <div className="flex gap-20 justify-center px-28 items-center">
        <div className=" w-5/12 relative p-12 z-10">
          {/* <div className="absolute right-0 top-0 z-0 ">
            <VectorImg className="w-40 h-40 " />
          </div> */}
          <HighlightOne className="absolute left-0 top-0 z-0" />
          <HighlightTwo className="absolute right-0 bottom-0 z-0" />
          <img
            src={reviewImg}
            alt="reviewImg"
            className="w-full rounded-lg z-10 bg-gray-100"
            style={{ height: "400px" }}
          />
        </div>

        <div className=" w-6/12 h-max ">
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
              <div className="flex gap-10 flex-col text-left  p-8">
                <div className="flex flex-col gap-7">
                  <QuoteImg className="w-7 h-7" />
                  <div className="flex">
                    <StarImg className="w-5 h-5" />
                    <StarImg className="w-5 h-5" />
                    <StarImg className="w-5 h-5" />
                    <StarImg className="w-5 h-5" />
                    <StarImg className="w-5 h-5" />
                  </div>
                  <h4 className=" text-gray-600 font-medium text-2xl ">
                    I've been a customer of Explore Crystalveey for several
                    years now, and I've always been happy with their services.
                    They offer a wide variety of travel packages to choose from,
                    and their customer service is excellent.
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-gray-900 font-semibold text-lg">
                    Tolulope Ajayi
                  </h5>
                  <p className="text-gray-600 font-light text-base">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-10 flex-col text-left  p-8">
                <div className="flex flex-col gap-7">
                  <QuoteImg className="w-7 h-7" />
                  <div className="flex">
                    <StarImg className="w-5 h-5" />
                    <StarImg className="w-5 h-5" />
                    <StarImg className="w-5 h-5" />
                    <StarImg className="w-5 h-5" />
                    <StarImg className="w-5 h-5" />
                  </div>
                  <h4 className=" text-gray-600 font-medium text-2xl ">
                    I recently took a trip to Africa with Explore Crystalveey,
                    and I was blown away by the beauty of the continent. I also
                    loved the opportunity to experience the rich culture and
                    history of Africa.
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-gray-900 font-semibold text-lg">
                    Mary Jane
                  </h5>
                  <p className="text-gray-600 font-light text-base">
                    Madeira, Portugal
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-10 flex-col text-left  p-8">
                <div className="flex flex-col gap-7">
                  <QuoteImg className="w-7 h-7" />
                  <div className="flex">
                    <StarImg className="w-5 h-5" />
                    <StarImg className="w-5 h-5" />
                    <StarImg className="w-5 h-5" />
                    <StarImg className="w-5 h-5" />
                    <StarImg className="w-5 h-5" />
                  </div>
                  <h4 className=" text-gray-600 font-medium text-2xl ">
                    I was looking for a special dress to wear to a wedding, and
                    I found the perfect one at Crystalveey's Atelier. The dress
                    was made from beautiful African fabric, and it was perfectly
                    tailored to my figure.
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-gray-900 font-semibold text-lg">
                    Tina Opara
                  </h5>
                  <p className="text-gray-600 font-light text-base">
                    Port Harcourt, Nigeria
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
