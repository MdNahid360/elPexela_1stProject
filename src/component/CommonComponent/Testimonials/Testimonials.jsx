import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../../../Hooks/Title/Title";

const Testimonials = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 200,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-12">
      <div className=" flex justify-center pb-8">
        <Title title="Testimonials" />
      </div>
      <div className="text-black ts-box">
        <div className="ltr md:w-[500px] w-[100px]"></div>
        <div className="rtr  md:w-[500px] w-[100px]"></div>
        <Slider {...settings}>
          <div className="">
            <div className="bg-white px-4 py-14">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                alt=""
                className="w-[80px] border-2 m-auto  border-black h-[80px] rounded-full"
              />
              <h5 className="text-black text-lg font-semibold mt-2 text-center">
                Jhon
              </h5>
              <p className="text-sm text-center mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, sint laudantium.
              </p>
            </div>
          </div>
          <div className="">
            <div className="bg-white px-4 py-14">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                alt=""
                className="w-[80px] border-2 m-auto  border-black h-[80px] rounded-full"
              />
              <h5 className="text-black text-lg font-semibold mt-2 text-center">
                Jhon
              </h5>
              <p className="text-sm text-center mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, sint laudantium.
              </p>
            </div>
          </div>
          <div className="">
            <div className="bg-white px-4 py-14">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                alt=""
                className="w-[80px] border-2 m-auto  border-black h-[80px] rounded-full"
              />
              <h5 className="text-black text-lg font-semibold mt-2 text-center">
                Jhon
              </h5>
              <p className="text-sm text-center mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, sint laudantium.
              </p>
            </div>
          </div>
          <div className="">
            <div className="bg-white px-4 py-14">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                alt=""
                className="w-[80px] border-2 m-auto  border-black h-[80px] rounded-full"
              />
              <h5 className="text-black text-lg font-semibold mt-2 text-center">
                Jhon
              </h5>
              <p className="text-sm text-center mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, sint laudantium.
              </p>
            </div>
          </div>
          <div className="">
            <div className="bg-white px-4 py-14">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                alt=""
                className="w-[80px] border-2 m-auto  border-black h-[80px] rounded-full"
              />
              <h5 className="text-black text-lg font-semibold mt-2 text-center">
                Jhon
              </h5>
              <p className="text-sm text-center mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, sint laudantium.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
