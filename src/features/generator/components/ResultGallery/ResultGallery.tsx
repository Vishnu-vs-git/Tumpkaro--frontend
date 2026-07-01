import EmptyState from "./EmptyState";
import LoadingOverlay from "./LoadingOverlay";

interface ResultGalleryProps {
  loading: boolean;
}

const ResultGallery = ({
  loading,
}: ResultGalleryProps) => {
  if (loading) {
    return <LoadingOverlay />;
  }

  return <EmptyState />;
};

export default ResultGallery;