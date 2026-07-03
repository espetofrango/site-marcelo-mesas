import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "aluguel de mesas e cadeiras Marcelo mesas | Entrega Rápida e Segura no RJ",
  description: "Aluguel de mesas, cadeiras plásticas brancas e gelo em Anchieta, Ricardo de Albuquerque, Deodoro, Guadalupe, Cabral, Olinda e Nilópolis. Entrega ágil, pontualidade e segurança garantida!",
  keywords: ["aluguel de mesas e cadeiras Marcelo mesas", "aluguel de mesas Anchieta", "aluguel de mesas Nilopolis", "aluguel de cadeiras de plastico", "aluguel de mesas Ricardo de Albuquerque", "gelo Anchieta"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
