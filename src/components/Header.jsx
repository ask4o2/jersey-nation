import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSidebar, setshowSidebar] = useState(false);
  return (
    <>
      <div className="container mx-auto flex lg:items-start items-center justify-between pt-6 w-full px-3 border ">
        {/* toggler */}
        <span>
          <GiHamburgerMenu
            onClick={() => {
              setshowSidebar(!showSidebar);
            }}
            className="text-2xl lg:hidden"
          />
        </span>

        {/* headerLeft */}
        <div className="flex px-6 lg:w-[300px] justify-center border-r">
          <img
            className="w-[150px]"
            src="https://premiumstylehub.com/wp-content/uploads/2021/10/cropped-PSH__WHITE_-removebg-preview.png"
            alt=""
          />
        </div>

        {/* headerMain */}
        <div className="lg:flex flex-col px-8 flex-1 hidden">
          {/* main up */}
          <div className="flex items-center border rounded-md border-gray-300 p-2 text-sm">
            <BsSearch className="mr-5" />
            <input
              className="bg-transparent w-full outline-none py-1 mr-2 text-gray-500"
              type="text"
              placeholder="Search Products"
            />
            <button className="bg-red-600 p-2 px-5 rounded-md text-white ml-auto">
              Search
            </button>
          </div>

          {/* main down */}
          <div className="flex text-base space-x-8 mt-6 font-bold">
            <Link to="/">
              <p>Home</p>
            </Link>

            <p>About</p>
            <p>Contact</p>
            <p className="flex items-center">
              Shop <AiOutlineDown className="ml-2 w-3 mt-1" />{" "}
            </p>
            <p>HALL OF HONOR</p>
          </div>
        </div>

        {/* headerRight */}
        <div className="lg:w-[400px] flex justify-center text-2xl space-x-4 items-center p-3 border">
          <Link to="/admin">
            <div className="">
              <span className="relative">
                <FaRegUser className="hidden lg:block " />

                <div className="absolute hidden z-50 bg-white mt-6 right-0 p-3 py-5 text-sm border w-64 shadow-md">
                  <div className="flex justify-between items-center text-base">
                    <h3 className="font-medium">Sign in</h3>

                    <span className="text-red-500">Create an Account</span>
                  </div>

                  {/* input container */}
                  <div className="flex flex-col space-y-2 pb-6">
                    <label htmlFor="">Username or Email</label>
                    <input
                      type="text"
                      className="p-2 text-gray-500 text-sm px-3 border rounded-md focus:outline-none"
                      placeholder="Username"
                    />
                  </div>

                  {/* input container */}
                  <div className="flex flex-col space-y-2 pb-6">
                    <label htmlFor="">Password</label>
                    <input
                      type="text"
                      className="p-2 text-gray-500 text-sm px-3 border rounded-md focus:outline-none"
                      placeholder="Password"
                    />
                  </div>

                  <button className="text-white py-3 rounded-sm bg-red-500 w-full text-center">
                    LOGIN
                  </button>
                </div>
              </span>
            </div>
          </Link>

          <MdFavoriteBorder className="hidden lg:block" />
          <BsCart4 />
        </div>
      </div>

      {showSidebar && (
        <Sidebar showSidebar={showSidebar} setshowSidebar={setshowSidebar} />
      )}
    </>
  );
};

export default Header;
