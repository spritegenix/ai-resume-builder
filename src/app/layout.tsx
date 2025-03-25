import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter, Teko } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({ subsets: ["latin"] });
const teko = Teko({
  subsets: ["latin"],
  weight: ["400", "700", "300", "500", "600"],
});

export const metadata: Metadata = {
  title: { template: "%s - AI Resume Builder", absolute: "AI Resume Builder" },
  description:
    "AI Resume Builder is the easiest way to create a professional resume that will help you land your dream job.",
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
        <body className={`${teko.className} ${inter.className} antialiased`}>
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
