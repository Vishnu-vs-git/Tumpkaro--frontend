import { Star } from "lucide-react";
import { motion } from "framer-motion";


import type { Testimonial } from "./testimonial.types";
import { Card } from "../../../../shared/components/ui/Card";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({
  testimonial,
}: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full p-8">
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star
              key={index}
              className="h-5 w-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <p className="mt-6 text-slate-300 leading-7">
          "{testimonial.review}"
        </p>

        <div className="mt-8 flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <h4 className="font-semibold text-white">
              {testimonial.name}
            </h4>

            <p className="text-sm text-slate-400">
              {testimonial.role}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;