import React, { useState } from "react";
import Logo from "../../../assets/image/svg/logo.svg";
import {
  AiOutlineArrowRight,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" text-white px-28 bg-[#0C2027]">
      <header className="max-w-[1240px] px-8  relative z-10 flex items-center justify-between h-24">
        <div>
          <a href="/">
            <img className="w-full" src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex text-[16px] font-bold">
            <li className="p-4">
              <a href="/">About</a>
            </li>
            <li className="p-4 text-[#F06523] whitespace-nowrap">
              <a href="/">Our Solutions</a>
            </li>
            <li className="p-4">
              <div className="relative group">
                <a href="/" className="flex items-center">
                  Sectors
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 transform transition-transform duration-200 group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <div className="absolute hidden group-hover:block bg-[#0c2027] text-center w-[300px] shadow-md py-2 rounded-lg mt-2 ">
                  <a href="#" className="block px-4 py-2 border-b border-white">
                    Sector 1
                  </a>
                  <a href="#" className="block px-4 py-2 border-b border-white">
                    Sector 2
                  </a>
                  <a href="#" className="block px-4 py-2 border-b border-white">
                    Sector 3
                  </a>
                </div>
              </div>
            </li>
            <li className="p-4">
              <a href="">Knowledge</a>
            </li>
            <li className="p-4">
              <a href="">Company</a>
            </li>
          </ul>
          <div className="p-2">
            <button className="hidden md:flex bg-[#06BA63] text-[#FFFFFF] w-[150px] rounded-xl font-bold   p-2 items-center justify-center">
              Get Started <AiOutlineArrowRight className="ml-1" />
            </button>
          </div>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0c2027] p-12 ease-in-out duration-500"
              : "fixed left-[-100%]"
          }>
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600">
              <a href="/">About</a>
            </li>
            <li className="p-4 text-[#F06523]  border-b border-gray-600">
              <a href="/">Our Solutions</a>
            </li>
            <li className="p-4  border-b border-gray-600">
              <div className="relative group">
                <a href="/" className="flex items-center">
                  Sectors
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 transform transition-transform duration-200 group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <div className="absolute hidden group-hover:block bg-[#0c2027] shadow-md py-2 rounded-lg mt-2 w-[270px]">
                  <a
                    href="#"
                    className="block px-4 py-2  border-b border-gray-600">
                    Sector 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2  border-b border-gray-600">
                    Sector 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2  border-b border-gray-600">
                    Sector 3
                  </a>
                </div>
              </div>
            </li>
            <li className="p-4  border-b border-gray-600">
              <a href="">Knowledge</a>
            </li>
            <li className="p-4  border-b border-gray-600">
              <a href="">Company</a>
            </li>
          </ul>
          <button className="bg-[#06BA63] text-[#FFFFFF] w-[150px] rounded-md font-bold mt-2  p-2">
            Get Started
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
