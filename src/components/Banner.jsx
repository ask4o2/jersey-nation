import React from "react";
import { BsCart4 } from "react-icons/bs";

const Banner = () => {
  return (
    <div>
      {/* promo text */}
      <div className="font-medium text-center py-6">
        <h4 className="text-2xl md:text-3xl">
          Jersey Customization at just <span>#300</span>{" "}
        </h4>
        <p className="text-xl md:text-2xl my-4">Promo Ends at Midnight</p>
      </div>

      {/* main banner */}
      <div className="bg-banner-img bg-center bg-cover bg-no-repeat bg-opacity-40 text-white text-center z-10">
        <div className="z-20 bg-black bg-opacity-50 py-10">
          <h2 className="font-bold text-3xl md:text-4xl ">
            Jersey Nation Fabrics
          </h2>
          <p className="text-sm font-[400] mt-3">
            Your favorite online store for authentic jerseys
          </p>

          <img
            className="mx-auto"
            src="https://premiumstylehub.com/wp-content/uploads/2021/10/cropped-PSH__WHITE_-removebg-preview.png"
            alt=""
          />

          <button className="flex items-center space-x-2 mx-auto bg-black py-5 px-8 font-medium text-white rounded-md text-xl">
            <span>Shop Now</span> <BsCart4 className="inline" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
