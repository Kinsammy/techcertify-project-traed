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
    <div className=" w-full text-white pt-16 pb-6">
      <div className="max-w-[1240px] mx-auto  grid lg:grid-cols-3 gap-8">
        <div>
          <img className="py-8" src={Logo} alt="/" />
          <p className="pr-[6.5rem]">
            TraedAI is a trade finance platform that uses AI and machine
            learning technology to provide innovative solutions to businesses
            looking to optimize their trade finance processes.
          </p>
          <div className="flex justify-between md:w-[75%] py-8">
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
        <div className="lg:col-span-2 flex justify-between py-8">
          <div className="mx-[15rem]">
            <h6 className="font-medium py-4">About us</h6>
            <ul className="text-[#B4B9C9]">
              <li className="py-2 text-sm">Home</li>
              <li className="py-2 text-sm">Product</li>
              <li className="py-2 text-sm">Services</li>
            </ul>
          </div>
          <div className=" justify-end">
            <h6 className="font-medium py-4">Contact us</h6>
            <ul className="text-[#B4B9C9]">
              <li className="py-2 text-sm">Information</li>
              <li className="py-2 text-sm">Request a quote</li>
              <li className="py-2 text-sm">Consultation</li>
              <li className="py-2 text-sm">Help center</li>
              <li className="py-2 text-sm">Terms and conditions</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-[#E1E4ED66] my-10" />

      <div className="text-center">
        <p>
          Copyright ©2022 Tread LTD | All Rights Reserved | Terms and Conditions
          | Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
