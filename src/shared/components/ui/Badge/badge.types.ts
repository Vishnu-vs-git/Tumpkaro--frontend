import type { HTMLAttributes } from "react";


export type BadgeVariant =
  | "default"
  | "gradient"
  | "success"
  | "warning"
  | "danger";

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}