import SideNavBar from "./sideNavBar/sideNavBarPage";
import TopBar from "./topNavBar";
import { Outlet } from "react-router";
const NavBar = () => {
  return (
    <div className="flex flex-row">
      <div>
        <SideNavBar />
      </div>
      <div className="grow">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
