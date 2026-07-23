import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import FeatureCard from "../components/ui/FeatureCard";

import { features } from "../constants/features";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <Container>
        <SectionTitle
          title="Why Choose ERPPro?"
          subtitle="Simplify inventory management, monitor sales performance, and maximize profits with an all-in-one ERP platform."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((item) => (
            <FeatureCard
              key={item.title}
              {...item}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}