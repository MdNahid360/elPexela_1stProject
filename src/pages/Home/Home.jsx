import React from "react";
import HeroSlider from "../../component/CommonComponent/HeroSlider/HeroSlider";
import Category from "../../component/CommonComponent/Category/Category";
import BestSealingProduct from "../../component/CommonComponent/BestSealingProduct/BestSealingProduct";
import SpeacialProduct from "../../component/CommonComponent/SpeacialProduct/SpeacialProduct";
import ExploreProduct from "../../component/CommonComponent/ExploreProduct/ExploreProduct";
import Testimonials from "../../component/CommonComponent/Testimonials/Testimonials";
import Blog from "../Blog/Blog";

const Home = () => {
  return (
    <div className="">
      <HeroSlider />
      <div className="lg:max-w-screen-xl lg:w-auto w-[90%] m-auto py-12">
        <Category />
        <BestSealingProduct />
        <SpeacialProduct />
        <Blog />
        <ExploreProduct />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
