import React, { memo } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

import "./product.scss";

const Product = ({ data }) => {
  return (
    <div className="product">
      <div className="product__img">
        <img src={data?.images[0]} alt={data?.title} />
        <div className="product__img__discount">
          <span>NEW</span>
          <span>-50%</span>
        </div>
        <div className="product__img-like">
          <button>
            <GoHeart />
          </button>
        </div>
        <div className="product__img-cart">
          <button>Add to cart</button>
        </div>
      </div>
      <div className="product__info">
        <h3 title={data?.title} className="product__title">
          {data?.title}
        </h3>
        <p className="product__price">${data?.price}</p>
      </div>
    </div>
  );
};

export default memo(Product);
