import React, { memo } from "react";
import { useLocation } from "react-router-dom";

const Process = ({ title }) => {
  const pathnames = ["view", "checkout", "completed"];
  let { pathname } = useLocation();
  pathname = pathname.split("/")[2];
  let index = pathnames.findIndex((text) => text === pathname);

  return (
    <div className="cart__top">
      <h1>{title}</h1>
      <div className="cart__process">
        <div
          className={`cart__process__item ${
            index > 0
              ? "cart__process-completed"
              : index === 0
              ? "cart__process-active"
              : "cart__process-disabled"
          }`}
        >
          <p>1</p>
          <p>Shopping Cart</p>
        </div>
        <div
          className={`cart__process__item ${
            index > 1
              ? "cart__process-completed"
              : index === 1
              ? "cart__process-active"
              : "cart__process-disabled"
          }`}
        >
          <p>2</p>
          <p>Checkout Details</p>
        </div>
        <div
          className={`cart__process__item ${
            index > 2
              ? "cart__process-completed"
              : index === 2
              ? "cart__process-active"
              : "cart__process-disabled"
          }`}
        >
          <p>3</p>
          <p>Order Complete</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Process);
