import { useState } from "react";

const inputHandler = () => {
  const [inputValue, setInputValue] = useState({});
  const setUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value });
  };
  return [inputValue, setUserInput];
};

export default inputHandler;
