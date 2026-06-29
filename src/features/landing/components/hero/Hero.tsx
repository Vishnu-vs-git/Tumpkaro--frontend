
import Container from "../../../../shared/components/ui/Container/Container"
import HeroContent from "./HeroContent";


const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-28 lg:py-36"
    >
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