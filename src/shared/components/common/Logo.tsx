import { motion } from "framer-motion";

interface LogoProps {
  showText?: boolean;
}

const Logo = ({ showText = true }: LogoProps) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <motion.div
        whileHover={{
          rotate: 10,
          scale: 1.08,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 font-bold text-white shadow-lg"
      >
        TK
      </motion.div>

      {showText && (
        <h1 className="text-lg font-bold text-white">
          ThumbKaro{" "}
          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
            AI
          </span>
        </h1>
      )}
    </div>
  );
};

export default Logo;