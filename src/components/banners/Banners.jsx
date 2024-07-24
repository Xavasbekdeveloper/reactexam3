import React from "react";
import bannersBg from "../../assets/images/hero-bg2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "./banners.scss";

const Banners = () => {
  return (
    <section className="banners">
      <div className="banners__container">
        <div className="banners__left">
          <img src={bannersBg} alt="banners img" />
        </div>
        <div className="banners__right">
          <p className="banners__text">SALE UP TO 35% OFF</p>
          <h2 className="banners__title">HUNDREDS of New lower prices!</h2>
          <p className="banners__desc">
            It’s more affordable than ever to give every room in your home a
            stylish makeover
          </p>
          <Link className="banner__link" to={"/shop"}>
            Shop Now <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(Banners);
