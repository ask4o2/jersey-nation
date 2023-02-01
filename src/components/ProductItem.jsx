import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ item, id }) => {
  return (
    <div className="w-[270px] lg:w-[250px] border text-center pb-8">
      <div className="h-[250px]">
        <img
          className="h-full object-contain"
          src={item.image}
          alt="jersey img"
        />
      </div>
      <p className="text-xs text-gray-500 py-3 capitalize">{item.category}</p>

      <h5 className="font-medium text-base px-2 text-wrap capitalize">
        {item.name}
      </h5>
      <p className="text-red-500 font-medium text-base">₦{item.price}</p>

      <Link to={`/product/${id}`}>
        <button className="bg-gray-900 rounded-md py-2 px-3 text-sm mt-6 text-gray-200">
          Select options
        </button>
      </Link>
    </div>
  );
};

export default ProductItem;
