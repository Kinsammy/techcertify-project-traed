import React from "react";
import AboutImg from "../../../assets/image/svg/about.svg";

const About = () => {
  return (
    <div className="w-full text-white px-4 py-12">
      <div className="flex">
        <div className=" w-[50%] py-16 mt-14">
          <h3>About Us</h3>
          <p>
            TraedAI is a trade finance platform that leverages cutting-edge AI
            and machine learning technology to provide innovative solutions to
            businesses looking to optimize their trade finance processes.
          </p>
        </div>
        <div className=" w-[50%]">
          <img className="" src={AboutImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
