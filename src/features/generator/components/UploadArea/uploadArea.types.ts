import type { Control } from "react-hook-form";
import type { GenerateThumbnailFormValues } from "../../schemas/generateThumbnail.schema";

export interface UploadAreaProps {
  control: Control<GenerateThumbnailFormValues>;
}