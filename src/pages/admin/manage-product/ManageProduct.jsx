import React, { memo, useEffect, useState } from "react";
import { useGetProductsQuery } from "../../../context/api/productApi";
import ProductsLoading from "../../../components/products-loading";
import Product from "../../../components/product/Product";
import { Pagination, Stack } from "@mui/material";

import "./manageProduct.scss";
import DeleteProduct from "./delete/DeleteProduct";
import Modal from "../../../components/modal/Modal";
import EditProduct from "./update/EditProduct";

const ManageProduct = () => {
  const [page, setPage] = useState(1);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const limit = 12;
  const { data: lengthData } = useGetProductsQuery();
  const { data, isLoading, isFetching } = useGetProductsQuery({ limit, page });

  const pageCount = Math.ceil(lengthData?.length / limit) || 0;

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="manage-products">
        <div className="manage-products__cards">
          {isFetching || isLoading ? (
            <ProductsLoading limit={limit} />
          ) : (
            data?.map((product) => (
              <Product
                key={product.id}
                isAdmin={true}
                data={product}
                setDeleteProduct={setDeleteProduct}
                setEditProduct={setEditProduct}
              />
            ))
          )}
        </div>
        <div className="manage-products__pagination">
          <Stack spacing={2}>
            <Pagination count={pageCount} page={page} onChange={handleChange} />
          </Stack>
        </div>
      </section>
      {deleteProduct ? (
        <Modal close={setDeleteProduct}>
          <DeleteProduct
            deleteProduct={deleteProduct}
            setDeleteProduct={setDeleteProduct}
          />
        </Modal>
      ) : (
        <></>
      )}
      {editProduct ? (
        <Modal width={600} close={setEditProduct}>
          <EditProduct
            editProduct={editProduct}
            setEditProduct={setEditProduct}
          />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(ManageProduct);
