import {
  Sparkles,
  LayoutTemplate,
  FolderOpen,
  Users,
} from "lucide-react";

import type { QuickAction } from "./quickActions.types";

export const quickActions: QuickAction[] = [
  {
    id: 1,
    title: "Generate Thumbnail",
    description: "Create AI-powered thumbnails instantly.",
    icon: Sparkles,
    href: "/dashboard/generate",
    gradient: "from-violet-600 to-fuchsia-500",
  },
  {
    id: 2,
    title: "Templates",
    description: "Start from professional templates.",
    icon: LayoutTemplate,
    href: "/dashboard/templates",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    title: "My Projects",
    description: "Continue editing saved thumbnails.",
    icon: FolderOpen,
    href: "/dashboard/projects",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    id: 4,
    title: "Community",
    description: "Explore creations from other users.",
    icon: Users,
    href: "/dashboard/community",
    gradient: "from-orange-500 to-amber-500",
  },
];