import React from "react";
import HeroImg from "../../../assets/image/jpeg/hero.jpeg";

const Hero = () => {
  return (
    <div className="text-[#0C2027]">
      <div className="w-full h-screen">
        <div>
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
