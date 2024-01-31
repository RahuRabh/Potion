import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Potion",
  description: "Where ideas get registered",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/icon-dark.png",
        href: "/icon-dark/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon-dark.png",
        href: "/icon-dark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        storageKey="potion-theme-2"
        >{children}</ThemeProvider>
      </body>
    </html>
  );
}