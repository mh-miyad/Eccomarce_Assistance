import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Ready to Transform Your E-commerce Customer Experience?
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-primary-foreground/80">
            Start your 14-day free trial today. No credit card required. Seamless integration with your store.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="font-semibold">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 font-semibold">
                Contact Sales
              </Button>
            </Link>
          </div>
          <p className="text-sm text-primary-foreground/70 mt-4">
            Join 500+ e-commerce stores already using ChatCommerce
          </p>
        </div>
      </div>
    </section>
  );
}
