"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const pricingPlans = [
    {
      name: "Free",
      description: "Essential features for small businesses just getting started.",
      price: {
        monthly: "$0",
        annual: "$0",
      },
      features: [
        "Basic chatbot functionality",
        "Up to 100 conversations/month",
        "Standard response time",
        "Email support",
        "Basic analytics",
      ],
      cta: "Get Started",
      ctaLink: "/signup",
      popular: false,
    },
    {
      name: "Pro",
      description: "Everything you need for a growing business.",
      price: {
        monthly: "$49",
        annual: "$39",
      },
      features: [
        "Advanced chatbot customization",
        "Up to 1,000 conversations/month",
        "Faster response time",
        "Priority email support",
        "Advanced analytics",
        "Product recommendations",
        "Order tracking integration",
      ],
      cta: "Start Free Trial",
      ctaLink: "/signup?plan=pro",
      popular: true,
    },
    {
      name: "Business",
      description: "Advanced features for established businesses.",
      price: {
        monthly: "$99",
        annual: "$79",
      },
      features: [
        "Full chatbot customization",
        "Unlimited conversations",
        "Fastest response time",
        "24/7 priority support",
        "Comprehensive analytics",
        "Advanced product recommendations",
        "Full e-commerce integration",
        "Custom branding",
        "API access",
      ],
      cta: "Start Free Trial",
      ctaLink: "/signup?plan=business",
      popular: false,
    },
  ];

  return (
    <section className="space-y-8">
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center p-1 bg-muted rounded-lg">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              billingCycle === "monthly"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              billingCycle === "annual"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground"
            }`}
          >
            Annual <span className="text-xs text-emerald-500 font-medium">Save 20%</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col ${
              plan.popular ? "border-primary shadow-lg" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {plan.price[billingCycle]}
                </span>
                <span className="text-muted-foreground ml-2">
                  {billingCycle === "monthly" ? "/month" : "/month, billed annually"}
                </span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={plan.ctaLink} className="w-full">
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
