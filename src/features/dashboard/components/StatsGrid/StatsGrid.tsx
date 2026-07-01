import StatCard from "./StatCard";
import { stats } from "./stats.data";

const StatsGrid = () => {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          stat={stat}
        />
      ))}
    </section>
  );
};

export default StatsGrid;