import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import reminato from "../Images/paertners/REMINATO.png";
import covenant from "../Images/paertners/covenant.png";
import airp from "../Images/paertners/airp.png";
import turkey from "../Images/paertners/turkey.png";
import awa from "../Images/paertners/awa.png";
import qatar from "../Images/paertners/qatar.png";
import kenya from "../Images/paertners/kenya.png";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "swiper/css";

export const Footer = () => {
  return (
    <div className="flex Andis flex-col gap-10 px-20 pl-48 pt-16 pb-8 bg-black 2xl:pl-20 xl:pl-7 sm:gap-6 sm:pl-4 sm:px-5">
      <div className="flex justify-between pr-40 2xl:pr-16 xl:pr-7  lg:flex lg:flex-wrap lg:gap-16 sm:gap-8 sm:pr-0">
        <div className="flex flex-col gap-4 w-64 lg:w-5/12 lg:order-1 sm:w-full">
          <h2 className="font-bold text-4xl text-white font-pro sm:text-2xl">
            {" "}
            CRYSTALVEÉY
          </h2>
          <p className=" text-gray-300 font-semibold text-base xl:text-sm xl:font-medium">
            Fashion| Travel| Events| Consultations.
          </p>
        </div>
        <div className="flex gap-40 m-4 2xl:gap-10 xl:gap-12 lg:w-full laptop:ml-20 lg:order-3 lg:justify-between  lg:mr-40 sm:flex-wrap">
          <ul className="flex flex-col gap-6   text-gray-200  ">
            <li
              className="middle hover:text-gray-400 text-lg cursor-pointer w-max"
              onClick={() => document.getElementById("about").showModal()}
            >
              About Us
            </li>
            <dialog
              id="about"
              className="modal w-screen text-white  "
            >
              <div className="modal-box bg-black w-full">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-3xl Aceh text-center">
                  About us
                </h3>
                <p className="text-2xl sm:text-xl p-10 sm:p-4">
                  Crystalveey is a portfolio company encompassing a fashion
                  merchandize and re-commerce brand that produces quality
                  clothing for both male and female, a like-minded community
                  that fuses the worlds of adventure, fun and healthy lifestyle
                  and a travel agency that offers affordable vacation packages
                  to various destinations. We also provide consultations and an
                  all-in-one resource for exceptional travel and event package.
                  Our team of trusted professionals are readily available to
                  ensure every experience is nothing short of the best
                </p>
              </div>
            </dialog>

            <li
              className="middle  hover:text-gray-400 font-medium text-lg cursor-pointer w-max"
              onClick={() => document.getElementById("privacy").showModal()}
            >
              {" "}
              Privacy Policy
            </li>
            <dialog
              id="privacy"
              className="modal w-screen text-white dark:text-white "
            >
              <div className="modal-box bg-black  w-full">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-3xl Aceh my-4 text-center">
                  Private Policy
                </h3>
                <h1 className="text-white Aceh">
                  What information do we collect?{" "}
                  <hr></hr>
                </h1>
                <ul className="gap-4 flex my-2 flex-col">
                  <li>
                    - We collect information from you when you subscribe to our
                    community.
                  </li>
                  <li>
                    - When booking, ordering or registering on our site, you may
                    be asked to enter your name, e-mail address, mailing
                    address, phone number, or credit card information.
                  </li>
                </ul>
                <h1 className="text-white Aceh">
                  How we use information collected?{" "}
                  <hr></hr>
                </h1>
                <p>
                  Any of the information we collect from you may be used in one
                  of the following ways
                </p>
                <ul className="gap-2 flex my-2 flex-col">
                  <li>-To personalize your experience</li>
                  <li>
                    -Your information helps us to better respond to your
                    individual needs.
                  </li>
                  <li>-To improve our website </li>
                  <li>-To improve customer service</li>
                  <li>-To process transactions</li>
                </ul>
                <h1 className="text-white Aceh">
                  Sharing of information by you{" "}
                  <hr></hr>
                </h1>
                <p className="py-4">
                  Your activity in connection to Crystalveey platforms, such as
                  reviewing and rating items, inquiring about or purchasing
                  items, liking or sharing Crystalveey content to your social
                  media accounts or pages or otherwise interacting with
                  Crystalveey platforms, may be visible to other users of
                  Crystalveey platform.
                </p>
                <h1 className="text-white Aceh">
                  Sharing of information by us
                  <hr></hr>
                </h1>
                <ul className="gap-4 flex my-2 flex-col">
                  <li>
                    - We may share the information about you with our subsidiaries
                    and affiliated companies primarily for business and
                    operational purposes
                  </li>
                  <li>
                    - We may share your information with third party service
                    providers that provide business, professional or technical
                    support functions on our behalf
                  </li>
                  <li>
                    - Your information may also be shared with our sponsors,
                    partners, advertisers, advertising networks and analytics
                    companies or other third parties in connection with
                    marketing, promotions and other offers
                  </li>
                </ul>
                <h1 className="text-white Aceh">Third party services <hr></hr></h1>
                <p className="py-4">
                  Third party providers used by us will only collect, use and
                  disclose your information to the extent necessary to allow
                  them perform the services they provide.
                </p>
                <h1 className="text-white Aceh">Changes to privacy policy <hr></hr></h1>
                <p className="py-4">
                  The privacy policy may be subjected to certain changes. Please
                  check back frequently to see any updates or changes to our
                  privacy policy.
                </p>
                <h1 className="text-white Aceh">Contact Us <hr></hr></h1>
                <p>
                  If you have any questions or concerns regarding this privacy
                  policy, please contact us at:
                  <br></br>
                  Re: CRYSTALVEEY PRIVACY POLICY
                  <br></br>
                  <a
                    href="mailto:office.crystalveey@gmail.com"
                    className="hover:text-gray-750"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="px-2" />
                    office.crystalveey@gmail.com
                  </a>
                </p>

              </div>
            </dialog>
          </ul>
          <ul className="flex flex-col gap-6 w-max text-white">
            <li className="middle  hover:text-gray-400 font-medium text-lg cursor-pointer w-max">
              <Link to="http://atelier.crystalveey.com/" target="_blank">
                Atelier
              </Link>
            </li>
            <li className="middle  hover:text-gray-400 font-medium text-lg cursor-pointer w-max" >
            <Link to="http://explore.crystalveey.com"
              target="_blank">
              Explore Crystalveey
            </Link>
          </li>
          <li className="middle  hover:text-gray-400 cursor-pointer">
            <Link to="http://wholesome.crystalveey.com/">
              Wholesome
            </Link>
          </li>
          <li className="middle  hover:text-gray-400 font-medium text-lg cursor-pointer w-max">
            <Link to="http://charity.crystalveey.com">
              CVC Charity</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-6 w-full break-words text-white">
          <li className="middle underline   hover:text-gray-400 cursor-pointer">
            Contact
          </li>
          <li
            className=" flex gap-1 items-center  font-medium text-lg cursor-pointer w-max"
            style={{ color: "rgb(56 189 248)" }}
          >
            <a
              href="mailto:office.crystalveey@gmail.com"
              className="hover:text-gray-750"
            >
              <FontAwesomeIcon icon={faEnvelope} className="px-2" />
              office.crystalveey@gmail.com
            </a>
          </li>
          <li
            className=" flex gap-1 items-center  font-medium text-lg cursor-pointer w-max"
            style={{ color: "rgb(56 189 248)" }}
          >
            <a
              href="tel:+2548126091411"
              className="hover:text-gray-750"
              style={{ color: "rgb(56 189 248)" }}
            >
              <FontAwesomeIcon icon={faPhone} className="px-2" />
              +254 812 609 1411
            </a>
          </li>
          <li
            className=" flex gap-1 items-center  font-medium text-lg cursor-pointer w-full"
            style={{ color: "rgb(56 189 248)" }}
          >
            <FontAwesomeIcon icon={faMapLocation} className="px-2" />
            Olu-Olusegun avenue off Mobil road, Lekki. Lagos state, Nigeria
          </li>
        </ul>
      </div>
    </div><hr className="border border-slate-700 " /><Swiper
      // breakpoints={breakpoints}
      slidesPerView={4}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
      className="mySwiper py-10 text-white w-4/5 sm:w-full"
    >
        <SwiperSlide className="text-white">
          <img src={turkey} alt="turkey" className="w-40 h-20 sm:h-10" />
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <img src={reminato} alt="reminato" className="w-40 h-20 sm:h-10" />
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <img src={airp} alt="airpeace" className="w-40 h-20 sm:h-10" />
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <img src={covenant} alt="covenant" className="w-40 h-20 sm:h-10" />
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <img src={kenya} alt="kenya" className="w-40 h-20 sm:h-10" />
        </SwiperSlide>

        <SwiperSlide className="text-white">
          <img src={qatar} alt="qutar" className="w-40 h-20 sm:h-10" />
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <img src={awa} alt="awa" className="w-40 h-20 sm:h-10" />
        </SwiperSlide>
      </Swiper><div className=" border-gray-100 pt-6 text-center">
        <p className="font-semibold base text-gray-200">
          &copy; {new Date().getFullYear()} Explore Crystalveey
          <span className="text-gray-400 pl-2"> All Rights Reserved</span>
        </p>
      </div>
    </div>
  );
};
