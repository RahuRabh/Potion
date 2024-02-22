import type { Metadata } from "next";
import {Toaster} from "sonner"

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/providers/theme-provider";
import { ConvexClientProvider } from "@/components/ui/providers/convex-provider";
// import { ModalProvider } from "@/components/providers/modal-provider";
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
        <ConvexClientProvider>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="potion-theme-2"
        >
          <Toaster position="bottom-center" />
        {children}
        </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}