import React, { useEffect } from "react";
import { useDeleteCategoryMutation } from "../../../../context/api/categoryApi";
import { toast } from "react-toastify";

const DeleteCategory = ({ deleteCategory, setDeleteCategory }) => {
  const [categoryDelete, { isLoading, isSuccess }] =
    useDeleteCategoryMutation();

  const handleDelete = () => {
    categoryDelete(deleteCategory);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully !");
      setDeleteCategory(null);
    }
  }, [isSuccess]);

  return (
    <div className="manage-products__delete">
      <h3>Are you sure delete ?</h3>
      <div>
        <button onClick={() => setDeleteCategory(null)}>cancel</button>
        <button onClick={handleDelete} disabled={isLoading}>
          {isLoading ? "loading..." : "delete"}
        </button>
      </div>
    </div>
  );
};

export default DeleteCategory;
