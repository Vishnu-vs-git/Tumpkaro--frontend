import HistoryItem from "./HistoryItem";
import { mockHistory } from "./history.data";

const HistoryPanel = () => {
  return (
    <div className="mb-8 rounded-2xl border border-white/10 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Recent Generations
      </h2>

      <div className="space-y-4">
        {mockHistory.map((item) => (
          <HistoryItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default HistoryPanel;