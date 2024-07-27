import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { IoMdStar } from "react-icons/io";
import { GoHeart, GoHeartFill } from "react-icons/go";
import DetailLoading from "../../components/detail-loading";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import { useDispatch, useSelector } from "react-redux";
import { addWishlist } from "../../context/slice/wishlistSlice";
import { addToCart } from "../../context/slice/cartSlice";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import "./detail.scss";

const Detail = () => {
  const [imgInx, setImgInx] = useState(0);
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.data);
  const cartData = useSelector((state) => state.cart.value);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { id } = useParams();

  const { data, isLoading } = useGetProductByIdQuery(id);

  return (
    <>
      <section className="detail">
        <div className="container">
          <div className="detail__top">
            {isLoading ? (
              <DetailLoading />
            ) : (
              <>
                <div className="detail__top__left">
                  <div className="detail__top__left__img">
                    <Zoom>
                      <img
                        src={data?.images[imgInx]}
                        alt={data?.title}
                        width={800}
                      />
                    </Zoom>
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
                      <button
                        onClick={() => dispatch(addWishlist(data))}
                        className="detail__top__right__btns-top__wishlist"
                      >
                        {wishlistData.some((el) => el.id === data.id) ? (
                          <GoHeartFill />
                        ) : (
                          <GoHeart />
                        )}{" "}
                        Wishlist
                      </button>
                      <button
                        onClick={() => dispatch(addToCart(data))}
                        disabled={cartData?.some((el) => el.id === data.id)}
                        className="detail__top__right__btns__cart"
                      >
                        {cartData?.some((el) => el.id === data.id)
                          ? "Added to cart"
                          : "Add to cart"}
                      </button>
                    </div>
                  </div>
                  <div className="detail__top__right__bottom">
                    <p>SKU</p>
                    <p>117</p>
                    <p>CATEGORY</p>
                    <p>{data?.category}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <NewsLetter />
    </>
  );
};

export default memo(Detail);
