import { motion } from "framer-motion";

import ThumbnailCard from "./ThumbnailCard";
import { heroThumbnails } from "./hero.data";


const HeroPreview = () => {
  return (
    <div className="relative hidden h-[650px] lg:flex items-center justify-center">
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-0 top-20 w-64"
      >
        <ThumbnailCard {...heroThumbnails[0]} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-0 top-48 w-64"
      >
        <ThumbnailCard {...heroThumbnails[1]} />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="z-10 w-72"
      >
        <ThumbnailCard {...heroThumbnails[2]} />
      </motion.div>
    </div>
  );
};

export default HeroPreview;