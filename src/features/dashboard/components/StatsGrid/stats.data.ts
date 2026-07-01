import {
  FolderOpen,
  Image,
  Sparkles,
  Crown,
} from "lucide-react";

import type { Stat } from "./stats.types";

export const stats: Stat[] = [
  {
    id: 1,
    title: "Projects",
    value: "128",
    icon: FolderOpen,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    id: 2,
    title: "Generated",
    value: "542",
    icon: Image,
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    title: "AI Credits",
    value: "18",
    icon: Sparkles,
    color: "from-emerald-500 to-green-500",
  },
  {
    id: 4,
    title: "Current Plan",
    value: "Free",
    icon: Crown,
    color: "from-amber-500 to-orange-500",
  },
];