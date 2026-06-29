import { forwardRef } from "react";
import type { CardProps } from "./card.types";
import { cardVariants } from "./cardvariants";
import { cn } from "../../../lib/utils";



const Card = forwardRef<HTMLDivElement, CardProps >(
  ({ children, variant, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({
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

Card.displayName = "Card";

export default Card;