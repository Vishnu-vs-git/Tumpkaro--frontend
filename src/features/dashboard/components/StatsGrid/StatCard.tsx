import { motion } from "framer-motion";

import type { Stat } from "./stats.types";
import { Card } from "../../../../shared/components/ui/Card";

interface StatCardProps {
  stat: Stat;
}

const StatCard = ({ stat }: StatCardProps) => {
  const Icon = stat.icon;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
    >
      <Card className="h-full p-6">
        <div
          className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${stat.color}`}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>

        <p className="text-sm text-slate-400">
          {stat.title}
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white">
          {stat.value}
        </h3>
      </Card>
    </motion.div>
  );
};

export default StatCard;