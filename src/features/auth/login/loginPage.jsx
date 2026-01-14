// import useHandleInput from "./handleInput";
const Login = () => {
  // const [inputValue, setUserInput] = useHandleInput();
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-background">
          <form className="flex flex-col p-6">
            <label htmlFor="email">Email</label>
            <input
              // onChange={setUserInput}
              type="email"
              name="email"
              className="outline-solid outline-2 outline-border rounded-sm mb-5 "
            />
            <label htmlFor="password">Password</label>
            <input
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

export default Login;
