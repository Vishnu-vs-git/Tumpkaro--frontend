import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const LoadingOverlay = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="flex h-[700px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-slate-900"
    >
      <Loader2
        size={60}
        className="animate-spin text-violet-500"
      />

      <h2 className="mt-8 text-2xl font-semibold text-white">
        Generating Thumbnail...
      </h2>

      <p className="mt-3 text-slate-400">
        AI is creating your masterpiece.
      </p>

      <div className="mt-10 h-2 w-72 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{
            width: "0%",
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            duration: 2,
          }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
        />
      </div>
    </motion.div>
  );
};

export default LoadingOverlay;