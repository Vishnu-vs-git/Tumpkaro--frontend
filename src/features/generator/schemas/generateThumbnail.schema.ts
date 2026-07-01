import { z } from "zod";

export const generateThumbnailSchema = z.object({
  prompt: z
    .string()
    .trim()
    .min(10, "Prompt must be at least 10 characters.")
    .max(1000, "Prompt cannot exceed 1000 characters."),

  style: z.string(),

  aspectRatio: z.string(),

  aiModel: z.string(),

  image: z
    .instanceof(File)
    .optional()
    .or(z.null()),
});

export type GenerateThumbnailFormValues =
  z.infer<typeof generateThumbnailSchema>;