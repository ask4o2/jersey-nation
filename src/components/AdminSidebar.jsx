import React from "react";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoShirt,
} from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";

const AdminSidebar = ({ current, sidebarItems }) => {
  return (
    <div className="lg:w-[400px]">
      {sidebarItems?.map((item) => (
        <Link to={item.link} key={item.name}>
          {" "}
          <p
            className={`text-sm flex justify-between items-center py-3 border-t hover:text-red-500 cursor-pointer ${
              item.name === current && "text-red-500"
            }`}
          >
            <span>{item.name}</span>
            {<item.icon className="inline" />}
          </p>
        </Link>
      ))}

      {/* <p className="text-base flex justify-between items-center py-3 border-t hover:text-red-500 cursor-pointer">
        <span>Jerseys</span> <IoShirt className="inline" />
      </p>
      <Link to="/admin">
        <p
          className={`text-base flex justify-between items-center py-3 border-t hover:text-red-500 cursor-pointer ${
            addJersey && "text-red-500"
          }`}
        >
          <span>Add Jersey</span>
          <IoShirt className="inline" />
        </p>
      </Link>

      <Link to="/admin/orders">
        <p
          className={`text-base flex justify-between items-center py-3 border-t hover:text-red-500 cursor-pointer ${
            order && "text-red-500"
          }`}
        >
          <span>Orders</span>
          <BsCart4 className="inline" />
        </p>
      </Link>

      <p className="text-base flex justify-between items-center py-3 border-t border-b hover:text-red-500 cursor-pointer">
        <span>Logout</span>
        <TbLogout className="inline" />
      </p> */}
    </div>
  );
};

export default AdminSidebar;
