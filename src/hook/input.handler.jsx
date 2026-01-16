import { useState } from "react";

const inputHandler = (schemaObj) => {
  const [inputValue, setInputValue] = useState(schemaObj || {});
  const setUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };
  return [inputValue, setUserInput];
};

export default inputHandler;
