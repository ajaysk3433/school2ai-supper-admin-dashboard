import { useState } from "react";
import useeInputHandler from "../../../hook/input.handler";
import { loginRequest } from "./loginAPI";
import { useNavigate } from "react-router";
const LoginPage = () => {
  const [inputValue, setUserInput] = useeInputHandler();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await loginRequest(inputValue);

      if (response?.isSuccess) {
        // console.log("response", response);
        localStorage.setItem("isLogin", "true");
      }
      navigate("/dashboard");
    } catch (error) {
      setError(error.response.data.message);
      console.log("error", error);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-background">
          <form className="flex flex-col p-6" onSubmit={onSubmitHandler}>
            <label htmlFor="email">Email</label>
            <input
              required
              onChange={setUserInput}
              value={inputValue.email}
              type="email"
              name="email"
              className="outline-solid outline-2 outline-border rounded-sm mb-5 "
            />
            <label htmlFor="password">Password</label>
            <input
              required
              onChange={setUserInput}
              value={inputValue.password}
              type="password"
              name="password"
              className="outline-solid outline-2 outline-border rounded-sm mb-5 "
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
              type="submit"
              className="bg-primary rounded-sm text-white-text"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
