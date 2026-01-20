import { useState } from "react";

const inputHandler = (schemaObj) => {
  const [inputValue, setInputValue] = useState(schemaObj || {});
  const setUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value });
    // console.log("name :", name);
    // console.log("value :", value);
  };
  return [inputValue, setUserInput];
};

export default inputHandler;
