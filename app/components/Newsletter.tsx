"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim()) return;

    setSuccess(true);
    setEmail("");
  }

  return (
    <section className="border-t border-pink-100 bg-pink-50/60 dark:border-slate-800 dark:bg-slate-950/70">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-sm text-slate-600 dark:text-slate-600 mb-3">
            Receba novos artigos
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400 leading-7 mb-8">
            Cadastre seu email para ser avisado quando novos artigos forem publicados.
          </p>
            <form
            onSubmit={handleSubmit}
            className="flex items-center w-full max-w-md mx-auto overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm
            dark:border-slate-700 dark:bg-slate-900"
            >
            <input
                type="email"
                required
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-10 px-4 text-sm bg-transparent outline-none 
                text-slate-900 placeholder:text-slate-400
                dark:text-white dark:placeholder:text-slate-500"
            />

            <button
                type="submit"
                className="h-10 px-5 text-sm font-semibold text-white 
                bg-pink-500 hover:bg-pink-600 transition
                dark:bg-pink-600 dark:hover:bg-pink-500"
            >
                Inscrever
            </button>
            </form>

          <div className="mt-4 min-h-[24px]">
            {success ? (
              <p className="text-sm text-green-600 dark:text-green-400">
                Você será avisado(a) sobre novos artigos.
              </p>
            ) : (
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Sem spam. Apenas atualizações de novos conteúdos.
              </p>
            )}
          </div>

          <div className="flex items-center justify-center gap-5 mt-10 text-slate-600 dark:text-slate-300">
            <a
              href="mailto:contato@elacompila.dev"
              className="hover:text-slate-900 dark:hover:text-white transition"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>

            <a
              href="https://github.com/leiriele"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/leiriele/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://instagram.com/_leiriele"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
          </div>

          <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Leiriele Corrêa
            </span>
            <span className="mx-2">•</span>
            <span>© 2026</span>
            <span className="mx-2">•</span>
            <span>Ela Compila</span>
          </div>
        </div>
      </div>
    </section>
  );
}