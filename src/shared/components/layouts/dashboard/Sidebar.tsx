import { Crown } from "lucide-react";
import { motion } from "framer-motion";



import SidebarItem from "./SidebarItem";
import { dashboardNavigation } from "./dashboardNavigation";
import type { SidebarProps } from "./dashboardLayout.types";
import Logo from "../../common/Logo";
import { Button } from "../../ui/Button/Button";

const Sidebar = ({ collapsed }: SidebarProps) => {
  return (
    <motion.aside
      animate={{
        width: collapsed ? 90 : 280,
      }}
      transition={{
        duration: 0.3,
      }}
      className="hidden h-screen border-r border-white/10 bg-slate-950 lg:flex lg:flex-col"
    >
      {/* Logo */}
      <div className="border-b border-white/10 p-6">
        <Logo />

        {!collapsed && (
          <p className="mt-3 text-sm text-slate-400">
            AI Thumbnail Generator
          </p>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {dashboardNavigation.map((item) => (
          <SidebarItem
            key={item.label}
            {...item}
            collapsed={collapsed}
          />
        ))}
      </nav>

      {/* Upgrade Card */}
      {!collapsed && (
        <div className="m-4 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-600/20 to-cyan-500/10 p-5">
          <div className="mb-3 flex items-center gap-2">
            <Crown className="text-yellow-400" size={22} />

            <h3 className="font-semibold text-white">
              Upgrade to Pro
            </h3>
          </div>

          <p className="mb-5 text-sm text-slate-400">
            Unlock unlimited AI generations and premium templates.
          </p>

          <Button
            variant="gradient"
            className="w-full"
          >
            Upgrade
          </Button>
        </div>
      )}

      {/* User */}
      <div className="border-t border-white/10 p-4">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            alt="User"
            className="h-12 w-12 rounded-full"
          />

          {!collapsed && (
            <div>
              <h4 className="font-medium text-white">
                Vishnu
              </h4>

              <p className="text-sm text-slate-400">
                Free Plan
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;