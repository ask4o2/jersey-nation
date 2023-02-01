import React, { useEffect, useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { AiOutlineConsoleSql, AiOutlineInstagram } from "react-icons/ai";
import { GiPaperPlane } from "react-icons/gi";
import { AiFillCreditCard } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import ProductItem from "./ProductItem";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const Products = () => {
  const [jerseys, setjerseys] = useState();
  const jerseysRef = collection(db, "jerseys");

  useEffect(() => {
    onSnapshot(jerseysRef, (snapshot) => {
      setjerseys(
        snapshot.docs.map((snap) => ({
          id: snap.id,
          data: snap.data(),
        }))
      );
    });
  }, [jerseysRef]);

  return (
    <div className="pt-32">
      <div className="text-center font-medium text-2xl">
        <h1>LATEST PRODUCTS</h1>
      </div>

      {/* container for db items */}
      <div className="flex flex-wrap md:no-wrap mt-10 mx-auto p-2 justify-center border">
        {jerseys?.map((item) => (
          <ProductItem key={item.id} id={item.id} item={item.data} />
        ))}
      </div>

      {/* pagination */}
      <div className="mx-auto mt-8 flex justify-center space-x-3 items-center text-base">
        <span className="rounded-full h-10 w-10 text-center pt-2 text-white  bg-red-500">
          1
        </span>
        <span className="rounded-full h-10 w-10 pt-2 text-center">2</span>
        <span className="rounded-full h-10 w-10 pt-2 text-center">3</span>
        <span className="rounded-full h-10 w-10 pt-2 text-center">4</span>

        <span className=" inline-flex items-center">
          <span>Next</span> <GrFormNext />
        </span>
      </div>

      {/* Customer reviews */}
      <div className="mt-32">
        <p className="text-gray-500 text-sm text-center">Customer reviews</p>
        <h2 className="text-center font-medium text-2xl lg:text-3xl">
          What people say
        </h2>

        {/* Moving testimonials  */}
        <div className="mt-10 relative overflow-x-hidden py-16">
          {/* 1st container */}
          <div className="animate-marquee w-full mx-auto flex  space-x-10">
            <div className="w-[350px] flex space-x-4 border py-3 px-6 rounded-md">
              <div className="rounded-full border p-3 px-6">
                <FaUserTie className="h-full w-10" />
              </div>

              <div>
                <h5 className="font-medium text-lg">Emmanuel otuonye</h5>
                <span className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusantium, incidunt.
                </span>
              </div>
            </div>

            <div className="w-[350px] flex space-x-4 border py-3 px-6 rounded-md">
              <div className="rounded-full border p-3 px-6">
                <FaUserTie className="h-full w-10" />
              </div>

              <div>
                <h5 className="font-medium text-lg">Emmanuel otuonye</h5>
                <span className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusantium, incidunt.
                </span>
              </div>
            </div>

            <div className="w-[350px] flex space-x-4 border py-3 px-6 rounded-md">
              <div className="rounded-full border p-3 px-6">
                <FaUserTie className="h-full w-10" />
              </div>

              <div>
                <h5 className="font-medium text-lg">Emmanuel otuonye</h5>
                <span className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusantium, incidunt.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-500 py-8">
          <p className="flex justify-center items-center space-x-2 cursor-pointer text-white">
            <AiOutlineInstagram />{" "}
            <span className="font-bold text-xl uppercase tracking-tighter leading-10">
              Join our instagram community
            </span>
          </p>
        </div>
      </div>

      {/* services */}
      <div className="py-32">
        <h2 className="capitalize font-bold text-2xl lg:text-3xl text-center">
          Why Choose us
        </h2>

        <div className="flex flex-wrap justify-center md:space-x-8 mt-16">
          <div className="flex p-6 mx-3 flex-col space-y-6 items-center text-xl font-medium">
            <GiPaperPlane className="text-5xl" />
            <span>Fast Delivery</span>
          </div>

          <div className="flex flex-col p-6 mx-3 space-y-6 items-center text-xl font-medium">
            <AiFillCreditCard className="text-5xl" />
            <span>Secure payment</span>
          </div>

          <div className="flex flex-col p-6 mx-3 space-y-6 items-center text-xl font-medium">
            <BiMessageRounded className="text-5xl" />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
