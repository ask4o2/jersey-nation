import React from "react";
import { AiFillCloseCircle, AiOutlineDown } from "react-icons/ai";

const Sidebar = ({ setshowSidebar, showSidebar }) => {
  return (
    <>
      <div
        onClick={() => {
          setshowSidebar(!showSidebar);
        }}
        className="fixed top-0 h-[100vh] w-full bg-black bg-opacity-60 z-10"
      ></div>

      <div className="top-0 left-0 bg-black p-3 text-white w-[75vw] h-[100vh] fixed z-50">
        <AiFillCloseCircle
          onClick={() => {
            setshowSidebar(!showSidebar);
          }}
          className="ml-auto"
        />

        <div className="flex flex-col space-y-5 mt-10 text-lg p-2">
          <p>Home</p>
          <p>Contact</p>
          <p className="flex justify-between items-center">
            <span>Shop</span>
            <AiOutlineDown className="w-3" />
          </p>
          <p>HALL OF HONOR</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
