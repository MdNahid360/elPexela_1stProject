import React from "react";

const Title = ({ title }) => {
  return (
    <h4 className="md:font-semibold font-bold md:text-3xl text-2xl text-[#000]">
      {title}
    </h4>
  );
};

export default Title;
