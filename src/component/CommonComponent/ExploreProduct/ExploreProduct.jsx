import React, { useEffect, useState } from "react";
import Title from "../../../Hooks/Title/Title";
import ProductCart from "../ProductCart/ProductCart";
import { Link } from "react-router-dom";

const ExploreProduct = () => {
  const [showProduct, setShowProduct] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://kubrg-server.vercel.app/api/v1/products/get-all-product")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <div className="py-12 mt-16">
      <div className="flex items-center justify-center relative">
        {/* <Title title="Explore Our Products" /> */}
        <div className="bg-[#F2F2F2] text-[#c12954] px-2 text-3xl relative z-10">
          New Launch
        </div>

        <br />
        <div className="bg-gray-800 absolute w-full h-[1px]"></div>
      </div>
      <p className="text-center text-gray-600 pb-4 md:w-[500px] w-full mt-3 m-auto">
        Introducing our latest arrivals: New Launch products! Explore the newest
        additions to our collection, featuring cutting-edge designs, innovative
        features, and modern solutions to enhance your lifestyle
      </p>
      <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-6">
        {products?.slice(0, 8)?.map((itm) => (
          <ProductCart key={itm?.id} itm={itm} />
        ))}
      </div>
      <Link to="/shop" className="flex justify-center mt-12">
        <button className="bg-[#ff305d] px-6 py-2 rounded text-white">
          View all
        </button>
      </Link>
    </div>
  );
};

export default ExploreProduct;
