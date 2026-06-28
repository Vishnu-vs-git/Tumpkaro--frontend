import { forwardRef } from "react";

import { badgeVariants } from "./badgeVariants";
import type { BadgeProps } from "./badge.types";
import { cn } from "../../../lib/utils";

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, variant, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          badgeVariants({
            variant,
          }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;