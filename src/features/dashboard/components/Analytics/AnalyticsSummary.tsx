import {
  Sparkles,
  TrendingUp,
  Crown,
  Zap,
} from "lucide-react";

const items = [
  {
    icon: Sparkles,
    label: "Generated",
    value: "42",
  },
  {
    icon: Zap,
    label: "Credits Left",
    value: "18",
  },
  {
    icon: Crown,
    label: "Most Used",
    value: "Gaming",
  },
  {
    icon: TrendingUp,
    label: "Growth",
    value: "+24%",
  },
];

const AnalyticsSummary = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900 p-5"
          >
            <div className="rounded-xl bg-violet-600/20 p-3">
              <Icon className="text-violet-400" />
            </div>

            <div>
              <p className="text-sm text-slate-400">
                {item.label}
              </p>

              <h3 className="text-xl font-bold text-white">
                {item.value}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnalyticsSummary;