import { NavLink } from "react-router-dom";
import type { SidebarItemProps } from "./dashboardLayout.types";
import { cn } from "../../../lib/utils";




const SidebarItem = ({
  label,
  href,
  icon: Icon,
}: SidebarItemProps) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300",
          isActive
            ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg"
            : "text-slate-400 hover:bg-white/5 hover:text-white"
        )
      }
    >
      <Icon size={20} />

      <span className="font-medium">
        {label}
      </span>
    </NavLink>
  );
};

export default SidebarItem;