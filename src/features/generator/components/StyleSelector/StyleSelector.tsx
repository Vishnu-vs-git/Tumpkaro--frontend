import { Controller, type Control } from "react-hook-form";

import StyleCard from "./StyleCard";
import { styles } from "./styles.data";
import type { GenerateThumbnailFormValues } from "../../schemas/generateThumbnail.schema";

interface StyleSelectorProps {
  control: Control<GenerateThumbnailFormValues>;
}

const StyleSelector = ({
  control,
}: StyleSelectorProps) => {
  return (
    <Controller
      control={control}
      name="style"
      render={({ field }) => (
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white">
              Choose a Style
            </h2>

            <p className="mt-2 text-slate-400">
              Select the style that best matches your content.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {styles.map((style) => (
              <StyleCard
                key={style.id}
                style={style}
                selected={field.value === style.name}
                onSelect={field.onChange}
              />
            ))}
          </div>
        </section>
      )}
    />
  );
};

export default StyleSelector;