"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PricingFAQ() {
  const faqs = [
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, we offer a 14-day free trial on all paid plans. You can try out all the features without any commitment. No credit card is required to start your trial.",
    },
    {
      question: "Can I change plans later?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, the changes will take effect at the start of your next billing cycle.",
    },
    {
      question: "What happens when I reach my monthly conversation limit?",
      answer:
        "If you reach your monthly conversation limit, you'll be notified and given the option to upgrade to a higher plan. Your chatbot will continue to function, but new conversations will be queued until the start of your next billing cycle or until you upgrade.",
    },
    {
      question: "How do you count conversations?",
      answer:
        "A conversation is defined as a complete interaction between a customer and your chatbot, regardless of the number of messages exchanged. Each new customer session counts as a new conversation.",
    },
    {
      question: "Do you offer custom enterprise plans?",
      answer:
        "Yes, we offer custom enterprise plans for businesses with specific needs. Please contact our sales team at sales@chatcommerce.com to discuss your requirements and get a custom quote.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. For annual enterprise plans, we can also accommodate bank transfers.",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">
          Have questions about our pricing? Find answers to common questions below.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
