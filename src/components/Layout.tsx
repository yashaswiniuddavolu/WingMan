import React from "react";
import { StarBackground } from "./StarBackground";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="w-[400px] min-h-[500px] p-4 font-sans text-foreground relative overflow-hidden">
      <StarBackground />
      <header className="mb-6 flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold tracking-tight text-sky-400">
            <img
              src="/wingman-logo.png"
              alt="Wingman logo"
              className="w-32 h-auto"
            />
          </h1>
        </div>
        <span className="text-xs text-sky-200/70">
          Flight Search Assistant
        </span>
      </header>
      <main className="space-y-6 relative z-10">{children}</main>
    </div>
  );
}
