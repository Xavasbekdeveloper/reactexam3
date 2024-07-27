import React, { memo, useEffect, useState } from "react";
import { useCreateProductMutation } from "../../../context/api/productApi";
import { useGetCategoriesQuery } from "../../../context/api/categoryApi";
import useGetInputValue from "../../../hooks/useGetValue";
import { useNavigate } from "react-router-dom";
import "./createProduct.scss";

const initialState = {
  title: "",
  desc: "",
  price: "",
  category: "",
};

const CreateProduct = () => {
  const [images, setImages] = useState("");
  const navigate = useNavigate();
  const { formData, setFormData, handleChange } =
    useGetInputValue(initialState);

  const [createProduct, { data, isLoading, isSuccess }] =
    useCreateProductMutation();
  const { data: categories } = useGetCategoriesQuery();

  const handleCreate = (e) => {
    e.preventDefault();
    const imagesArray = images.split("\n").map((image) => image.trim());
    formData.images = imagesArray;
    createProduct(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData(initialState);
      setImages("");
      navigate("/admin/manage-product");
    }
  }, [isSuccess]);

  return (
    <section className="create-product">
      <form className="create-product__form" onSubmit={handleCreate} action="">
        <h3>Create product</h3>
        <div className="create-product__form__input">
          <label htmlFor="title">Title</label>
          <input
            required
            value={formData.title}
            onChange={handleChange}
            type="text"
            placeholder="Title"
            name="title"
            id="title"
          />
        </div>
        <div className="create-product__form__input">
          <label htmlFor="price">Price</label>
          <input
            required
            value={formData.price}
            onChange={handleChange}
            type="number"
            placeholder="Price"
            name="price"
            id="price"
          />
        </div>
        <div className="create-product__form__input">
          <label htmlFor="image-url">Image-url</label>
          <textarea
            value={images}
            onChange={(e) => setImages(e.target.value)}
            required
            name="images"
            id="image-url"
            placeholder="Image-url"
          ></textarea>
        </div>
        <div className="create-product__form__input">
          <label htmlFor="category">Category</label>
          <select
            value={formData.category}
            onChange={handleChange}
            name="category"
            id=""
          >
            <option selected disabled value="">
              Choose Category
            </option>
            {categories?.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="create-product__form__input">
          <label htmlFor="desc">Desc</label>
          <textarea
            value={formData.desc}
            onChange={handleChange}
            required
            name="desc"
            id="desc"
            placeholder="Desc"
          ></textarea>
        </div>
        <button disabled={isLoading}>
          {isLoading ? "loading..." : "create"}
        </button>
      </form>
    </section>
  );
};

export default memo(CreateProduct);
