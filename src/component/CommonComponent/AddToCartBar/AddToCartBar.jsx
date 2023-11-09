import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../../../context/AuthProvider";

const AddToCartBar = () => {
  const { addProductBar, setAddProductBar } = useContext(AuthContext);

  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div
      className={`${
        addProductBar ? " md:w-[400px] w-full" : " md:w-[0px] w-0"
      } bg-[#f1f1f1] shadow-2xl text-black shadow-gray-500 overflow-hidden duration-200 fixed z-[100] right-0  h-screen`}
    >
      <div className="w-[93%] m-auto mt-3">
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-semibold text-black">Add Products</h5>
          <button
            onClick={() => setAddProductBar(!addProductBar)}
            className="bg-gray-300 w-[30px] h-[30px] flex items-center justify-center rounded"
          >
            <AiOutlineClose className="text-xl" />
          </button>
        </div>
        <ul className="mt-4">
          <li className="flex bg-white p-2 items-start justify-between">
            <div className="flex items-center gap-2">
              <img
                className="w-[90px] h-[80px]"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <div className="">
                <h1 className="text-lg text-black font-semibold">
                  Product Name
                </h1>
                <h5 className="text-gray-500 font-semibold">${33 * count}</h5>
                <div className=" border border-black grid grid-cols-3 w-[120px]">
                  <input
                    onClick={decreaseCount}
                    type="button"
                    value="-"
                    className="bg-gray-300 text-center h-full text-3xl"
                  />{" "}
                  <input
                    type="num"
                    value={count}
                    className="bg-[transparent] text-center h-full text-xl"
                  />{" "}
                  <input
                    onClick={increaseCount}
                    type="button"
                    value="+"
                    className="bg-gray-300 text-center h-full text-2xl"
                  />
                </div>
              </div>
            </div>
            <button className="px-6 rounded py-1 bg-[red] text-white text-sm">
              Buy
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddToCartBar;
