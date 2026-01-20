import { useEffect } from "react";
import SideNavBar from "./sideNavBar/sideNavBarPage";
import TopBar from "./topNavBar";
import { Outlet } from "react-router";
import { useNavigate } from "react-router";
const NavBar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin") === "true";

    if (!isLogin) {
      navigate("/");
    }
  }, []);
  return (
    <div className="flex fixed inset-0">
      <SideNavBar />

      <div className="flex flex-col flex-1">
        <TopBar />

        {/* Scrollable area */}
        <div className="flex-1 overflow-y-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
