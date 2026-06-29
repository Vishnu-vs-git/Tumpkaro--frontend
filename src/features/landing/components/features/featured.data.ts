import {
  Sparkles,
  ImagePlus,
  Palette,
  Download,
  WandSparkles,
  Layers3,
} from "lucide-react";

export const features = [
  {
    id: 1,
    title: "AI Prompt Generator",
    description:
      "Generate eye-catching thumbnails using simple text prompts.",
    icon: Sparkles,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Ready-made Templates",
    description:
      "Choose from hundreds of modern YouTube thumbnail templates.",
    icon: Palette,
    className: "",
  },
  {
    id: 3,
    title: "Upload Any Image",
    description:
      "Upload your own image and let AI transform it.",
    icon: ImagePlus,
    className: "",
  },
  {
    id: 4,
    title: "AI Enhancement",
    description:
      "Improve colors, lighting and text automatically.",
    icon: WandSparkles,
    className: "md:col-span-2",
  },
  {
    id: 5,
    title: "HD Export",
    description:
      "Download thumbnails in high quality with one click.",
    icon: Download,
    className: "",
  },
  {
    id: 6,
    title: "Project Library",
    description:
      "Access all your generated thumbnails anytime.",
    icon: Layers3,
    className: "",
  },
];