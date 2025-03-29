"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ShoppingCart,
  Truck,
  Package,
  CheckCircle2,
  AlarmClock,
  Info,
  Copy,
  KeyRound,
  Settings,
  RefreshCw
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

export default function OrderTrackingPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [testResult, setTestResult] = useState(null);
  const [apiKey, setApiKey] = useState("sk_test_12345abcdef67890");
  const [isConnected, setIsConnected] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState("default");

  const handleTestTracking = () => {
    if (!orderNumber) return;

    // Simulate API call to track order
    setTimeout(() => {
      const statuses = ["processing", "shipped", "out_for_delivery", "delivered"];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

      const mockResults = {
        orderNumber,
        status: randomStatus,
        statusDate: new Date().toLocaleDateString(),
        estimatedDelivery: randomStatus === "delivered" ? "Delivered" : "March 30, 2023",
        items: [
          { name: "Blue T-Shirt", quantity: 1, status: randomStatus },
          { name: "Black Jeans", quantity: 2, status: randomStatus }
        ],
        customerName: "John Doe",
        shippingAddress: "123 Main St, Anytown, USA"
      };

      setTestResult(mockResults);
    }, 1000);
  };

  const templates = [
    {
      id: "default",
      name: "Default Template",
      description: "Standard order tracking response",
      template: `Your order #{{orderNumber}} is {{status}}. {{#if estimatedDelivery}}It is expected to arrive by {{estimatedDelivery}}.{{/if}} {{#if items}}The following items are included: {{#each items}}{{name}} ({{quantity}}){{/each}}{{/if}}`
    },
    {
      id: "detailed",
      name: "Detailed Template",
      description: "Includes full order details",
      template: `Order #{{orderNumber}}\nStatus: {{status}}\nUpdate Date: {{statusDate}}\n{{#if estimatedDelivery}}Estimated Delivery: {{estimatedDelivery}}{{/if}}\n\nItems:\n{{#each items}}- {{name}} (Qty: {{quantity}}, Status: {{status}})\n{{/each}}\n\nShipping To:\n{{customerName}}\n{{shippingAddress}}`
    },
    {
      id: "minimal",
      name: "Minimal Template",
      description: "Brief status only",
      template: `Order #{{orderNumber}} is {{status}}{{#if estimatedDelivery}} (ETA: {{estimatedDelivery}}){{/if}}`
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Order Tracking Integration</h2>
        <p className="text-muted-foreground">
          Connect your e-commerce platform to provide real-time order tracking through the chatbot.
        </p>
      </div>

      <Tabs defaultValue="shopify" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="shopify">Shopify</TabsTrigger>
          <TabsTrigger value="woocommerce">WooCommerce</TabsTrigger>
        </TabsList>

        <TabsContent value="shopify" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Shopify Integration Setup
              </CardTitle>
              <CardDescription>
                Connect your Shopify store to enable order tracking in your chatbot
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Connected to Shopify</p>
                    <p className="text-sm text-muted-foreground">mystore.myshopify.com</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Disconnect</Button>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">API Key</label>
                <div className="flex items-center">
                  <div className="relative flex-1">
                    <KeyRound className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      className="pl-10 font-mono"
                      type="password"
                    />
                  </div>
                  <Button variant="outline" size="icon" className="ml-2">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="ml-2">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  This API key is used to securely access your Shopify store data.
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Webhook Setup</h3>
                <p className="text-sm text-muted-foreground">
                  To receive real-time order updates, add this webhook URL to your Shopify admin panel.
                </p>
                <div className="flex items-center">
                  <Input
                    value="https://api.chatcommerce.io/webhooks/shopify/orders"
                    readOnly
                    className="font-mono"
                  />
                  <Button variant="outline" size="icon" className="ml-2">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Connection Details</AlertTitle>
                <AlertDescription>
                  Your Shopify store data is syncing every 15 minutes. Order statuses are available immediately after any changes.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="woocommerce" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                WooCommerce Integration Setup
              </CardTitle>
              <CardDescription>
                Connect your WooCommerce store to enable order tracking in your chatbot
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-100 text-amber-700 p-2 rounded-full">
                    <AlarmClock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Not Connected</p>
                    <p className="text-sm text-muted-foreground">Connect your WooCommerce store</p>
                  </div>
                </div>
                <Button>Connect Store</Button>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Connection Instructions</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Go to your WooCommerce dashboard</li>
                  <li>Navigate to Settings → Advanced → REST API</li>
                  <li>Click "Add key" and generate new credentials</li>
                  <li>Set permissions to "Read/Write"</li>
                  <li>Copy the Consumer Key and Consumer Secret</li>
                  <li>Paste them in the fields below</li>
                </ol>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Consumer Key</label>
                  <Input placeholder="ck_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Consumer Secret</label>
                  <Input type="password" placeholder="cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Store URL</label>
                  <Input placeholder="https://yourstore.com" />
                </div>
              </div>

              <Button className="w-full">Save and Connect</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Response Templates</CardTitle>
          <CardDescription>
            Customize how order information is presented to your customers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {templates.map((template) => (
              <div
                key={template.id}
                className={`flex-1 p-4 border rounded-md cursor-pointer hover:border-primary ${selectedTemplate === template.id ? 'border-primary bg-primary/5' : ''}`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <h3 className="font-medium">{template.name}</h3>
                <p className="text-sm text-muted-foreground">{template.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Template Customization</label>
            <Textarea
              rows={6}
              value={templates.find(t => t.id === selectedTemplate)?.template || ""}
              className="font-mono text-sm"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Use Handlebars syntax for dynamic content</span>
              <span>Available variables: orderNumber, status, items, estimatedDelivery, etc.</span>
            </div>
          </div>

          <Button variant="outline" className="w-full">
            Save Template
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Test Order Tracking</CardTitle>
          <CardDescription>
            Test your integration by entering an order number
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <ShoppingCart className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Enter order number (e.g. #1234)"
                className="pl-10"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
              />
            </div>
            <Button onClick={handleTestTracking}>Track Order</Button>
          </div>

          {testResult && (
            <div className="p-4 border rounded-md">
              <div className="flex items-center gap-3 mb-4">
                {testResult.status === "processing" && (
                  <div className="bg-amber-100 text-amber-700 p-2 rounded-full">
                    <Package className="h-5 w-5" />
                  </div>
                )}
                {testResult.status === "shipped" && (
                  <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
                    <Truck className="h-5 w-5" />
                  </div>
                )}
                {testResult.status === "out_for_delivery" && (
                  <div className="bg-purple-100 text-purple-700 p-2 rounded-full">
                    <Truck className="h-5 w-5" />
                  </div>
                )}
                {testResult.status === "delivered" && (
                  <div className="bg-green-100 text-green-700 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                )}
                <div>
                  <h3 className="font-medium">Order #{testResult.orderNumber}</h3>
                  <p className="text-sm capitalize">Status: {testResult.status.replace("_", " ")}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Items</h4>
                  <ul className="text-sm space-y-1">
                    {testResult.items.map((item, i) => (
                      <li key={i} className="flex justify-between">
                        <span>{item.name} (Qty: {item.quantity})</span>
                        <span className="capitalize">{item.status.replace("_", " ")}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium mb-1">Customer</h4>
                    <p className="text-sm">{testResult.customerName}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Shipping Address</h4>
                    <p className="text-sm">{testResult.shippingAddress}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-1">Estimated Delivery</h4>
                  <p className="text-sm">{testResult.estimatedDelivery}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <p className="text-xs text-muted-foreground">
            This is how your chatbot will display order information to customers.
          </p>
          <Button variant="outline" size="sm">Clear Results</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
