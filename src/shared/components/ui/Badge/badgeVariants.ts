import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-all",
  {
    variants: {
      variant: {
        default:
          "border border-white/10 bg-white/5 text-slate-200",

        gradient:
          "bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-violet-500/20 text-violet-300",

        success:
          "bg-green-500/15 border border-green-500/20 text-green-400",

        warning:
          "bg-yellow-500/15 border border-yellow-500/20 text-yellow-400",

        danger:
          "bg-red-500/15 border border-red-500/20 text-red-400",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);