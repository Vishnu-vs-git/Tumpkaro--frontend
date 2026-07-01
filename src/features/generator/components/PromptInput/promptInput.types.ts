import {
  type Control,
  type FieldErrors,
} from "react-hook-form";
import type { GenerateThumbnailFormValues } from "../../schemas/generateThumbnail.schema";



export interface PromptInputProps {
  control: Control<GenerateThumbnailFormValues>;
  errors: FieldErrors<GenerateThumbnailFormValues>;
  maxLength?: number;
}