"use client";

import Providers from "./storeProvider";
import { ThemeProvider } from "./themeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function ProviderConfig({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </Providers>
  );
}
