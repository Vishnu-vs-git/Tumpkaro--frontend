import { Check } from "lucide-react";
import { motion } from "framer-motion";
import type { AIModel } from "./aiModel.types";
import { Card } from "../../../../shared/components/ui/Card";

interface AIModelCardProps {
  model: AIModel;
  selected: boolean;
  onSelect: (value: string) => void;
}

const AIModelCard = ({
  model,
  selected,
  onSelect,
}: AIModelCardProps) => {
  const Icon = model.icon;

  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      type="button"
      onClick={() => onSelect(model.name)}
      className="text-left"
    >
      <Card
        className={`relative p-6 transition-all ${
          selected
            ? "border-violet-500 ring-2 ring-violet-500"
            : ""
        }`}
      >
        {selected && (
          <Check
            className="absolute right-4 top-4 text-green-400"
            size={18}
          />
        )}

        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20">
          <Icon className="text-violet-400" />
        </div>

        <h3 className="font-semibold text-white">
          {model.name}
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          {model.description}
        </p>
      </Card>
    </motion.button>
  );
};

export default AIModelCard;