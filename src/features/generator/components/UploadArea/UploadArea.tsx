import { useState } from "react";
import { Controller } from "react-hook-form";
import { ImagePlus } from "lucide-react";

import type { UploadAreaProps } from "./uploadArea.types";
import UploadPreview from "./UploadPreview";

const UploadArea = ({
  control,
}: UploadAreaProps) => {
  const [preview, setPreview] = useState("");

  return (
    <Controller
      control={control}
      name="image"
      render={({ field }) => (
        <>
          {preview ? (
            <UploadPreview
              imageUrl={preview}
              onRemove={() => {
                setPreview("");
                field.onChange(null);
              }}
            />
          ) : (
            <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-white/10 bg-slate-900 p-12 transition hover:border-violet-500">
              <ImagePlus
                size={50}
                className="mb-5 text-violet-400"
              />

              <h3 className="text-xl font-semibold text-white">
                Upload Reference Image
              </h3>

              <p className="mt-3 text-slate-400">
                Drag & Drop or Browse
              </p>

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (!file) return;

                  field.onChange(file);

                  setPreview(
                    URL.createObjectURL(file)
                  );
                }}
              />
            </label>
          )}
        </>
      )}
    />
  );
};

export default UploadArea;