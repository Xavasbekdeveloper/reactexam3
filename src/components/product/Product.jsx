import React, { memo } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./product.scss";
import { addToCart } from "../../context/slice/cartSlice";
import { addWishlist } from "../../context/slice/wishlistSlice";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.data);
  const cartData = useSelector((state) => state.cart.value);
  return (
    <div className="product">
      <div className="product__img">
        <Link to={`/products/${data?.id}`}>
          <img src={data?.images[0]} alt={data?.title} />
        </Link>
        <div className="product__img__discount">
          <span>NEW</span>
          <span>-50%</span>
        </div>
        <div className="product__img-like">
          <button onClick={() => dispatch(addWishlist(data))}>
            {wishlistData.some((el) => el.id === data.id) ? (
              <GoHeartFill />
            ) : (
              <GoHeart />
            )}
          </button>
        </div>
        <div className="product__img-cart">
          <button
            disabled={cartData?.some((el) => el.id === data.id)}
            onClick={() => dispatch(addToCart(data))}
          >
            {cartData?.some((el) => el.id === data.id)
              ? "Added to cart"
              : "Add to cart"}
          </button>
        </div>
      </div>
      <div className="product__info">
        <Link to={`/products/${data?.id}`}>
          <h3 title={data?.title} className="product__title">
            {data?.title}
          </h3>
        </Link>
        <p className="product__price">${data?.price}</p>
      </div>
    </div>
  );
};

export default memo(Product);
