import {
  BarChart3,
  ShoppingCart,
  MessageSquare,
  RefreshCcw,
  Package,
  ThumbsUp,
  Zap,
  Store,
} from "lucide-react";

const features = [
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Order Tracking",
    description:
      "Let customers track their orders in real-time with automated status updates, reducing support inquiries by up to 60%.",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "FAQ Automation",
    description:
      "Instantly answer common questions about products, shipping, and policies, freeing up your team to handle complex issues.",
  },
  {
    icon: <RefreshCcw className="h-6 w-6" />,
    title: "Returns & Refunds",
    description:
      "Streamline the return process with guided workflows that help customers initiate returns and check refund status without human assistance.",
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Product Recommendations",
    description:
      "Boost sales with AI-powered product suggestions based on user behavior, purchase history, and real-time browsing patterns.",
  },
  {
    icon: <Store className="h-6 w-6" />,
    title: "E-commerce Integration",
    description:
      "Seamlessly connect with popular platforms like Shopify and WooCommerce with just a few clicks. No coding required.",
  },
  {
    icon: <ThumbsUp className="h-6 w-6" />,
    title: "Customer Satisfaction",
    description:
      "Improve CSAT scores by providing immediate, accurate responses to customer inquiries 24/7, increasing retention and loyalty.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Analytics Dashboard",
    description:
      "Track chatbot performance, customer satisfaction, and identify common issues with our comprehensive analytics dashboard.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast Implementation",
    description:
      "Get up and running in minutes, not days. Our no-code setup means you can implement ChatCommerce with minimal IT resources.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Powerful Features to Boost Your E-commerce
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Our AI-powered chatbot streamlines customer support, increases sales, and improves user satisfaction with these key features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg border bg-card p-6 hover:shadow-md transition-all duration-200"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
