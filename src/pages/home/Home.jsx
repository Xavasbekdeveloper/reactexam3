import React, { memo } from "react";
import "./home.scss";
import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import Service from "../../components/service/Service";
import Banners from "../../components/banners/Banners";

const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
      <Service />
      <Banners />
    </>
  );
};

export default memo(Home);
