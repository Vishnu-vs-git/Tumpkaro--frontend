import Container from "../../../../shared/components/ui/Container/Container"

import AuroraBackground from "./AuroraBackground";
import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-28 lg:py-36"
    >
      <AuroraBackground />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />

          <HeroPreview />
        </div>
      </Container>
    </section>
  );
};

export default Hero;