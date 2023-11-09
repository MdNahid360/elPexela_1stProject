import React from "react";
import Title from "../../Hooks/Title/Title";
import { BiSearch } from "react-icons/bi";
import ProductCart from "../../component/CommonComponent/ProductCart/ProductCart";

const CategoryProduct = () => {
  return (
    <div>
      <div className="lg:max-w-screen-xl lg:w-auto w-[90%] m-auto py-12">
        <div className="flex items-center justify-between">
          <Title title="Category name" />
          <div className="button-group flex items-center md:w-[300px] px-2 bg-white">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="border-none rounded-md w-full text-black focus:outline-none focus:border-none focus:shadow-none"
            />

            <BiSearch className="text-black text-2xl" />
          </div>
        </div>

        <div className="grid mt-12 md:grid-cols-4 grid-cols-1 gap-4">
          {[1, 2, 3, 4].map((itm) => (
            <ProductCart />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
