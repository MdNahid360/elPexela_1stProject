import React, { useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import AddToCartBar from "../../CommonComponent/AddToCartBar/AddToCartBar";
import { AuthContext } from "../../../context/AuthProvider";
import logo from "../../../../src/assets/img/logo/navlog.png";
import Blog from "./../../../pages/Blog/Blog";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { addProductBar, setAddProductBar } = useContext(AuthContext);
  return (
    <div>
      <nav className="bg-white fixed top-0 w-full z-[1000] border-gray-200  border-b md:h-[75px] h-[80] flex items-center ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full">
          <div className="flex gap-2 items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} className="w-[100px]" />
            </Link>
          </div>
          <div className="flex items-center">
            <ul className="md:flex hidden text-black gap-4 items-center ">
              <li className="  duration-200">
                <Link
                  to="/"
                  className="btn  dropdown relative text-black text-lg px-4 py-0"
                >
                  Home
                  <div
                    className={` mt-6 w-[200px] dropdown-menu  h-[0px] m-auto duration-200 absolute left-0 bg-[transparent]  overflow-hidden z-[200]`}
                  >
                    <ul className="">
                      <li className="">
                        <Link to="/category/3">
                          <div className="duration-200 hover:bg-red-100 mt-3 px-2 pr-3 font-semibold py-2 rounded flex items-center gap-2">
                            Flip Flops
                          </div>
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/category/6">
                          <div className="duration-200 hover:bg-red-100 mt-3 px-2 pr-3 font-semibold py-2 rounded flex items-center gap-2">
                            Sneakers
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/shop" className="btn text-black text-lg px-4 py-2">
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/all_blogs"
                  className="btn text-black text-lg px-4 py-2"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link to="/about" className="btn text-black text-lg px-4 py-2">
                  About
                </Link>
              </li>
            </ul>

            <button
              onClick={() => setOpen(!open)}
              className="text-black focus:ring-4 focus:ring-blue-300 md:hidden block font-medium md:ml-6 rounded-lg text-sm p-2  focus:outline-none "
            >
              <AiOutlineMenu className="text-2xl font-bold" />
            </button>
          </div>
        </div>
      </nav>
      <AddToCartBar />
      <div
        className={`${
          open ? "h-[100vh]" : " h-0"
        } bg-[#00000081] fixed overflow-hidden duration-300 w-full z-[1000]`}
      >
        <div className={`bg-white text-black p-4`}>
          <ul>
            <li className="relative">
              <Link
                className=" pr-3 font-semibold py-2 rounded flex items-center gap-2"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                className=" pr-3 font-semibold py-2 rounded flex items-center gap-2"
                to="/shop"
              >
                Shop
              </Link>
            </li>
            <li className="relative">
              <Link
                className=" pr-3 font-semibold py-2 rounded flex items-center gap-2"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="relative">
              <Link
                className=" pr-3 font-semibold py-2 rounded flex items-center gap-2"
                to="/all_blogs"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
