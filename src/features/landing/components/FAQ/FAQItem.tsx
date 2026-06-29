import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


import type { FAQItem as FAQ } from "./faq.types";
import { Card } from "../../../../shared/components/ui/Card";

interface FAQItemProps {
  item: FAQ;
}

const FAQItem = ({ item }: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <h3 className="text-lg font-semibold text-white">
          {item.question}
        </h3>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
        >
          <ChevronDown className="text-cyan-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
          >
            <div className="px-6 pb-6 text-slate-400">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default FAQItem;