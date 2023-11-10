import React from "react";

const BlogDetails = () => {
  const blog = {
    id: 1,
    img: "https://img.freepik.com/premium-vector/new-arrival-seasonal-shoes-sale-social-media-web-banner_620267-120.jpg",
    title: "Sample Blog Title",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec erat justo. Aenean lacinia dolor a tempus luctus. Vivamus tristique diam eget metus bibendum, ac condimentum lorem ultrices. Suspendisse sit amet arcu a metus consectetur efficitur ac id ligula. Vestibulum euismod diam nec gravida ultrices. Integer in urna in enim hendrerit tincidunt ut sit amet dolor. Donec placerat turpis non metus ultrices, eget fermentum ligula egestas.`,
  };

  return (
    <div className="bg-white">
      <div className="lg:max-w-screen-xl lg:w-auto w-[99%] m-auto pt-4 pb-12">
        <div className=" text-black mx-auto p-8">
          <h1 className="md:text-5xl text-2xl font-semibold">{blog.title}</h1>
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full mt-6 md:h-[500px] h-auto object-cover"
          />
          <div className="mt-4">
            <p className="text-gray-600 my-4">{blog.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
