

import PromptBox from "./PromptBox";
import BeforeAfter from "./BeforeAfter";
import { showcase } from "./showcase.data";
import { Container } from "../../../../shared/components/ui/container";
import { SectionHeading } from "../../../../shared/components/ui/SectionHeading";
import { Button } from "../../../../shared/components/ui/Button/Button";

const AIShowcase = () => {
  return (
    <section className="py-28">
      <Container>
        <SectionHeading
          badge="AI Showcase"
          title="See ThumbKaro AI in Action"
          description="Watch how a simple prompt is transformed into a professional YouTube thumbnail."
        />

        <div className="mt-16 space-y-16">
          <PromptBox prompt={showcase.prompt} />

          <BeforeAfter
            before={showcase.before}
            after={showcase.after}
          />

          <div className="flex justify-center">
            <Button size="lg">
              Generate Similar Thumbnail
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AIShowcase;