import React, { useEffect, useState } from "react";
import { MdArrowForward, MdArrowBack, MdFavoriteBorder } from "react-icons/md";
import { FiAperture } from "react-icons/fi";
import { BsCart4, BsShuffle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Product = ({ item }) => {
  const [toggle, settoggle] = useState(true);
  const [jersey, setjersey] = useState();
  const { id } = useParams();

  const [jerseyName, setJerseyName] = useState();
  const [size, setSize] = useState();
  const [customise, setCustomise] = useState(false);
  const [customisePrice, setCustomisePrice] = useState(0);
  const [eplBadge, setEplBadge] = useState(0);
  const [uclBadge, setUclBadge] = useState(0);
  const [optionTotal, setOptionTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(8000);

  useEffect(() => {
    if (id) {
      async function getJersey() {
        const docRef = doc(db, "jerseys", id);
        const jerseyItem = await getDoc(docRef);
        setjersey(jerseyItem.data());
      }

      getJersey();
    }
  }, [id]);

  useEffect(() => {
    if (eplBadge > 0 || uclBadge > 0 || customisePrice > 0) {
      setOptionTotal(eplBadge + uclBadge + customisePrice);
      setSubTotal(optionTotal + jersey?.price);
    }
  }, [eplBadge, uclBadge, customisePrice, optionTotal, jersey?.price]);

  return (
    <div className="pb-20">
      <div className="container mx-auto flex flex-wrap mt-10 lg:px-28 md:px-0">
        {/* JERSEY IMAGE DIV */}
        <div className="overflow-hidden flex w-full lg:w-1/2 max-h-[90vh] border">
          <img className="object-contain mx-auto" src={jersey?.image} alt="" />
        </div>

        {/* JERSEY INFO DIV */}
        <div className="text-gray-600 p-4 lg:pl-10 lg:w-1/2 text-sm">
          <div className="flex justify-between">
            <span className="text-xs rounded-md bg-green-400 text-white p-2">
              In stock
            </span>
            <span className="hidden lg:flex space-x-2">
              <MdArrowBack />
              <FiAperture />
              <MdArrowForward />
            </span>
          </div>

          <h3 className="mt-4 font-bold text-black text-2xl lg:text-2xl">
            {jersey?.name}
          </h3>

          <p className="font-bold text-xl mt-6  text-red-600">
            ₦{jersey?.price}
          </p>

          <p className="text-xs text-gray-400 mt-6">Size</p>

          {/* button sizes */}
          <div className="space-x-2 mt-6">
            <button
              onClick={() => setSize("L")}
              className={`rounded-md w-10 h-10 p-2 border-2 text-center ${
                size === "L" && "border-gray-800"
              }`}
            >
              L
            </button>

            <button
              onClick={setSize("M")}
              className={`rounded-md w-10 h-10 p-2 border-2 text-center ${
                size === "M" && "border-gray-800"
              }`}
            >
              M
            </button>

            <button
              onClick={setSize("S")}
              className={`rounded-md w-10 h-10 p-2 border-2 text-center ${
                size === "S" && "border-gray-800"
              }`}
            >
              S
            </button>

            <button
              onClick={setSize("XL")}
              className={`rounded-md w-12 h-10 p-2 border-2 text-center ${
                size === "XL" && "border-gray-800"
              } `}
            >
              XL
            </button>
            <button
              onClick={() => setSize("XXL")}
              className={`rounded-md w-14 h-10 p-2 border-2 text-center ${
                size === "XXL" && "border-gray-800"
              }`}
            >
              XXL
            </button>
          </div>

          <div className="space-y-2 mt-8">
            <p className="mb-2">Customize your Jersey</p>
            <input
              value={customise}
              onChange={() => {
                setCustomise(!customise);
                setCustomisePrice(customisePrice === 0 ? 500 : 0);
              }}
              type="checkbox"
              className={`mr-3 `}
            />

            <label
              className={`${customise && "text-black font-medium"}`}
              htmlFor=""
            >
              Yes <span>(+#500.00)</span>
            </label>
          </div>

          {customise && (
            <div className="mt-4">
              <p>Badges</p>
              <div className="mt-2">
                <input
                  type="checkbox"
                  onChange={() => setEplBadge(uclBadge === 0 ? 1000 : 0)}
                  className="mr-2"
                />
                <label htmlFor="">
                  Premier league badge <span>(+#1000.00)</span>
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  onChange={() => setUclBadge(uclBadge === 0 ? 1500 : 0)}
                  className="mr-2"
                />
                <label htmlFor="">
                  Champions league badge <span>(+#1,500.00)</span>
                </label>
              </div>
            </div>
          )}

          <div
            className={`mt-4 flex flex-col ${customise ? "block" : "hidden"}`}
          >
            <label htmlFor="">Custom name and number</label>
            <input
              type="text"
              placeholder="Ronaldo 7"
              value={jerseyName}
              onChange={(e) => setJerseyName(e.target.value)}
              className="mt-2 border outline-none p-2 w-64 rounded-md"
            />
            <span className="text-xs italic">
              type in your custom name and number to be customised on your
              jersey
            </span>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex justify-between">
              <h5 className="font-medium">Product total</h5>{" "}
              <span>{jersey?.price}</span>
            </div>
            <div className="flex justify-between">
              <h5>Options total</h5> <span>₦{optionTotal}</span>
            </div>

            <div className="flex justify-between">
              <h5>Grand total</h5> <span> ₦{subTotal}</span>
            </div>

            <div className="flex space-x-3 mt-6 ">
              <input className="border w-1/3" type="number" name="" id="" />

              <p className="w-2/3">
                <Link to="/cart">
                  <button
                    disabled
                    className="w-full rounded-md cursor-pointer bg-red-500 flex space-x-2 items-center justify-center text-white p-3"
                  >
                    <BsCart4 />
                    <span>Add to cart</span>
                  </button>
                </Link>
              </p>
            </div>

            <div className="flex space-x-4">
              <button className="flex items-center space-x-1">
                <BsShuffle />
                <span className="text-black font-bold">Compare</span>
              </button>

              <button className="flex items-center space-x-1">
                <MdFavoriteBorder />
                <span className="text-black font-bold">Add to wishlist</span>
              </button>
            </div>
          </div>

          <hr className="bg-gray-700 my-8" />

          <div className="flex flex-col space-y-2">
            <span className="text-black">
              SKU:{" "}
              <span className="text-gray-400">
                NEW BARCELONA 2022/23 HOME JERSEY11
              </span>
            </span>
            <span className="text-black ">
              CATEGORIES:{" "}
              <span className="text-gray-400">
                PROMO, JERSEY NATION PREMIUM
              </span>
            </span>
            <span className="text-black">
              TAGS:{" "}
              <span className="text-gray-400">
                JERSEY, NEW LEEDS AWAY, JERSEY, PREMIUM_STYLE_HUB
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* additional info and reviews */}
      <div className="container mx-auto mt-10 lg:px-32">
        <div className="text-center border-b font-bold text-xl flex flex-col lg:flex-row items-center justify-center space-x-3">
          <h2
            onClick={() => {
              settoggle(!toggle);
            }}
            className={`${
              toggle === true && "text-black border-red-600 border-b-4 "
            } cursor-pointer text-gray-500 p-3 px-6 `}
          >
            Additional information
          </h2>

          <h2
            onClick={() => {
              settoggle(!toggle);
            }}
            className={`${
              toggle === false && "text-black border-red-600 border-b-4 "
            } cursor-pointer text-gray-500 p-3 px-6 `}
          >
            Reviews(0)
          </h2>
        </div>

        {/* div container to be changing */}
        <div className="mt-10 pb-10 border-b">
          {toggle && (
            // first toggle div
            <div className="">
              <div className="flex justify-between w-full">
                <span className="bg-gray-300 w-1/2 p-3 border-r">Weight</span>
                <span className="bg-gray-300 w-1/2 p-3">0.000002kg</span>
              </div>

              <div className="flex justify-between w-full">
                <span className=" w-1/2 p-3 border">Size</span>
                <span className=" w-1/2 p-3 border">L, M, S, XL, XXL</span>
              </div>
            </div>
          )}

          {!toggle && (
            // second toggle div
            <div className="flex flex-col space-y-16 lg:space-y-0 lg:flex-row lg:space-x-6">
              <div className=" w-full lg:w-1/2">
                <p className="text-white bg-blue-400 p-3 px-5">
                  There are no reviews yet.
                </p>
              </div>

              <div className="w-full lg:w-1/2 lg:px-6">
                <div>
                  <p className="text-sm">
                    Your email address will not be publised. Required fields are
                    marked <span className="text-red-500">*</span>
                  </p>

                  <div className="mt-6">
                    <p>
                      Your rating <span className="text-red-500">*</span>
                    </p>
                    {/* rating stars */}
                  </div>

                  <div className="mt-6">
                    <label htmlFor="">
                      Your review <span className="text-red-500">*</span>{" "}
                    </label>

                    <textarea
                      className="border w-full p-2 focus:outline-none"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>

                <div className="flex flex-wrap mt-4 lg:space-x-3">
                  <div>
                    <label htmlFor="">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="border p-2 outline-none focus:outline-none"
                      type="text"
                    />
                  </div>

                  <div>
                    <label htmlFor="">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="border p-2 outline-none focus:outline-none"
                      type="text"
                    />
                  </div>
                </div>

                <div className="mt-4 text-sm">
                  <input className="mr-2" type="checkbox" />
                  Save my name, email and website in this browser for the next
                  time I comment.
                </div>

                <button className="p-3 mt-6 px-5 text-white bg-red-500 rounded-md">
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-24">
        <h2 className="text-center text-2xl lg:text-3xl font-bold ">
          Related Products
        </h2>

        <div className="container mx-auto flex justify-center flex-col lg:flex-row mt-10 flex-wrap">
          {/* <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem  /> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
