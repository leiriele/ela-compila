"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldUseDark = savedTheme === "dark";

    setDarkMode(shouldUseDark);

    if (shouldUseDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleTheme() {
    const nextMode = !darkMode;
    setDarkMode(nextMode);

    if (nextMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-pink-100 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold flex items-center justify-center shadow-sm shrink-0">
            EC
          </div>

          <div className="min-w-0">
            <p className="font-bold text-slate-900 leading-none dark:text-white">
              Ela Compila
            </p>
            <p className="text-sm text-slate-600 truncate dark:text-slate-300">
              Aprendizados práticos de desenvolvimento e engenharia de software.
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-6 text-sm font-medium text-slate-700 dark:text-slate-200">
          <Link href="/" className="hover:text-pink-700 transition dark:hover:text-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded px-2 py-1">
            Início
          </Link>
          <Link href="/blog" className="hover:text-pink-700 transition dark:hover:text-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded px-2 py-1">
            Blog
          </Link>
          <Link href="/about" className="hover:text-pink-700 transition dark:hover:text-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded px-2 py-1">
            Sobre
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50 transition dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
            aria-label="Alternar tema"
            title="Alternar tema"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}