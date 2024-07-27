import React, { useEffect } from "react";
import { useUpdateCategoryMutation } from "../../../../context/api/categoryApi";
import useGetInputValue from "../../../../hooks/useGetValue";
import { toast } from "react-toastify";

const EditCAtegory = ({ editCategory, setEditCategory }) => {
  const [updateCategory, { isLoading, isSuccess }] =
    useUpdateCategoryMutation();
  const { formData, setFormData, handleChange } =
    useGetInputValue(editCategory);

  const handleUpdate = (e) => {
    e.preventDefault();
    formData.url = editCategory.url[0].split("\n");
    updateCategory({ body: formData, id: formData.id });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully !");
      setEditCategory(null);
    }
  }, [isSuccess]);

  return (
    <section className="update-product">
      <form className="update-product__form" onSubmit={handleUpdate} action="">
        <h3>Update category</h3>
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
          <label htmlFor="image-url">Image-url</label>
          <textarea
            value={formData.url.join("\n")}
            onChange={handleChange}
            required
            name="images"
            id="image-url"
            placeholder="Image-url"
          ></textarea>
        </div>
        <div className="update-product__btns">
          <button onClick={() => setEditCategory(null)}>cancel</button>
          <button disabled={isLoading}>
            {isLoading ? "loading..." : "edit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditCAtegory;
