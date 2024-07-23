import React, { memo } from "react";
import "./home.scss";
import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
    </>
  );
};

export default memo(Home);
