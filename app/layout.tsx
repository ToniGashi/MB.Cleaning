import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Professional Cleaning Services | Residential & Construction Cleaning",
  description:
    "Expert cleaning services for residential homes and post-construction cleanup. Trusted by homeowners and contractors alike.",
  keywords:
    "cleaning services, residential cleaning, construction cleaning, house cleaning, post-construction cleanup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
