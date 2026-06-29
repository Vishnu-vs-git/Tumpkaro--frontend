import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  before: string;
  after: string;
}

const BeforeAfter = ({ before, after }: Props) => {
  return (
    <div className="mt-16 grid items-center gap-8 md:grid-cols-3">
      <motion.img
        whileHover={{ scale: 1.03 }}
        src={before}
        alt="Before"
        className="rounded-3xl border border-white/10"
      />

      <div className="flex justify-center">
        <ArrowRight className="h-10 w-10 text-violet-400" />
      </div>

      <motion.img
        whileHover={{ scale: 1.03 }}
        src={after}
        alt="After"
        className="rounded-3xl border border-violet-500/30 shadow-[0_0_50px_rgba(124,58,237,0.35)]"
      />
    </div>
  );
};

export default BeforeAfter;