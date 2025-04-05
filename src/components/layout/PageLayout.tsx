"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const pathname = usePathname();

  // Hide footer in dashboard pages
  const isInDashboard = pathname.startsWith("/dashboard");

  return (
    <div className="flex min-h-screen flex-col">
      {!isInDashboard && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isInDashboard && <Footer />}
    </div>
  );
}
