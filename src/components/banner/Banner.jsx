import React, { memo } from "react";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "./banner.scss";

const Banner = () => {
  return (
    <section className="banner  max-container">
      <div className="container banner__container">
        {/* 1 */}
        <div className="banner__card">
          <div className="banner__card__info">
            <h3 className="banner__title">Living Room</h3>
            <div>
              <Link className="banner__link" to={"/shop"}>
                Shop Now <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="banner__card__img">
            <img src={banner1} alt="banner img" />
          </div>
        </div>
        {/* 2 */}
        <div className="banner__card">
          <div className="banner__card__info">
            <h3 className="banner__title">Bedroom</h3>
            <Link className="banner__link" to={"/shop"}>
              Shop Now <FaArrowRightLong />
            </Link>
          </div>
          <div className="banner__card__img">
            <img src={banner2} alt="banner img" />
          </div>
        </div>
        {/* 3 */}
        <div className="banner__card">
          <div className="banner__card__info">
            <h3 className="banner__title">Kitchen</h3>
            <Link className="banner__link" to={"/shop"}>
              Shop Now <FaArrowRightLong />
            </Link>
          </div>
          <div className="banner__card__img">
            <img src={banner3} alt="banner img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Banner);
