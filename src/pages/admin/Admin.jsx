// Admin can post new jerseys
// can remove any jersey from jersey list
// see list of all orders per day
// list of pending orders
// list of completed orders
// toggle out of stock for each jersey

import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import { BsCart4 } from "react-icons/bs";
import { IoClose, IoShirt } from "react-icons/io5";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { v4 as uuid } from "uuid";

const Admin = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState(8000);
  const [category, setcategory] = useState("premium jersey");
  const [image, setimage] = useState();
  const [loading, setloading] = useState(false);
  const [toast, settoast] = useState(false);

  const addJersey = (e) => {
    e.preventDefault();
    setloading(true);

    const reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = () => {
      const id = uuid();

      // db ref
      const jerseysRef = collection(db, "jerseys");

      // storage ref
      const storageRef = ref(storage, `jerseys/${id}`);

      uploadString(storageRef, reader.result, "data_url")
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((url) => {
              addDoc(jerseysRef, {
                name,
                price,
                category,
                image: url,
              });
              setloading(false);
              setname("");
              setprice(8000);
              setcategory("premium jersey");
              setimage(null);
              console.log("successfully added");
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    };
  };

  return (
    <div className="container mt-24 mx-auto px-6 lg:max-w-6xl ">
      <div
        className={`bg-green-500 flex items-center justify-between p-2 px-3 rounded-md text-white ${
          toast ? "block" : "hidden"
        } `}
      >
        <span>Successfully added new jersey</span>

        <IoClose
          onClick={() => settoast(false)}
          className="text-2xl cursor-pointer"
        />
      </div>

      <div className="flex flex-col lg:flex-row mt-10">
        {/* sidebar */}
        <AdminSidebar
          current="Add Jersey"
          sidebarItems={[
            { name: "Add Jersey", icon: IoShirt, link: "/admin" },
            { name: "Orders", icon: BsCart4, link: "/admin/orders" },
          ]}
        />

        {/* main  */}
        <div className="lg:ml-16 w-full px-6">
          <form>
            {/* input container */}
            <div className="flex flex-col space-y-2 pb-6">
              <label htmlFor="">Jersey name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="p-2 text-gray-500 text-sm px-3 border rounded-md focus:outline-none"
              />
            </div>

            {/* input container */}
            <div className="flex flex-col space-y-2 pb-6">
              <label htmlFor="">Price (N)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setprice(e.target.value)}
                className="p-2 px-3 text-gray-500 border rounded-md focus:outline-none"
              />
            </div>

            {/* input container */}
            <div className="flex flex-col space-y-2 pb-6">
              <label htmlFor="">Category</label>
              <select
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                className="border text-gray-500 text-sm p-2 px-3 rounded-md focus:outline-none"
              >
                <option>Premium jersey</option>
                <option>Promo jersey</option>
                <option>Player version</option>
              </select>
            </div>

            {/* input container */}
            <div className="flex flex-col space-y-2 pb-6">
              <label htmlFor="">Jersey image </label>
              <input
                onChange={(e) => setimage(e.target.files[0])}
                type="file"
                className="p-2 px-3 text-sm text-gray-500 border rounded-md focus:outline-none"
              />
            </div>

            {/* input container */}
            <button
              disabled={!name || !category || !image}
              onClick={addJersey}
              className={`bg-red-500 px-6 p-2 text-center rounded-sm text-white cursor-pointer mt-4 ${
                !image && "bg-gray-300"
              }`}
            >
              {loading ? "loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
