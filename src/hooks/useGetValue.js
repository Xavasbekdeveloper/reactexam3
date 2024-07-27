import { useState } from "react";

const useGetInputValue = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { formData, setFormData, handleChange };
};

export default useGetInputValue;
