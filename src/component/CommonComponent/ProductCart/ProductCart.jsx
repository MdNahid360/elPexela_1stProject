import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const ProductCart = ({ itm }) => {
  return (
    <div className="bg-white p-4 text-black rounded-lg shadow-md">
      <Link className="hover-menu" to={`/products/${itm?._id}`}>
        <div className="lg:h-[340px] md:h-[200px] border p-2 rela w-full relative overflow-hidden duration-200 hover-box">
          {" "}
          <img
            src={itm?.colors[0]?.images[0]}
            alt=""
            className="hover-img h-full w-full duration-200"
          />
        </div>
      </Link>
      <br />
      <div className="flex flex-col justify-center">
        <h2 className="text-xl text-center font-bold mb-2">{itm?.name}</h2>
        <h2 className="text-xl text-center ">${itm?.price}</h2>
        <div className="flex pb-6 justify-center items-center lg:gap-6 md:gap-2 gap-6  pt-3 hover-overlay duration-200 ">
          <Link to={itm?.amazonlink}>
            <div className="mt-2 p-1 w-[50px] bg-[#ff18691c] border border-[red] rounded-md h-[50px]">
              <img
                className=" rounded-md w-full h-full"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </Link>{" "}
          <Link to={itm?.myntralink}>
            <div className="mt-2 p-1 w-[50px] bg-[#ff18691c] border border-[red] rounded-md h-[50px]">
              <img
                className=" rounded-md w-full h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefbNOJJO4j99t2kbsiHGeHnHlhxy8OFZSogdVFdk&s"
                alt=""
              />
            </div>
          </Link>{" "}
          <Link to={itm?.flipkartlink}>
            <div className="mt-2 p-1 w-[50px] bg-[#ff18691c] border border-[red] rounded-md h-[50px]">
              <img
                className=" rounded-md w-full h-full"
                src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/072edbeff198a0a29049bcc1ee344d02"
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
