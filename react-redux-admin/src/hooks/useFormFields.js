import { useState } from "react";

const useFormFields = (initState) => {
  const [input, setInput] = useState(initState);

  // handle input change
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // reset handler
  const resetForm = () => {
    setInput(initState);
  };

  return { input, handleInputChange, resetForm, setInput };
};

export default useFormFields;
