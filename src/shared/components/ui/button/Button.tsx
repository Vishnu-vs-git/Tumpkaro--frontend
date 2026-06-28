import { forwardRef } from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/shared/lib/utils";
import type { ButtonProps } from "./Button.types";
import { buttonVariants } from "./ButtonVariants";



const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      loading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          buttonVariants({
            variant,
            size,
          }),
          className
        )}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          leftIcon
        )}

        <span>{children}</span>

        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;