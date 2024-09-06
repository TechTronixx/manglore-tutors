import BackgroundParticles from "@/components/BackgroundParticles";
import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";
import FeaturesSection from "@/components/features";
import PricingSection from "@/components/pricing";
import FAQSection from "@/components/faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundParticles />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
