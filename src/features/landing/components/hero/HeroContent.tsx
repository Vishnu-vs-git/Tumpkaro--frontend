import { Badge } from "../../../../shared/components/ui/Badge";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";


const HeroContent = () => {
  return (
    <div className="flex flex-col gap-8">
      <Badge variant="gradient">
        ✨ AI Powered Thumbnail Generator
      </Badge>

      <div className="space-y-6">
        <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
          Create
          <span className="block bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
            Scroll-Stopping
          </span>
          YouTube Thumbnails
        </h1>

        <p className="max-w-xl text-lg leading-8 text-slate-400">
          Generate professional YouTube thumbnails using AI.
          Just enter a prompt or upload an image and create
          stunning thumbnails in seconds.
        </p>
      </div>

      <HeroButtons />

      <HeroStats />
    </div>
  );
};

export default HeroContent;