import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { weeklyAnalytics } from "./analytics.data";

const AnalyticsChart = () => {
  return (
    <div className="h-80 rounded-2xl border border-white/10 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Weekly AI Usage
      </h2>

      <ResponsiveContainer
        width="100%"
        height="90%"
      >
        <LineChart data={weeklyAnalytics}>
          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="thumbnails"
            stroke="#8B5CF6"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;