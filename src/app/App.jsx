import { Routes, Route } from "react-router";
import Login from "../features/auth/login/loginPage.jsx";
import Dashboard from "../features/dashboard/dashboardPage.js";
import NavBar from "../features/navBar/navBar.jsx";
import SchoolOnboarding from "../features/schoolOnboarding/schoolOnboardingPage.jsx";
import School from "../features/school/page/schoolPage.jsx";
import SchoolEditePage from "../features/school/page/schoolViewPage.jsx";
const App = () => {
  return (
    <div className="bg-body">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<NavBar />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/school">
            <Route index element={<School />} />

            <Route path="view/:id" element={<SchoolEditePage />} />
          </Route>
          <Route path="/school-onboarding" element={<SchoolOnboarding />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
