import React from "react";
import ManagementImg from "../../../assets/image/svg/management.svg";
import SeventhBullet from "../../../assets/image/svg/bullet-7.svg";
import EightBullet from "../../../assets/image/svg/bullet-8.svg";
import NinethBullet from "../../../assets/image/svg/bullet-9.svg";

const Management = () => {
  return (
    <div className="w-full text-white px-4 py-16">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[400px]  mx-16 my-auto" src={ManagementImg} alt="/" />
        <div className="flex flex-col justify-center md:mx-auto sm:mx-auto p-8">
          <h2 className="w-[500px] md:text-4xl sm:text-3xl text-2xl font-bold py-6">
            Why choosing traed for trade managements?
          </h2>
          <p className="mb-6 pr-6">
            Create invoices, quotes & co. automatically with your new digital
            accounting software.
          </p>
          <div className="flex gap-10 mb-4">
            <img src={SeventhBullet} alt="/" />
            <p className="mt-2">Save valuable time</p>
          </div>
          <div className="flex gap-10 mb-4">
            <img src={EightBullet} alt="/" />
            <p className="mt-2">Keep the overview </p>
          </div>
          <div className="flex gap-10">
            <img src={NinethBullet} alt="/" />
            <p className="mt-2">Work flexibly in the cloud </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
