import { Routes, Route } from "react-router";
import Login from "../features/auth/login/loginPage.jsx";
const App = () => {
  return (
    <div className="bg-body">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      HELLO
    </div>
  );
};

export default App;
