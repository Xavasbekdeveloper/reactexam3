import React, { memo, useEffect } from "react";
import { useDeleteProductMutation } from "../../../../context/api/productApi";
import { toast } from "react-toastify";

const DeleteProduct = ({ deleteProduct, setDeleteProduct }) => {
  const [productDelete, { isLoading, isSuccess }] = useDeleteProductMutation();

  const handleDelete = () => {
    productDelete(deleteProduct.id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully !");
      setDeleteProduct(null);
    }
  }, [isSuccess]);

  return (
    <div className="manage-products__delete">
      <h3>Are you sure delete ?</h3>
      <div>
        <button onClick={() => setDeleteProduct(null)}>cancel</button>
        <button onClick={handleDelete} disabled={isLoading}>
          {isLoading ? "loading..." : "delete"}
        </button>
      </div>
    </div>
  );
};

export default memo(DeleteProduct);
