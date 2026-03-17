import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Github, Linkedin, Instagram } from "lucide-react";
import Newsletter from "./components/Newsletter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ela Compila",
  description:
    "Tutoriais práticos e aprendizados reais sobre backend, Docker, APIs e automação.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-white`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-1">{children}</main>

          <Newsletter />

        </div>
      </body>
    </html>
  );
}