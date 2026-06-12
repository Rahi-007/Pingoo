"use client";

import Providers from "./storeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./themeProvider";

export default function ProviderConfig({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <TooltipProvider delayDuration={2000}>{children}</TooltipProvider>
      </ThemeProvider>
    </Providers>
  );
}
