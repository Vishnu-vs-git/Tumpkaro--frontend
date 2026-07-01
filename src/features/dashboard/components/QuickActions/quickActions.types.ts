import type { LucideIcon } from "lucide-react";

export interface QuickAction {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient: string;
}