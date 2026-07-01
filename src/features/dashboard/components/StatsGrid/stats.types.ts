import type { LucideIcon } from "lucide-react";

export interface Stat {
  id: number;
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
}