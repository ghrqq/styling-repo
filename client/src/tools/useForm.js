import { useState } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    window.alert(JSON.stringify(values));
    // Callback will come here.
  };

  const handleChange = (event) => {
    // event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
