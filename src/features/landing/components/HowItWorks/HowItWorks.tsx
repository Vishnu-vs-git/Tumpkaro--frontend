

import { SectionHeading } from "../../../../shared/components/ui/SectionHeading";
import { Container } from "../../../../shared/components/ui/container";
import StepCard from "./StepCard";
import { steps } from "./howItWorks.data";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-28"
    >
      <Container>
        <SectionHeading
          badge="Simple Process"
          title="Create Amazing Thumbnails in 3 Steps"
          description="No design experience required. Just describe your idea, let AI do the work, and download your thumbnail."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              step={step.id}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;