// Blog.js

import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ca4acf85170165.5f9dbca628ec5.png",
      title: "Getting Started with React",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 2,
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ca4acf85170165.5f9dbca628ec5.png",
      title: "State Management in React",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 2,
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ca4acf85170165.5f9dbca628ec5.png",
      title: "State Management in React",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="lg:max-w-screen-xl mt-12 text-black lg:w-auto w-[90%] m-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Blog Posts</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-14 lg:gap-6 md:gap-2 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white lg:p-6 md:p-4 p-6 rounded-lg shadow-md"
          >
            <img
              src={post.img}
              className="w-full rounded lg:h-[260px] md:h-[200px] h-[260px]"
              alt=""
            />{" "}
            <br />
            <h2 className="lg:text-xl tmd:text-md text-xl font-bold mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 lg:text-md md:text-md text-lg">
              {post.content}
            </p>
            <Link to="/blog/3">
              <button className="bg-[#ff004c] px-4 py-2 mt-6 text-white rounded">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>

      <Link to="/all_blogs" className="w-full flex justify-center">
        <button className="px-5 py-3 mt-12 bg-[#ff004c] text-white">
          Show more
        </button>
      </Link>
    </div>
  );
};

export default Blog;
