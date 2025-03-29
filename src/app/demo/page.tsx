"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatInterface from "@/components/chatbot/ChatInterface";

export default function DemoPage() {
  const [primaryColor, setPrimaryColor] = useState("#4F46E5");
  const [chatTitle, setChatTitle] = useState("Chat with us");
  const [welcomeMessage, setWelcomeMessage] = useState("Hi there! How can I help you today?");
  const [position, setPosition] = useState<"left" | "right">("right");

  return (
    <div className="container mx-auto py-12 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">ChatCommerce Demo</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience our AI-powered chatbot in action. Customize the appearance and try talking to it like a customer would.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Customize the Chatbot</CardTitle>
            <CardDescription>
              Adjust the settings to see how the chatbot would look on your site
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Chat Title</label>
              <Input
                value={chatTitle}
                onChange={(e) => setChatTitle(e.target.value)}
                placeholder="Chat with us"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Welcome Message</label>
              <Input
                value={welcomeMessage}
                onChange={(e) => setWelcomeMessage(e.target.value)}
                placeholder="Hi there! How can I help you today?"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Primary Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-10 h-10 rounded cursor-pointer"
                />
                <Input
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  placeholder="#4F46E5"
                  className="font-mono"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Chat Position</label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={position === "left" ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setPosition("left")}
                >
                  Left
                </Button>
                <Button
                  type="button"
                  variant={position === "right" ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setPosition("right")}
                >
                  Right
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Try These Sample Queries</CardTitle>
            <CardDescription>
              Click on any of these examples to see how the chatbot responds
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="orders">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="returns">Returns</TabsTrigger>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>

              <TabsContent value="orders" className="pt-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Try asking about tracking orders or order status
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                      Can I track my order?
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                      Where is my order #12345?
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                      Has my order been shipped yet?
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="returns" className="pt-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Try asking about returns or refunds
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                      How do I return an item?
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                      I want a refund for my order
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                      What's your return policy?
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="products" className="pt-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Try asking about products or recommendations
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                      Can you recommend some products for me?
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                      What are your bestsellers?
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                      Do you have any new products?
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="shipping" className="pt-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Try asking about shipping and delivery
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                      How long does shipping take?
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                      Do you offer free shipping?
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                      What are your delivery options?
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8 p-4 bg-muted/30 rounded-md">
              <p className="text-sm">
                <strong>Tip:</strong> The chatbot uses simple keyword matching in this demo. Try using words like "order", "track", "return", "refund", "shipping", "delivery", "product", or "recommend" in your questions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-b from-background to-muted py-8 px-4 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to add this chatbot to your store?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Start your 14-day free trial today. No credit card required. Seamless integration with your store.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg">
            View Pricing
          </Button>
        </div>
      </div>

      <ChatInterface
        primaryColor={primaryColor}
        title={chatTitle}
        welcomeMessage={welcomeMessage}
        position={position}
      />
    </div>
  );
}
