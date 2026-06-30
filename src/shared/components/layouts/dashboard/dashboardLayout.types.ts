import type { LucideIcon } from "lucide-react";

export interface SidebarItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
  collapsed?: boolean;
}
export interface SidebarProps {
  collapsed: boolean;
}