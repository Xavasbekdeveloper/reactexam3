import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { IoMdStar } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";

import "./detail.scss";

const Detail = () => {
  const [imgInx, setImgInx] = useState(0);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { id } = useParams();

  const { data, isLoading } = useGetProductByIdQuery(id);

  return (
    <section className="detail">
      <div className="container">
        {/* top */}
        <div className="detail__top">
          {/* top-left */}
          <div className="detail__top__left">
            <div className="detail__top__left__img">
              <img src={data?.images[imgInx]} alt={data?.title} />
            </div>
            <div className="detail__top__left__bottom">
              {data?.images?.map((img, inx) => (
                <div key={inx}>
                  <img
                    onClick={() => setImgInx(inx)}
                    src={img}
                    alt="detail img"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* top-right */}
          <div className="detail__top__right">
            <div className="detail__top__right__top">
              <div>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
              <span>11 Reviews</span>
            </div>
            <h1>{data?.title}</h1>
            <p className="detail__top__right__desc">{data?.desc}</p>
            <div className="detail__top__right__price">
              <span>${data?.price}</span>
              <span>${data?.price + 250}</span>
            </div>
            <div className="detail__top__right__date">
              <p>Offer expires in:</p>
              <div className="detail__top__right__date-box">
                <div>
                  <p>02</p>
                  <p>Days</p>
                </div>
                <div>
                  <p>12</p>
                  <p>Hours</p>
                </div>
                <div>
                  <p>45</p>
                  <p>Minutes</p>
                </div>
                <div>
                  <p>05</p>
                  <p>Seconds</p>
                </div>
              </div>
            </div>
            <div className="detail__top__right__size">
              <p>Measurements</p>
              <p>17 1/2x20 5/8 "</p>
            </div>
            <div className="detail__top__right__choose">
              <p>Choose Color</p>
              <div>
                {data?.images?.map((img, inx) => (
                  <div key={inx}>
                    <img src={img} alt="detail img" />
                  </div>
                ))}
              </div>
            </div>
            <div className="detail__top__right__btns">
              <div className="detail__top__right__btns-top">
                <div>
                  <button>
                    <FaMinus />
                  </button>
                  <span>1</span>
                  <button>
                    <FaPlus />
                  </button>
                </div>
                <button className="detail__top__right__btns-top__wishlist">
                  <GoHeart /> Wishlist
                </button>
              </div>
              <button className="detail__top__right__btns__cart">
                Add to Cart
              </button>
            </div>
            <div className="detail__top__right__bottom">
              <p>SKU</p>
              <p>117</p>
              <p>CATEGORY</p>
              <p>{data?.category}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Detail);
