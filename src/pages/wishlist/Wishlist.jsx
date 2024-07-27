import React, { memo } from "react";
import Product from "../../components/product/Product";
import { useSelector } from "react-redux";
import Empty from "../../components/empty";
import emptyImg from "../../assets/images/wishlist.webp";

import "./wishlist.scss";

const Wishlist = () => {
  const wishlistData = useSelector((state) => state.wishlist.data);

  return (
    <>
      {wishlistData.length ? (
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
      ) : (
        <Empty img={emptyImg} />
      )}
    </>
  );
};

export default memo(Wishlist);
