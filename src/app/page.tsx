import Hero from "@/components/home/Hero";
import Problems from "@/components/home/Problems";
import Solution from "@/components/home/Solution";
import ServicesPreview from "@/components/home/ServicesPreview";
import HowItWorks from "@/components/home/HowItWorks";
import WhyUs from "@/components/home/WhyUs";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import Outcomes from "@/components/home/Outcomes";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <Solution />
      <ServicesPreview />
      <HowItWorks />
      <WhyUs />
      <IndustriesPreview />
      <Outcomes />
      <CTA />
    </>
  );
}
