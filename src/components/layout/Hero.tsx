import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              AI-Powered Chatbot for SMB E-commerce
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Boost customer satisfaction with easy, automated support. Handle order tracking, FAQs, returns, and product recommendations effortlessly.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/signup">
              <Button size="lg" className="font-semibold">
                Start Free Trial
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg" className="font-semibold">
                See Demo
              </Button>
            </Link>
          </div>
          <div className="mt-8 md:mt-16 w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg border bg-card">
            <div className="p-4 bg-muted/50 border-b flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-destructive/70"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <div className="ml-2 text-sm font-mono">E-commerce Chat</div>
            </div>
            <div className="p-6 bg-card">
              <div className="flex flex-col gap-4">
                <div className="bg-secondary rounded-lg p-4 max-w-[80%]">
                  <p className="text-sm font-medium">Hi there! How can I help you today?</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4 max-w-[80%] self-end">
                  <p className="text-sm">I'd like to track my order #1234</p>
                </div>
                <div className="bg-secondary rounded-lg p-4 max-w-[80%]">
                  <p className="text-sm font-medium">
                    I found your order #1234. It's currently out for delivery and should arrive today between 2-4 PM. Would you like to see more details about your shipment?
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    Yes, show details
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    No, thanks
                  </Button>
                </div>
                <div className="mt-4 border-t pt-4">
                  <div className="flex items-center gap-2 w-full">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                    <Button size="sm">Send</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
