import { motion } from "framer-motion";

interface ThumbnailCardProps {
  title: string;
  category: string;
  image: string;
}

const ThumbnailCard = ({
  title,
  category,
  image,
}: ThumbnailCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.04,
        rotate: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-2xl"
    >
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="space-y-1 p-5">
        <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs text-violet-300">
          AI Generated
        </span>

        <h3 className="pt-2 text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="text-sm text-slate-400">
          {category}
        </p>
      </div>
    </motion.div>
  );
};

export default ThumbnailCard;