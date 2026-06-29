import { Check } from "lucide-react";
import { motion } from "framer-motion";


import type { PricingPlan } from "./pricing.types";
import { Card } from "../../../../shared/components/ui/Card";
import { Button } from "../../../../shared/components/ui/Button/Button";

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className={`relative h-full p-8 ${
          plan.popular
            ? "border-violet-500 shadow-[0_0_40px_rgba(124,58,237,.3)]"
            : ""
        }`}
      >
        {plan.popular && (
          <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-1 text-sm font-medium text-white">
            Most Popular
          </div>
        )}

        <h3 className="text-2xl font-bold text-white">
          {plan.name}
        </h3>

        <p className="mt-2 text-slate-400">
          {plan.description}
        </p>

        <div className="mt-8 flex items-end gap-2">
          <span className="text-5xl font-bold text-white">
            {plan.price}
          </span>

          <span className="pb-2 text-slate-400">
            {plan.period}
          </span>
        </div>

        <div className="my-8 space-y-4">
          {plan.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <Check className="h-5 w-5 text-cyan-400" />

              <span className="text-slate-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <Button
          className="w-full"
          variant={plan.popular ? "gradient" : "outline"}
        >
          {plan.buttonText}
        </Button>
      </Card>
    </motion.div>
  );
};

export default PricingCard;