import { Sparkles, Trash2 } from "lucide-react";

import CharacterCounter from "./CharacterCounter";
import PromptSuggestions from "./PromptSuggestions";
import type { PromptInputProps } from "./promptInput.types";

const PromptInput = ({
  value,
  onChange,
  maxLength = 1000,
}: PromptInputProps) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="text-violet-400" />

        <h2 className="font-semibold text-white">
          Describe Your Thumbnail
        </h2>
      </div>

      <textarea
        rows={6}
        value={value}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Describe the thumbnail you want..."
        className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950 p-5 text-white outline-none transition focus:border-violet-500"
      />

      <PromptSuggestions
        onSelect={(text) => onChange(text)}
      />

      <div className="mt-6 flex items-center justify-between">
        <CharacterCounter
          current={value.length}
          max={maxLength}
        />

        <button
          type="button"
          onClick={() => onChange("")}
          className="flex items-center gap-2 rounded-lg px-4 py-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
        >
          <Trash2 size={18} />
          Clear
        </button>
      </div>
    </div>
  );
};

export default PromptInput;