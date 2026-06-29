import { motion } from "framer-motion";



import TrustedStat from "./TrustedStat";
import { platforms, stats } from "./trusted.data";

import { SectionHeading } from "../../../../shared/components/ui/SectionHeading";
import { Container } from "../../../../shared/components/ui/container";

const TrustedBy = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Trusted Worldwide"
          title="Trusted by Thousands of Creators"
          description="Helping YouTubers, marketers, and creators generate eye-catching thumbnails with AI."
        />

        {/* Platforms */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
          {platforms.map((platform) => {
            const Icon = platform.icon;

            return (
              <motion.div
                key={platform.id}
                whileHover={{
                  scale: 1.08,
                }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"
              >
                <Icon className="h-6 w-6 text-cyan-400" />

                <span className="text-white">
                  {platform.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <TrustedStat
              key={stat.id}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustedBy;