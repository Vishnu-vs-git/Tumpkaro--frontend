interface UploadPreviewProps {
  imageUrl: string;
  onRemove: () => void;
}

const UploadPreview = ({
  imageUrl,
  onRemove,
}: UploadPreviewProps) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
      <img
        src={imageUrl}
        alt="Preview"
        className="h-72 w-full rounded-xl object-cover"
      />

      <button
        type="button"
        onClick={onRemove}
        className="mt-4 w-full rounded-xl bg-red-500 py-3 text-white transition hover:bg-red-600"
      >
        Remove Image
      </button>
    </div>
  );
};

export default UploadPreview;