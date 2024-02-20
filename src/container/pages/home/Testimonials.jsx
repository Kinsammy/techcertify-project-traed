import React from "react";
import TestimonialImg from "../../../assets/image/svg/testimonial.svg";

const Testimonials = () => {
  return (
    <div className="w-full text-white px-20 py-16">
      <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-6">
        What our users say?
      </h2>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div>
          <p>
            “Traed has been a game-changer for our business. Their factoring
            services have improved our cash flow, allowing us to focus on growth
            and expansion. I recommend Traed to any business looking for
            reliable financial solutions.”
          </p>
          <div>
            <img src={TestimonialImg} alt="/" />
            <div>
              <h4>John carter</h4>
              <h5>Role, Company</h5>
            </div>
          </div>
        </div>
        <div className="">
          <p>
            “Traed has been a game-changer for our business. Their factoring
            services have improved our cash flow, allowing us to focus on growth
            and expansion. I recommend Traed to any business looking for
            reliable financial solutions.”
          </p>
          <div className="flex flex-row py-6">
            <img className="pr-6" src={TestimonialImg} alt="/" />
            <div>
              <h4>John carter</h4>
              <h5>Role, Company</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
