import React, { memo } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../context/api/productApi";
import Product from "../product/Product";
import ProductsLoading from "../products-loading";

import "./products.scss";

const Products = () => {
  const limit = 10;
  const page = 1;
  const { data, isLoading } = useGetProductsQuery({ limit, page });

  return (
    <section className="products max-container">
      <div className="container">
        <div className="products__top ">
          <h2 className="products__title">New Arrivals</h2>
          <Link className="products__link" to={"/shop"}>
            More Products <FaArrowRightLong />
          </Link>
        </div>
        <div className="products__cards">
          {isLoading ? (
            <ProductsLoading limit={limit} />
          ) : (
            data?.map((product) => <Product key={product.id} data={product} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(Products);
