import { useState } from "react";

import StyleCard from "./StyleCard";
import { styles } from "./styles.data";

const StyleSelector = () => {
  const [selectedStyle, setSelectedStyle] =
    useState("Gaming");

  return (
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
            selected={selectedStyle === style.name}
            onSelect={setSelectedStyle}
          />
        ))}
      </div>
    </section>
  );
};

export default StyleSelector;