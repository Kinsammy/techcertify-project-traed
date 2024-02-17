import React from "react";
import Bidirection from "../../../assets/image/svg/bidirection.svg";
import Trend from "../../../assets/image/svg/trend.svg";
import Deal from "../../../assets/image/svg/deal.svg";
import Reverse from "../../../assets/image/svg/reverse.svg";
import Analytics_img from "../../../assets/image/png/analytics.png";
import Analytics_mobile from "../../../assets/image/svg/analytics-phone.svg";

const Analytics = () => {
  return (
    <div className="w-full px-4 py-16 text-white">
      <div className="py-8 mx-auto max-w-[800px] text-center ">
        <h2 className="w-[500px] text-4xl mx-auto">
          Traed helps your business save time every day!
        </h2>
        <p className="text-1xl mt-5 h-3">
          Traed offers a simple and clear accounting software that can be used
          anywhere at any. This allows a maximum of flexibility and convenience
          for you and your customers.
        </p>
      </div>

      <div className="max-w-[1240px] mx-auto mt-6 grid md:grid-cols-3 gap-8">
        <div className="w-[377.33px]">
          <div className="shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300  bg-[#7E86931A]">
            <img src={Bidirection} className="w-10 " alt="/" />
            <h4 className="py-4">INVOICING DISCOUNTING</h4>
            <p>
              a financing method where a business sells its unpaid invoices to a
              third party at a discount to access immediate cash flow.
            </p>
          </div>
          <div className="w-full shadow-xl flex flex-col p-6 my-4 rounded-md hover:scale-105 duration-300  bg-[#7E86931A]">
            <img src={Deal} className="w-10 " alt="/" />
            <h4 className="py-4">DEAL MANAGING</h4>
            <p>
              overseeing and optimizing various aspects of business
              transactions, from negotiation and documentation to tracking and
              performance analysis.
            </p>
          </div>
        </div>

        <div className="relative w-full shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300">
          <img
            src={Analytics_img}
            className="w-full h-full object-cover"
            alt="/"
          />
          <div className="absolute p-8">
            <h4>BUSINESS MATCHMAKING</h4>
            <p>
              a financial arrangement where a buyer facilitates early payments
              to their suppliers through a third-party financing provider
            </p>
            <img
              src={Analytics_mobile}
              className="w-full max-w-xs mx-auto h-auto object-cover rounded ml-6"
              alt="/"
            />
          </div>
        </div>
        <div className="w-[377.33px]">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300  bg-[#7E86931A]">
            <img src={Trend} className="w-10 " alt="/" />
            <h4 className="py-4">DEAL MANAGING</h4>
            <p>
              overseeing and optimizing various aspects of business
              transactions, from negotiation and documentation to tracking and
              performance analysis.
            </p>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300  bg-[#7E86931A]">
            <img src={Reverse} className="w-10 " alt="/" />
            <h4 className="py-4">DEAL MANAGING</h4>
            <p>
              overseeing and optimizing various aspects of business
              transactions, from negotiation and documentation to tracking and
              performance analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
