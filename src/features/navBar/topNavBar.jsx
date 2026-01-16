import {
  BellIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineBell } from "react-icons/hi2";

export default function Topbar() {
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
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="h-8 w-8 rounded-full object-cover"
        />
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
