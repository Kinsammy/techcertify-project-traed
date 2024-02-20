import React from "react";
import Logo from "../../../assets/image/svg/logo.svg";

import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

// import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4  grid lg:grid-cols-3 gap-8 text-white">
      <div className="w-full">
        <div>
          <img src={Logo} alt="/" />
          <p>
            TraedAI is a trade finance platform that uses AI and machine
            learning technology to provide innovative solutions to businesses
            looking to optimize their trade finance processes.
          </p>
        </div>
        <div className="flex justify-between md:w-[75%] my-6">
          <div className="bg-[#1F1F26]  p-1 rounded-lg">
            <AiFillFacebook size={30} />
          </div>
          <div className="bg-[#F06523] p-1 rounded-lg">
            <AiOutlineTwitter size={30} />
          </div>
          <div className="bg-[#1F1F26]  p-1 rounded-lg">
            <AiFillInstagram size={30} />
          </div>
          <div className="bg-[#1F1F26]  p-1 rounded-lg">
            <AiFillLinkedin size={30} />
          </div>
          <div className="bg-[#1F1F26]  p-1 rounded-lg">
            <AiFillYoutube size={30} />
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 flex mx-auto">
        <div className="mx-20">
          <h6 className="font-medium">About us</h6>
          <ul>
            <li className="py-2 text-sm">Home</li>
            <li className="py-2 text-sm">Product</li>
            <li className="py-2 text-sm">Services</li>
          </ul>
        </div>
        <div className="mx-20">
          <h6 className="font-medium">Contact us</h6>
          <ul>
            <li className="py-2 text-sm">Home</li>
            <li className="py-2 text-sm">Product</li>
            <li className="py-2 text-sm">Services</li>
            <li className="py-2 text-sm">Product</li>
            <li className="py-2 text-sm">Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
