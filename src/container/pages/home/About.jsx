import React from "react";
import AboutImg from "../../../assets/image/svg/about.svg";

const About = () => {
  return (
    <div className="w-full text-white px-4 py-16">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center md:mx-auto sm:mx-auto">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-6">
            About Us
          </h1>
          <p className="w-[500px]">
            TraedAI is a trade finance platform that leverages cutting-edge AI
            and machine learning technology to provide innovative solutions to
            businesses looking to optimize their trade finance processes.
          </p>
        </div>
        <div className="mx-auto my-4 mr-6 md:mx-auto sm:mx-auto">
          <img className="w-[500px]" src={AboutImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
