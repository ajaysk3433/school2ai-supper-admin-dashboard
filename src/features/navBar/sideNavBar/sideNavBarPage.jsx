import { IoHomeOutline, IoSchoolOutline } from "react-icons/io5";

import NavItem from "./sideNavBarItem";

const SideNavBar = () => {
  return (
    <aside className="h-screen w-64 bg-background  border-r border-slate-200">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5 text-xl font-bold">
        School2AI
      </div>

      {/* Navigation */}
      <nav className="mt-4 px-3 space-y-1">
        <NavItem to="/dashboard" icon={<IoHomeOutline />} label="Dashboard" />
        <NavItem
          to="/school-onboarding"
          icon={<IoSchoolOutline />}
          label="School Onboarding"
        />
      </nav>
    </aside>
  );
};

export default SideNavBar;
