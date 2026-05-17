import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Toaster } from 'sonner';
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Atomberg Goal Portal — AI-Powered Performance Management",
  description: "Enterprise Goal Setting & Tracking Portal for Atomberg Technologies. Built for AtomQuest Hackathon 2026.",
  keywords: ["Atomberg", "Goal Management", "Performance Tracking", "AI Analytics", "Hackathon"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <ErrorBoundary>{children}</ErrorBoundary>
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
