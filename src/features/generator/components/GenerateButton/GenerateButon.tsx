import { Loader2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import type { GenerateButtonProps } from "./generateButton.types";

const GenerateButton = ({
  loading = false,
}: GenerateButtonProps) => {
  return (
    <motion.button
      whileHover={{
        scale: loading ? 1 : 1.02,
      }}
      whileTap={{
        scale: loading ? 1 : 0.98,
      }}
      type="submit"
      disabled={loading}
      className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-4 text-lg font-semibold text-white shadow-lg transition disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? (
        <>
          <Loader2
            className="animate-spin"
            size={22}
          />

          Generating...
        </>
      ) : (
        <>
          <Sparkles size={22} />

          Generate Thumbnail
        </>
      )}
    </motion.button>
  );
};

export default GenerateButton;