import React from "react";
import HeroImg from "../../../assets/image/jpeg/hero.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div className=" relatve text-[#0C2027]">
      <div
        className="relative overflow-hidden bg-cover  bg-no-repeat p-12 text-center"
        style={{
          backgroundImage: `url(${HeroImg})`,
          height: "700px",
        }}>
        <div
          className="absolute inset-1"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0), #FFFFFF 300%)",
            zIndex: 2,
            width: "100%",
          }}></div>

        <div className="absolute inset-0 flex flex-col justify-center max-w-[800px] ml-16 px-4 text-left">
          <h1 className="font-bold text-6xl  mt-30">
            Accounting, but make it easy - withTraed!
          </h1>
          <p className="text-[#7E8693] mt-8">
            Applications that power financial institutions, marketplaces that
            accelerate industry & an open innovation platform for banks,
            fintechs & non-banks to connect and collaborate.
          </p>
          <div className="flex items-center mt-8">
            <button className="bg-[#06BA63] text-[#FFFFFF] w-[150px] rounded-md  font-medium py-2 flex items-center justify-center">
              Get Started <AiOutlineArrowRight className="ml-1" />
            </button>
            <p className="#6D758F mt-2 ml-8">
              No credit card necessary. Its free!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
