import { Routes, Route } from "react-router";
import Login from "../features/auth/login/loginPage.jsx";
import Dashboard from "../features/dashboard/dashboardPage.js";
import SideNavBar from "../features/navBar/navBar.jsx";
const App = () => {
  return (
    <div className="bg-body">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<SideNavBar />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
