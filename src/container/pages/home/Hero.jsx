import React from "react";
import HeroImg from "../../../assets/image/jpeg/hero.jpeg";

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
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0), #FFFFFF 300%)",
            zIndex: 0,
            width: "10%",
          }}></div>

        <div className="absolute inset-0 flex flex-col justify-center max-w-[800px] pl-16">
          <p className="font-bold text-6xl  mt-40">
            Accounting, but make it easy - withTraed!
          </p>
          <p className="text-[#7E8693] mt-4">
            Applications that power financial institutions, marketplaces that
            accelerate industry & an open innovation platform for banks,
            fintechs & non-banks to connect and collaborate.
          </p>
          <div className="flex items-center mt-8">
            <button className="bg-[#06BA63] text-[#FFFFFF] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
              Get Started <span classname="size={5}">&#8594;</span>
            </button>
            <p className="#6D758F mt-2">No credit card necessary. Its free!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
