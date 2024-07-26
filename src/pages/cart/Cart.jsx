import React, { useEffect, memo } from "react";
import Process from "../../components/process/Process";
import { Outlet } from "react-router-dom";

import "./cart.scss";

const Cart = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="cart">
        <div className="container">
          {/* bottom */}
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default memo(Cart);
