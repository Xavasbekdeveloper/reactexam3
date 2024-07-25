import React, { memo } from "react";

const Process = ({ title }) => {
  return (
    <div className="cart__top">
      <h1>{title}</h1>
      <div className="cart__process">
        <div className="cart__process__item">
          <p>1</p>
          <p>Shopping Cart</p>
        </div>
        <div className="cart__process__item">
          <p>2</p>
          <p>Checkout Details</p>
        </div>
        <div className="cart__process__item">
          <p>3</p>
          <p>Order Complete</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Process);
