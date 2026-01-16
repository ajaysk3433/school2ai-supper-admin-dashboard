import { NavLink } from "react-router";
const NavItem = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex w-full items-center gap-3 rounded-lg px-4 py-2 text-sm transition
        ${
          isActive
            ? "bg-gradient-to-r from-primary to-secondary text-white"
            : "hover:bg-slate-700 hover:bg-gradient-to-r from-primary to-secondary hover:text-white"
        }`
      }
    >
      <span className="h-5 w-5">{icon}</span>
      {label}
    </NavLink>
  );
};

export default NavItem;
