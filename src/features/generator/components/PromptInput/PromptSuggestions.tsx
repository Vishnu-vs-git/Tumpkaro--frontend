import { promptSuggestions } from "./promptSuggestions.data";

interface PromptSuggestionsProps {
  onSelect: (value: string) => void;
}

const PromptSuggestions = ({
  onSelect,
}: PromptSuggestionsProps) => {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {promptSuggestions.map((prompt) => (
        <button
          key={prompt}
          type="button"
          onClick={() => onSelect(prompt)}
          className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-violet-500 hover:text-white"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default PromptSuggestions;