import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/website/logo.png";

import { IoMdSearch } from "react-icons/io";
import {
  FaCartShopping,
  FaCaretDown,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

import DarkMode from "./DarkMode";


// ================= MENU =================

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/top-rated",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/mens-wear",
  },
  {
    id: 4,
    name: "Womens Wear",
    link: "/womens-wear",
  },
];


// ================= DROPDOWN =================

const DropdownLinks = [
  {
    id: 1,
    name: "Trending",
    link: "/trending",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/best-selling",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/top-rated",
  },
];


// ================= NAVBAR =================

const Navbar = ({ handleOrderPopup }) => {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="relative z-50 shadow-md bg-cyan-50 dark:bg-gray-900 dark:text-white">

      {/* ================= TOP NAVBAR ================= */}

      <div className="bg-primary/40">
        <div className="container mx-auto px-4">

          <div className="flex items-center justify-between py-2">

            {/* LOGO */}

            <a
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2 font-bold text-xl sm:text-2xl"
            >
              <img
                src={logo}
                alt="Ude's Shop Logo"
                className="w-10 h-10 rounded-full object-cover"
              />

              <span>Ude's shop</span>
            </a>


            {/* ================= DESKTOP SEARCH ================= */}

            <div className="hidden sm:block">
              <div className="relative group">

                <input
                  type="text"
                  placeholder="Search..."
                  className="
                    w-50
                    sm:w-64
                    group-hover:w-75
                    transition-all
                    duration-300
                    rounded-full
                    border
                    border-gray-300
                    px-4
                    py-2
                    focus:outline-none
                    bg-white
                    text-primary
                    placeholder:text-gray-400
                  "
                />

                <IoMdSearch
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                  "
                />

              </div>
            </div>


            {/* ================= RIGHT SIDE ================= */}
            <div className="flex items-center gap-2 sm:gap-4">

              {/* ORDER BUTTON */}
              <button
                onClick={handleOrderPopup}
                className="
                  flex items-center gap-2
                  h-9 px-3 sm:px-4
                  rounded-full
                  bg-linear-to-r from-primary to-secondary
                  text-white
                  cursor-pointer
                  hover:scale-105
                  transition-all duration-300
                "
              >
                <span className="hidden sm:block text-sm">
                  Order
                </span>

                <FaCartShopping className="text-lg" />
              </button>

              {/* DARK MODE */}
              <DarkMode />

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setOpen(!open)}
                className="
                  sm:hidden
                  flex items-center justify-center
                  w-9 h-9
                  rounded-full
                  bg-secondary/40
                  text-white
                  text-xl
                  cursor-pointer
                "
              >
                {open ? <FaXmark /> : <FaBars />}
              </button>

            </div>

          </div>

        </div>
      </div>


      {/* ================= DESKTOP NAVIGATION ================= */}

      <div className="hidden sm:flex justify-center bg-accent/20 dark:bg-dark-one">

        <ul className="flex items-center justify-center gap-2 py-3">

          {Menu.map((item) => (
            <li key={item.id}>

              <a
                href={item.link}
                className="
                  inline-block
                  px-3
                  py-1
                  text-sm
                  font-medium
                  hover:text-extra
                  transition-all
                  duration-200
                "
              >
                {item.name}
              </a>

            </li>
          ))}


          {/* simple dropdown and link */}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center text-sm font-medium transition-all duration-200"
            >
              Trending

              <span>
                <FaCaretDown
                  className="transition-all duration-200 group-hover:rotate-180"
                />
              </span>
            </a>

            <div
              className="absolute z-1000 hidden group-hover:block w-37.5
              right-0 rounded-md p-2 bg-accent/20 shadow-md"
            >
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md
                      hover:bg-gray-50 hover:text-primary-dark
                      transition-all duration-200 px-3 py-1
                      text-sm font-medium"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>

        </ul>

      </div>


      {/* ================= MOBILE MENU ================= */}

      {open && (

        <div
          className="
            sm:hidden
            bg-accent/20
            dark:bg-dark-one
            border-t
            border-white/10
            shadow-lg
          "
        >

          <div className="px-5 py-5">


            {/* MOBILE SEARCH */}

            <div className="relative mb-5">

              <input
                type="text"
                placeholder="Search..."
                className="
                  w-full
                  rounded-full
                  px-4
                  py-2.5
                  bg-white
                  text-primary
                  placeholder:text-gray-400
                  focus:outline-none
                "
              />

              <IoMdSearch
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
              />

            </div>


            {/* MOBILE LINKS */}

            <ul className="flex flex-col gap-1">

              {Menu.map((item) => (

                <li key={item.id}>

                  <a
                    href={item.link}
                    onClick={closeMenu}
                    className="
                      block
                      px-4
                      py-3
                      rounded-lg
                      font-medium
                      hover:bg-primary/30  
                      transition-all
                    "
                  >
                    {item.name}
                  </a>

                </li>

              ))}


              {/* Mobile Trending Dropdown */}
              <li className="border-t border-white pt-2 mt-2">

                <button
                  onClick={() => setMobileDropdown(!mobileDropdown)}
                  className="w-full flex items-center justify-between
                  px-4 py-3 rounded-lg 
                  hover:bg-primary transition-all duration-200"
                >
                  <span className="font-medium">
                    Trending
                  </span>

                  <FaCaretDown
                    className={`transition-transform duration-300 ${
                      mobileDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {mobileDropdown && (
                  <div className="mt-1">

                    {DropdownLinks.map((data) => (
                      <a
                        key={data.id}
                        href={data.link}
                        onClick={() => {
                          setOpen(false);
                          setMobileDropdown(false);
                        }}
                        className="block px-8 py-2
                        hover:text-primary hover:bg-primary/30 rounded-lg
                        transition-all duration-200"
                      >
                        {data.name}
                      </a>
                    ))}

                  </div>
                )}

              </li>

            </ul>

          </div>

        </div>

      )}

    </nav>
  );
};

export default Navbar;