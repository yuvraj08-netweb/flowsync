import { ThemeToggler } from "@/components";
import {
  ContactUsSection,
  FaqSection,
  FeaturesSection,
  HeroSection,
  PricingSection,
  ProductDemoSection,
  TestimonialsSection,
  TrustedPartnersSection,
} from "@/sections";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <div className="hero">

      <HeroSection />
      </div>
      <TrustedPartnersSection />
      <section className="triangle">
        <FeaturesSection />
      </section>
      <ProductDemoSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <ContactUsSection />
      <ThemeToggler />
    </div>
  );
}
