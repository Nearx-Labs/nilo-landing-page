import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nilo · Crypto investing, through conversation",
  description:
    "Nilo is an investment bot on Stellar: it learns your profile, suggests investments that fit you, and invests on your behalf. You choose and sign.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen font-sans text-[15px] leading-normal">{children}</body>
    </html>
  );
}
