import React, { memo, useEffect, useState } from "react";
import "./shop.scss";
import { useGetCategoriesQuery } from "../../context/api/categoryApi";
import { useGetProductsQuery } from "../../context/api/productApi";
import Product from "../../components/product/Product";
import { Pagination, Stack } from "@mui/material";
import ProductsLoading from "../../components/products-loading";

const Shop = () => {
  const [categoryValue, setCategoryValue] = useState("all");
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data: categoryData } = useGetCategoriesQuery();
  const { data: lengthData } = useGetProductsQuery();
  let category = categoryValue === "all" ? "" : categoryValue;
  const { data, isLoading, isFetching } = useGetProductsQuery({
    limit,
    page,
    category,
  });

  useEffect(() => {
    window.scroll(560, 560);
  }, [page]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const pageCount = Math.ceil(lengthData?.length / limit) || 0;

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <section className="shop">
      <div className="container">
        <div className="shop__top">
          <h1>Shop page</h1>
          <p>Let’s design the place you always imagined.</p>
        </div>
        <ul className="category__list">
          <li className="category__item">
            <data
              onClick={(e) => {
                setCategoryValue(e.target.value);
                setPage(1);
              }}
              className={`category__data ${
                categoryValue === "all" ? "category__data-active" : ""
              }`}
              value="all"
            >
              All
            </data>
          </li>
          {categoryData?.map((item) => (
            <li key={item.id} className="category__item">
              <data
                onClick={(e) => {
                  setCategoryValue(e.target.value);
                  setPage(1);
                }}
                className={`category__data ${
                  categoryValue === item.title ? "category__data-active" : ""
                }`}
                value={item.title}
              >
                {item.title}
              </data>
            </li>
          ))}
        </ul>
        <div className="shop__cards">
          {isLoading || isFetching ? (
            <ProductsLoading limit={limit} />
          ) : (
            data?.map((product) => (
              <Product key={product.id} data={product} isAdmin={false} />
            ))
          )}
        </div>
        <div className="shop__pagination">
          <Stack spacing={2}>
            <Pagination count={pageCount} page={page} onChange={handleChange} />
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default memo(Shop);
