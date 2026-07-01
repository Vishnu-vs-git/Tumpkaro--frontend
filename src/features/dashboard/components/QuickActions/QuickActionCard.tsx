import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


import type { QuickAction } from "./quickActions.types";
import { Card } from "../../../../shared/components/ui/Card";

interface QuickActionCardProps {
  action: QuickAction;
}

const QuickActionCard = ({ action }: QuickActionCardProps) => {
  const navigate = useNavigate();

  const Icon = action.icon;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
    >
      <Card
        onClick={() => navigate(action.href)}
        className="group cursor-pointer p-6"
      >
        <div
          className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${action.gradient}`}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>

        <h3 className="text-xl font-semibold text-white">
          {action.title}
        </h3>

        <p className="mt-3 text-slate-400 leading-7">
          {action.description}
        </p>

        <ArrowRight className="mt-6 transition-transform group-hover:translate-x-2 text-cyan-400" />
      </Card>
    </motion.div>
  );
};

export default QuickActionCard;