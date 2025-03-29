"use client";

import DashboardSidebar from "./DashboardSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto p-8">
        {children}
      </div>
    </div>
  );
}
