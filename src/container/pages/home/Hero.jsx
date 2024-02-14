import React from "react";
import HeroImg from "../../../assets/image/jpeg/hero.jpeg";

const Hero = () => {
  return (
    <div className="text-[#0C2027]">
      <div className="w-full h-screen relatve">
        <div className="absolute">
          <img src={HeroImg} alt="" />
        </div>
        <div className="absolute max-w-[800px] pl-16">
          <p className="font-bold text-[68px]  mt-[10rem] ">
            Accounting, but make it easy - withTraed!
          </p>
          <p className="text-[#7E8693]">
            Applications that power financial institutions, marketplaces that
            accelerate industry & an open innovation platform for banks,
            fintechs & non-banks to connect and collaborate.
          </p>
          <div className="">
            <button className="bg-[#06BA63] text-[#FFFFFF] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
              Get Started <span classname="text-[]">&#8594;</span>
            </button>
            <p className="#6D758F">No credit card necessary. Its free!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
