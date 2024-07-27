import React, { memo, useEffect } from "react";
import { useCreateCategoryMutation } from "../../../context/api/categoryApi";
import useGetInputValue from "../../../hooks/useGetValue";
import { toast } from "react-toastify";

import "./createCategory.scss";

const initialState = {
  title: "",
  url: "",
};

const CreateCategory = () => {
  const [createCategory, { data, isLoading, isSuccess }] =
    useCreateCategoryMutation();

  const { formData, setFormData, handleChange } =
    useGetInputValue(initialState);

  const handleCreate = (e) => {
    e.preventDefault();
    formData.url = formData.url.split("\n").map((image) => image.trim());
    createCategory(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("yaratildi");
      setFormData(initialState);
    }
  }, [isSuccess]);

  console.log(data);

  return (
    <section className="create-category">
      <h3>Create category</h3>
      <form onSubmit={handleCreate} action="" className="create-category__form">
        <div className="create-category__form__input">
          <label htmlFor="title">title</label>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="create-category__form__input">
          <label htmlFor="category-image">category img</label>
          <textarea
            required
            value={formData.url}
            onChange={handleChange}
            name="url"
            id="category-image"
          ></textarea>
        </div>
        <button disabled={isLoading}>
          {isLoading ? "loading.." : "create"}
        </button>
      </form>
    </section>
  );
};

export default memo(CreateCategory);
