import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import LayoutWrapper from "@/components/LayoutWrapper"; // Import the new wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bembex lab",
  description:
    "Elevate your online presence with our expert web design and development agency. We build fast, modern, responsive websites that drive results for startups, businesses, and brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="Bambex lab logo Text white 1 (1).png"
          sizes="any"
        />
      </head>
      <body
        className={`${inter.className} bg-white text-white overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
