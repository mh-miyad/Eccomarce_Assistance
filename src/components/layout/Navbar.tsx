"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Check if the current path is in the admin dashboard
  const isInDashboard = pathname.startsWith("/dashboard");

  const navLinks = isInDashboard
    ? [
        { name: "Dashboard", href: "/dashboard" },
        { name: "FAQ Settings", href: "/dashboard/faq" },
        { name: "Order Tracking", href: "/dashboard/order-tracking" },
        { name: "Returns & Refunds", href: "/dashboard/returns" },
        { name: "Recommendations", href: "/dashboard/recommendations" },
        { name: "Account", href: "/dashboard/account" },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "Features", href: "/#features" },
        { name: "Demo", href: "/demo" }, // Added demo link
        { name: "Pricing", href: "/pricing" },
        { name: "Contact", href: "/contact" },
      ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl">
            ChatCommerce
          </Link>

          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {!isInDashboard && (
            <>
              <Link href="/auth">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth?tab=signup">
                <Button size="sm">Start Free Trial</Button>
              </Link>
            </>
          )}

          {/* Mobile menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>{link.name}</Link>
                </DropdownMenuItem>
              ))}
              {!isInDashboard && (
                <>
                  <DropdownMenuItem asChild>
                    <Link href="/auth">Sign In</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/auth?tab=signup">Start Free Trial</Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
