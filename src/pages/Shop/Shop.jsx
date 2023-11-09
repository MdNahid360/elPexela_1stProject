import React, { useEffect, useState } from "react";
import banner from "../../../src/assets/img/banner/home-slider-02.png";
import Title from "../../Hooks/Title/Title";
import { BiSearch } from "react-icons/bi";
import ProductCart from "../../component/CommonComponent/ProductCart/ProductCart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://kubrg-server.vercel.app/api/v1/products/get-all-product")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter((itm) =>
    itm.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="lg:max-w-screen-xl lg:w-auto w-[90%] m-auto py-12">
        <div className="flex items-center justify-between">
          <Title title="Shop" />
          <div className="button-group flex items-center md:w-[300px] px-2 bg-white">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="border-none rounded-md w-full text-black focus:outline-none focus:border-none focus:shadow-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <BiSearch className="text-black text-2xl" />
          </div>
        </div>

        <div className="grid md:grid-cols-5">
          <div className="mt-3">
            <h4 className="font-semibold text-lg text-black">Filter</h4>
            {/* filter item */}
            <div className="mt-4">
              <h4 className=" text-md text-gray-600">Size</h4>
              <div className="flex items-center mt-3 cursor-pointer">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 border border-black text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox"
                  className="ml-2  cursor-pointer text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  S
                </label>
              </div>
              <div className="flex items-center mt-3 cursor-pointer">
                <input
                  id="checked-checkbox2"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 border border-black text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox2"
                  className="ml-2  cursor-pointer text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  M
                </label>
              </div>
              <div className="flex items-center mt-3 cursor-pointer">
                <input
                  id="checked-checkbox3"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 border border-black text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox3"
                  className="ml-2  cursor-pointer text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  L
                </label>
              </div>{" "}
              <div className="flex items-center mt-3 cursor-pointer">
                <input
                  id="checked-checkbox4"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 border border-black text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox4"
                  className="ml-2  cursor-pointer text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  XL
                </label>
              </div>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="grid mt-12 md:grid-cols-4 grid-cols-1 gap-4">
              {filteredProducts.map((itm) => (
                <ProductCart key={itm?._id} itm={itm} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
