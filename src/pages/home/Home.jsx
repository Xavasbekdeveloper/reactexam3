import React, { memo } from "react";
import "./home.scss";
import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import Service from "../../components/service/Service";
import Banners from "../../components/banners/Banners";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import Article from "../../components/article/Article";
import Products from "../../components/products carousel/Products";

const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
      <Products />
      <Service />
      <Banners />
      <Article />
      <NewsLetter />
    </>
  );
};

export default memo(Home);
