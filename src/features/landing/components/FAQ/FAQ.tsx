
import { SectionHeading } from "../../../../shared/components/ui/SectionHeading";
import { Container } from "../../../../shared/components/ui/container";
import FAQItem from "./FAQItem";
import { faqData } from "./faq.data";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="py-28"
    >
      <Container>
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about ThumbKaro AI."
        />

        <div className="mx-auto mt-20 max-w-4xl space-y-6">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;