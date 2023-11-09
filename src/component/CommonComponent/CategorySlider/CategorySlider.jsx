import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const CategorySlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={3}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper category-slider"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((itm) => (
        <SwiperSlide className="pb-0">
          <Link to={`/category/2`}>
            <div className="w-[full] overflow-hidden">
              <img
                className="w-[160px] m-auto h-[160px] md:rounded-full rounded-lg"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
              />
              <h1 className="font-semibold  text-center mt-2">Product name</h1>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategorySlider;
