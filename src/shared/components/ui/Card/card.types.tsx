import type { HTMLAttributes } from "react";


export type CardVariant =
  | "glass"
  | "outline"
  | "gradient"
  | "elevated";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}