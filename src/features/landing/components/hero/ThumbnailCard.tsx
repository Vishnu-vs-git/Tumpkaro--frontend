import { motion } from "framer-motion";

interface ThumbnailCardProps {
  title: string;
  category: string;
  image: string;
  rotation: string;
  translate: string;
}

const ThumbnailCard = ({
  title,
  category,
  image,
  rotation,
  translate,
}: ThumbnailCardProps) => {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        w-60
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-3
        shadow-2xl
        ${rotation}
        ${translate}
      `}
    >
      <img
        src={image}
        alt={title}
        className="h-44 w-full rounded-2xl object-cover"
      />

      <div className="mt-4">
        <h3 className="font-semibold text-white">
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