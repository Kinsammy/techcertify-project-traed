import React from "react";
import SolutionImg from "../../../assets/image/svg/two-phones.svg";
import FirstBullet from "../../../assets/image/svg/bullet-1.svg";
import SecondBullet from "../../../assets/image/svg/bullet-2.svg";
import ThirdBullet from "../../../assets/image/svg/bullet-3.svg";

const Solution = () => {
  return (
    <div className="w-full text-white px-4 py-12">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[400px] ml-16" src={SolutionImg} alt="/" />
        <div className="flex flex-col justify-center md:mx-auto sm:mx-auto">
          <h2 className="w-[500px] md:text-4xl sm:text-3xl text-2xl font-bold py-6">
            Sell invoices with traed’s solutions
          </h2>
          <p className="mb-6">
            Sell your claims to traed and get your money immediately
          </p>
          <div className="flex gap-10 mb-4">
            <img src={FirstBullet} alt="/" />
            <p className="mt-2">Fast financing solutions </p>
          </div>
          <div className="flex gap-10 mb-4">
            <img src={SecondBullet} alt="/" />
            <p className="mt-2">Fast financing solutions </p>
          </div>
          <div className="flex gap-10">
            <img src={ThirdBullet} alt="/" />
            <p className="mt-2">Fast financing solutions </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
