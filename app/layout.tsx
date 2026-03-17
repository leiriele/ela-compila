import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Github, Linkedin, Instagram } from "lucide-react";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-white`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-1">{children}</main>
          <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
            <div className="max-w-6xl mx-auto px-6 py-12">

              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div className="max-w-lg">
                  <p className="text-base font-semibold text-slate-900 mb-2 dark:text-white">
                    Ela Compila
                  </p>

                  <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
                    Blog técnico desenvolvido com Next.js e publicado com Vercel.
                    Conteúdos sobre backend, Docker, APIs e automação.
                  </p>
                </div>

                <div className="flex items-center gap-5 text-slate-600 dark:text-slate-300">

                  <a
                    href="https://github.com/leiriele"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-900 dark:hover:text-white transition"
                  >
                    <Github size={22} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/leiriele/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-900 dark:hover:text-white transition"
                  >
                    <Linkedin size={22} />
                  </a>

                  <a
                    href="https://instagram.com/_leiriele"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-900 dark:hover:text-white transition"
                  >
                    <Instagram size={22} />
                  </a>

                </div>

              </div>

              <div className="mt-10 pt-6 border-t border-slate-200 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
                © 2026 Ela Compila — Projeto de portfólio e publicação técnica.
              </div>

            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}