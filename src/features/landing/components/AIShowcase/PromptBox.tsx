import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface PromptBoxProps {
  prompt: string;
}

const PromptBox = ({ prompt }: PromptBoxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto max-w-4xl rounded-3xl border border-violet-500/20 bg-slate-900/70 p-6 backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center gap-2 text-violet-400">
        <Sparkles className="h-5 w-5" />
        <span className="font-semibold">AI Prompt</span>
      </div>

      <p className="text-lg leading-8 text-slate-300">
        {prompt}
      </p>
    </motion.div>
  );
};

export default PromptBox;