import React, { useEffect, useState } from "react";
import Title from "../../../Hooks/Title/Title";
import ProductCart from "../ProductCart/ProductCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbListDetails } from "react-icons/tb";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const BestSealingProduct = () => {
  const [showProduct, setShowProduct] = useState(false);
  const [bestProduct, setBestProduct] = useState([]);

  useEffect(() => {
    fetch("https://kubrg-server.vercel.app/api/v1/products/get-all-product")
      .then((res) => res.json())
      .then((data) => setBestProduct(data.data));
  }, []);

  const swiperParams = {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    modules: [FreeMode, Navigation, Pagination],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <div className="pt-12 relative">
      <div className="flex flex-col items-center absolute top-[14%] justify-center w-full">
        <Title title="Best Sale Products" />
        <p className="text-center text-gray-600 pb-12 md:w-[400px] w-full mt-3 m-auto">
          Discover our top deals on high-quality items with our Best Sale
          Products. Unbeatable prices, limited-time offers, and a vast range of
          products to enhance your life.
        </p>
      </div>
      <Swiper
        {...swiperParams}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper mt-[200px] pt-20"
      >
        {bestProduct?.map((itm) => (
          <SwiperSlide className="mt-[70px]" key={itm?._id}>
            <Link to={`/products/${itm?._id}`}>
              <div className="bg-white p-3 mt-4 duration-200 hover:shadow-xl shadow-gray-200 h-menu">
                <div className="lg:h-[330px] md:h-[200px] h-[330px] duration-300  overflow-hidden relative">
                  <img
                    src={itm?.colors[0]?.images[0]}
                    alt=""
                    className="hover-img h-full w-full duration-200"
                  />
                  <img
                    src={itm?.colors[0]?.images[1]}
                    alt=""
                    className="absolute translate-y-[-100%] top-0 left-0 right-0 bottom-0 h-hover h-full w-full duration-300"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-400">{itm?.categories[0]}</p>
                  <div className="flex items-center justify-between">
                    <h4 className="text-black text-2xl mt-1 ">{itm?.name}</h4>
                    {/* <button>
                      <TbListDetails className="text-black text-xl" />
                    </button> */}
                  </div>
                  <h4 className="text-[#ff0062] font-semibold text-xl mt-1 ">
                    ${itm?.price}
                  </h4>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default BestSealingProduct;
