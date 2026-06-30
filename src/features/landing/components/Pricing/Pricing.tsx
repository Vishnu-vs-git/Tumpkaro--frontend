

import { SectionHeading } from "../../../../shared/components/ui/SectionHeading";
import { Container } from "../../../../shared/components/ui/container";
import PricingCard from "./PricingCard";
import { pricingPlans } from "./pricing.data";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-28"
    >
      <Container>
        <SectionHeading
          badge="Pricing"
          title="Choose the Perfect Plan"
          description="Start free and upgrade when you're ready."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;