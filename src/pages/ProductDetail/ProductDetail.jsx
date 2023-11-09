import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";
import ProductCart from "../../component/CommonComponent/ProductCart/ProductCart";
import Title from "../../Hooks/Title/Title";
import Slider from "react-slick";

const ProductDetail = () => {
  const id = useParams();
  const [data, setData] = useState({});
  const [pData, setPData] = useState([]);
  useEffect(() => {
    fetch(
      `https://kubrg-server.vercel.app/api/v1/products/get-singel/${id?.id}`
    )
      .then((res) => res.json())
      .then((data) => setData(data?.data));
  }, []);

  useEffect(() => {
    fetch(`https://kubrg-server.vercel.app/api/v1/products/get-all-product`)
      .then((res) => res.json())
      .then((data) => setPData(data?.data));
  }, []);
  const [demoImg, setDemoImg] = useState({
    img1: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    img3: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    img4: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    img5: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    img6: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  });

  const [activeImg, setActiveImg] = useState(demoImg.img3);

  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
        breakpoint: 320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
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
    <div className="">
      <div className="lg:max-w-screen-xl text-black lg:w-auto w-[90%] m-auto py-12">
        <section className=" bg-white py-11 font-poppins ">
          <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full mb-8 md:w-1/2 md:mb-0">
                <div className="sticky top-0 z-50  ">
                  <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                    <img
                      src={activeImg}
                      alt=""
                      className="object-cover w-full lg:h-full "
                    />
                  </div>

                  <div className="w-[90%] prd m-auto">
                    <Slider {...settings}>
                      <div>
                        <div className="w-full p-2 ">
                          <div
                            onClick={() => setActiveImg(demoImg?.img1)}
                            className="block border w-[100px] md:w-auto border-transparent hover:border-blue-300"
                          >
                            <img
                              src={demoImg?.img1}
                              alt=""
                              className="object-cover w-full lg:h-20"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="w-full p-2 ">
                          <div
                            onClick={() => setActiveImg(demoImg?.img1)}
                            className="block border w-[100px] md:w-auto border-transparent hover:border-blue-300"
                          >
                            <img
                              src={demoImg?.img1}
                              alt=""
                              className="object-cover w-full lg:h-20"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="w-full p-2 ">
                          <div
                            onClick={() => setActiveImg(demoImg?.img3)}
                            className="block border w-[100px] md:w-auto bg-red-400 border-transparent hover:border-blue-300"
                          >
                            <img
                              src={demoImg?.img3}
                              alt=""
                              className="object-cover w-full lg:h-20"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="w-full p-2 ">
                          <div
                            onClick={() => setActiveImg(demoImg?.img4)}
                            className="block border w-[100px] md:w-auto border-transparent hover:border-blue-300"
                          >
                            <img
                              src={demoImg?.img4}
                              alt=""
                              className="object-cover w-full lg:h-20"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="w-full p-2 ">
                          <div
                            onClick={() => setActiveImg(demoImg?.img4)}
                            className="block border w-[100px] md:w-auto border-transparent hover:border-blue-300"
                          >
                            <img
                              src={demoImg?.img4}
                              alt=""
                              className="object-cover w-full lg:h-20"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="w-full p-2 ">
                          <div
                            onClick={() => setActiveImg(demoImg?.img4)}
                            className="block border w-[100px] md:w-auto border-transparent hover:border-blue-300"
                          >
                            <img
                              src={demoImg?.img4}
                              alt=""
                              className="object-cover w-full lg:h-20"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="w-full p-2 ">
                          <div
                            onClick={() => setActiveImg(demoImg?.img4)}
                            className="block border w-[100px] md:w-auto border-transparent hover:border-blue-300"
                          >
                            <img
                              src={demoImg?.img4}
                              alt=""
                              className="object-cover w-full lg:h-20"
                            />
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 ">
                <div className="lg:pl-20">
                  <div className="mb-8 ">
                    <h2 className="max-w-xl mb-6 text-2xl font-bold  md:text-4xl">
                      {data?.name}
                    </h2>
                    <p className="inline-block mb-6 text-4xl font-bold text-gray-700 ">
                      <span>${data?.price}</span>
                    </p>
                    <p className="max-w-md text-gray-700 ">{data?.Title}</p>
                  </div>
                  <div className="mb-8">
                    <h2 className="w-16 pb-1 mb-4 text-2xl font-bold border-b border-blue-300 ">
                      Colors
                    </h2>
                    <div className="flex flex-wrap -mx-2 -mb-2">
                      <button className="p-1 mb-2 mr-3 ">
                        <div className="w-6 h-6 rounded-full bg-stone-400"></div>
                      </button>
                      <button className="p-1 mb-2 mr-3 ">
                        <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                      </button>
                      <button className="p-1 mb-2 ">
                        <div className="w-6 h-6 bg-blue-200 rounded-full"></div>
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 grid-cols-1  items-center gap-4">
                    <Link to="">
                      <button className="w-full p-2 flex justify-center items-center gap-4  text-xl bg-gray-200 rounded-md  duration-200  text-gray-800 hover:bg-gray-600 hover:text-white    ">
                        <img
                          src="https://cdn.icon-icons.com/icons2/729/PNG/512/flipkart_icon-icons.com_62718.png"
                          className="w-[40px]"
                        />{" "}
                        Buy
                      </button>
                    </Link>
                    <Link to="">
                      <button className="w-full p-2 flex justify-center items-center gap-4  text-xl bg-gray-200 rounded-md  duration-200  text-gray-800 hover:bg-gray-600 hover:text-white    ">
                        <img
                          src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-2709168-2249158.png"
                          className="w-[40px]"
                        />{" "}
                        Buy
                      </button>
                    </Link>
                    <Link to="">
                      <button className="w-full p-2 flex justify-center items-center gap-4  text-xl bg-gray-200 rounded-md  duration-200  text-gray-800 hover:bg-gray-600 hover:text-white    ">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png"
                          className="w-[40px]"
                        />{" "}
                        Buy
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 mt-2 grid md:grid-cols-2 grid-cols-1 gap-4 border-t border-gray-400">
            <div className="">
              <h3 className="text-black">Additional Infomation</h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda aliquam eaque dicta sequi dolores numquam asperiores
              quis perspiciatis hic voluptatibus, atque dolorum cumque
              reprehenderit eius, esse similique odit quo. Molestiae!
            </div>{" "}
            <div className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda aliquam eaque dicta sequi dolores numquam asperiores
              quis perspiciatis hic voluptatibus, atque dolorum cumque
              reprehenderit eius, esse similique odit quo. Molestiae!
            </div>
          </div>
        </section>

        {/* related products */}
        <br />
        <br />
        <Title title="Related Product" />
        <div className="grid md:grid-cols-4 grid-cols-1 mt-11 gap-4">
          {pData?.slice(0, 8)?.map((itm) => (
            <ProductCart key={itm?._id} itm={itm} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
