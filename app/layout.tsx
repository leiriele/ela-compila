import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors`}
      >
        <Navbar />

        <main>{children}</main>

        <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr] md:items-start">
              <div className="max-w-2xl">
                <p className="text-base font-semibold text-slate-900 mb-3 dark:text-white">
                  Ela Compila
                </p>

                <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
                  Blog técnico desenvolvido com Next.js e publicado com Vercel.
                  O objetivo é organizar conteúdo sobre backend, Docker, APIs e
                  automação de forma clara, profissional e fácil de compartilhar.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-3 dark:text-white">
                    Navegação
                  </p>

                  <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <a
                      href="/"
                      className="hover:text-slate-900 dark:hover:text-white"
                    >
                      Início
                    </a>
                    <a
                      href="/blog"
                      className="hover:text-slate-900 dark:hover:text-white"
                    >
                      Blog
                    </a>
                    <a
                      href="/about"
                      className="hover:text-slate-900 dark:hover:text-white"
                    >
                      Sobre
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-3 dark:text-white">
                    Redes
                  </p>

                  <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <a
                      href="https://github.com/leiriele"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-slate-900 dark:hover:text-white"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/leiriele/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-slate-900 dark:hover:text-white"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://instagram.com/_leiriele"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-slate-900 dark:hover:text-white"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col gap-2 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
              <p>© 2026 Ela Compila. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}