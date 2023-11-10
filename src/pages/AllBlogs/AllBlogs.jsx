// Blog.js

import React from "react";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const blogPosts = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/05/3a/ec/053aec11ed1c5c3523c1425e1618c31a.jpg",
      title: "Choosing the Right Shoes for Every Occasion",
      content: "From casual to formal, find the perfect pair for any event.",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_120329-2149.jpg",
      title: "Maintaining Your Sneakers: A Complete Guide",
      content: "Keep your sneakers fresh and clean with these easy tips.",
    },
    {
      id: 3,
      img: "https://img.freepik.com/premium-vector/new-arrival-seasonal-shoes-sale-social-media-web-banner_620267-120.jpg",
      title: "Trends in Sports Shoes: What’s Hot This Season",
      content:
        "Discover the latest in sports footwear and stay ahead of the curve.",
    },
    {
      id: 3,
      img: "https://www.shutterstock.com/image-vector/advertising-web-banner-design-50-260nw-1590770467.jpg",
      title: "Trends in Sports Shoes: What’s Hot This Season",
      content:
        "Discover the latest in sports footwear and stay ahead of the curve.",
    },
  ];

  return (
    <div className="lg:max-w-screen-xl mt-12 text-black lg:w-auto w-[90%] m-auto py-12">
      <div class="flex flex-wrap justify-center ">
        <div class="w-full ">
          <div class="mx-auto  md:max-w-[510px] text-center lg:mb-6">
            <span class="block mb-2 text-lg font-semibold text-primary">
              Our Blogs
            </span>
            <h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] dark:text-white">
              All Blogs
            </h2>
            <p class="text-base text-body-color dark:text-dark-6">
              Numerous versions of Lorem Ipsum exist, yet most have undergone
              some degree of modification.
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-14 lg:gap-6 md:gap-2 gap-6">
        {blogPosts.map((post) => (
          <div className="bg-white p-3 lg:grid grid-cols-3 gap-4 duration-200 hover:shadow-lg">
            <img
              src={post?.img}
              alt=""
              className="rounded-xl lg:h-[auto] md:h-[200px] lg:w-auto md:w-full"
            />
            <div className="col-span-2 lg:mt-0 mt-4">
              <h2 className="font-semibold text-lg">{post?.title}</h2>
              <p className="mt-3 text-gray-400">
                {post?.content}{" "}
                <Link to="/blog/3" className="text-blue-700 ">
                  ..Read more
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
