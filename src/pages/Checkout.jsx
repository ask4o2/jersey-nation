import React, { useEffect, useState } from "react";

const Checkout = () => {
  const [accordion, setaccordion] = useState(false);
  const [countires, setcountries] = useState(null);

  useEffect(() => {
    const getCountries = async () =>
      await fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setcountries(data));

    getCountries();
  }, []);

  return (
    <div className="container mx-auto lg:max-w-7xl mt-16">
      {/* Returning customer */}
      <div className="rounded-md p-4 px-6 bg-blue-200 text-blue-500 flex items-center space-x-6">
        <p>Returning customer ?</p>
        <span className="underline text-gray-500 hover:text-white hover:no-underline cursor-pointer active:text-red-500">
          Click here to login
        </span>
      </div>

      {/* Coupon code container */}
      <div className="mt-6">
        <div className="rounded-md p-4 px-6 bg-blue-200 text-blue-500 flex items-center space-x-6">
          <p>Have a coupon ?</p>
          <span
            onClick={() => {
              setaccordion(!accordion);
            }}
            className="underline text-gray-500 hover:text-white hover:no-underline cursor-pointer active:text-red-500"
          >
            Click here to Ener your code
          </span>
        </div>

        {/* hidden accordion */}
        <div className={`mt-6 p-3 ${accordion === true ? "block" : "hidden"}`}>
          <h5>if you have a coupon code, please apply it below</h5>

          <div className="border px-4 p-2 flex items-center lg:w-1/2 space-x-6">
            <input
              className="outline-none border-none flex-1"
              type="text"
              placeholder="Coupon code"
            />
            <button className="rounded-sm bg-red-500 text-white font-medium text-sm p-2 px-3 ">
              Apply coupon
            </button>
          </div>
        </div>
      </div>

      {/* Main details container */}
      <div className="flex flex-col lg:space-x-12 lg:flex-row mt-6">
        {/* Billing and shipping container */}
        <div className="lg:w-[55%] border">
          <h2 className="py-4 text-xl font-bold">Billing & Shipping </h2>

          <form>
            {/* input container */}
            <div className="flex flex-col md:flex-row md:space-x-3">
              <div className="flex flex-col md:w-1/2 space-y-2 pb-6">
                <label htmlFor="">First name</label>
                <input
                  type="text"
                  className="p-2 text-gray-500 text-sm px-3 border rounded-md focus:outline-none"
                />
              </div>

              <div className="flex flex-col flex-1 space-y-2 pb-6">
                <label htmlFor="">Last name</label>
                <input
                  type="text"
                  className="p-2 text-gray-500 text-sm px-3 border rounded-md focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2 pb-6">
              <label htmlFor="">Country/region</label>
              <select className="p-2 text-gray-500 text-sm px-3 border rounded-md focus:outline-none">
                {countires?.map((ctr) => (
                  <option key={ctr.name.common}>{ctr.name.common}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col space-y-2 pb-6">
              <label htmlFor="">State</label>
              <select className="p-2 text-gray-500 text-sm px-3 border rounded-md focus:outline-none">
                {countires?.map((ctr) => (
                  <option key={ctr.name.common}>{ctr.name.common}</option>
                ))}
              </select>
            </div>

            {/* input container */}
            <div className="flex flex-col space-y-2 pb-6">
              <label htmlFor="">Street address</label>
              <input
                type="text"
                placeholder="House number and street name"
                className="p-2 px-3 text-gray-500 border rounded-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Apartment, suite, unit, etc (optional)"
                className="p-2 px-3 text-gray-500 border rounded-md focus:outline-none"
              />
            </div>

            {/* input container */}
            <div className="flex flex-col space-y-2 pb-6">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                className="p-2 px-3 text-gray-500 border rounded-md focus:outline-none"
              />
            </div>

            {/* input container */}
            <div className="flex flex-col space-y-2 pb-6">
              <label htmlFor="">Email address </label>
              <input
                type="text"
                className="p-2 px-3 text-sm text-gray-500 border rounded-md focus:outline-none"
              />
            </div>

            {/* input container */}
            <div className="flex  space-x-2 pb-6">
              <input
                type="checkbox"
                className="p-2 px-3 text-sm text-gray-500 border rounded-md focus:outline-none"
              />
              <label htmlFor="">Create an account ? </label>
            </div>
          </form>
        </div>

        {/* Order container */}
        <div className="border-2 text-sm flex-1 border-gray-500 px-6 p-4">
          <h2 className="text-xl font-bold py-3">Your order</h2>

          <div className="px-3 p-2 mt-3">
            <div className="flex font-medium justify-between items-center border-b py-3">
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            <div className="flex justify-between py-5 border-b">
              <div className="space-y-3 ">
                <p>New Arsenal 2022/23</p>
                <p>Home Jersey - L x 1</p>

                <div className="text-xs space-y-1">
                  <p className="font-medium">Customize your Jersey:</p>
                  <p>Yes (#500.00)</p>
                </div>

                <div className="text-xs space-y-1">
                  <p className="font-medium">Custom name and number:</p>
                  <p>ask4o2 10</p>
                </div>
              </div>

              <p className="font-medium">#8,500.00</p>
            </div>

            <div className="font-medium flex justify-between items-center py-2 border-b">
              <span>Subtotal </span>
              <span> #8,500.00</span>
            </div>

            <div className=" flex justify-between items-center py-2 border-b">
              <span className="font-medium">Shipping</span>
              <span>Enter your address to vuiew shipping options.</span>
            </div>

            <div className="flex justify-between items-center py-5">
              <span>Total</span>
              <span className="text-red-500 text-xl font-bold">#8,500.00</span>
            </div>
          </div>

          <div className="py-5 space-y-4">
            <div className="font-medium ">
              <span>Debit/credit cards</span>
              {/* Visa card image */}
            </div>

            <p className="text-xs p-3 border-b">
              Make payment using your debit and credit cards
            </p>

            <p className="py-3">
              Your personal data will e used to process your order, support your
              experience throughput this website, and for other purposes
              described in our{" "}
              <span className="text-red-500">privacy policy.</span>
            </p>

            <button className="w-full p-3 text-white text-center bg-red-500 rounded-sm">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
