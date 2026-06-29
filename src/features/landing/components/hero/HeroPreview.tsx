import ThumbnailCard from "./ThumbnailCard";
import { heroThumbnails } from "./hero.data";

const HeroPreview = () => {
  return (
    <div className="relative hidden h-[600px] lg:block">
      {heroThumbnails.map((item) => (
        <ThumbnailCard
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default HeroPreview;