import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="container mx-auto lg:px-32 mt-24">
      <div className="p-2 text-white bg-green-500 rounded-sm flex justify-between items-center">
        <p>"New Chelsea Away kit 2022/23 has been added to your cart"</p>

        <span className="cursor-pointer hover:text-red-500">
          <AiOutlineCloseCircle />
        </span>
      </div>

      <div className="mt-5 flex lg:space-x-4 ">
        {/* first div container */}
        <div className="lg:w-[70%]">
          <div className="flex items-center border-b p-3">
            <span className="w-[120px]"></span>

            <h5 className="text-sm font-medium  flex-1">PRODUCT</h5>

            <h5 className="w-[100px] text-sm font-medium ">PRICE</h5>

            <h5 className="w-[100px]  text-sm font-medium">QUANTITY</h5>

            <h5 className="w-[100px] text-sm font-medium ">SUBTOTAL</h5>
          </div>

          <div className="flex py-4 items-center text-xs lg:text-sm p-3 border-b">
            <span className="w-[120px] cursor-pointer hover:text-red-500">
              <AiOutlineCloseCircle />
            </span>

            <div className="flex-1 flex flex-col space-y-2">
              <span>New Chelsea Away kit 2022/23 </span>
              <span>- L</span>
              <p>
                <h6 className="font-medium">Customize Jersey </h6>
                <span>Yes (#500)</span>
              </p>
              <p>
                <h6 className="font-medium">Customize Name and number: </h6>
                <span>ask4o2 10</span>
              </p>
            </div>

            <span className="w-[100px] ">#8,500</span>

            <span className="w-[100px] ">1</span>

            <span className="w-[100px] ">#8,500.00</span>
          </div>

          <div className="flex justify-between p-3 mt-6 ">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Coupon code"
                className="p-2 text-gray-400 outline-none border hover:outline-none"
              />
              <button className="bg-red-500 p-2 px-4 font-medium text-sm text-white font-meidum rounded-md">
                Apply coupon
              </button>
            </div>

            <button
              disabled
              className="bg-red-500 p-2 px-4 font-medium text-sm text-white font-meidum rounded-md"
            >
              Update cart
            </button>
          </div>
        </div>

        {/* second div container - CART TOTALS */}
        <div className="border-2 px-8 p-3 w-[30%] font-medium text-sm">
          <h2 className="text-xl py-4 border-b">CART TOTALS</h2>

          <p className="flex items-center justify-between py-4 border-b">
            <span>Subtotal</span>
            <span className="">#8,500.00</span>
          </p>

          <p className="flex items-center justify-between py-4 border-b">
            <span>Shipping</span>
            <span className="font-normal text-right text-sm text-gray-500">
              shipping costs are calculated during checkout
            </span>
          </p>

          <p className="flex items-center justify-between py-4 border-b">
            <span className="">Total</span>
            <span className="text-lg">#8,500</span>
          </p>

          <Link to="/checkout">
            <button className="p-3 w-full bg-red-500 text-white text-sm rounded-md mt-5">
              Proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
