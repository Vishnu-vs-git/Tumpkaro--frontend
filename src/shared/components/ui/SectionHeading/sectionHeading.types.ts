import type { HTMLAttributes } from "react";


export interface SectionHeadingProps
  extends HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}