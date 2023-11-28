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
import { useState, useEffect } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { db } from "../../firebase/auth";
import moment from "moment";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const handleGetDateRange = (startDate, endDate) => {
  startDate = moment(startDate);
  endDate = moment(endDate);
  const formattedStartDate = startDate.format("Do MMM");
  let formattedEndDate = endDate.format("Do MMM");
  if (!startDate.isSame(endDate, "month")) {
    formattedEndDate = endDate.format("Do MMM YYYY");
  }
  return `${formattedStartDate} - ${formattedEndDate}`;
}


export const SectionThree = () => {
  const [travelPackages, setTravelPackages] = useState([]);


  useEffect(() => {
    const fetchTravelPackages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "travelPackages"));
        const travelPackages = [];
        querySnapshot.forEach((doc) => {
          travelPackages.push({ ...doc.data(), id: doc.id });
        });
        setTravelPackages(travelPackages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTravelPackages();
  }, []);
  console.log(travelPackages);

  
  const breakpoints = {
    // Define the breakpoints where you want to change the slidesPerView
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    639: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  const convertedId = (id) => {
    return id.split(" ").join("-");
  };
  return (
    <div className="py-14 m-10 flex flex-col gap-16  rounded-lg sm:px-2 px-28 2xl:px-20 xl:py-10 xl:px-10 lg:items-center lg:py-6 lg:px-4 md:px-4  sm:gap-10">
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
          data-aos="slide-up"
          data-aos-delay="200"
        >
          {travelPackages.map((travelPackage) => (
            <SwiperSlide key={travelPackage.id}>
              <div className="w-80 shadow-xl rounded-xl flex flex-col gap-6 pb-10  sm:w-full">
                <img
                  src={travelPackage.images.imageOne}
                  alt={travelPackage.title}
                  className="w-full h-60 rounded-t-xl"
                />
                <div className="px-5 flex flex-col gap-4">
                  <div className="flex justify-between Aceh">
                    <h5 className="font-semibold  text-xl text-gray-900">
                      {travelPackage.title}
                    </h5>
                  </div>
                  <span className=" m-auto text-center">
                    <p className="font-bold text-2xl bg-sky-600 text-white p-3 shadow-md ">
                      {travelPackage.price.toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                      })}
                    </p>
                  </span>
                  <div className="   text-left">
                    <span className="flex m-2">
                      <Kite className="w-5 h-5 text-green-800" />
                      <p className="font-light text-xl text-gray-900 ">
                        Duration: {travelPackage.duration} Days
                      </p>
                    </span>
                    <span className="text-black m-2 text-left text-xl">
                      <FontAwesomeIcon icon={faCalendar} className="" />{" "}
                      {handleGetDateRange(travelPackage.startDate, travelPackage.endDate)}

                    </span>
                  </div>

                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn bg-black text-white"
                    onClick={() =>
                      document
                        .getElementById(`modal_${travelPackage.id}`)
                        .showModal()
                    }
                  >
                    View Details
                  </button>

                  <dialog
                    id={`modal_${travelPackage.id}`}
                    key={travelPackage.id}
                    className="modal  text-black dark:text-white"
                  >
                    <div className="modal-box bg-grey-300 w-fit">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <img
                        src={travelPackage.images.imageTwo}
                        alt={travelPackage.title}
                        className="w-full h-60 rounded-t-xl"
                      />
                      <h3 className="font-bold text-3xl Aceh ">
                        {travelPackage.title}
                      </h3>
                      <span className="flex m-auto  w-full justify-center">
                        <span className="flex gap-4 Aceh">
                          <p className="font-medium text-l text-green-600">
                            N{travelPackage.price}
                          </p>
                        </span>
                      </span>
                      <span className="dark:text-white m-2 text-l text-left">
                        <FontAwesomeIcon icon={faCalendar} className="" />{" "}
                        {handleGetDateRange(travelPackage.startDate, travelPackage.endDate)}
                      </span>
                      <span className="flex gap-4 sm:block">
                        <span>
                          <p className="py-4 text-left text-xl  ">
                            Package inclusions
                          </p>
                          <hr></hr>

                          <ul
                            className="text-left Aceh text-l list-disc"
                            key={travelPackages.id}
                          >
                            {travelPackage.inclusions?.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </span>

                        <span>
                          <p className="py-4 text-left text-xl ">
                            Activities & tours
                          </p>
                          <hr></hr>
                          <ul className="text-left Aceh text-l list-disc">
                            {travelPackage?.visitingCities?.map((item) => (
                              <>
                                <li> {item.name}</li>
                                {item.activities.map((item) => (
                                  <li className="text-gray-400">{item}</li>
                                ))}
                              </>
                            ))}
                          </ul>
                        </span>
                      </span>
                      <a
                        href={`https://explore.crystalveey.com/promoted-travel-packages/${convertedId(
                          travelPackage.id
                        )}`}
                      >
                        <button className="btn my-10 bg-black text-white">
                          Book Now
                        </button>
                      </a>
                    </div>
                  </dialog>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
