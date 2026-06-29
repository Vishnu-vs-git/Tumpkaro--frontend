import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "rounded-3xl transition-all duration-300",
  {
    variants: {
      variant: {
        glass:
          "border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/30",

        outline:
          "border border-white/10 bg-transparent",

        gradient:
          "bg-gradient-to-br from-violet-600/20 to-cyan-500/20 border border-violet-500/20",

        elevated:
          "bg-slate-900 border border-white/10 shadow-2xl hover:-translate-y-1",
      },
    },

    defaultVariants: {
      variant: "glass",
    },
  }
);