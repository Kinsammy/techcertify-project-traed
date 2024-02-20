import React, { useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

const Questions = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="w-full text-white px-4 py-16">
      <div className="max-w-[1240px] mx-auto ">
        <div className="text-center">
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-6">
            Frequently Asked Questions
          </h2>
          <p className="text-[#FFFFFFCC] ">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
        </div>
        <div>
          <div></div>
          <span
            onClick={toggleDropdown}
            className="cursor-pointer text-2xl"
            role="img"
            aria-label="Add">
            <AiOutlinePlus />
          </span>

          <span
            onClick={toggleDropdown}
            className={`cursor-pointer text-2xl ${
              dropdownOpen ? "block" : "hidden"
            }`}
            role="img"
            aria-label="Add">
            <AiOutlineClose />
          </span>
          {dropdownOpen && (
            <div className="mt-4">
              <p>How you can convert your invoices into cash?</p>
              <ul className="list-disc pl-4">
                <li>Register with Traed.ai</li>
                <li>Introduce your company</li>
                <li>Add your buyer and get limits</li>
                <li>Upload invoices</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
