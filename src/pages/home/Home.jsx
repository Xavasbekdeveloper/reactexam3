import React, { memo } from "react";
import "./home.scss";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default memo(Home);
