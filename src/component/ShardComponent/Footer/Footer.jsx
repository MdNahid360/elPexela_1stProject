import React from "react";
import {
  BiEnvelope,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoWhatsapp,
} from "react-icons/bi";
import logo from "../../../assets/img/logo/navlog.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  const account = [
    {
      title: "Login / SignUp",
      link: "/",
    },
    {
      title: "Cart",
      link: "/",
    },

    {
      title: "Shop",
      link: "/",
    },
  ];

  const quickLink = [
    {
      title: "Privacy Policy",
      link: "/",
    },
    {
      title: "Terms of Service",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
  ];
  return (
    <footer className="footer px-4 md:py-20 py-10 bg-[white] border-t text-black ">
      <div className="lg:max-w-screen-xl lg:w-auto w-[90%] m-auto py-12">
        <div className="grid md:grid-cols-4 grid-cols-1 lg:gap-6 gap-2">
          <div className="col-span-1">
            <img src={logo} className="w-[100px]" />
            <p className="text-gray-600 mt-3">
              Shop with Confidence" - Assure your customers of a secure and
              trustworthy shopping experience.
            </p>
            <ul className="flex gap-3 mt-8">
              <li>
                <Link to="/">
                  <button className="bg-[#e1e1e1] hover:bg-[#007bff] text-[#007bff] hover:text-white duration-200 flex items-center justify-center    rounded w-[30px] h-[30px]">
                    <BiLogoFacebook className="lg:text-2xl md:text-lg" />
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button className="bg-[#e1e1e1] hover:bg-[#007bff] text-[#007bff] hover:text-white duration-200 flex items-center justify-center    rounded w-[30px] h-[30px]">
                    <AiOutlineTwitter className="lg:text-2xl md:text-lg" />
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button className="bg-[#e1e1e1] hover:bg-[#007bff] text-[#007bff] hover:text-white duration-200 flex items-center justify-center    rounded w-[30px] h-[30px]">
                    <BiLogoInstagram className="lg:text-2xl md:text-lg" />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:mt-0 mt-3">
            <h3 className="text-lg font-semibold text-black">Account</h3>
            <ul className="mt-3">
              {account.map((itm, index) => (
                <li key={index} className="flex items-center gap-2 mt-4">
                  <Link
                    className="text-gray-500 hover:text-blue-600 duration-200 flex lg:text-[17px] md:text-sm text-lg items-center gap-2"
                    href={itm.link}
                  >
                    <span className="text-3xl h-[12px] flex items-center mt-[-13px] font-bold">
                      .
                    </span>{" "}
                    {itm.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:mt-0 mt-3">
            <h3 className="text-lg font-semibold text-black">Quick Link</h3>
            <ul className="mt-3">
              {quickLink.map((itm, index) => (
                <li key={index} className="flex items-center gap-2 mt-4">
                  <Link
                    className="text-gray-500 hover:text-blue-600 duration-200 flex lg:text-[17px] md:text-sm text-lg items-center gap-2"
                    href={itm.link}
                  >
                    <span className="text-3xl h-[12px] flex items-center mt-[-13px] font-bold">
                      .
                    </span>{" "}
                    {itm.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:mt-0 mt-3">
            <h3 className="text-lg font-semibold text-black">Talk To Us</h3>
            <ul className="mt-3">
              <li className="flex items-center gap-2 mt-4">
                <Link
                  className="text-gray-500 hover:text-green-600 duration-200 flex lg:text-[17px]  md:text-sm text-lg items-center gap-2"
                  href="/"
                >
                  <BiLogoWhatsapp className="lg:text-2xl md:text-lg text-xl text-green-700" />{" "}
                  +88012000000
                </Link>
              </li>
              <li className="flex items-center gap-2 mt-4">
                <Link
                  className="text-gray-500 hover:text-blue-600 duration-200 flex lg:text-[17px]  md:text-sm text-lg items-center gap-2"
                  href="/"
                >
                  <BiEnvelope className="lg:text-2xl md:text-lg text-xl text-blue-700" />{" "}
                  eshop@example.com
                </Link>
              </li>
              <li className="flex items-center gap-2 mt-4">
                <Link
                  className="text-gray-500 hover:text-orange-600 duration-200 flex lg:text-[17px]  md:text-sm text-lg items-center gap-2"
                  href="/"
                >
                  <HiOutlineLocationMarker className="lg:text-2xl md:text-lg text-xl text-orange-600" />{" "}
                  Dhaka/Bangladesh
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
