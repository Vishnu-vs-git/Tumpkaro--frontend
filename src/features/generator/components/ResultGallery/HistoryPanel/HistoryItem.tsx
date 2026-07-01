import type { HistoryItem as History } from "./history.types";

interface HistoryItemProps {
  item: History;
}

const HistoryItem = ({ item }: HistoryItemProps) => {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-4 rounded-xl p-3 transition hover:bg-white/5"
    >
      <img
        src={item.thumbnail}
        alt={item.title}
        className="h-16 w-20 rounded-lg object-cover"
      />

      <div className="flex-1 text-left">
        <h3 className="font-medium text-white">
          {item.title}
        </h3>

        <p className="text-sm text-slate-400">
          {item.createdAt}
        </p>
      </div>
    </button>
  );
};

export default HistoryItem;