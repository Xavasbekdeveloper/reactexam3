import React, { memo, useEffect } from "react";
import Process from "../../../components/process/Process";
import { useSelector } from "react-redux";

import "./order.scss";

const Order = ({ total }) => {
  const cartData = useSelector((state) => state.cart.value);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <section className="order container">
      <div className="container">
        <Process title={"Complete"} />
        <div className="order__container">
          <p className="order__text">Than you! 🎉</p>
          <h2 className="order__title">Your order has been received</h2>
          <div className="order__images">
            {cartData?.map((product) => (
              <div key={product.id} className="order__image">
                <img src={product.images[0]} alt={product.title} />
                <span>{product.amount}</span>
              </div>
            ))}
          </div>
          <div className="order__middle">
            <ul className="order__middle-first">
              <li>Order code:</li>
              <li>Date:</li>
              <li>Total:</li>
              <li>Payment method:</li>
            </ul>
            <ul className="order__middle-second">
              <li>#1234i1243_123</li>
              <li>October 19. 2024</li>
              <li>{total}</li>
              <li>Credit card</li>
            </ul>
          </div>
          <button>Purchase history</button>
        </div>
      </div>
    </section>
  );
};

export default memo(Order);
