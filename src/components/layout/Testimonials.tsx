import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "E-commerce Manager, StyleFusion",
    avatar: "/avatars/sarah.jpg",
    content:
      "ChatCommerce has saved us countless hours in customer support. Our response time went from hours to seconds, and our customers love the instant help. The ROI has been incredible.",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Founder, TechGadgets",
    avatar: "/avatars/michael.jpg",
    content:
      "Implementing ChatCommerce was a game-changer for our online store. Order-related inquiries decreased by 70%, and our team can now focus on growing the business instead of answering repetitive questions.",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, HomeEssentials",
    avatar: "/avatars/emily.jpg",
    content:
      "The integration with our Shopify store was seamless. We were up and running in less than a day, and the AI recommendations have actually increased our average order value by 15%.",
    initials: "ER",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Trusted by E-commerce Businesses
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            See how businesses are transforming their customer support and increasing sales with ChatCommerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-10 w-10 border">
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground">"{testimonial.content}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Join hundreds of successful e-commerce businesses already using ChatCommerce
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            {/* Logos of companies using the service */}
            <div className="text-3xl font-bold text-muted-foreground/40">ACME</div>
            <div className="text-3xl font-bold text-muted-foreground/40">StyleCo</div>
            <div className="text-3xl font-bold text-muted-foreground/40">TechZone</div>
            <div className="text-3xl font-bold text-muted-foreground/40">HomeGoods</div>
            <div className="text-3xl font-bold text-muted-foreground/40">FitLife</div>
          </div>
        </div>
      </div>
    </section>
  );
}
