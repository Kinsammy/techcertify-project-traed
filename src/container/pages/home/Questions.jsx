import React, { useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

const Questions = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    firstQuestion: false,
    secondQuestion: false,
    thirdQuestion: false,
  });

  const toggleDropdown = (question) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [question]: !prevState[question],
    }));
    for (let quest in dropdownOpen) {
      if (quest !== question && dropdownOpen[quest]) {
        setDropdownOpen((prevState) => ({
          ...prevState,
          [quest]: false,
        }));
      }
    }
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
          <div className="flex justify-between border rounded-md p-4 my-8">
            <input
              type="text"
              value="How traed helps with invoice for selling goods or services overseas?"
              readOnly
              className="flex-grow bg-transparent focus:outline-none border-1-white"
            />
            <span
              onClick={() => toggleDropdown("firstQuestion")}
              className="cursor-pointer text-2xl"
              role="img"
              aria-label="Add">
              <AiOutlinePlus />
            </span>
          </div>

          {dropdownOpen.firstQuestion && (
            <div className="mt-4 border p-4">
              <div className="flex justify-between">
                <p className="font-bold">
                  How you can convert your invoices into cash?
                </p>
                <span
                  onClick={toggleDropdown}
                  className={`cursor-pointer text-2xl ${
                    dropdownOpen ? "block" : "hidden"
                  }`}
                  role="img"
                  aria-label="Add">
                  <AiOutlineClose />
                </span>
              </div>

              <ul className="list-disc px-12 py-4 text-[12px]">
                <li>Register with Traed.ai</li>
                <li>Introduce your company</li>
                <li>Add your buyer and get limits</li>
                <li>Upload invoices</li>
              </ul>
              <p className="text-[12px]">
                Register with Traed.ai Introduce your company Add your buyer and
                get limits Upload invoices Get your cash in 48 hours once your
                Traed contract and Buyer’s notice are signed
              </p>
            </div>
          )}
        </div>
        <div>
          <div className="flex justify-between border rounded-md p-4 my-8">
            <input
              type="text"
              value="Do you provide ongoing support?"
              readOnly
              className="flex-grow bg-transparent focus:outline-none border-1-white"
            />
            <span
              onClick={() => toggleDropdown("secondQuestion")}
              className="cursor-pointer text-2xl"
              role="img"
              aria-label="Add">
              <AiOutlinePlus />
            </span>
          </div>

          <div></div>

          {dropdownOpen.secondQuestion && (
            <div className="mt-4 border p-4">
              <div className="flex justify-between">
                <p className="font-bold">
                  How you can convert your invoices into cash?
                </p>
                <span
                  onClick={toggleDropdown}
                  className={`cursor-pointer text-2xl ${
                    dropdownOpen ? "block" : "hidden"
                  }`}
                  role="img"
                  aria-label="Add">
                  <AiOutlineClose />
                </span>
              </div>

              <ul className="list-disc px-12 py-4 text-[12px]">
                <li>Register with Traed.ai</li>
                <li>Introduce your company</li>
                <li>Add your buyer and get limits</li>
                <li>Upload invoices</li>
              </ul>
              <p className="text-[12px]">
                Register with Traed.ai Introduce your company Add your buyer and
                get limits Upload invoices Get your cash in 48 hours once your
                Traed contract and Buyer’s notice are signed
              </p>
            </div>
          )}
        </div>
        <div>
          <div className="flex justify-between border rounded-md p-4 my-8">
            <input
              type="text"
              value="What is your web design process?"
              readOnly
              className="flex-grow bg-transparent focus:outline-none border-1-white"
            />
            <span
              onClick={() => toggleDropdown("thirdQuestion")}
              className="cursor-pointer text-2xl"
              role="img"
              aria-label="Add">
              <AiOutlinePlus />
            </span>
          </div>

          <div></div>

          {dropdownOpen.thirdQuestion && (
            <div className="mt-4 border p-4">
              <div className="flex justify-between">
                <p className="font-bold">
                  How you can convert your invoices into cash?
                </p>
                <span
                  onClick={toggleDropdown}
                  className={`cursor-pointer text-2xl ${
                    dropdownOpen ? "block" : "hidden"
                  }`}
                  role="img"
                  aria-label="Add">
                  <AiOutlineClose />
                </span>
              </div>

              <ul className="list-disc px-12 py-4 text-[12px]">
                <li>Register with Traed.ai</li>
                <li>Introduce your company</li>
                <li>Add your buyer and get limits</li>
                <li>Upload invoices</li>
              </ul>
              <p className="text-[12px]">
                Register with Traed.ai Introduce your company Add your buyer and
                get limits Upload invoices Get your cash in 48 hours once your
                Traed contract and Buyer’s notice are signed
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
