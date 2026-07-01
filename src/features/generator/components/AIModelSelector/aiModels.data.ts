import {
  Brain,
  Bot,
  Sparkles,
} from "lucide-react";

import type { AIModel } from "./aiModel.types";

export const aiModels: AIModel[] = [
  {
    id: 1,
    name: "Gemini",
    description: "Fast • Balanced",
    icon: Sparkles,
  },
  {
    id: 2,
    name: "GPT Image",
    description: "High Quality",
    icon: Brain,
  },
  {
    id: 3,
    name: "Stable Diffusion XL",
    description: "Creative & Artistic",
    icon: Bot,
  },
];