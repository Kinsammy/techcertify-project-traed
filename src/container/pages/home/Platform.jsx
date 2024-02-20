import React from "react";
import PlatformImg from "../../../assets/image/svg/platform.svg";
import FourthBullet from "../../../assets/image/svg/bullet-4.svg";
import FifthBullet from "../../../assets/image/svg/bullet-5.svg";
import SixthBullet from "../../../assets/image/svg/bullet-6.svg";

const Platform = () => {
  return (
    <div className="w-full text-white px-4 py-16 my-8">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center md:mx-auto sm:mx-auto">
          <h2 className="w-[500px] md:text-4xl sm:text-3xl text-2xl font-bold py-6">
            Our smart platform is flexible
          </h2>
          <p className="mb-6">Accounting doesn't has to be that complicated.</p>
          <div className="flex gap-10 mb-4">
            <img src={FourthBullet} alt="/" />
            <p className="mt-2">Fast financing solutions </p>
          </div>
          <div className="flex gap-10 mb-4">
            <img src={FifthBullet} alt="/" />
            <p className="mt-2">Fast financing solutions </p>
          </div>
          <div className="flex gap-10 ">
            <img src={SixthBullet} alt="/" />
            <p className="mt-2">Fast financing solutions </p>
          </div>
        </div>
        <img className="w-[400px] mx-auto" src={PlatformImg} alt="/" />
      </div>
    </div>
  );
};

export default Platform;
