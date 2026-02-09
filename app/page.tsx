import Image from "next/image";
import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import DemoSection from "@/components/sections/DemoSection";
import TrustSection from "@/components/sections/TrustSection";
import PricingSection from "@/components/sections/PricingSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SolutionsSection from "@/components/sections/SolutionSection";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DemoSection />
      <TrustSection />
      <PricingSection />
      <FeaturesSection />
      <SolutionsSection />
      <Footer />
  
    </div>
  );
}
