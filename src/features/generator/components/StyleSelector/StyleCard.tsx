import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "../../../../shared/components/ui/Card";
import type { StyleOption } from ".";




interface StyleCardProps {
  style: StyleOption;
  selected: boolean;
  onSelect: (value: string) => void;
}

const StyleCard = ({
  style,
  selected,
  onSelect,
}: StyleCardProps) => {
  const Icon = style.icon;

  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      type="button"
      onClick={() => onSelect(style.name)}
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

        <div
          className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${style.gradient}`}
        >
          <Icon className="text-white" />
        </div>

        <h3 className="font-semibold text-white">
          {style.name}
        </h3>
      </Card>
    </motion.button>
  );
};

export default StyleCard;