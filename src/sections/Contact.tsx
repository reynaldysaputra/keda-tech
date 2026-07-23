import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24"
    >
      <Container>

        <SectionTitle
          title="Contact Us"
          subtitle="Have questions about ERPPro? We'd love to hear from you."
        />

        <motion.div
          className="grid gap-12 lg:grid-cols-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >

          {/* Left */}
          <motion.div
            initial={{ x: -60 }}
            whileInView={{ x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl bg-blue-600 p-10 text-white">

              <h3 className="text-3xl font-bold">
                Let's Talk
              </h3>

              <p className="mt-5 text-blue-100 leading-7">
                Contact our team to learn how ERPPro can help simplify your business operations.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt />
                  <span>Jakarta, Indonesia</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaEnvelope />
                  <span>support@erppro.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhoneAlt />
                  <span>+62 812 3456 7890</span>
                </div>

              </div>

            </div>
          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ x: 60 }}
            whileInView={{ x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <form className="rounded-3xl border p-10 shadow-sm">

              <div className="space-y-5">

                <input
                  placeholder="Full Name"
                  className="w-full rounded-lg border p-4 outline-none focus:border-blue-600"
                />

                <input
                  placeholder="Email"
                  className="w-full rounded-lg border p-4 outline-none focus:border-blue-600"
                />

                <input
                  placeholder="Company"
                  className="w-full rounded-lg border p-4 outline-none focus:border-blue-600"
                />

                <textarea
                  rows={6}
                  placeholder="Message"
                  className="w-full rounded-lg border p-4 outline-none focus:border-blue-600"
                />

                <Button
                  className="w-full"
                >
                  Send Message
                </Button>

              </div>

            </form>
          </motion.form>

        </motion.div>

      </Container>
    </section>
  );
}