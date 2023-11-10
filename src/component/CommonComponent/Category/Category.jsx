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

const Category = () => {
  const swiperParams = {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    modules: [FreeMode, Navigation, Pagination],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const items = [
    {
      id: 1,
      name: "Sneakers",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/e2489a153544611.6331e2e899591.jpg",
    },
    {
      id: 2,
      name: "Sports Shoes",
      img: "https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Free-Sports-Running-Shoes-Banner-Design-1180x664.jpg",
    },
    {
      id: 3,
      name: "Flip Flops",
      img: "https://img.freepik.com/free-vector/modern-black-friday-sale-banner-template-with-3d-background-red-splash_1361-1877.jpg?w=1380&t=st=1699544576~exp=1699545176~hmac=0c71cb7cfd867135991f56a9db7fa6396bb1906a93816b3332bdadecc5d37a48",
    },
    {
      id: 3,
      name: "Sneakers",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/e2489a153544611.6331e2e899591.jpg",
    },
  ];

  return (
    <div className="pt-12 relative c-slider">
      <div className="flex flex-col items-center absolute top-[14%] justify-center w-full">
        <Title title="Shop By Category" />
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
        className="mySwiper mt-[60px] pt-12 "
      >
        {items?.map((itm) => (
          <SwiperSlide className="mt-[80px] bg-black" key={itm?.id}>
            <Link to={`/category/654b4cbc18d46365d959c3aa`}>
              <div className="bg-white p-4">
                <div className="">
                  <img
                    src={itm?.img}
                    alt=""
                    className="lg:h-[200px] md:h-[140px] w-full"
                  />
                </div>
                <h3 className="text-lg text-black text-center font-semibold mt-2">
                  {itm?.name}
                </h3>
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

export default Category;
