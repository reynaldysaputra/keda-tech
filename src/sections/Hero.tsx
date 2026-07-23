import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

import heroImage from "../assets/hero.jpeg";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <Container>
        <div className="flex min-h-[90vh] flex-col items-center justify-between gap-12 py-20 md:flex-row">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            className="flex-1"
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🚀 Smart ERP Solution
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">
              Build Your Business
              <span className="text-blue-600">
                {" "}Smarter
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Manage inventory, monitor sales,
              track profits, and grow your business
              using one powerful ERP platform.
            </p>

            <div className="mt-10 flex gap-4">
              <Button>
                Get Started
              </Button>

              <Button
                className="border border-blue-600 bg-white text-blue-600 hover:bg-blue-50"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            className="flex flex-1 justify-center"
          >
            <img
              src={heroImage}
              alt="ERP"
              className="w-full max-w-lg"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}