"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  ShoppingCart,
  RefreshCcw,
  Package,
  Settings,
  Store,
  LogOut,
  User,
  CreditCard,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
  },
  {
    name: "FAQ Settings",
    href: "/dashboard/faq",
    icon: <MessageSquare className="mr-2 h-4 w-4" />,
  },
  {
    name: "Order Tracking",
    href: "/dashboard/order-tracking",
    icon: <ShoppingCart className="mr-2 h-4 w-4" />,
  },
  {
    name: "Returns & Refunds",
    href: "/dashboard/returns",
    icon: <RefreshCcw className="mr-2 h-4 w-4" />,
  },
  {
    name: "Product Recommendations",
    href: "/dashboard/recommendations",
    icon: <Package className="mr-2 h-4 w-4" />,
  },
  {
    name: "Integration",
    href: "/dashboard/integration",
    icon: <Store className="mr-2 h-4 w-4" />,
  },
];

const accountLinks = [
  {
    name: "Account Settings",
    href: "/dashboard/account",
    icon: <User className="mr-2 h-4 w-4" />,
  },
  {
    name: "Subscription",
    href: "/dashboard/subscription",
    icon: <CreditCard className="mr-2 h-4 w-4" />,
  },
  {
    name: "Help & Support",
    href: "/dashboard/support",
    icon: <HelpCircle className="mr-2 h-4 w-4" />,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 border-r bg-card h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex flex-col flex-1 p-4">
        <div className="space-y-1">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                {item.icon}
                {item.name}
              </Button>
            </Link>
          ))}
        </div>

        <Separator className="my-4" />

        <div className="space-y-1">
          {accountLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                {item.icon}
                {item.name}
              </Button>
            </Link>
          ))}
        </div>

        <div className="mt-auto">
          <Separator className="my-4" />
          <Button variant="ghost" className="w-full justify-start text-muted-foreground">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
