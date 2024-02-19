import React from "react";

const Content = () => {
  return (
    <div className="w-full px-4 my-8 text-white">
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

      <div className="max-w-[1240px] mx-auto my-4 grid md:grid-cols-3 gap 8">
        <div></div>
      </div>
    </div>
  );
};

export default Content;
