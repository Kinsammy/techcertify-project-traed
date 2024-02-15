import React from "react";
import Logo from "../../../assets/image/svg/logo.svg";

const Navbar = () => {
  return (
    <div className="">
      <header className="flex items-center justify-between h-24 max-w-[1240px] mx-auto px-14 text-white">
        <a href="/" className="w-full text-3xl">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="hidden md:flex text-[16px] font-bold mt-4">
          <li className="p-4">
            <a href="/">About</a>
          </li>
          <li className="p-4 text-[#F06523]">
            <a href="/">OurSolutions</a>
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
              <div className="absolute hidden group-hover:block bg-black shadow-md py-2 rounded-lg mt-2 ">
                <a href="#" className="block px-4 py-2">
                  Sector 1
                </a>
                <a href="#" className="block px-4 py-2">
                  Sector 2
                </a>
                <a href="#" className="block px-4 py-2">
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
        <button className="bg-[#06BA63] text-[#FFFFFF] w-[300px] rounded-md font-medium my-6 mx-auto py-3">
          Get Started <span classname="text-[5px]">&#8594;</span>
        </button>
        {/* <div className="flex space-x-4 mt-2">
          <div>
            <a href="/" className="active">
              About
            </a>
            <a className="text-[#F06523]" href="/">
              Our Solutions
            </a>
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
              <div className="absolute hidden group-hover:block bg-black shadow-md py-2 rounded-lg mt-2 ">
                <a href="#" className="block px-4 py-2">
                  Sector 1
                </a>
                <a href="#" className="block px-4 py-2">
                  Sector 2
                </a>
                <a href="#" className="block px-4 py-2">
                  Sector 3
                </a>
              </div>
            </div>

            <a href="/">Knowledge</a>
            <a href="/">Company</a>
          </div>

          <a
            href="#"
            className="flex items-center rounded-md bg-green-600  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Get started <span classname="m1-1">&#8594;</span>
          </a>
        </div> */}
      </header>
    </div>
  );
};

export default Navbar;
