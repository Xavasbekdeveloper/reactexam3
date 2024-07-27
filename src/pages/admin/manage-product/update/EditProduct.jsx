import React, { useEffect } from "react";
import { useGetCategoriesQuery } from "../../../../context/api/categoryApi";
import { useUpdateProductMutation } from "../../../../context/api/productApi";
import useGetInputValue from "../../../../hooks/useGetValue";
import { toast } from "react-toastify";

import "./updateProduct.scss";

const EditProduct = ({ editProduct, setEditProduct }) => {
  const [updateProduct, { isLoading, isSuccess }] = useUpdateProductMutation();
  const { data } = useGetCategoriesQuery();
  const { formData, setFormData, handleChange } = useGetInputValue(editProduct);

  const handleUpdate = (e) => {
    e.preventDefault();
    formData.images = editProduct.images[0].split("\n");
    updateProduct({ body: formData, id: formData.id });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully !");
      setEditProduct(null);
    }
  }, [isSuccess]);

  return (
    <section className="update-product">
      <form className="update-product__form" onSubmit={handleUpdate} action="">
        <h3>Update product</h3>
        <div className="update-product__form__input">
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
        <div className="update-product__form__input">
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
        <div className="update-product__form__input">
          <label htmlFor="image-url">Image-url</label>
          <textarea
            value={formData.images.join("\n")}
            onChange={(e) => setImages(e.target.value)}
            required
            name="images"
            id="image-url"
            placeholder="Image-url"
          ></textarea>
        </div>
        <div className="update-product__form__input">
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
            {data?.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="update-product__form__input">
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
        <div className="update-product__btns">
          <button onClick={() => setEditProduct(null)}>cancel</button>
          <button disabled={isLoading}>
            {isLoading ? "loading..." : "edit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditProduct;
