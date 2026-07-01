import { useState } from "react";
import EmptyState from "./EmptyState";
import LoadingOverlay from "./LoadingOverlay";
import ResultGrid from "./ResultGrid";
import type { GeneratedResult } from "./results.types";
import ImagePreviewModal from "./ImagePreviewModal";



interface ResultGalleryProps {
  loading: boolean;
  results: GeneratedResult[];
}

const ResultGallery = ({
  loading,
  results,
}: ResultGalleryProps) => {
  const [selectedImage, setSelectedImage] =
  useState<GeneratedResult | null>(null);
  if (loading) {
    return <LoadingOverlay />;
  }

  if (results.length === 0) {
    return <EmptyState />;
  }

  return (
     <>
    <ResultGrid
      results={results}
      onPreview={setSelectedImage}
    />

    <ImagePreviewModal
      open={!!selectedImage}
      image={selectedImage?.image ?? ""}
      title={selectedImage?.title ?? ""}
      onClose={() => setSelectedImage(null)}
    />
  </>
  );
};

export default ResultGallery;