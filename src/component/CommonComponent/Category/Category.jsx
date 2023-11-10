import React, { useEffect, useState } from "react";
import CategorySlider from "../CategorySlider/CategorySlider";
import Title from "../../../Hooks/Title/Title";
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://kubrg-server.vercel.app/api/v1/products/get-all-product")
      .then((res) => res.json())
      .then((data) => setProducts(data?.data));
  }, []);

  return (
    <div className="text-black">
      <div className="flex items-center justify-center">
        <Title title="shop by category" />
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <Link to={`/category/654b4cbc18d46365d959c3aa`}>
          <div className="bg-white p-4">
            <div className="">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e2489a153544611.6331e2e899591.jpg"
                alt=""
                className="h-[200px] w-full"
              />
            </div>
            <h3 className="text-lg text-center font-semibold mt-2">Sneakers</h3>
          </div>
        </Link>
        <Link to={`/category/654b4cbc18d46365d959c3aa`}>
          <div className=" bg-white p-4">
            <div className="">
              <img
                src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Free-Sports-Running-Shoes-Banner-Design-1180x664.jpg"
                alt=""
                className="h-[200px] w-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 text-center">
              Sports Shoes
            </h3>
          </div>
        </Link>
        <Link to={`/category/3`}>
          <div className=" bg-white p-4">
            <div className="">
              <img
                src="https://img.freepik.com/free-vector/modern-black-friday-sale-banner-template-with-3d-background-red-splash_1361-1877.jpg?w=1380&t=st=1699544576~exp=1699545176~hmac=0c71cb7cfd867135991f56a9db7fa6396bb1906a93816b3332bdadecc5d37a48"
                alt=""
                className="h-[200px] w-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 text-center">
              Flip Flops
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
