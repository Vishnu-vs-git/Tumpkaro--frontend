

import { Container } from "../../../../shared/components/ui/container";
import { SectionHeading } from "../../../../shared/components/ui/SectionHeading";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonials.data";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-28"
    >
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="Loved by Content Creators"
          description="Thousands of creators use ThumbKaro AI to design thumbnails that attract more viewers."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;