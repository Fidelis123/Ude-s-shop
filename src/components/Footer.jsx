import React from "react";
import { motion, AnimatePresence } from "motion/react";

import FooterLogo from "../assets/website/logo.png";
import Banner from "../assets/website/footerbanner.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

import { FaHeadset } from "react-icons/fa6";


// Footer background
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};


// Footer links
const FooterLinks = [
  {
    title: "Home",
    links: "/#home",
  },
  {
    title: "About",
    links: "/#about",
  },
  {
    title: "Contact",
    links: "/#contact",
  },
  {
    title: "Blog",
    links: "/#blog",
  },
];


const Footer = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <footer
      style={BannerImg}
      className="text-white min-h-150 relative"
    >

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Footer content */}
      <div className="container relative z-10 py-12">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}

          /*
            MOBILE:
            1 column

            MEDIUM:
            1 column
            -> links will appear BELOW company details

            LARGE:
            3 columns
            -> company | links | social/contact
          */
          className="
            grid
            grid-cols-2
            lg:grid-cols-3
            gap-6
            lg:gap-10
          "
        >

          {/* =========================
              COMPANY DETAILS
          ========================= */}
          <div className="py-4">

            <div
              className="
                flex
                flex-col
                sm:flex-row
                lg:flex-col
                items-start
                sm:items-center
                lg:items-start
                gap-4
              "
            >

              <img
                src={FooterLogo}
                alt="Ude's shop logo"
                className="
                  w-16
                  h-16
                  rounded-full
                  object-cover
                "
              />

              <div>
                <h1
                  className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                  "
                >
                  Ude's shop
                </h1>

                <p
                  className="
                    text-sm
                    sm:text-base
                    text-gray-300
                    mt-2
                  "
                >
                  -- SHOP MORE, SAVE MORE --
                </p>
              </div>

            </div>

          </div>


          {/* =========================
              LINKS
          ========================= */}
          <div
            className="
            lg:col-span-1
            grid
            grid-cols-2
            gap-4
            sm:gap-8
            "
          >

            {/* Quick Links */}
            <div className="py-4">

              <h2
                className="
                  text-lg
                  sm:text-xl
                  font-bold
                  mb-4
                "
              >
                Quick Links
              </h2>

              <ul className="flex flex-col gap-3">

                {FooterLinks.map((link) => (
                  <li key={link.title}>

                    <a
                      href={link.links}
                      className="
                        inline-block
                        text-sm
                        sm:text-base
                        text-gray-200
                        cursor-pointer
                        hover:text-primary
                        hover:translate-x-1
                        transition-all
                        duration-300
                      "
                    >
                      {link.title}
                    </a>

                  </li>
                ))}

              </ul>

            </div>


            {/* Useful Links */}
            <div className="py-4">

              <h2
                className="
                  text-lg
                  sm:text-xl
                  font-bold
                  mb-4
                "
              >
                Useful Links
              </h2>

              <ul className="flex flex-col gap-3">

                {FooterLinks.map((link) => (
                  <li key={link.title}>

                    <a
                      href={link.links}
                      className="
                        inline-block
                        text-sm
                        sm:text-base
                        text-gray-200
                        cursor-pointer
                        hover:text-primary
                        hover:translate-x-1
                        transition-all
                        duration-300
                      "
                    >
                      {link.title}
                    </a>

                  </li>
                ))}

              </ul>

            </div>

          </div>


          {/* =========================
              SOCIALS + CONTACT
          ========================= */}
          <div className="py-4 col-span-2 lg:col-span-1">

            {/* Social icons */}
            <div className="flex items-center gap-5 mb-7">

              <a
                href="#"
                aria-label="Instagram"
                className="
                  hover:text-primary
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <FaInstagram className="text-2xl sm:text-3xl" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="
                  hover:text-primary
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <FaTwitter className="text-2xl sm:text-3xl" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  hover:text-primary
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <FaFacebookF className="text-2xl sm:text-3xl" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  hover:text-primary
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <FaLinkedinIn className="text-2xl sm:text-3xl" />
              </a>

            </div>


            {/* Location */}
            <div className="flex items-start gap-4 mb-5">

              <FaLocationArrow className="text-xl sm:text-2xl mt-1 shrink-0" />

              <p className="text-sm sm:text-base text-gray-200">
                Nigeria, Somewhere in southeast
              </p>

            </div>


            {/* Phone */}
            <div className="flex items-center gap-4">

              <FaMobileAlt className="text-xl sm:text-2xl shrink-0" />

              <p className="text-sm sm:text-base text-gray-200">
                +234 812 345 6789
              </p>

            </div>

          </div>

        </motion.div>


        {/* =========================
            COPYRIGHT AREA
        ========================= */}
        <div
          className="
            border-t
            border-white/20
            mt-10
            pt-8
            text-center
          "
        >

          <p className="text-sm text-gray-400">
            Designed by{" "}
            <span className="font-bold text-orange-300">
              Udenwa.dev
            </span>
          </p>

          <p className="text-sm text-gray-400 mt-4">
            Copyright &copy; 2026 Ude's shop. All rights reserved.
          </p>

        </div>

      </div>


      {/* =========================
          CUSTOMER SERVICE WIDGET
      ========================= */}
      <div
        className="
          fixed
          bottom-4
          right-4
          z-50
          flex
          flex-col
          items-end
          gap-2
        "
      >

        <AnimatePresence>

          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 20,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="
                h-12
                bg-primary
                text-white
                px-4
                rounded-lg
                shadow-lg
                flex
                items-center
              "
            >
              <p className="whitespace-nowrap">
                Customer service
              </p>
            </motion.div>
          )}

        </AnimatePresence>


        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          aria-label="Customer service"
          className="
            h-12
            w-12
            rounded-full
            bg-primary
            text-white
            flex
            items-center
            justify-center
            shadow-lg
            hover:scale-110
            transition-transform
            duration-300
          "
        >
          <FaHeadset size={20} />
        </button>

      </div>

    </footer>
  );
};


export default Footer;