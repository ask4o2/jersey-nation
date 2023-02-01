import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsPhone } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="container px-4 lg:px-32 mt-24 mx-auto flex flex-col md:flex-row md:justify-between ">
        {/* items left */}
        <div className="flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-16">
          {/* information */}
          <div>
            <h5 className="font-medium tracking-tighter text-base">
              INFORMATION
            </h5>

            <div className="mt-6 space-y-3">
              <p className="text-sm text-gray-500 capitalize cursor-pointer">
                About page
              </p>
              <p className="text-sm text-gray-500 capitalize cursor-pointer">
                Site map
              </p>
              <p className="text-sm text-gray-500 capitalize cursor-pointer">
                Accessories
              </p>
            </div>
          </div>

          {/* account */}
          <div>
            <h5 className="font-medium tracking-tighter text-base">
              MY ACCOUNT
            </h5>

            <div className="mt-6 space-y-3">
              <p className="text-sm text-gray-500 capitalize cursor-pointer">
                My account
              </p>
              <p className="text-sm text-gray-500 capitalize cursor-pointer">
                Order History
              </p>
              <p className="text-sm text-gray-500 capitalize cursor-pointer">
                Wish List
              </p>
              <p className="text-sm text-gray-500 capitalize cursor-pointer">
                Order History
              </p>
            </div>
          </div>

          {/* services */}
          <div>
            <h5 className="font-medium tracking-tighter text-base">SERVICES</h5>

            <div className="mt-6 space-y-3">
              <p className="text-sm text-gray-500 capitalize cursor-pointer">
                Our Brands
              </p>
              <p className="text-sm text-gray-500 capitalize cursor-pointer">
                Shipping & retruns
              </p>
              <p className="text-sm text-gray-500 capitalize cursor-pointer">
                Affiliates
              </p>
            </div>
          </div>
        </div>

        {/* items right */}
        <div className="md:w-[25%]">
          <h5 className="font-medium tracking-tighter text-base">CONTACT US</h5>
          <p className="mt-6 text-sm">
            If you have any question, please contact us at{" "}
          </p>
          <span className="text-sm text-red-500">info@jerseynation.com</span>

          <div className="mt-3 flex space-x-2 items-center">
            <MdOutlineLocationOn className="text-5xl" />
            <span className="text-sm text-gray-500">
              no 4 surulere street, Oppo, Oando filling station, Lagos suite, NY
            </span>
          </div>

          <p className="mt-4 pl-2 flex items-center">
            <BsPhone />
            <span className="text-lg text-red-500 font-meidum">
              +234 818990 9412
            </span>
          </p>
        </div>
      </div>

      <div className="bg-slate-800 text-gray-500 text-sm text-center p-4 mt-10">
        <p>
          Copyright &copy; 2022{" "}
          <span className="text-red-500 font-medium tracking-tighter">
            Jersey Nation
          </span>
          . All Rights Reserved.{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
