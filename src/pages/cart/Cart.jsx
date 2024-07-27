import React, { useEffect, memo } from "react";
import Process from "../../components/process/Process";
import { Outlet } from "react-router-dom";
import Empty from "../../components/empty";
import empty from "../../assets/images/empty-cart.jpg";
import { useSelector } from "react-redux";

import "./cart.scss";

const Cart = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const cartData = useSelector((state) => state.cart.value);

  return (
    <>
      {cartData.length ? (
        <section className="cart">
          <div className="container">
            {/* bottom */}
            <Outlet />
          </div>
        </section>
      ) : (
        <Empty img={empty} />
      )}
    </>
  );
};

export default memo(Cart);
