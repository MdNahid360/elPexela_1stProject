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

  const [isOpen, setIsOpen] = useState(false);

  // const toggleAccordion = () => {
  //   setIsOpen(!isOpen);
  // };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      // Clicking an active accordion item closes it
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const accordionItems = [
    {
      title: "Category",
      content: [
        {
          id: 0,
          name: "Flip Flop",
        },
        {
          id: 1,
          name: "Shop Shoes",
        },
        {
          id: 2,
          name: "Sneakers",
        },
      ],
    },
    {
      title: "Size",
      content: [
        {
          id: 0,
          name: "md",
        },
        {
          id: 1,
          name: "lg",
        },
        {
          id: 2,
          name: "xl",
        },
      ],
    },
  ];

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

        <div className="grid md:grid-cols-5 gap-4">
          <div className="mt-3">
            <h4 className="font-semibold text-lg text-black">Filter</h4>
            {/* filter item */}

            <div className="mt-3 text-black">
              {/* ... */}
              {accordionItems.map((item, index) => (
                <div
                  key={index}
                  className="border bg-white border-gray-300 rounded mb-2"
                >
                  <button
                    className="w-full  text-left px-4 py-4 focus:outline-none "
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex justify-between text-xl items-center">
                      <span>{item.title}</span>
                      <span>{activeIndex === index ? "-" : "+"}</span>
                    </div>
                  </button>
                  {activeIndex === index && (
                    <div className="px-4 pb-4">
                      {item.content.map((contentItem, contentIndex) => (
                        <div
                          key={contentIndex}
                          className="flex items-center mt-3 cursor-pointer"
                        >
                          <input
                            id={`checked-checkbox-${contentIndex}`}
                            type="checkbox"
                            value=""
                            className="w-6 h-6 border border-black text-blue-600 bg-gray-100  rounded focus:ring-blue-500 "
                          />
                          <label
                            htmlFor={`checked-checkbox-${contentIndex}`}
                            className="ml-2 cursor-pointer text-md font-medium w-full text-gray-900 "
                          >
                            {contentItem.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* ... */}
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-4">
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
