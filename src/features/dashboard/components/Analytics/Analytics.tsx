import AnalyticsChart from "./AnalyticsChart";
import AnalyticsSummary from "./AnalyticsSummary";

const Analytics = () => {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          AI Usage Analytics
        </h2>

        <p className="mt-2 text-slate-400">
          Track your thumbnail generation activity.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AnalyticsChart />
        </div>

        <AnalyticsSummary />
      </div>
    </section>
  );
};

export default Analytics;