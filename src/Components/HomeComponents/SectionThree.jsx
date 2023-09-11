import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { ReactComponent as Kite } from "../../Images/kite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import ghana from "../../Images/places/ghana.png";
import zanbiza from "../../Images/places/zanbiza.png";
import kenya1 from "../../Images/places/kenya1.png";
import kenya2 from "../../Images/places/kenya2.png";
import lebanon from "../../Images/places/lebanon.png";
import mauritus from "../../Images/places/mauritos.png";



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
    
  };
  return (
    <div className="py-14 m-10 flex flex-col gap-16  rounded-lg sm:px-2 px-28 2xl:px-20 xl:py-10 xl:px-10 lg:items-center lg:py-6 lg:px-20 md:px-4  sm:gap-10">
      <h3 className="text-gray-900  font-bold text-4xl Aceh xl:text-4xl sm:text-2xl">
        Top Selling Travel Packages
      </h3>
      <div className="flex justify-center items-center gap-10 w-full  ">
        <Swiper
          breakpoints={breakpoints}
          slidesPerView={3}
          spaceBetween={20}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper py-10"
          data-aos="slide-up" data-aos-delay="200"
        >
          <SwiperSlide>
            <div className="w-80 shadow-xl rounded-xl flex flex-col gap-6 pb-10 bg-gradient-to-br from-sky-100 via-white to-sky-100 sm:w-full">
              <img
                src={zanbiza}
                alt="kigaliImg"
                className="w-full h-60 rounded-t-xl"
              />
              <div className="px-5 flex flex-col gap-4">
                <div className="flex justify-between Aceh">
                  <h5 className="font-semibold  text-base text-gray-900">
                    Zanzibar
                  </h5>
                  <hr style={{ height: "20px", width: "1px" }} className=" bg-black" />
                  <span className="">
                    <p className="font-bold text-xl text-green-600">
                      ₦1.8M (early bird){" "}
                    </p>
                  </span>
                </div>
                <div className="   text-left">
                  <span className="flex m-2">
                    <Kite className="w-5 h-5 text-green-800" />
                    <p className="font-light text-sm text-gray-900">
                      7 Days Trip
                    </p>
                  </span>
                  <span className="text-black m-2 text-left">
                    <FontAwesomeIcon icon={faCalendar} className="" /> 10th-16th
                    Nov. 2023
                  </span>
                </div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn bg-black text-white"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  View Details
                </button>
                <dialog id="my_modal_3" className="modal  text-black dark:text-white">
                  <div className="modal-box bg-grey-300 w-fit">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-3xl Aceh ">Zanzibar</h3>
                    <span className="flex m-auto  w-full justify-center">
                      <span className="flex gap-4 Aceh">
                        <p className="font-medium text-l text-green-600">
                          ₦1.8M (early bird){" "}
                        </p>
                        <p className="text-red-600 text-l text-center">
                          {" "}
                          ₦2.1M (late bird)
                        </p>
                      </span>
                    </span>
                    <span className="dark:text-white m-2 text-l text-left">
                      <FontAwesomeIcon icon={faCalendar} className="" /> 10th-16th
                      Nov. 2023
                    </span>
                    <span className="flex gap-4 sm:block">
                      <span>
                        <p className="py-4 text-left text-xl  ">
                          Package inclusions
                        </p>
                        <hr></hr>

                        <ol className="text-left Aceh  text-l">
                          <li>-&gt; 4 star hotel in Dar Es Salaam</li>
                          <li>-&gt; Beach front resort in Zanziber</li>
                          <li>-&gt; Return flight tickets</li>
                          <li>-&gt; Daily breakfasts</li>
                          <li>-&gt; Tour & activities </li>
                          <li>-&gt; Airport transfers</li>
                        </ol>
                      </span>

                      <span>
                        <p className="py-4 text-left text-xl ">
                          Activities & tours
                        </p>
                        <hr></hr>
                        <ol className="text-left Aceh text-l">
                          <li>-&gt; Safari blu tour</li>
                          <li>-&gt; Stone town tour</li>
                          <li>-&gt; Ferry cruise</li>
                          <li>-&gt; Dar Es Salaam sightseeing</li>
                          <li>-&gt; Snorkeling & marine watching </li>
                          <li>-&gt; Zanzibar night life</li>
                          <li>-&gt; Swim with turtles / Jetski (optional)</li>
                        </ol>
                      </span>
                    </span>

                    <button className="btn my-10 bg-black text-white">Book Now</button>
                  </div>
                </dialog>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="w-80 shadow-xl rounded-xl flex flex-col gap-6 pb-10 bg-gradient-to-br from-sky-100 via-white to-sky-100 sm:w-full">
              <img
                src={kenya1}
                alt=""
                className="w-full h-60 rounded-t-xl"
              />
              <div className="px-5 flex flex-col gap-4">
                <div className="flex justify-between">
                  <h5 className="font-semibold Aceh text-base text-gray-900">
                    Kenya & Rwanda
                  </h5>
                  <hr style={{ height: "20px", width: "1px" }} className=" bg-black" />
                  <span className="text-right">
                    <p className="font-bold text-l Aceh text-green-600">
                      N 1.6M (early bird){" "}
                    </p>
                  </span>
                </div>
                <div className="   text-left">
                  <span className="flex m-2">
                    <Kite className="w-5 h-5 text-green-800" />
                    <p className="font-light text-sm text-gray-900">
                      7 Days Trip
                    </p>
                  </span>
                  <span className="text-black m-2 text-left">
                    <FontAwesomeIcon icon={faCalendar} className="" /> Dec 28th
                    – 3rd Jan 2024
                  </span>
                </div>

                <button
                  className="btn bg-black text-white"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  View Details
                </button>

                <dialog
                  id="my_modal_1"
                  className="modal w-screen text-black dark:text-white bg-grey"
                >
                  <div className="modal-box bg-grey-800 w-full">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-3xl Aceh">kenya & Rwanda</h3>

                    <span className="flex justify-center m-auto gap-5">
                      <p className="font-bold text-l Aceh text-green-600">
                        ₦1.6M (early bird){" "}
                      </p>


                    </span>
                    <span className=" dark:text-white text-l ">
                      <FontAwesomeIcon icon={faCalendar} className="" /> Dec
                      28th – 3rd Jan
                    </span>
                    <span className="flex gap-4 sm:block ">
                      <span>
                        <p className="py-4 text-left text-xl  ">
                          Package inclusions
                        </p>
                        <hr></hr>

                        <ol className="text-left Aceh text-l">
                          <li>-&gt; Flights</li>
                          <li>-&gt; Hotels</li>
                          <li>-&gt; Daily Brakefast</li>
                          <li>-&gt; Tours</li>
                          <li>-&gt; Airport transfers </li>
                        </ol>
                      </span>

                      <span>
                        <p className="py-4 text-left text-xl ">
                          Kenya Activities & tours
                        </p>
                        <hr></hr>
                        <ol className="text-left Aceh  text-l">
                          <li>-&gt; Nairobi city tour</li>
                          <li>-&gt; Giraffe centre</li>
                          <li>-&gt; Maasai costume & dance</li>
                          <li>-&gt;National museum</li>
                          <li>-&gt; Nairobi nightlife </li>
                        </ol>
                      </span>
                      <span>
                        <p className="py-4 text-left Aceh text-xl ">
                          Rwanda activities & tours
                        </p>
                        <hr></hr>
                        <ol className="text-left Aceh text-l">
                          <li>-&gt; Kigali city tour</li>
                          <li>-&gt; Gisenyi city tour</li>
                          <li>-&gt; Genocide memorial</li>
                          <li>-&gt; Zip lining Adventure</li>
                          <li>-&gt; Lake kivu and hot spring</li>
                          <li>-&gt; Nightlife & much more</li>
                        </ol>
                      </span>
                    </span>

                    <button className="btn my-10 bg-black text-white">Book Now</button>
                  </div>
                </dialog>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="w-80 shadow-xl rounded-xl flex flex-col gap-6 pb-10 bg-gradient-to-br from-sky-100 via-white to-sky-100 sm:w-full">
              <img
                src={kenya2}
                alt=""
                className="w-full h-60 rounded-t-xl"
              />
              <div className="px-5 flex flex-col gap-4">
                <div className="flex justify-between">
                  <h5 className="font-semibold Aceh text-base text-gray-900">
                    Kenya & Rwanda
                  </h5>
                  <hr style={{ height: "20px", width: "1px" }} className=" bg-black" />
                  <span className="text-right">
                    <p className="font-bold text-l Aceh text-green-600">
                      N 1.2M (early bird){" "}
                    </p>
                  </span>
                </div>
                <div className="   text-left">
                  <span className="flex m-2">
                    <Kite className="w-5 h-5 text-green-800" />
                    <p className="font-light text-sm text-gray-900">
                      7 Days Trip
                    </p>
                  </span>
                  <span className="text-black m-2 text-left">
                    <FontAwesomeIcon icon={faCalendar} className="" /> Dec 24th
                    – 29th Oct 2023
                  </span>
                </div>

                <button
                  className="btn bg-black text-white"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  View Details
                </button>

                <dialog
                  id="my_modal_2"
                  className="modal w-screen text-black dark:text-white bg-grey"
                >
                  <div className="modal-box bg-grey-800 w-full">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-3xl Aceh ">kenya & Rwanda</h3>

                    <span className="flex justify-center m-auto Aceh gap-5">
                      <p className="font-bold text-l text-green-600">
                        ₦1.6M (early bird){" "}
                      </p>
                      <p className="text-red-600 text-l text-center">
                        {" "}
                        ₦2.1M (late bird)
                      </p>


                    </span>
                    <span className="dark:text-white text-l ">
                      <FontAwesomeIcon icon={faCalendar} className="" /> Dec
                      28th – 3rd Jan
                    </span>
                    <span className="flex gap-4 sm:block ">
                      <span>
                        <p className="py-4 text-left text-xl  ">
                          Package inclusions
                        </p>
                        <hr></hr>

                        <ol className="text-left Aceh text-l">
                          <li>-&gt; Flights</li>
                          <li>-&gt; Hotels</li>
                          <li>-&gt; Daily Brakefast</li>
                          <li>-&gt; Tours</li>
                          <li>-&gt; Airport transfers </li>
                        </ol>
                      </span>

                      <span>
                        <p className="py-4 text-left text-xl ">
                          Kenya Activities & tours
                        </p>
                        <hr></hr>
                        <ol className="text-left Aceh text-l">
                          <li>-&gt; Nairobi city tour</li>
                          <li>-&gt; Giraffe centre</li>
                          <li>-&gt; Maasai costume & dance</li>
                          <li>-&gt;National museum</li>
                          <li>-&gt; Nairobi nightlife </li>
                        </ol>
                      </span>
                      <span>
                        <p className="py-4 text-left text-xl ">
                          Rwanda activities & tours
                        </p>
                        <hr></hr>
                        <ol className="text-left Aceh  text-l">
                          <li>-&gt; Kigali city tour</li>
                          <li>-&gt; Rwanda art
                            museum</li>
                          <li>-&gt; Genocide memorial</li>
                          <li>-&gt; Zip lining Adventure</li>
                          <li>-&gt; Games Night and more.</li>
                        </ol>
                      </span>
                    </span>

                    <button className="btn my-10 bg-black text-white">Book Now</button>
                  </div>
                </dialog>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-80 shadow-xl rounded-xl flex flex-col gap-6 pb-10 bg-gradient-to-br from-sky-100 via-white to-sky-100 sm:w-full">
              <img
                src={ghana}
                alt=""
                className="w-full h-60 rounded-t-xl"
              />
              <div className="px-5 flex flex-col gap-4">
                <div className="flex gap-2 justify-between">
                  <h5 className="font-semibold Aceh text-base text-gray-900">
                    Ghana
                  </h5>
                  <hr style={{ height: "20px", width: "1px" }} className=" bg-black" />
                  <span className="text-right">
                    <p className="font-medium text-l  Aceh text-green-600">
                      ₦750k - ₦850K
                    </p>
                  </span>
                </div>
                <div className="   text-left">
                  <span className="flex m-2">
                    <Kite className="w-5 h-5 text-green-800" />
                    <p className="font-light text-sm text-gray-900">
                      7 Days Trip
                    </p>
                  </span>
                  <span className="text-black m-2 text-left">
                    <FontAwesomeIcon icon={faCalendar} className="" /> 23rd-29th Dec 2023
                  </span>
                </div>

                <button
                  className="btn bg-black text-white"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  View Details
                </button>

                <dialog
                  id="my_modal_5"
                  className="modal w-screen text-black dark:text-white bg-grey"
                >
                  <div className="modal-box bg-grey-800 w-full">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-3xl Aceh">Ghana</h3>

                    <span className="flex Aceh flex-col justify-center m-auto gap-2">
                      <p className="font-medium text-l text-green-600">
                        ₦850K (per person sharing- flight / flight){" "}
                      </p>
                      <p className="text-red-600 text-l text-center">
                        {" "}

                        ₦750K (per person sharing- road / flight)
                      </p>


                    </span>
                    <span className="text-black dark:text-white text-l ">
                      <FontAwesomeIcon icon={faCalendar} className="" /> Dec
                      28th – 3rd Jan
                    </span>

                    <span className="flex gap-4 sm:block ">
                      <span>
                        <p className="py-4 text-left text-xl  ">
                          Package inclusions
                        </p>
                        <hr></hr>

                        <ol className="text-left Aceh  text-l">
                          <li>-&gt; Flights</li>
                          <li>-&gt; Hotels</li>
                          <li>-&gt; Daily Brakefast</li>
                          <li>-&gt; Tours</li>
                          <li>-&gt; Airport transfers </li>
                        </ol>
                      </span>

                      <span>
                        <p className="py-4 text-left text-xl ">
                          Activities & tours
                        </p>
                        <hr></hr>
                        <ol className="text-left Aceh text-l">
                          <li>-&gt; Accra city tour</li>
                          <li>-&gt; Nkwame Nkrumah 
museum</li>
                          <li>-&gt; Labedi beach</li>
                          <li>-&gt; Rope course & zip lining</li>
                          <li>-&gt; Canopy walk </li>
                          <li>-&gt; Osu sightseeing</li>
                          <li>-&gt; Games night</li>
                        </ol>
                      </span>
                     
                    </span>

                    <button className="btn my-10 bg-black text-white">Book Now</button>
                  </div>
                </dialog>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-80 shadow-xl h-2/5 rounded-xl flex flex-col gap-6 pb-10 bg-gradient-to-br from-sky-100 via-white to-sky-100 sm:w-full">
              <img
                src={lebanon}
                alt=""
                className="w-full h-60 rounded-t-xl"
              />
              <div className="px-5 flex flex-col gap-4">
                <div className="flex justify-between">
                  <h5 className="font-semibold Aceh text-base text-gray-900">
                    Lebanon
                  </h5>
                  <hr style={{ height: "20px", width: "1px" }} className=" bg-black" />
                  <span className="text-right">
                    <p className="font-bold Aceh text-l text-green-600">
                      ₦1.7M - ₦1.95M
                    </p>
                  </span>
                </div>
                <div className="   text-left">
                  <span className="flex m-2">
                    <Kite className="w-5 h-5 text-green-800" />
                    <p className="font-light text-sm text-gray-900">
                      7 Days Trip
                    </p>
                  </span>
                  <span className="text-black m-2 text-left">
                    <FontAwesomeIcon icon={faCalendar} className="" /> 23rd – 29th Dec 2023
                  </span>
                </div>

                <button
                  className="btn bg-black text-white"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  View Details
                </button>

                <dialog
                  id="my_modal_4"
                  className="modal w-screen text-black dark:text-white bg-grey"
                >
                  <div className="modal-box bg-grey-800 w-full">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold Aceh text-3xl ">Lebanon</h3>

                    <span className="flex Aceh  justify-center m-2 gap-5 ">
                      <p className="font-medium text-l text-green-600">
                        ₦1.7M (double occupancy)
                      </p>
                      <p className="text-red-600   text-l text-center">
                        {" "}
                        ₦1.95M (single
                        occupancy)
                      </p>


                    </span>
                    <span className="dark:text-white text-l ">
                      <FontAwesomeIcon icon={faCalendar} className="" /> 23rd – 29th Dec 2023
                    </span>
                    <span className="flex gap-4 sm:block ">
                      <span>
                        <p className="py-4 text-left text-xl  ">
                          Package inclusions
                        </p>
                        <hr></hr>

                        <ul className="text-left Aceh bullet text-l">
                          <li>-&gt; 4 star hotel</li>
                          <li>-&gt; Return flight ticket</li>
                          <li>-&gt; Airport transfers</li>
                          <li>-&gt; 2 full day tours &
                            activities</li>
                          <li>-&gt; Daily breakfast </li>
                        </ul>
                      </span>

                      <span>
                        <p className="py-4 text-left text-xl ">
                          Activities & tours
                        </p>
                        <hr></hr>
                        <ol className="text-left Aceh text-l">
                          <li>-&gt; Jeita grotto</li>
                          <li>-&gt; Pigeon rock</li>
                          <li>-&gt; Byblos tours</li>
                          <li>-&gt; Cable car ride</li>
                          <li>-&gt; Harris tour </li>
                          <li>-&gt; Beirut night life</li>
                        </ol>
                      </span>

                    </span>

                    <button className="btn my-10 bg-black text-white">Book Now</button>
                  </div>
                </dialog>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-80 shadow-xl rounded-xl flex flex-col gap-6 pb-10 bg-gradient-to-br from-sky-100 via-white to-sky-100 sm:w-full">
              <img
                src={mauritus}
                alt=""
                className="w-full h-60 rounded-t-xl"
              />
              <div className="px-5 flex flex-col gap-4">
                <div className="flex justify-between">
                  <h5 className="font-semibold Aceh text-base text-gray-900">
                    Mauritus
                  </h5>
                  <hr style={{ height: "20px", width: "1px" }} className=" bg-black" />
                  <span className="text-right Aceh">
                    <p className="font-bold text-l text-green-600">
                      ₦1.95M / person
                    </p>
                  </span>
                </div>
                <div className="   text-left">
                  <span className="flex m-2">
                    <Kite className="w-5 h-5 text-green-800" />
                    <p className="font-light text-sm text-gray-900">
                      7 Days Trip
                    </p>
                  </span>
                  <span className="text-black m-2 text-left">
                    <FontAwesomeIcon icon={faCalendar} className="" /> Nov 29th-4th Dec 2023
                  </span>
                </div>

                <button
                  className="btn bg-black text-white"
                  onClick={() =>
                    document.getElementById("my_modal_6").showModal()
                  }
                >
                  View Details
                </button>

                <dialog
                  id="my_modal_6"
                  className="modal w-screen text-black dark:text-white bg-grey"
                >
                  <div className="modal-box bg-grey-800 w-full">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold Aceh text-3xl ">Mauritus</h3>

                    <span className="flex justify-center m-auto gap-5">
                      <p className="font-medium text-l Aceh  text-green-600">
                        ₦1.95M (per person sharing)
                      </p>


                      
                    </span>
                    <span className="dark:text-white text-l ">
                        <FontAwesomeIcon icon={faCalendar} className="" /> Nov 29th-4th Dec 2023
                      </span>
                    <span className="flex gap-4 sm:block ">
                      <span>
                        <p className="py-4 text-left text-xl  ">
                          Package inclusions
                        </p>
                        <hr></hr>

                        <ul className="text-left Aceh  text-l">
                          <li>-&gt; Flight</li>
                          <li>-&gt; Accommodation</li>
                          <li>-&gt; Tours</li>
                          <li>-&gt; Meals</li>
                          <li>-&gt; Airport protocol </li>
                          <li>-&gt; Airport transfer</li>
                        </ul>
                      </span>

                      <span>
                        <p className="py-4 text-left text-xl ">
                          Activities & tours
                        </p>
                        <hr></hr>
                        <ul className="text-left Aceh text-l">
                          <li>-&gt; Parasailing</li>
                          <li>-&gt; Le caudon waterfront</li>
                          <li>-&gt; Banana tube ride</li>
                          <li>-&gt; North and south tour</li>
                          <li>-&gt; Under sea walk </li>
                          <li>-&gt; Lie aux cef island and
                            waterfall</li>
                          <li>-&gt; Catamaran cruise</li>
                          <li>-&gt; Themed night activities</li>
                        </ul>
                      </span>

                    </span>

                    <button className="btn my-10 bg-black text-white">Book Now</button>
                  </div>
                </dialog>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};
