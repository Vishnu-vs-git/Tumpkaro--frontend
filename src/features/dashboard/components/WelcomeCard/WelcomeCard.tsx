import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { WelcomeCardProps } from "./WelcomeCard.types";
import { Button } from "../../../../shared/components/ui/Button/Button";
const WelcomeCard = ({ name }: WelcomeCardProps) => {
  const navigate = useNavigate();

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10"
    >
      {/* Glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2">
          <Sparkles
            size={18}
            className="text-violet-400"
          />

          <span className="text-sm text-violet-300">
            AI Powered Dashboard
          </span>
        </div>

        <h1 className="text-4xl font-bold text-white">
          {greeting},{" "}
          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
            {name}
          </span>
          👋
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          Ready to create another scroll-stopping thumbnail?
          Let AI transform your ideas into stunning visuals.
        </p>

        <div className="mt-10">
          <Button
            variant="gradient"
            size="lg"
            rightIcon={<ArrowRight size={18} />}
            onClick={() => navigate("/dashboard/generate")}
          >
            Generate Thumbnail
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default WelcomeCard;