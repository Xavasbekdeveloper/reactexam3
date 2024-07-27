import React, { memo, useState } from "react";
import { useGetCategoriesQuery } from "../../../context/api/categoryApi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import EditCAtegory from "./update/EditCAtegory";
import Modal from "../../../components/modal/Modal";
import DeleteCategory from "./delete/DeleteCategory";

import "./manageCategory.scss";

const ManageCategory = () => {
  const [deleteCategory, setDeleteCategory] = useState(null);
  const [editCategory, setEditCategory] = useState(null);
  const { data, isLoading, isFetching } = useGetCategoriesQuery();

  return (
    <>
      <section className="manage-category">
        <div className="manage-category__cards">
          {data?.map((category) => (
            <div key={category.id} className="manage-category-item">
              <div className="manage-category-item-img">
                <img src={category?.url} alt={category?.title} />
              </div>
              <div className="manage-category-item-info">
                <h3>{category?.title}</h3>
                <div className="manage-category__btns">
                  <button onClick={() => setEditCategory(category)}>
                    <FiEdit />
                  </button>
                  <button onClick={() => setDeleteCategory(category.id)}>
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {deleteCategory ? (
        <Modal close={setDeleteCategory}>
          <DeleteCategory
            deleteCategory={deleteCategory}
            setDeleteCategory={setDeleteCategory}
          />
        </Modal>
      ) : (
        <></>
      )}
      {editCategory ? (
        <Modal close={setEditCategory}>
          <EditCAtegory
            editCategory={editCategory}
            setEditCategory={setEditCategory}
          />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(ManageCategory);
