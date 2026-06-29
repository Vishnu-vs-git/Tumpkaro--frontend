import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        gradient:
          "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg hover:scale-105 hover:shadow-violet-500/30",

        secondary:
          "bg-slate-800 text-white hover:bg-slate-700",

        outline:
          "border border-white/10 bg-transparent text-white hover:bg-white/5",

        ghost:
          "bg-transparent text-slate-300 hover:bg-white/10 hover:text-white",

        danger:
          "bg-red-600 text-white hover:bg-red-700",
      },

      size: {
        sm: "h-9 px-4 text-sm",

        md: "h-11 px-6 text-sm",

        lg: "h-12 px-8 text-base",
      },
    },

    defaultVariants: {
      variant: "gradient",
      size: "md",
    },
  }
);