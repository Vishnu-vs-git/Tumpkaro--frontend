import { motion } from "framer-motion";

import { particles } from "./hero.data";

const FloatingParticles = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{
            opacity: 0.3,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          className="absolute rounded-full bg-cyan-400 shadow-[0_0_18px_#22d3ee]"
        />
      ))}
    </div>
  );
};

export default FloatingParticles;