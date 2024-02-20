import React from "react";
import ExploreImg from "../../../assets/image/png/explore.png";

const Explore = () => {
  return (
    <div className="w-full text-white py-16 bg-[#364548]">
      <div className="px-16 max-w-[1240px] grid md:grid-cols-2">
        <div className="py-10">
          <h2 className="pr-20 md:text-4xl sm:text-3xl text-2xl font-bold py-6">
            Explore endless possibilities with Traed.
          </h2>
          <p className="text-[#FFFFFFCC] text-[16px]">
            Secure your seat today at traed. Enjoy early benifits by joining
            traed community now. We are providing simple assets solution every
            successfull company needs.
          </p>
        </div>
        <div className="">
          <img className="w-[600px] mx-auto ml-12" src={ExploreImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
