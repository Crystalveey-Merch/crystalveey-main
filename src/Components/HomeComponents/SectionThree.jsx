import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { ReactComponent as Kite } from "../../Images/kite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import manchesterImg from "../../Images/manchester.jpg";
import riyadhImg from "../../Images/riyadh.jpg";
import kigaliImg from "../../Images/kigali.jpg";
import portoImg from "../../Images/porto.jpg";

export const SectionThree = () => {
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
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };
  return (
    <div className="py-14 flex flex-col gap-16  rounded-lg px-28 2xl:px-20 xl:py-10 xl:px-10 lg:items-center lg:py-6 lg:px-20 md:px-4 sm:px-10 sm:gap-10">
      <h3 className="text-gray-900  font-bold text-4xl Aceh xl:text-4xl sm:text-2xl">
        Top Selling Travel Packages
      </h3>
      <div className="flex justify-center items-center gap-10 w-full ">
        <Swiper
          breakpoints={breakpoints}
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-72 shadow-xl rounded-xl flex flex-col gap-6 pb-10 bg-gradient-to-br from-blue-100 via-white to-purple-100 sm:w-full">
              <img
                src={kigaliImg}
                alt="kigaliImg"
                className="w-full h-60 rounded-t-xl"
              />
              <div className="px-5 flex flex-col gap-5">
                <div className="flex justify-between">
                  <h5 className="font-semibold  text-base text-gray-900">
                    Zanzibar
                  </h5>
                  <span className="">
                    <p className="font-medium text-xl text-green-600">₦1.8M (early bird)  </p>
                    <p className="text-red-600 text-right"> ₦2.1M (late bird)</p>

                  </span>


                </div>
                <div className="flex gap-2 m-auto">
                  <Kite className="w-5 h-5 text-green-800" />
                  <p className="font-light text-sm text-gray-900">
                    7 Days Trip
                  </p>
                  <span className="text-gray-900">
                    <FontAwesomeIcon icon={faCalendar} className="text-white" />{" "}
                    10th-16th Nov. 2023
                  </span>
                </div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  View Details
                </button>
                <dialog id="my_modal_3" className="modal w-auto">
                  <div className="modal-box bg-grey-300">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-3xl ">Zanzibar</h3>
                    <span className="flex m-auto  w-full justify-center">
                      <FontAwesomeIcon icon={faTicket} className="" />
                      <span className="">
                        <p className="font-medium text-xl text-green-600">₦1.8M (early bird)  </p>
                        <p className="text-red-600 text-center"> ₦2.1M (late bird)</p>

                      </span>
                    </span>


                    <span className="flex gap-4 sm:block">
                    <span>
                      <p className="py-4 text-left text-xl  ">
                        Package inclusions
                      </p>
                      <hr></hr>

                      <ol className="text-left  text-l">
                        <li>-&gt; 4 star hotel in Dar Es
                          Salaam</li>
                        <li>-&gt; Beach front resort in
                          Zanziber</li>
                        <li>-&gt; Return flight tickets</li>
                        <li>-&gt; Daily breakfasts</li>
                        <li>-&gt; Tour & activities </li>
                        <li>-&gt; Airport transfers
                        </li>

                      </ol>
                    </span>
                    
                      <span>
                        <p className="py-4 text-left text-xl ">
                          Activities & tours
                        </p>
                        <hr></hr>
                        <ol className="text-left  text-l">
                          <li>-&gt; Safari blu tour</li>
                          <li>-&gt; Stone town tour</li>
                          <li>-&gt; Ferry cruise</li>
                          <li>-&gt; Dar Es Salaam sightseeing</li>
                          <li>-&gt; Snorkeling & marine
                            watching </li>
                          <li>-&gt; Zanzibar night life
                          </li>
                          <li>-&gt; Swim with turtles / Jetski
                            (optional)</li>

                        </ol>
                      </span>
                    </span>

                    <button className="btn my-10">Book Now</button>

                  </div>

                </dialog>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-72 shadow-xl rounded-xl flex flex-col gap-6 pb-10 bg-gradient-to-br from-blue-100 via-white to-purple-100 sm:w-full">
              <img
                src={riyadhImg}
                alt="riyadhImg"
                className="w-full h-60 rounded-t-xl"
              />
              <div className="px-5 flex flex-col gap-5">
                <div className="flex justify-between">
                  <h5 className="font-semibold text-base text-gray-900">
                    Riyadh, Saudi Arabia
                  </h5>
                  <p className="font-medium text-sm text-gray-900">$5,42k</p>
                </div>
                <div className="flex gap-4">
                  <Kite className="w-5 h-5 text-green-800" />
                  <p className="font-light text-sm text-gray-900">
                    10 Days Trip
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-72 shadow-xl rounded-xl flex flex-col gap-6 pb-10 bg-gradient-to-br from-blue-100 via-white to-purple-100 sm:w-full">
              <img
                src={manchesterImg}
                alt="manchesterImg"
                className="w-full h-60 rounded-t-xl"
              />
              <div className="px-5 flex flex-col gap-5">
                <div className="flex justify-between">
                  <h5 className="font-semibold text-base text-gray-900">
                    Manchester, UK
                  </h5>
                  <p className="font-medium text-sm text-gray-900">$5,42k</p>
                </div>
                <div className="flex gap-4">
                  <Kite className="w-5 h-5 text-green-800" />
                  <p className="font-light text-sm text-gray-900">
                    10 Days Trip
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-72 shadow-xl rounded-xl flex flex-col gap-6 pb-10 bg-gradient-to-br from-blue-100 via-white to-purple-100 sm:w-full">
              <img
                src={portoImg}
                alt="portoImg"
                className="w-full h-60 rounded-t-xl"
              />
              <div className="px-5 flex flex-col gap-5">
                <div className="flex justify-between">
                  <h5 className="font-semibold text-base text-gray-900">
                    Porto, Portugal
                  </h5>
                  <p className="font-medium text-sm text-gray-900">$5,42k</p>
                </div>
                <div className="flex gap-4">
                  <Kite className="w-5 h-5 text-green-800" />
                  <p className="font-light text-sm text-gray-900">
                    10 Days Trip
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
