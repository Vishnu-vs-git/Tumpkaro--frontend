import QuickActionCard from "./QuickActionCard";
import { quickActions } from "./quickActions.data";

const QuickActions = () => {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="mt-2 text-slate-400">
          Jump into the most common tasks.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {quickActions.map((action) => (
          <QuickActionCard
            key={action.id}
            action={action}
          />
        ))}
      </div>
    </section>
  );
};

export default QuickActions;