import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/Howitworks";
import PricingPage from "../components/Pricing";
import About from "../components/About";
import TrustedBy from "../components/TrustedBy";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Getstarted from "../components/Getstarted";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <PricingPage />
      <section id="resources" className="py-20 text-center bg-white border-y">
          <h2 className="text-3xl font-bold mb-4">Resources</h2>
          <p className="text-gray-500">Resources section coming soon...</p>
      </section>
      <About />
      <TrustedBy />
      <Testimonials />
      <FAQ />
      <Getstarted />
    </>
  );
}
