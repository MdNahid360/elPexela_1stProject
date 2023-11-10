import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
// import img1 from "../../../assets/img/banner/banner.png";
import img2 from "../../../assets/img/banner/topbanner.png";
import img3 from "../../../assets/img/banner/home-slider-03.png";
import img4 from "../../../assets/img/banner/home-slider-04.png";

const HeroSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const sliderData = [
    {
      id: 1,
      categoryId: 2,
      img: img2,
    },
    {
      id: 2,
      categoryId: 1,
      img: img2,
    },
    {
      id: 3,
      categoryId: 3,
      img: img2,
    },
    {
      id: 4,
      categoryId: 4,
      img: img2,
    },
  ];

  const swiperParams = {
    spaceBetween: 30,
    effect: "fade",
    navigation: false,
    pagination: {
      clickable: true,
    },
    modules: [EffectFade, Navigation, Pagination],
    autoplay: {
      delay: 2000, // Autoplay delay in milliseconds
      disableOnInteraction: false, // Autoplay will not be disabled on user interactions
    },
  };

  return (
    <div>
      <Swiper {...swiperParams} className="mySwiper pb-12">
        {sliderData?.map((itm) => (
          <SwiperSlide key={itm.id}>
            <img
              className="w-full lg:h-[500px] md:h-[400px] h-[200px]"
              src={itm?.img}
              alt={`Slide ${itm.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
