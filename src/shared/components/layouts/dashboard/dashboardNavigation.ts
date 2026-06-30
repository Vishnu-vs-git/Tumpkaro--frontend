import {
  LayoutDashboard,
  Sparkles,
  FolderOpen,
  Image,
  Users,
  CreditCard,
  Settings,
} from "lucide-react";

export const dashboardNavigation = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Generate",
    href: "/dashboard/generate",
    icon: Sparkles,
  },
  {
    label: "Projects",
    href: "/dashboard/projects",
    icon: FolderOpen,
  },
  {
    label: "Templates",
    href: "/dashboard/templates",
    icon: Image,
  },
  {
    label: "Community",
    href: "/dashboard/community",
    icon: Users,
  },
  {
    label: "Subscription",
    href: "/dashboard/subscription",
    icon: CreditCard,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];