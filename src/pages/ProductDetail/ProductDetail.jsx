import { useEffect, useState, useCallback, useRef } from "react";
import { BsCart } from "react-icons/bs";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useParams } from "react-router-dom";
import ProductCart from "../../component/CommonComponent/ProductCart/ProductCart";

const ProductDetails = () => {
  const id = useParams();
  const [singelProductData, setSingelProductData] = useState(null);
  const [pData, setPData] = useState([]);

  useEffect(() => {
    fetch(
      `https://kubrg-server.vercel.app/api/v1/products/get-singel/${id?.id}`
    )
      .then((res) => res.json())
      .then((data) => setSingelProductData(data?.data));
  }, []);

  useEffect(() => {
    fetch(`https://kubrg-server.vercel.app/api/v1/products/get-all-product`)
      .then((res) => res.json())
      .then((data) => setPData(data?.data));
  }, []);

  const {
    name,
    colors,
    Title,
    features,
    description,
    additionalInfo,
    discount,
    price,
    myntralink,
    flipkartlink,
    amazonlink,
  } = singelProductData || {};

  const [selectedSize, setSelectedSize] = useState(null);

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedColorData, setSelectedColorData] = useState(null);

  const [selectedColorImages, setSelectedColorImages] = useState([]);

  const [selectedImage, setSelectedImage] = useState(
    colors?.length > 0 && colors[0]?.images.length > 0
      ? colors[0]?.images[0]
      : null
  );

  const handleColorClick = (index) => {
    const clickedColor = colors[index];
    setSelectedColorIndex(index);
    setSelectedColorData(clickedColor);

    if (clickedColor?.images) {
      setSelectedColorImages(clickedColor.images);
    }
  };

  useEffect(() => {
    if (colors && colors?.length > 0) {
      setSelectedColorIndex(colors[0] || 0);
      setSelectedColorData(colors[0] || {});
      setSelectedColorImages(colors[0]?.images || []);
    }
  }, [colors]);

  console.log(selectedImage);
  return (
    <section className="lg:max-w-screen-xl lg:w-auto w-[90%] m-auto py-2">
      <section className="bg-white text-black">
        <div className="mx-auto px-4">
          <div className="lg:col-gap-12 bg-[#ffffff] p-4 text-black xl:col-gap-16  grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3  lg:row-end-1">
              <div className="lg:flex gap-4 lg:items-start">
                <div className="lg:order-2  lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg">
                    <img src="" alt="" />
                    <Carousel
                      axis="vertical"
                      selectedItem={0}
                      verticalThumbs={true}
                      showStatus={false}
                    >
                      {selectedColorImages &&
                        selectedColorImages?.map((image, index) => (
                          <div key={index}>
                            <img
                              src={image}
                              alt={colors[selectedColorData]?.color}
                              width={100}
                              height={100}
                              className="cursor-pointer border p-4 rounded hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-130"
                              onClick={() => setSelectedImage(image)}
                            />
                          </div>
                        ))}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:row-span-2 lg:row-end-2">
              <div className="mb-8 ">
                <h2 className="max-w-xl mb-6 text-2xl font-bold  md:text-4xl">
                  {name}
                </h2>
                <p className="inline-block mb-6 text-4xl font-bold text-gray-700 ">
                  <span>${price}</span>
                </p>
                <p className="max-w-md text-gray-700 ">{Title}</p>
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

              <div className="mt-5">
                <h4 className="text-lg font-semibold capitalize">
                  Available Colors
                </h4>
                <p className="my-2">{selectedColorData?.color}</p>
                <div className="flex items-center gap-2 my-4">
                  {colors &&
                    colors?.map((color, index) => {
                      const isSelected = selectedColorIndex === index;
                      return (
                        <div
                          key={index}
                          className="flex flex-col justify-center gap-2"
                        >
                          <div
                            className={` p-1 rounded-full w-full h-full cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 ${
                              isSelected ? "bg-opacity-100 " : "bg-opacity-50"
                            }`}
                            title={color.color}
                            onClick={() => handleColorClick(index)}
                          >
                            <img
                              src={color?.images[0]}
                              alt={color.color}
                              width={100}
                              height={100}
                              className="cursor-pointer border p-4 rounded hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-130"
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* <div>
                <h4 className="text-lg font-semibold capitalize">
                  Available Sizes
                </h4>
                <div className="flex items-center gap-2 my-4">
                  {selectedColorData ? (
                    <div className="flex flex-wrap gap-4">
                      {selectedColorData?.sizes?.map((size, index) => {
                        return (
                          <div
                            key={index + `size`}
                            className={`cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
                              selectedSize === size.size
                                ? "bg-[#ff5733] text-white"
                                : "bg-[#f1e8e8] text-black"
                            } `}
                          >
                            <p className="text-[1rem] text-center text-[#000] border-2 px-3 py-1 rounded">
                              {size?.size}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <>
                      <p className="text-[0.9rem] text-center">
                        Not applicable
                      </p>
                    </>
                  )}
                </div>
              </div> */}

              {/* <div className="border text-center p-2 mt-4 hidden md:flex flex-col md:flex-row items-center justify-center gap-4 rounded bg-[#E7F3EC]">
                <div className="flex flex-col items-center justify-center gap-2">
                  <img
                    src="https://avatars.githubusercontent.com/u/76812306?v=4"
                    alt="policy"
                    width={50}
                    height={50}
                    className="w-12 h-12 object-cover"
                  />
                  <h1 className="text-center font-semibold">
                    7 Days free exchange policy
                  </h1>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <img
                    src="https://avatars.githubusercontent.com/u/76812306?v=4"
                    alt="policy"
                    width={50}
                    height={50}
                    className="w-12 h-12 object-cover"
                  />
                  <h1 className="text-center font-semibold">
                    Made in India with love
                  </h1>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <img
                    src="https://avatars.githubusercontent.com/u/76812306?v=4"
                    alt="DelivaryIcons"
                    className="w-12 h-12 object-cover"
                  />
                  <h1 className="text-center font-semibold">
                    Free delivery* within 4-5 days
                  </h1>
                </div>
              </div> */}

              <div className="flex md:hidden"></div>

              {/* <div>
                <h1 className="mt-8 text-3xl font-bold">Features</h1>
                <div className="flex flex-col my-2 gap-4">
                  {features?.map((fct, index) => {
                    console.log(fct, "features");
                    return (
                      <div className="flex gap-2 flex-col">
                        <h1 className="font-bold">
                          {" "}
                          {index + 1}. {fct?.heading} :
                        </h1>
                        <hr />
                        <h2>✅ {fct?.details}</h2>
                      </div>
                    );
                  })}
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 p-4">
          <div className="grid md:grid-cols-2 border-t gap-8 pt-8 grid-cols-1">
            <div className="">
              <h1 className="text-3xl font-bold">Details</h1>
              <div className="flex flex-col my-2 mt-8 gap-4">
                {description &&
                  description?.map((dt) => {
                    return (
                      <div className="flex bg-gray-100 p-2 rounded gap-2">
                        <h1 className="font-bold"> {dt?.heading} :</h1>
                        <h2>{dt?.details}</h2>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="">
              <h1 className="text-3xl font-bold ">Additional Infomation</h1>
              <div className="flex flex-col my-2 mt-8  gap-4">
                {additionalInfo &&
                  additionalInfo?.map((adt) => {
                    return (
                      <div className="flex bg-gray-100 p-2 rounded gap-2">
                        <h1 className="font-bold"> {adt?.heading} :</h1>
                        <h2>{adt?.details}</h2>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <h4 className="text-3xl font-bold text-black">Related Product</h4>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-11 gap-4">
        {pData?.slice(0, 8)?.map((itm) => (
          <ProductCart key={itm?._id} itm={itm} />
        ))}
      </div>
      <section className="my-6">{/* <RecomendedPorduct /> */}</section>
    </section>
  );
};

export default ProductDetails;
