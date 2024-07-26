import React, { memo } from "react";

import "./wishlist.scss";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";

const Wishlist = () => {
  const wishlistData = useSelector((state) => state.wishlist.data);

  return (
    <section className="wishlist">
      <div className="container wishlist__container">
        <h1 className="wishlist__title">Wishlist</h1>
        <div className="wishlist__cards">
          {wishlistData.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Wishlist);
