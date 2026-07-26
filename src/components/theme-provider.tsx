"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * attribute/storageKey match the v2 static site's contract
 * (localStorage "theme" + data-theme on <html>), so returning visitors
 * keep their saved choice across the rebuild.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      storageKey="theme"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}
