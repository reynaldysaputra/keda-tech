import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import PricingCard from "../components/ui/PricingCard";

import { pricingPlans } from "../constants/pricing";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-slate-50 py-24"
    >
      <Container>
        <SectionTitle
          title="Choose Your Plan"
          subtitle="Flexible pricing designed for startups, growing businesses, and enterprises."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}