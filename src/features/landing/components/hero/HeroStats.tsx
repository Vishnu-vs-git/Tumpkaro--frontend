import { motion } from "framer-motion";

import { heroStats } from "./hero.data";

const HeroStats = () => {
  return (
    <div className="grid grid-cols-3 gap-6 pt-4">
      {heroStats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            className="flex flex-col"
          >
            <div className="mb-2 flex items-center gap-2">
              <Icon className="h-5 w-5 text-cyan-400" />

              <span className="text-2xl font-bold text-white">
                {stat.value}
              </span>
            </div>

            <p className="text-sm text-slate-400">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HeroStats;