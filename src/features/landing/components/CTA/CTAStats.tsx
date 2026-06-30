import { Sparkles, Users, Image } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "25K+",
    label: "Creators",
  },
  {
    icon: Image,
    value: "500K+",
    label: "AI Thumbnails",
  },
  {
    icon: Sparkles,
    value: "98%",
    label: "Satisfaction",
  },
];

const CTAStats = () => {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="flex flex-col items-center"
          >
            <Icon className="mb-3 h-8 w-8 text-cyan-400" />

            <h3 className="text-3xl font-bold text-white">
              {stat.value}
            </h3>

            <p className="text-slate-400">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CTAStats;