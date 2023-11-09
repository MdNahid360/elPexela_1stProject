import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/img/banner/home-slider-03.png";
const SpeacialProduct = () => {
  return (
    // <div
    //   // style={{ backgroundImage: `url("${banner}")` }}
    //   className="bg-[#172830] mt-12 bg-cover   hover-menu duration-200 py-12 md:px-12 px-6 grid md:grid-cols-2 grid-cols-1"
    // >
    //   <div className="flex items-center justify-start">
    //     <div className="">
    //       <h1 className="text-4xl font-bold">Our Trading Product</h1>
    //       <br />

    //       <p className="text-gray-400">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vel
    //         sapiente ipsam ut fugiat explicabo ducimus non quaerat. Voluptate
    //         nihil labore ad voluptatum in autem incidunt accusantium aliquam qui
    //         inventore?
    //       </p>
    //       <br />

    //       <Link to={`/products/2`}>
    //         <button className="bg-white text-black px-12 font-semibold py-2">
    //           Buy
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className=" flex md:justify-end  justify-center">
    //     <img
    //       className="md:w-[400px] w-[200px] md:mt-0 mt-8 hover-img duration-200"
    //       src="https://res.cloudinary.com/elpixala/image/upload/v1699084096/koburg/Category/uewiow5vlihp9kxpdp04.png"
    //       alt=""
    //     />
    //   </div>
    // </div>

    <div className="relative mt-12 h-bar duration-200">
      <div className="bg-[#00000069] h-div duration-200 opacity-0 flex md:p-12 p-2 items-center absolute h-full w-full">
        {" "}
        <Link to={`category/3`}>
          <button className="bg-[#ffffff] md:px-8  px-4  md:py-2 py-1 text-black font-semibold">
            Shop Now
          </button>
        </Link>
      </div>
      <img
        className="h-full"
        src="https://koburgs.netlify.app/_next/static/media/home-banner02.e83b82c7.png"
        alt=""
      />
    </div>
  );
};

export default SpeacialProduct;
