import { useState } from "react";

const handleInput = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const setUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };
  return [inputValue, setUserInput];
};

export default handleInput;
