import ResultCard from "./ResultCard";
import type { GeneratedResult } from "./results.types";


interface ResultGridProps {
  results: GeneratedResult[];
  onPreview:(result:GeneratedResult) => void
}

const ResultGrid = ({
  results,
  onPreview
}: ResultGridProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {results.map((result) => (
        <ResultCard
          key={result.id}
          result={result}
          onPreview={onPreview}
        />
      ))}
    </div>
  );
};

export default ResultGrid;