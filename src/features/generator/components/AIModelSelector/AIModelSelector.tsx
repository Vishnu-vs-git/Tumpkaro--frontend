import { Controller, type Control } from "react-hook-form";

import AIModelCard from "./AIModelCard";
import { aiModels } from "./aiModels.data";
import type { GenerateThumbnailFormValues } from "../../schemas/generateThumbnail.schema";

interface AIModelSelectorProps {
  control: Control<GenerateThumbnailFormValues>;
}

const AIModelSelector = ({
  control,
}: AIModelSelectorProps) => {
  return (
    <Controller
      control={control}
      name="aiModel"
      render={({ field }) => (
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white">
              AI Model
            </h2>

            <p className="mt-2 text-slate-400">
              Choose the AI model to generate your thumbnail.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {aiModels.map((model) => (
              <AIModelCard
                key={model.id}
                model={model}
                selected={field.value === model.name}
                onSelect={field.onChange}
              />
            ))}
          </div>
        </section>
      )}
    />
  );
};

export default AIModelSelector;