import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Pricing from "../sections/Pricing";
import Contact from "../sections/Contact";
import Statistics from "../sections/Statistics";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Statistics />
        <About />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </>
  );
}