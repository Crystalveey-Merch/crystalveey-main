import React, { useState } from "react";
import logo from "../Images/logo.jpg";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    const headerLinks = document.querySelector(".header-links");
    headerLinks.classList.toggle("open");

    const linkItems = document.querySelectorAll(".link-item");
    linkItems.forEach((item) => {
      item.addEventListener("click", () => {
        headerLinks.classList.remove("open");
        setMenuOpen(false);
      });
    });
    setMenuOpen((prev) => !prev);

    // Toggle body classes separately
    document.body.classList.toggle("is-side-menu-open");
  };
  return (
    <div className="px-36  flex justify-between py-8 items-center bg-white shadow-md  2xl:px-16 xl:px-8">
      <div className="relative flex flex-col gap-2 sm:gap-1">
        <h2 className="font-bold text-4xl text-black font-pro xl:font-semibold sm:text-2xl">
          {" "}
          CRYSTALVEÉY
        </h2>
        <h4 className=" text-sm font-bold text-black font-mono xl:font-semibold xl:text-xs sm:font-medium">
          Fashion| Travel| Events| Consultations.
        </h4>
      </div>
      <div className=" ">
        <ul className="flex justify-center items-center gap-10 2xl:gap-6 xl:gap-4 lg:hidden">
          <li>
            <Link
              to="/"
              className="middle text-gray-900 text-base font-semibold hover:text-gray-750 xl:text-sm"
            >
              Book A Trip
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="middle text-gray-900 text-base  font-semibold hover:text-gray-750 xl:text-sm"
            >
              Wear Something New
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="middle text-gray-900 text-base  font-semibold hover:text-gray-750 xl:text-sm"
            >
              Join Wholesome
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="middle text-gray-900 text-base  font-semibold hover:text-gray-750 xl:text-sm"
            >
              Free Consultation
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="middle text-gray-900 text-base  font-semibold hover:text-gray-750 xl:text-sm"
            >
              CVC Charity
            </Link>
          </li>
        </ul>
        <button
          id="menu-btn"
          onClick={handleMenu}
          className={`hamburger  ${
            menuOpen ? "open" : ""
          } hidden lg:block focus:outline-none z-30 `}
        >
          <span className="harburger-top bg-white transition duration-500 ease-in-out  "></span>
          <span className="harburger-middle bg-white transition duration-500 ease-in-out  "></span>
          <span className="harburger-bottom bg-white transition duration-500 ease-in-out  "></span>
        </button>
      </div>
      <div className="header-links hidden">

      </div>
    </div>
  );
};
