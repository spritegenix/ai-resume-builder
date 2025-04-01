import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Teko } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

const teko = Teko({
  subsets: ["latin"],
  weight: ["400", "700", "300", "500", "600"],
});

export const metadata: Metadata = {
  title: { template: "%s | SimpliCV", absolute: "SimpliCV" },
  description:
    "SimpliCV is the easiest way to create a professional resume using AI that will help you land your dream job.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        {/* <head>
          <script
            src="https://unpkg.com/react-scan/dist/auto.global.js"
            async
          />
        </head> */}
        <body className={`${teko.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ViewTransitions>{children}</ViewTransitions>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
