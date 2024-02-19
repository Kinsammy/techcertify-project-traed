import React from "react";
import SolutionImg from "../../../assets/image/svg/two-phones.svg";
import FirstBullet from "../../../assets/image/svg/bullet-1.svg";
import SecondBullet from "../../../assets/image/svg/bullet-2.svg";
import ThirdBullet from "../../../assets/image/svg/bullet-3.svg";

const Solution = () => {
  return (
    <div className="w-full text-white px-4 py-16">
      <div>
        <img className="w-[400px]" src={SolutionImg} alt="/" />
        <div>
          <h2>Sell invoices with traed’s solutions</h2>
          <p>Sell your claims to traed and get your money immediately</p>
          <div>
            <img src={FirstBullet} alt="/" />
            <p>Fast financing solutions </p>
          </div>
          <div>
            <img src={SecondBullet} alt="/" />
            <p>Fast financing solutions </p>
          </div>
          <div>
            <img src={ThirdBullet} alt="/" />
            <p>Fast financing solutions </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
