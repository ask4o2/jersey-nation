import React from "react";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoShirt,
} from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

// Admin can post new jerseys
// can remove any jersey from jersey list
// see list of all orders per day
// list of pending orders
// list of completed orders
// toggle out of stock for each jersey

const AdminOrders = () => {
  return (
    <div className="container mt-24 mx-auto px-6 flex lg:px-32 ">
      {/* sidebar */}
      <AdminSidebar
        current="Orders"
        sidebarItems={[
          { name: "Add Jersey", icon: IoShirt, link: "/admin" },
          { name: "Orders", icon: BsCart4, link: "/admin/orders" },
        ]}
      />

      {/* main  */}
      <div className="ml-16 w-full px-6">
        <div className="flex p-3 border-y space-x-2 font-medium">
          <span className="w-[40px] ">S/N</span>
          <span className="w-[300px] ">Product name</span>
          <span className="w-[200px] ">Date</span>
          <span className="w-[150px] "> Amount</span>
          <span className="flex-1 ">Status</span>
        </div>

        <div className="text-gray-700">
          <Link to="/admin/orders/evuqwhh">
            {/* ORDER ONE */}

            <div className="flex p-3 border-b cursor-pointer space-x-2 hover:text-red-500">
              <span className="w-[40px]">1</span>
              <span className="w-[300px] text-sm">
                New chelsea Away kit 2022/23
              </span>
              <span className="w-[200px] ">12-Jun-2022</span>
              <span className="w-[150px]"> $8000</span>
              <span className="flex-1">pending</span>
            </div>
          </Link>

          {/* ORDER ONE */}
          <div className="flex p-3 border-b space-x-2">
            <span className="w-[40px]">1</span>
            <span className="w-[300px] text-sm">
              New chelsea Away kit 2022/23
            </span>
            <span className="w-[200px] ">12-Jun-2022</span>
            <span className="w-[150px]"> $8000</span>
            <span className="flex-1">pending</span>
          </div>
          {/* ORDER ONE */}
          <div className="flex p-3 border-b space-x-2">
            <span className="w-[40px]">1</span>
            <span className="w-[300px] text-sm">
              New chelsea Away kit 2022/23
            </span>
            <span className="w-[200px] ">12-Jun-2022</span>
            <span className="w-[150px]"> $8000</span>
            <span className="flex-1">pending</span>
          </div>
          {/* ORDER ONE */}
          <div className="flex p-3 border-b space-x-2">
            <span className="w-[40px]">1</span>
            <span className="w-[300px] text-sm">
              New chelsea Away kit 2022/23
            </span>
            <span className="w-[200px] ">12-Jun-2022</span>
            <span className="w-[150px]"> $8000</span>
            <span className="flex-1">pending</span>
          </div>
          {/* ORDER ONE */}
          <div className="flex p-3 border-b space-x-2">
            <span className="w-[40px]">1</span>
            <span className="w-[300px] text-sm">
              New chelsea Away kit 2022/23
            </span>
            <span className="w-[200px] ">12-Jun-2022</span>
            <span className="w-[150px]"> $8000</span>
            <span className="flex-1">pending</span>
          </div>
          {/* ORDER ONE */}
          <div className="flex p-3 border-b space-x-2">
            <span className="w-[40px]">1</span>
            <span className="w-[300px] text-sm">
              New chelsea Away kit 2022/23
            </span>
            <span className="w-[200px] ">12-Jun-2022</span>
            <span className="w-[150px]"> $8000</span>
            <span className="flex-1">pending</span>
          </div>
          {/* ORDER ONE */}
          <div className="flex p-3 border-b space-x-2">
            <span className="w-[40px]">1</span>
            <span className="w-[300px] text-sm">
              New chelsea Away kit 2022/23
            </span>
            <span className="w-[200px] ">12-Jun-2022</span>
            <span className="w-[150px]"> $8000</span>
            <span className="flex-1">pending</span>
          </div>
          {/* ORDER ONE */}
          <div className="flex p-3 border-b space-x-2">
            <span className="w-[40px]">1</span>
            <span className="w-[300px] text-sm">
              New chelsea Away kit 2022/23
            </span>
            <span className="w-[200px] ">12-Jun-2022</span>
            <span className="w-[150px]"> $8000</span>
            <span className="flex-1">pending</span>
          </div>
          {/* ORDER ONE */}
          <div className="flex p-3 border-b space-x-2">
            <span className="w-[40px]">1</span>
            <span className="w-[300px] text-sm">
              New chelsea Away kit 2022/23
            </span>
            <span className="w-[200px] ">12-Jun-2022</span>
            <span className="w-[150px]"> $8000</span>
            <span className="flex-1">pending</span>
          </div>
          {/* ORDER ONE */}
          <div className="flex p-3 border-b space-x-2">
            <span className="w-[40px]">1</span>
            <span className="w-[300px] text-sm">
              New chelsea Away kit 2022/23
            </span>
            <span className="w-[200px] ">12-Jun-2022</span>
            <span className="w-[150px]"> $8000</span>
            <span className="flex-1">pending</span>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <div>Showing 1 to 10 of 40 Entries</div>

          <div className="space-x-6">
            <span className="p-2 px-3 rounded-sm bg-gray-300">
              <IoChevronBackOutline className="inline" />
            </span>
            <span className="p-2 px-3 rounded-sm text-white bg-red-500">1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span className="p-2 px-3 rounded-sm bg-gray-300">
              <IoChevronForwardOutline className="inline" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
