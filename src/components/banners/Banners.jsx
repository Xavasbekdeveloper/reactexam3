import React, { memo } from "react";
import bannersBg from "../../assets/images/hero-bg2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "./banners.scss";

const Banners = ({ title, text, desc }) => {
  return (
    <section className="banners">
      <div className="banners__container">
        <div className="banners__left">
          <img src={bannersBg} alt="banners img" />
        </div>
        <div className="banners__right">
          <p className="banners__text">{text}</p>
          <h2 className="banners__title">{title}</h2>
          <p className="banners__desc">{desc}</p>
          <Link className="banner__link" to={"/shop"}>
            Shop Now <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(Banners);
