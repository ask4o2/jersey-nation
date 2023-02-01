import React from "react";
import { BsCart4 } from "react-icons/bs";
import { GiClockwork } from "react-icons/gi";
import { IoChevronBackOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

const Order = () => {
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

      <div className="lg:w-[600px] border mx-auto text-xs md:text-sm  pb-3">
        <div className="py-6 flex space-x-10 items-center px-6 ">
          <Link to="/account/orders">
            <span className="p-2 px-4 bg-gray-100  flex items-center space-x-2 font-medium">
              <IoChevronBackOutline className="inline" /> <span>Back</span>
            </span>
          </Link>

          <h2 className="font-bold text-2xl text-center">Order details</h2>
        </div>

        <div className="flex justify-between py-3 border-y px-2 lg:px-10 text-xs text-gray-500">
          <span>Premium Jersey</span>
          <span>Premium Jersey, Promo</span>
          <span>Player version</span>
        </div>

        <div className="mt-8 px-3 lg:px-6">
          {/* order info container */}
          <div>
            <h3 className="font-medium text-xl ">Order info</h3>

            <div className="flex flex-wrap mt-2 justify-between">
              {/* order detail */}
              <div className="w-full lg:w-[47%] m-2 border  rounded-sm pb-3">
                <h5 className="font-medium bg-gray-100 p-1">Product:</h5>
                <span className="p-1 text-gray-600">
                  New Chelsea Away kit 2022/23
                </span>
              </div>
              {/* order detail */}
              <div className="w-full lg:w-[47%] m-2 border  rounded-sm pb-3">
                <h5 className="font-medium bg-gray-100 p-1">Size:</h5>
                <span className="p-1 text-gray-600">Large (L)</span>
              </div>
              {/* order detail */}
              <div className="w-full lg:w-[47%] m-2 border rounded-sm pb-3">
                <h5 className="font-medium bg-gray-100 p-1">
                  Customize (yes):
                </h5>
                <span className="p-1 text-gray-600">Ronaldo 7</span>
              </div>
              {/* order detail */}
              <div className="w-full lg:w-[47%] border m-2 rounded-sm pb-3">
                <h5 className="font-medium bg-gray-100 p-1">Qty: </h5>
                <span className="p-1 text-gray-600">1</span>
              </div>
              {/* order detail */}
              <div className="w-full lg:w-[47%] border m-2  rounded-sm pb-3">
                <h5 className="font-medium bg-gray-100 p-1">Order number: </h5>
                <span className="p-1 text-gray-600">5532732658</span>
              </div>
            </div>
          </div>

          {/* customer info */}
          <div className="mt-6">
            <h3 className="font-medium text-xl ">Customer info</h3>

            <div className="flex flex-wrap mt-2 justify-between">
              {/* order detail */}
              <div className="w-full lg:w-[47%] m-2 border  rounded-sm pb-3">
                <h5 className="font-medium bg-gray-100 p-1">Full Name:</h5>
                <span className="p-1 text-gray-600">Emmanuel otuonye</span>
              </div>
              {/* order detail */}
              <div className="w-full lg:w-[47%] m-2 border  rounded-sm pb-3">
                <h5 className="font-medium bg-gray-100 p-1">Tel:</h5>
                <span className="p-1 text-gray-600">09038031859</span>
              </div>
              {/* order detail */}
              <div className="w-full lg:w-[47%] m-2 border rounded-sm pb-3">
                <h5 className="font-medium bg-gray-100 p-1">
                  Delivery Address:
                </h5>
                <span className="p-1 text-gray-600 text-wrap">
                  Shagari lowcost B Estate Maiduguri, Borno state
                </span>
              </div>
              {/* order detail */}
              <div className="w-full lg:w-[47%] border m-2 rounded-sm pb-3">
                <h5 className="font-medium bg-gray-100 p-1">
                  Estimated delivery date:{" "}
                </h5>
                <span className="p-1 text-gray-600">
                  Between 28-jun-2022 & 02-Jul-2022
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2 border m-2 space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">PRODUCT COST</span>
              <span>#8,000</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">SHIPPING COST</span>
              <span>#2,350</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">DISCOUNT</span>
              <span># 0</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">TOTAL</span>
              <span>#10,350</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
