"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Copy,
  ExternalLink,
  Globe,
  MessageSquare,
  MoveRight,
  Paintbrush,
  Settings,
} from "lucide-react";
import { useState } from "react";

export default function ChatbotIntegrationPage() {
  const [websiteUrl, setWebsiteUrl] = useState("https://mystore.com");
  const [primaryColor, setPrimaryColor] = useState("#4F46E5");
  const [chatPosition, setChatPosition] = useState("right");
  const [chatTitle, setChatTitle] = useState("Chat with us");
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hi there! How can I help you today?"
  );

  // Sample integration code that would be generated for the user
  const integrationCode = `<!-- ChatCommerce Integration Code -->
<script>
  window.chatCommerce = {
    apiKey: "abc123xyz456",
    position: "${chatPosition}",
    primaryColor: "${primaryColor}",
    title: "${chatTitle}",
    welcomeMessage: "${welcomeMessage}",
    domain: "${websiteUrl}"
  };
</script>
<script src="https://cdn.chatcommerce.io/chatbot.js" async></script>`;

  const shopifyCode = `{% comment %}ChatCommerce Integration Code{% endcomment %}
{% layout none %}
{{ content_for_header }}
<script>
  window.chatCommerce = {
    apiKey: "abc123xyz456",
    position: "${chatPosition}",
    primaryColor: "${primaryColor}",
    title: "${chatTitle}",
    welcomeMessage: "${welcomeMessage}"
  };
</script>
<script src="https://cdn.chatcommerce.io/chatbot.js" async></script>`;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Chatbot Integration
        </h2>
        <p className="text-muted-foreground">
          Set up and customize your chatbot for your e-commerce website.
        </p>
      </div>

      <Tabs defaultValue="setup" className="space-y-4">
        <TabsList>
          <TabsTrigger value="setup">Setup</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="behavior">Behavior</TabsTrigger>
          <TabsTrigger value="code">Integration Code</TabsTrigger>
        </TabsList>

        <TabsContent value="setup" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Website Integration</CardTitle>
              <CardDescription>
                Connect your chatbot to your e-commerce website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Website URL</label>
                <div className="flex">
                  <div className="relative flex-1">
                    <Globe className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="https://example.com"
                      className="pl-10"
                    />
                  </div>
                  <Button className="ml-2">Verify</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Enter the URL of the website where you want to install the
                  chatbot.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <Card className="bg-secondary/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Step 1</CardTitle>
                    <CardDescription>Get your integration code</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Copy the JavaScript snippet from the "Integration Code"
                      tab.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() =>
                        (
                          document.querySelector(
                            '[data-value="code"]'
                          ) as HTMLElement
                        )?.click()
                      }
                    >
                      <ArrowRight className="h-4 w-4 mr-2" /> Go to Code
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-secondary/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Step 2</CardTitle>
                    <CardDescription>Add code to your site</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Paste the code snippet into your website's HTML, just
                      before the closing {"</body>"} tag.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" /> View
                      Instructions
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-secondary/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Step 3</CardTitle>
                    <CardDescription>Test your chatbot</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Visit your website to ensure the chatbot appears and
                      functions properly.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" size="sm" className="w-full">
                      <CheckCircle2 className="h-4 w-4 mr-2" /> Verify
                      Integration
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <Separator className="my-4" />

              <div>
                <h3 className="text-lg font-medium mb-4">
                  Platform-Specific Guides
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <svg viewBox="0 0 109 124" className="h-5 w-5 mr-2">
                          <path
                            d="M74.7 93.7C70.9 93.7 67.8 90.5 67.8 86.7 67.8 82.9 70.9 79.7 74.7 79.7 78.5 79.7 81.7 82.9 81.7 86.7 81.7 90.5 78.5 93.7 74.7 93.7M40.5 93.7C36.7 93.7 33.5 90.5 33.5 86.7 33.5 82.9 36.7 79.7 40.5 79.7 44.3 79.7 47.5 82.9 47.5 86.7 47.5 90.5 44.3 93.7 40.5 93.7M40.3 65.5L44.3 75.5H35.7C36.5 72.1 38.1 68.5 40.3 65.5M75.2 65.5C77.4 68.5 79 72.1 79.8 75.5H71.2L75.2 65.5M94.2 23.7H101.2L86.7 0 72.3 23.7H79.3C79.1 24.1 67.3 72.9 37.2 72.9 26.1 72.9 16.5 64.9 12.2 51.6L11.4 49.2 0.5 53.4 1.3 55.8C3.5 62.5 7.2 68.4 12.1 73.2 17.7 78.8 24.6 82.3 32.3 83.6 32.3 83.7 32.2 83.7 32.2 83.8 32.2 97.7 43.4 109 57.4 109 68 109 77.1 102.7 81 93.4 84.2 92.8 87.3 91.6 90.2 89.8 97.1 85.6 102.2 79.4 105.3 71.3 108.9 62.1 109.8 50.6 108.1 37.6 107.2 30.2 105.7 25.9 105.6 25.5L105.2 24.2 94.2 23.7Z"
                            fill="#95BF47"
                          />
                        </svg>
                        Shopify Integration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Install our dedicated Shopify app from the Shopify App
                        Store for seamless integration.
                      </p>
                      <Button className="w-full mt-4">
                        Install Shopify App
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <svg viewBox="0 0 256 153" className="h-5 w-5 mr-2">
                          <path
                            d="M21.8 0h212.5c12 0 21.8 9.7 21.8 21.7v109.6c0 12-9.8 21.7-21.8 21.7H21.8C9.7 153 0 143.3 0 131.3V21.7C0 9.7 9.8 0 21.8 0Z"
                            fill="#7F54B3"
                          />
                          <path
                            d="M8.7 21.7V82l17.6-21.8 17.7 21.7v-60H8.7zm207.2 0V82l-17.6-21.8-17.6 21.7v-60h35.2z"
                            fill="#FFF"
                          />
                          <path
                            d="m62.5 33-32.3 43-9.5 12.3-8-10.3L8.7 82v49.3c0 12 9.8 21.7 21.8 21.7h195v-43.5l-10.3-13.5-32.4-42.3-31 40.5L128 113.5l-34.3-41.9-31.2 40.5V33z"
                            fill="#FFF"
                          />
                        </svg>
                        WooCommerce Integration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Download our WordPress plugin or add the integration
                        code manually to your theme.
                      </p>
                      <Button className="w-full mt-4">Download Plugin</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Paintbrush className="h-5 w-5" />
                Chatbot Appearance
              </CardTitle>
              <CardDescription>
                Customize how your chatbot looks to match your brand
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Chat Window Title
                    </label>
                    <Input
                      value={chatTitle}
                      onChange={(e) => setChatTitle(e.target.value)}
                      placeholder="Chat with us"
                    />
                    <p className="text-xs text-muted-foreground">
                      This appears at the top of the chat window.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Welcome Message
                    </label>
                    <Textarea
                      value={welcomeMessage}
                      onChange={(e) => setWelcomeMessage(e.target.value)}
                      placeholder="Hi there! How can I help you today?"
                      rows={3}
                    />
                    <p className="text-xs text-muted-foreground">
                      This is the first message users see when they open the
                      chatbot.
                    </p>
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
                    <p className="text-xs text-muted-foreground">
                      This color will be used for the chatbot header and
                      buttons.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Chat Icon Position
                    </label>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant={
                          chatPosition === "left" ? "default" : "outline"
                        }
                        className="flex-1"
                        onClick={() => setChatPosition("left")}
                      >
                        Left
                      </Button>
                      <Button
                        type="button"
                        variant={
                          chatPosition === "right" ? "default" : "outline"
                        }
                        className="flex-1"
                        onClick={() => setChatPosition("right")}
                      >
                        Right
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Choose which corner the chat icon appears in.
                    </p>
                  </div>
                </div>

                <div className="border rounded-md overflow-hidden flex flex-col">
                  <div
                    className="p-3"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <h3 className="text-sm font-medium text-white">
                      {chatTitle}
                    </h3>
                  </div>
                  <div className="flex-1 p-4 bg-secondary/20 min-h-[340px] relative">
                    <div className="bg-secondary rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">{welcomeMessage}</p>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 w-full">
                        <Input
                          placeholder="Type your message..."
                          className="flex-1"
                        />
                        <Button
                          size="sm"
                          style={{ backgroundColor: primaryColor }}
                        >
                          Send
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6">
                    <div
                      className="rounded-full p-3 shadow-lg cursor-pointer text-white flex items-center justify-center"
                      style={{
                        backgroundColor: primaryColor,
                        right: chatPosition === "right" ? "20px" : "auto",
                        left: chatPosition === "left" ? "20px" : "auto",
                      }}
                    >
                      <MessageSquare className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button>Save Appearance Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="behavior" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Chatbot Behavior
              </CardTitle>
              <CardDescription>
                Configure how your chatbot interacts with customers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">General Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">
                          Auto-open for new visitors
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Automatically show the chat window to first-time
                          visitors
                        </p>
                      </div>
                      <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">
                          Show on mobile devices
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Display the chatbot on mobile and tablet devices
                        </p>
                      </div>
                      <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked
                          />
                          <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">
                          Human handoff option
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Allow customers to request to speak with a human agent
                        </p>
                      </div>
                      <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked
                          />
                          <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">
                          Persistent chat history
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Remember conversation history for returning visitors
                        </p>
                      </div>
                      <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked
                          />
                          <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">
                    Advanced Settings
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Page Exclusions
                      </label>
                      <Textarea
                        placeholder="/checkout/*, /account/*, /admin/*"
                        rows={3}
                      />
                      <p className="text-xs text-muted-foreground">
                        Paths where the chatbot should not appear. Use * for
                        wildcards.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Inactivity Timeout (seconds)
                      </label>
                      <Input type="number" defaultValue={180} min={0} />
                      <p className="text-xs text-muted-foreground">
                        Time before chat minimizes after user inactivity (0 to
                        disable)
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Launch Delay (seconds)
                      </label>
                      <Input type="number" defaultValue={5} min={0} />
                      <p className="text-xs text-muted-foreground">
                        Delay before showing auto-open chat (0 for immediate)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end gap-2">
                <Button variant="outline">Reset to Defaults</Button>
                <Button>Save Behavior Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Integration Code
              </CardTitle>
              <CardDescription>
                Copy this code and add it to your website to install the chatbot
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="standard" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="standard">Standard</TabsTrigger>
                  <TabsTrigger value="shopify">Shopify</TabsTrigger>
                  <TabsTrigger value="wordpress">WordPress</TabsTrigger>
                </TabsList>

                <TabsContent value="standard">
                  <div className="relative">
                    <div className="absolute top-2 right-2">
                      <Button variant="ghost" size="icon">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <pre className="bg-secondary/30 p-4 rounded-md overflow-x-auto text-sm font-mono">
                      {integrationCode}
                    </pre>
                  </div>
                  <p className="text-sm mt-2 text-muted-foreground">
                    Add this code to your website's HTML, just before the
                    closing {"</body>"} tag.
                  </p>
                </TabsContent>

                <TabsContent value="shopify">
                  <div className="relative">
                    <div className="absolute top-2 right-2">
                      <Button variant="ghost" size="icon">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <pre className="bg-secondary/30 p-4 rounded-md overflow-x-auto text-sm font-mono">
                      {shopifyCode}
                    </pre>
                  </div>
                  <p className="text-sm mt-2 text-muted-foreground">
                    Add this code to your Shopify theme's layout/theme.liquid
                    file.
                  </p>
                </TabsContent>

                <TabsContent value="wordpress">
                  <div className="space-y-4">
                    <Alert>
                      <CheckCircle2 className="h-4 w-4" />
                      <AlertTitle>WordPress Plugin Available</AlertTitle>
                      <AlertDescription>
                        For WordPress sites, we recommend using our plugin for
                        easier installation.
                      </AlertDescription>
                    </Alert>

                    <div className="relative">
                      <div className="absolute top-2 right-2">
                        <Button variant="ghost" size="icon">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <pre className="bg-secondary/30 p-4 rounded-md overflow-x-auto text-sm font-mono">
                        {integrationCode}
                      </pre>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      If not using our plugin, add this code to your theme's
                      footer.php file.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              <Separator />

              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={() =>
                    (
                      document.querySelector(
                        '[data-value="behavior"]'
                      ) as HTMLElement
                    )?.click()
                  }
                >
                  <MoveRight className="mr-2 h-4 w-4" /> Configure Behavior
                </Button>
                <Button>
                  <CheckCircle2 className="mr-2 h-4 w-4" /> Verify Installation
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
