
import { Container } from "../../../../shared/components/ui/container";
import { SectionHeading } from "../../../../shared/components/ui/SectionHeading";
import AuroraBackground from "../hero/AuroraBackground";
import FloatingParticles from "../hero/FloatingParticles";
import CTAButtons from "./CTAButton";
import CTAStats from "./CTAStats";

const CTA = () => {
  return (
    <section
      className="relative overflow-hidden py-32"
      id="cta"
    >
      <AuroraBackground />
      <FloatingParticles />

      <Container>
        <div className="relative rounded-[40px] border border-white/10 bg-slate-900/60 p-12 backdrop-blur-xl">
          <SectionHeading
            badge="Get Started"
            title="Ready to Create Viral Thumbnails?"
            description="Generate professional YouTube thumbnails with AI in seconds. No design experience required."
          />

          <div className="mt-12 flex justify-center">
            <CTAButtons />
          </div>

          <CTAStats />
        </div>
      </Container>
    </section>
  );
};

export default CTA;