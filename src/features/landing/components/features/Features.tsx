


import { Container } from "../../../../shared/components/ui/container";
import { SectionHeading } from "../../../../shared/components/ui/SectionHeading";
import FeatureCard from "./FeatureCard";
import { features } from "./featured.data";


const Features = () => {
  return (
    <section
      id="features"
      className="py-28"
    >
      <Container>
        <SectionHeading
          badge="Why ThumbKaro AI?"
          title="Everything You Need to Create Viral Thumbnails"
          description="Powerful AI tools designed to help creators generate high-converting thumbnails in seconds."
        />

        <div className="mt-20 grid gap-6 md:grid-cols-3 auto-rows-[220px]">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              {...feature}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;