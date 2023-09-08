import React from "react";
import { ReactComponent as QuoteImg } from "../../Images/Feedback/quote.svg";
import { ReactComponent as StarImg } from "../../Images/Feedback/star.svg";
import { ReactComponent as VectorImg } from "../../Images/Feedback/Vector.svg";
import { ReactComponent as HighlightOne } from "../../Images/Feedback/highlight-one.svg";
import { ReactComponent as HighlightTwo } from "../../Images/Feedback/highlight-two.svg";
import testi1 from "../../Images/testimonials/testi1.jpeg"
import testi2 from "../../Images/testimonials/testi2.jpeg"
import anjola from "../../Images/testimonials/anjola.jpeg"
import davidson from "../../Images/testimonials/davidson.jpeg"
import testi3 from "../../Images/testimonials/testi3.jpeg"
import testi4 from "../../Images/testimonials/testi4.jpeg"
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

        <div className=" w-4/5 h-max">
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
              <div className="flex gap-10 m-auto sm:justify-center sm:block text-left  p-8 2xl:p-4 lg:gap-6 lg:p-1">
                <div className="avatar  flex ">
                  <div className="w-48 h-48 m-auto rounded-full ">
                    <img src={testi1} />
                  </div>
                </div>

                <div className="flex flex-col gap-7 lg:gap-4">
                  <QuoteImg className="w-7 h-7 lg:h-6 lg:w-6" />
                  <div className="flex">
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                  </div>
                  <div className="badge badge-neutral">Explore Crystalveey</div>

                  <h4 className=" text-gray-600 font-medium text-2xl xl:text-xl">
                    Vacation is expensive but God bless explore Crystalveey for me.
                    Initially when I saw their cost in comparison to other people, I was
                    like its too cheap to be flawless but then I had an amazing
                    experience. The tour guide went over and above to make sure we
                    had a good time,
                  </h4>
                  <div className="flex flex-col gap-1">
                    <h5 className="text-gray-900 Aceh font-semibold text-lg">
                      Jennifer
                    </h5>

                  </div>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-10 sm:block text-left  p-8 2xl:p-4 lg:gap-6 lg:p-1">
                <div className="avatar flex">
                  <div className="w-48 h-48 m-auto  rounded-full ">
                    <img src={testi2} />
                  </div>
                </div>
                <div className="flex flex-col gap-7 lg:gap-4">
                  <QuoteImg className="w-7 h-7 lg:h-6 lg:w-6" />
                  <div className="flex">
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                  </div>
                  <div className="badge badge-neutral">Explore Crystalveey</div>
                  <h4 className=" text-gray-600 font-medium text-2xl xl:text-xl">
                    hello Vicky, how are you doing? I’ve been so sleepy since we got
                    back. I really want to extend my gratitude to you on our trip. I
                    really enjoyed myself and thank you for making it stress free for
                    us.
                    Again, I will be making my trip with you now
                  </h4>
                  <div className="flex flex-col gap-1">
                    <h5 className="text-gray-900 Aceh font-bold text-lg">
                      Stephanie
                    </h5>

                  </div>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-10 sm:block text-left  p-8 2xl:p-4 lg:gap-6 lg:p-1">
                <div className="avatar flex">
                  <div className="w-48 h-48 m-auto rounded-full ">
                    <img src={testi3} />
                  </div>
                </div>
                <div className="flex flex-col gap-7 lg:gap-4">
                  <QuoteImg className="w-7 h-7 lg:h-6 lg:w-6" />
                  <div className="flex">
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                  </div>
                  <div className="badge badge-neutral">Explore Crystalveey</div>

                  <h4 className=" text-gray-600 font-medium text-2xl xl:text-xl">
                    I have always wanted to travel to Africa and I decided in 2023 to
                    travel to multiple countries. The travel package was a no brainer
                    for me because it is fairly priced and its for travel lovers too.
                  </h4>
                  <div className="flex flex-col gap-1">
                    <h5 className="text-gray-900 Aceh font-semibold text-lg lg:text-base">
                      Golibe
                    </h5>

                  </div>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-10 sm:block  text-left  p-8 2xl:p-4 lg:gap-6 lg:p-1">
                <div className="avatar flex">
                  <div className="w-48 h-48 m-auto  rounded-full ">
                    <img src={testi4} />
                  </div>
                </div>
                <div className="flex flex-col gap-7 lg:gap-4">
                  <QuoteImg className="w-7 h-7 lg:h-6 lg:w-6" />
                  <div className="flex">
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                  </div>
                  <div className="badge badge-neutral">Explore Crystalveey</div>

                  <h4 className=" text-gray-600 font-medium text-2xl xl:text-xl">
                    I had the best time thanks to youuuu. The vacation was worth it.
                    Two countries on that budget? That was a steal!
                  </h4>
                  <div className="flex flex-col gap-1">
                    <h5 className="text-gray-900 Aceh font-semibold text-lg lg:text-base">
                      Imade
                    </h5>

                  </div>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-10 sm:block text-left  p-8 2xl:p-4 lg:gap-6 lg:p-1">
                <div className="avatar flex">
                  <div className="w-48 h-48 m-auto  rounded-full ">
                    <img src={davidson} />
                  </div>
                </div>
                <div className="flex flex-col gap-7 lg:gap-4">
                  <QuoteImg className="w-7 h-7 lg:h-6 lg:w-6" />
                  <div className="flex">
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                  </div>
                  <div className="badge badge-neutral">Explore Crystalveey</div>

                  <h4 className=" text-gray-600 font-medium text-2xl xl:text-xl">
                    Thanks so very much. I had fun and the trip was truly worth it
                  </h4>
                  <div className="flex flex-col gap-1">
                    <h5 className="text-gray-900 Aceh font-semibold text-lg lg:text-base">
                      Davidson
                    </h5>

                  </div>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-10 sm:block text-left  p-8 2xl:p-4 lg:gap-6 lg:p-1">
                <div className="avatar flex">
                  <div className="w-48 h-48 m-auto  rounded-full ">
                    <img src={anjola} />
                  </div>
                </div>
                <div className="flex flex-col gap-7 lg:gap-4">
                  <QuoteImg className="w-7 h-7 lg:h-6 lg:w-6 text-sky-100" />
                  <div className="flex">
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                    <StarImg className="w-5 h-5 lg:w-4 lg:h-6" />
                  </div>
                  <div className="badge badge-neutral">Explore Crystalveey</div>

                  <h4 className=" text-gray-600 font-medium text-2xl xl:text-xl">
                    It was a niceeeeeeee experience! Thank you so so much for
                    being helpful
                  </h4>
                  <div className="flex flex-col gap-1">
                    <h5 className="text-gray-900 Aceh font-semibold text-lg lg:text-base">
                      Anjola
                    </h5>

                  </div>
                </div>

              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
