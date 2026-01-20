import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineBell } from "react-icons/hi2";
import { logout } from "./logoutAPI";
import { useNavigate } from "react-router";
export default function Topbar() {
  const navigate = useNavigate();
  const onLogout = async () => {
    try {
      const data = await logout();
      if (data.isSuccess) {
        localStorage.removeItem("isLogin");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-background px-6">
      {/* Left */}
      <h1 className="text-lg font-semibold text-slate-800">Dashboard</h1>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Icons */}

        <IconButton>
          <IoSettingsOutline className="h-5 w-5" />
        </IconButton>
        {/* Notifications */}

        <div className="relative">
          <IconButton>
            <HiOutlineBell className="h-5 w-5" />
          </IconButton>
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
            6
          </span>
        </div>

        {/* Avatar */}
        {/* Avatar with Logout */}
        <div className="relative group">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="h-8 w-8 cursor-pointer rounded-full object-cover"
          />

          {/* Dropdown */}
          <div className="invisible absolute right-0 top-10 z-50 w-32 rounded-md border border-slate-200 bg-white shadow-md opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
            <button
              onClick={onLogout}
              className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function IconButton({ children }) {
  return (
    <button className="rounded-full p-2 hover:bg-gradient-to-r from-primary to-secondary hover:text-white-text transition">
      {children}
    </button>
  );
}
