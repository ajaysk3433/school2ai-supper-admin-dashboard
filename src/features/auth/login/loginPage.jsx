import useeInputHandler from "../../../hook/input.handler";
import { loginRequest } from "./loginAPI";
import { useNavigate } from "react-router";
const LoginPage = () => {
  const [inputValue, setUserInput] = useeInputHandler();
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await loginRequest(inputValue);
    console.log(response);
    navigate("/dashboard");
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-background">
          <form className="flex flex-col p-6" onSubmit={onSubmitHandler}>
            <label htmlFor="email">Email</label>
            <input
              onChange={setUserInput}
              value={inputValue.email}
              type="email"
              name="email"
              className="outline-solid outline-2 outline-border rounded-sm mb-5 "
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={setUserInput}
              value={inputValue.password}
              type="password"
              name="password"
              className="outline-solid outline-2 outline-border rounded-sm mb-5 "
            />
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
