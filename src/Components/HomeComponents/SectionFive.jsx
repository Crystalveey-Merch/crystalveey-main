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
import user1 from "../../Images/testimonials/user1.jpeg"
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
            data-aos="zoom-in-up" data-aos-delay="100"
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
                    I had an amazing experience. The tour guide went over and above to make sure we had a good time. They are the most affordable travel agency.
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
                    I really enjoyed myself, thank you for making it stress free for us.
                    I will be making my trips with you from now on
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
                  <div className="w-48 h-48 m-auto  rounded-full ">
                    <img src={user1} />
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
                  <div className="badge badge-neutral">Crystalveey Atelier</div>
                  <h4 className=" text-gray-600 font-medium text-2xl xl:text-xl">
                    I saw the trousers and I absolutely love them! They fit perfectly. I will definitely be making another one.

                  </h4>
                  <div className="flex flex-col gap-1">
                    <h5 className="text-gray-900 Aceh font-bold text-lg">
                      Sarah
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
                  The travel package was a no brainer for me because it is fairly priced and its for travel lovers too. 
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
                    <img src={user1} />
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
                  <div className="badge badge-neutral">Crystalveey Atelier</div>
                  <h4 className=" text-gray-600 font-medium text-2xl xl:text-xl">
                    I love the dress. Thank you so much
                  </h4>
                  <div className="flex flex-col gap-1">
                    <h5 className="text-gray-900 Aceh font-bold text-lg">
                      Hachi
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
