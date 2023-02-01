import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoShirt,
} from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import { GiClockwork } from "react-icons/gi";

const MyAccount = () => {
  const user = true;

  if (!user) {
    return (
      <div className="flex container mx-auto border">
        {/* login container */}
        <div className="lg:max-w-1/2 p-3 bg-gray-400 rounded-sm">
          <form className="">
            <h2 className="text-lg font-medium py-3">Login</h2>

            {/* input container */}
            <div className="flex flex-col space-y-2 pb-6">
              <label htmlFor="">Username or email address</label>
              <input
                type="text"
                className="p-2 text-gray-500 text-sm px-3 border rounded-md focus:outline-none"
              />
            </div>

            <div className="flex flex-col space-y-2 pb-6">
              <label htmlFor="">Password</label>
              <input
                type="text"
                className="p-2 text-gray-500 text-sm px-3 border rounded-md focus:outline-none"
              />
            </div>

            <button className="w-full text-center py-4 text-white rounded-md font-medium">
              Login
            </button>
          </form>
        </div>

        {/* Register container */}
        <div className="lg:max-w-1/2 p-3 bg-gray-400 rounded-sm">
          <form className="">
            <h2 className="text-lg font-medium py-3">Register</h2>

            {/* input container */}
            <div className="flex flex-col space-y-2 pb-6">
              <label htmlFor="">Email address</label>
              <input
                type="text"
                className="p-2 text-gray-500 text-sm px-3 border rounded-md focus:outline-none"
              />
            </div>

            <p>A password will be sent to your email address.</p>

            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage acccess to your account and for
              other purposes described in our
              <span className="text-red-500">privacy policy.</span>
            </p>

            <button className="w-full text-center py-4 text-white rounded-md font-medium">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex border lg:max-w-6xl mt-24 ">
      <AdminSidebar
        current="Dashboard"
        sidebarItems={[
          { name: "Dashboard", icon: GiClockwork, link: "/account" },
          { name: "Orders", icon: BsCart4, link: "/account/orders" },
          { name: "Addresses", icon: TbLogout, link: "/account/address" },
          {
            name: "Payment methods",
            icon: TbLogout,
            link: "/account/payment-method",
          },
          { name: "Account details", icon: TbLogout, link: "/account/details" },
          { name: "Logout", icon: TbLogout, link: "/account" },
        ]}
      />
    </div>
  );
};

export default MyAccount;
