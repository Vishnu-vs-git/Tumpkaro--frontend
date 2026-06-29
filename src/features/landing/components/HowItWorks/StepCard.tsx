import { motion } from "framer-motion";
import { Card } from "../../../../shared/components/ui/Card";


interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const StepCard = ({
  step,
  title,
  description,
  icon: Icon,
}: StepCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{ duration: 0.3 }}
    >
      <Card className="relative h-full p-8">
        <div className="absolute right-6 top-6 text-6xl font-bold text-white/5">
          {step}
        </div>

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
          <Icon className="h-7 w-7 text-white" />
        </div>

        <h3 className="mb-4 text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="text-slate-400">
          {description}
        </p>
      </Card>
    </motion.div>
  );
};

export default StepCard;