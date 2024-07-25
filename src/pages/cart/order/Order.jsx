import React, { memo } from "react";
import Process from "../../../components/process/Process";
import { useSelector } from "react-redux";

import "./order.scss";

const Order = ({ total }) => {
  const cartData = useSelector((state) => state.cart.value);
  return (
    <>
      <Process title={"Complete"} />
      <div className="order">
        <p>Than you! 🎉</p>
        <h2>Your order has been received</h2>
        <div className="order__images">
          {cartData?.map((product) => (
            <div className="order__image">
              <img src={product.images[0]} alt={product.title} />
              <span>{product.amount}</span>
            </div>
          ))}
          <div className="order__middle">
            <ul>
              <li>Order code:</li>
              <li>Date:</li>
              <li>Total:</li>
              <li>Payment method:</li>
            </ul>
            <ul>
              <li>#1234i1243_123</li>
              <li>October 19. 2024</li>
              <li>{total}</li>
              <li>Credit card</li>
            </ul>
          </div>
          <button>Purchase history</button>
        </div>
      </div>
    </>
  );
};

export default memo(Order);
