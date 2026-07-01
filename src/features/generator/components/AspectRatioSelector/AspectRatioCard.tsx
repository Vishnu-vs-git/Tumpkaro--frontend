import { Check } from "lucide-react";
import { motion } from "framer-motion";
import type { AspectRatioOption } from "./aspectRatio.types";
import { Card } from "../../../../shared/components/ui/Card";

interface AspectRatioCardProps {
  ratio: AspectRatioOption;
  selected: boolean;
  onSelect: (value: string) => void;
}

const AspectRatioCard = ({
  ratio,
  selected,
  onSelect,
}: AspectRatioCardProps) => {
  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      type="button"
      onClick={() => onSelect(ratio.value)}
      className="text-left"
    >
      <Card
        className={`relative p-6 transition ${
          selected
            ? "border-violet-500 ring-2 ring-violet-500"
            : ""
        }`}
      >
        {selected && (
          <Check
            size={18}
            className="absolute right-4 top-4 text-green-400"
          />
        )}

        <h3 className="text-2xl font-bold text-white">
          {ratio.label}
        </h3>

        <p className="mt-2 text-slate-400">
          {ratio.description}
        </p>
      </Card>
    </motion.button>
  );
};

export default AspectRatioCard;