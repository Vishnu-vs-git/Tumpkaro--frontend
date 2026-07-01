import { Controller, type Control } from "react-hook-form";

import AspectRatioCard from "./AspectRatioCard";
import { aspectRatios } from "./aspectRations.data";
import type { GenerateThumbnailFormValues } from "../../schemas/generateThumbnail.schema";

interface AspectRatioSelectorProps {
  control: Control<GenerateThumbnailFormValues>;
}

const AspectRatioSelector = ({
  control,
}: AspectRatioSelectorProps) => {
  return (
    <Controller
      control={control}
      name="aspectRatio"
      render={({ field }) => (
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white">
              Aspect Ratio
            </h2>

            <p className="mt-2 text-slate-400">
              Choose the output format.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {aspectRatios.map((ratio) => (
              <AspectRatioCard
                key={ratio.id}
                ratio={ratio}
                selected={field.value === ratio.value}
                onSelect={field.onChange}
              />
            ))}
          </div>
        </section>
      )}
    />
  );
};

export default AspectRatioSelector;