import React from "react";

const Section = () => {
  return (
    <div
      className="
        flex justify-center gap-60 text-white text-2xl
        max-lg:gap-24
        max-md:flex-wrap max-md:gap-12
        max-sm:flex-col max-sm:items-center max-sm:gap-7
      "
    >
      <div className="text-center">
        <p className="text-1xl text-gray-500 ">DESIGNERS</p>
        <h1 className=" text-center  text-5xl max-sm:ml-0">150+</h1>
      </div>

      <div className="text-center">
        <p className="text-1xl text-gray-500 ">CLIENTS</p>
        <h1 className=" text-center text-5xl max-sm:ml-0">500+</h1>
      </div>

      <div className="text-center">
        <p className="text-1xl text-gray-500 ">MASTERPIECES</p>
        <h1 className=" text-center text-5xl max-sm:ml-0">20K+</h1>
      </div>

      <div className="text-center">
        <p className="text-1xl text-gray-500 ">EVENTS</p>
        <h1 className=" text-center text-5xl  max-sm:ml-0">50+</h1>
      </div>
    </div>
  );
};

export default Section;
