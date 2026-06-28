import { forwardRef } from "react";
import type { SectionHeadingProps } from "./sectionHeading.types";
import { cn } from "../../../lib/utils";
import { Badge } from "../Badge";




const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  (
    {
      badge,
      title,
      description,
      center = true,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "space-y-6",
          center && "text-center",
          className
        )}
        {...props}
      >
        {badge && (
          <Badge
            variant="gradient"
            className="mx-auto w-fit"
          >
            {badge}
          </Badge>
        )}

        <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h2>

        {description && (
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-400">
            {description}
          </p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = "SectionHeading";

export default SectionHeading;