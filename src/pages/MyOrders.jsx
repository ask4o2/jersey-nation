import React from "react";
import { BsCart4 } from "react-icons/bs";
import { GiClockwork } from "react-icons/gi";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";

const MyOrders = () => {
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
    <div className="container mx-auto flex  lg:max-w-6xl mt-24 space-x-10 ">
      <AdminSidebar
        current="Orders"
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

      <div className="flex-1 p-3 text-sm bg-gray-50 rounded-md">
        <div className="py-2 border-b text-base font-medium">
          <h2>Orders</h2>
        </div>

        {/* main orders container */}
        <div className="space-y-3 mt-5">
          {/* order item container */}
          <div className="border p-2 px-4 rounded-sm flex space-x-3 mt-4 bg-white">
            <img
              className="w-32 border rounded-md object-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoUZXZuDEx8w_rDp6dNT3XpA1z3OBdJu8IEg&usqp=CAU"
              alt=""
            />

            <div className="flex-1 pr-10  space-y-2">
              <h5 className="text-base font-medium ">
                New chelsea Away kit 2022/23{" "}
              </h5>
              <p className="text-gray-500">
                Order - <span>357362893589</span>{" "}
              </p>

              <p className="text-gray-500">
                Size: <span className="text-black">Large (L)</span>{" "}
              </p>

              <p className="text-xs bg-green-500 rounded-sm text-center p-1 uppercase font-medium text-white w-24">
                Delivered
              </p>
              <p className="text-base font-medium">on 09-12-2022 </p>
            </div>

            <div className="w-24">
              <Link to="/admin/orders/sddvdv">
                <p className="text-right uppercase text-red-500 hover:bg-red-200 p-2 rounded-sm cursor-pointer">
                  See details
                </p>
              </Link>
            </div>
          </div>
          {/* order item container */}
          <div className="border p-2 px-4 rounded-sm flex space-x-3 mt-4 bg-white">
            <img
              className="w-32 border rounded-md object-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoUZXZuDEx8w_rDp6dNT3XpA1z3OBdJu8IEg&usqp=CAU"
              alt=""
            />

            <div className="flex-1 pr-10  space-y-2">
              <h5 className="text-base font-medium ">
                New chelsea Away kit 2022/23{" "}
              </h5>
              <p className="text-gray-500">
                Order - <span>357362893589</span>{" "}
              </p>

              <p className="text-gray-500">
                Size: <span className="text-black">Large (L)</span>{" "}
              </p>

              <p className="text-xs bg-green-500 rounded-sm text-center p-1 uppercase font-medium text-white w-24">
                Delivered
              </p>
              <p className="text-base font-medium">on 09-12-2022 </p>
            </div>

            <div className="w-24">
              <p className="text-right uppercase text-red-500 hover:bg-red-200 p-2 rounded-sm cursor-pointer">
                See details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
