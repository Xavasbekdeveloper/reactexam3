import React, { useEffect, memo, useState } from "react";
import { Link } from "react-router-dom";
import {
  decreaseAmount,
  increaseAmount,
  removeCart,
} from "../../context/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RiCouponLine } from "react-icons/ri";
import Process from "../../components/process/Process";

import "./cart.scss";
import Checkout from "./checkout/Checkout";

const Cart = () => {
  const [voucher, setVoucher] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [checkout, setCheckout] = useState(false);
  const cartData = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const calculateAllPrice = () => {
    let total = cartData?.reduce(
      (sum, item) => sum + item?.amount * item?.price,
      0
    );
    return total.toFixed(2);
  };

  const handleCoupon = (e) => {
    e.preventDefault();
    if (coupon === "laylo") {
      setVoucher((+calculateAllPrice() + +calculateAllPrice() * 0.02) * 0.2);
    } else {
      alert("Invalid coupon");
    }
    setCoupon("");
  };

  const calculateDiscountedPrice = () => {
    const total = calculateAllPrice();
    return (total - voucher).toFixed(2);
  };

  return (
    <>
      {checkout ? (
        <Checkout />
      ) : (
        <section className="cart">
          <div className="container">
            {/* top */}
            <Process title={"Cart"} />
            {/* bottom */}
            <div className="cart__bottom">
              <div className="cart__box">
                <div className="cart__box__top">
                  <p>PRODUCT</p>
                  <p>QUANTITY</p>
                  <p>PRICE</p>
                  <p>Subtotal</p>
                </div>
                <div className="cart__box__bottom">
                  {cartData.map((product) => (
                    <div key={product.id} className="cart__box__bottom__item">
                      {/*  */}
                      <div className="cart__box__bottom__item__left">
                        <Link to={`/products/${product.id}`}>
                          <img src={product?.images[0]} alt={product?.title} />
                        </Link>
                        <div>
                          <Link to={`/products/${product.id}`}>
                            <h3 title={product?.title}>{product?.title}</h3>
                          </Link>
                          <button
                            onClick={() => dispatch(removeCart(product))}
                            className="cart__box__bottom__item__remove-btn"
                          >
                            {" "}
                            <IoClose /> Remove
                          </button>
                          <div className="cart__box__bottom__item-btn hide-btn hide-item-btn">
                            <button
                              disabled={product?.amount <= 1}
                              onClick={() => dispatch(decreaseAmount(product))}
                            >
                              <FiMinus />
                            </button>
                            <span>{product?.amount}</span>
                            <button
                              disabled={
                                product?.rating?.count <= product?.amount
                              }
                              onClick={() => dispatch(increaseAmount(product))}
                            >
                              <FiPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                      {/*  */}
                      <div className="cart__box__bottom__item-btn">
                        <button
                          disabled={product?.amount <= 1}
                          onClick={() => dispatch(decreaseAmount(product))}
                        >
                          <FiMinus />
                        </button>
                        <span>{product?.amount}</span>
                        <button
                          disabled={product?.rating?.count <= product?.amount}
                          onClick={() => dispatch(increaseAmount(product))}
                        >
                          <FiPlus />
                        </button>
                      </div>
                      {/*  */}
                      <div className="cart__box-price-box">
                        <p className="cart__box__bottom__item-price">
                          ${product?.price}
                        </p>
                        <button
                          onClick={() => dispatch(removeCart(product))}
                          className="cart__box__bottom__item__remove-btn hide-btn"
                        >
                          {" "}
                          <IoClose />
                        </button>
                      </div>
                      {/*  */}
                      <p className="cart__box__bottom__item-price hide-price">
                        ${product?.price * product?.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="cart__coupon hide-coupon">
                  <h3>Have a coupon?</h3>
                  <p>Add your code for an instant cart discount</p>
                  <div className="cart__coupon__inp">
                    <RiCouponLine />
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                    />
                    <button onClick={handleCoupon}>Apply</button>
                  </div>
                </div>
                <div className="cart__summary">
                  <h3>Cart Summary</h3>
                  <div className="cart__summary__box">
                    <label htmlFor="free">
                      <div className="cart__summary__box-item">
                        <div>
                          <input id="free" type="radio" name="summary" />
                          <p>Free shipping</p>
                        </div>
                        <p>$0.0</p>
                      </div>
                    </label>
                    <label htmlFor="express">
                      <div className="cart__summary__box-item">
                        <div>
                          <input id="express" type="radio" name="summary" />
                          <p>Express shipping</p>
                        </div>
                        <p>+$15.00</p>
                      </div>
                    </label>
                    <label htmlFor="pick">
                      <div className="cart__summary__box-item">
                        <div>
                          <input id="pick" type="radio" name="summary" />
                          <p>Pick Up</p>
                        </div>
                        <p>+$21.00</p>
                      </div>
                    </label>
                  </div>
                  <div className="cart__summary__middle">
                    <div className="cart__summary__middle-first">
                      <p>Subtotal</p>
                      <p>${calculateAllPrice()}</p>
                    </div>
                    <div className="cart__summary__middle-second">
                      <p>Total</p>
                      <p>${calculateDiscountedPrice()}</p>
                    </div>
                  </div>
                  <button onClick={() => setCheckout(true)}>Checkout</button>
                </div>
              </div>
            </div>
            <div className="cart__coupon">
              <h3>Have a coupon?</h3>
              <p>Add your code for an instant cart discount</p>
              <div className="cart__coupon__inp">
                <RiCouponLine />
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button onClick={handleCoupon}>Apply</button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default memo(Cart);
