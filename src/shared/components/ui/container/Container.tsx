import { forwardRef } from "react";

import { cn } from "../../../lib/utils";
import type { ContainerProps } from "./container.types";

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-7xl px-6 lg:px-8",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;