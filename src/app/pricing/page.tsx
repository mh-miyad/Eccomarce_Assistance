import { Metadata } from "next";
import PricingSection from "@/components/layout/PricingSection";
import PricingFAQ from "@/components/layout/PricingFAQ";
import CTA from "@/components/layout/CTA";

export const metadata: Metadata = {
  title: "Pricing - ChatCommerce",
  description: "Affordable pricing plans for businesses of all sizes. Start with our free tier and upgrade as you grow.",
};

export default function PricingPage() {
  return (
    <div className="container py-12 space-y-20">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground">
          Choose the plan that works best for your business. All plans include a 14-day free trial.
        </p>
      </div>
      
      <PricingSection />
      
      <PricingFAQ />
      
      <CTA />
    </div>
  );
}
