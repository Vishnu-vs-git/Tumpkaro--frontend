import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card } from "../../../../shared/components/ui/Card";



interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className,
}: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Card className="group h-full p-8">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
          <Icon className="h-7 w-7 text-white" />
        </div>

        <h3 className="mb-3 text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="text-slate-400">
          {description}
        </p>

        <ArrowUpRight className="mt-8 h-6 w-6 text-cyan-400 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Card>
    </motion.div>
  );
};

export default FeatureCard;