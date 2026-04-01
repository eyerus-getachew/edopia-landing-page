"use client";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/Howitworks";
import PricingPage from "../components/Pricing";
import About from "../components/About";
import TrustedBy from "../components/TrustedBy";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Getstarted from "../components/Getstarted";
import { motion, Variants } from "framer-motion";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero (no spacing needed) */}
      <Hero />

      {/* Main Sections */}
      <section className="space-y-24 md:space-y-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <Features />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <HowItWorks />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <PricingPage />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <About />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <TrustedBy />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <Testimonials />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <FAQ />
        </motion.div>
      </section>

      {/* CTA */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="mt-24 md:mt-32">
        <Getstarted />
      </motion.div>
    </main>
  );
}
