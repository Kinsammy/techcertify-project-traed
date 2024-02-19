import React from "react";
import FirstStep from "../../../assets/image/svg/step-1.svg";
import SecondStep from "../../../assets/image/svg/step-2.svg";
import ThirdStep from "../../../assets/image/svg/step-3.svg";

const Content = () => {
  return (
    <div className="w-full px-4 my-8  text-white">
      <div className="py-8 mx-auto max-w-[800px]  text-center">
        <h2 className="w-[500px] text-5xl mx-auto">
          It’s easy. So how is that
          <span className="text-[#06BA63]"> possible?</span>
        </h2>
        <p className="text-1xl mt-5 h-3">
          Traed offers a simple and clear accounting software that can be used
          anywhere at any. This allows a maximum of flexibility and convenience
          for you and your customers.
        </p>
      </div>

      <div className="max-w-[1240px] mx-auto my-10 grid md:grid-cols-3 gap-8">
        <div className="shadow-xl flex flex-col p-4 rounded-xl bg-[#7E86931A]">
          <img src={FirstStep} alt="/" />
          <h4 className="text-[#06BA63] py-2 font-bold">
            Step 1 - Setup your portal
          </h4>
          <p>
            Install or Register web portal of traed.ai by clicking on Get
            Started button.
          </p>
        </div>
        <div className="shadow-xl flex flex-col p-4 rounded-xl bg-[#7E86931A]">
          <img src={SecondStep} alt="/" />
          <h4 className="text-[#06BA63] py-2 font-bold">
            Step 2 - Upload your legal docs
          </h4>
          <p>
            Complete the simple onboarding for your company to get registered on
            traed.
          </p>
        </div>
        <div className="shadow-xl flex flex-col p-4 rounded-xl bg-[#7E86931A]">
          <img src={ThirdStep} alt="/" />
          <h4 className="text-[#06BA63] py-2 font-bold">
            Step 3 - Onboard and enjoy
          </h4>
          <p>
            That’s it!! Start enjoying all features of traed platform to make
            accounting simple.
          </p>
        </div>
      </div>
      <div className="w-[500px] mx-auto text-center underline">
        <a href="/">Get Started >>></a>
      </div>
    </div>
  );
};

export default Content;
