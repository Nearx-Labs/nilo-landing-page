import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nilo · Investir em cripto, conversando",
  description:
    "O Nilo é um bot de investimentos na Stellar: entende o seu perfil, sugere investimentos que combinam com você e investe por você. Você só escolhe e assina.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen font-sans text-[15px] leading-normal">{children}</body>
    </html>
  );
}
