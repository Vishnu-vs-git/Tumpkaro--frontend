import { ImageIcon } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex h-[700px] items-center justify-center rounded-3xl border border-dashed border-white/10 bg-slate-900">
      <div className="text-center">
        <ImageIcon
          size={64}
          className="mx-auto text-slate-500"
        />

        <h2 className="mt-6 text-2xl font-semibold text-white">
          Generated thumbnails will appear here
        </h2>

        <p className="mt-3 text-slate-400">
          Fill out the form and click Generate Thumbnail.
        </p>
      </div>
    </div>
  );
};

export default EmptyState;