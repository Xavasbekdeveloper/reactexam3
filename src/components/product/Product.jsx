import React, { memo } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { addToCart } from "../../context/slice/cartSlice";
import { addWishlist } from "../../context/slice/wishlistSlice";

import "./product.scss";

const Product = ({ data, isAdmin, setEditProduct, setDeleteProduct }) => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.data);
  const cartData = useSelector((state) => state.cart.value);
  return (
    <div className="product">
      <div className="product__img">
        <Link to={`/products/${data?.id}`}>
          <img src={data?.images[0]} alt={data?.title} />
        </Link>
        <div
          style={isAdmin ? { display: "none" } : { display: "flex" }}
          className="product__img__discount"
        >
          <span>NEW</span>
          <span>-50%</span>
        </div>
        <div
          style={isAdmin ? { display: "none" } : { display: "block" }}
          className="product__img-like"
        >
          <button onClick={() => dispatch(addWishlist(data))}>
            {wishlistData.some((el) => el.id === data.id) ? (
              <GoHeartFill />
            ) : (
              <GoHeart />
            )}
          </button>
        </div>
        <div
          style={isAdmin ? { display: "none" } : { display: "block" }}
          className="product__img-cart"
        >
          <button
            onClick={() => dispatch(addToCart(data))}
            disabled={cartData?.some((el) => el.id === data.id)}
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
        <div
          style={isAdmin ? { display: "flex" } : { display: "none" }}
          className="product__btns"
        >
          <button onClick={() => setEditProduct(data)}>
            <FiEdit />
          </button>
          <button onClick={() => setDeleteProduct(data)}>
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Product);
