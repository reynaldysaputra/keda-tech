import { motion } from "framer-motion";

import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import StatisticCard from "../components/ui/StatisticCard";

import { statistics } from "../constants/statistics";

export default function Statistics() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl" />

      <Container>
        <SectionTitle
          title="Trusted by Businesses Worldwide"
          subtitle="Helping companies improve productivity, automate workflows, and scale with confidence."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <StatisticCard {...item} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}