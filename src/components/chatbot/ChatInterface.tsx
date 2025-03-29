"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MessageSquare,
  Send,
  X,
  Minimize2,
  ChevronRight,
  ShoppingCart,
  RefreshCcw,
  HelpCircle,
  Package,
  User
} from "lucide-react";

interface Message {
  id: number;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatInterfaceProps {
  primaryColor?: string;
  title?: string;
  welcomeMessage?: string;
  position?: "left" | "right";
}

export default function ChatInterface({
  primaryColor = "#4F46E5",
  title = "Chat with us",
  welcomeMessage = "Hi there! How can I help you today?",
  position = "right"
}: ChatInterfaceProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: welcomeMessage,
      sender: "bot",
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleRestore = () => {
    setIsMinimized(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "I'm not sure how to help with that. Could you try asking something else?";

      // Simple keyword matching for demo purposes
      const lowercaseInput = inputValue.toLowerCase();

      if (lowercaseInput.includes("order") && lowercaseInput.includes("track")) {
        botResponse = "I can help you track your order. What's your order number?";
      } else if (lowercaseInput.includes("return") || lowercaseInput.includes("refund")) {
        botResponse = "To process a return or refund, please provide your order number and tell me which items you'd like to return.";
      } else if (lowercaseInput.includes("shipping") || lowercaseInput.includes("delivery")) {
        botResponse = "We typically ship orders within 1-2 business days, and delivery takes 3-5 business days depending on your location.";
      } else if (lowercaseInput.includes("product") || lowercaseInput.includes("recommend")) {
        botResponse = "Based on your preferences, you might like our bestselling items. Would you like me to show you some recommendations?";
      }

      const botMessage: Message = {
        id: messages.length + 2,
        content: botResponse,
        sender: "bot",
        timestamp: new Date()
      };

      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);
  };

  const quickActions = [
    { icon: <ShoppingCart className="h-4 w-4" />, label: "Track Order" },
    { icon: <RefreshCcw className="h-4 w-4" />, label: "Returns & Refunds" },
    { icon: <Package className="h-4 w-4" />, label: "Products" },
    { icon: <HelpCircle className="h-4 w-4" />, label: "Help" }
  ];

  return (
    <div
      className={`fixed z-50 ${position === "right" ? "right-4" : "left-4"} bottom-4 flex flex-col items-end`}
      style={{
        fontFamily: "var(--font-geist-sans)",
      }}
    >
      {isOpen && (
        <div
          className={`mb-4 bg-background border rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out ${
            isMinimized
              ? "w-72 h-16"
              : "w-80 md:w-96 h-[500px] max-h-[80vh]"
          }`}
        >
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ backgroundColor: primaryColor }}
          >
            <h3 className="font-medium text-sm text-white">{title}</h3>
            <div className="flex items-center gap-1">
              {isMinimized ? (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-white hover:bg-white/20"
                  onClick={handleRestore}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-white hover:bg-white/20"
                  onClick={handleMinimize}
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:bg-white/20"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="flex flex-col gap-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.sender === "bot" && (
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                          <MessageSquare className="h-4 w-4 text-primary" />
                        </div>
                      )}
                      <div
                        className={`rounded-lg px-3 py-2 max-w-[75%] ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-[10px] opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                      {message.sender === "user" && (
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center ml-2">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              <div className="p-2 bg-muted/30">
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="h-8 flex-shrink-0 border-primary/20 hover:bg-primary/10"
                    >
                      {action.icon}
                      <span className="ml-1">{action.label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-3 border-t flex items-center gap-2"
              >
                <Input
                  type="text"
                  placeholder="Type a message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1"
                />
                <Button
                  type="submit"
                  size="icon"
                  style={{ backgroundColor: primaryColor }}
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </>
          )}
        </div>
      )}

      <Button
        onClick={handleToggleChat}
        className="h-12 w-12 rounded-full shadow-lg"
        style={{ backgroundColor: primaryColor }}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageSquare className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
