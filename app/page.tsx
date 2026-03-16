"use client";

import Link from "next/link";
import { useState } from "react";

const latestPosts = [
  {
    title: "Como subir uma API Django com Docker Compose",
    slug: "django-docker-compose",
    date: "25 fev 2026",
    category: "Docker",
  },
  {
    title: "Erros comuns com .env no Docker Compose",
    slug: "docker-env-erros",
    date: "12 fev 2026",
    category: "Docker",
  },
  {
    title: "Integração Django + API externa",
    slug: "django-api-externa",
    date: "07 mar 2026",
    category: "Backend",
  },
  {
    title: "Boas práticas de APIs REST",
    slug: "boas-praticas-api-rest",
    date: "02 mar 2026",
    category: "Backend",
  },
  {
    title: "Como documentar endpoints com Swagger/OpenAPI",
    slug: "swagger-openapi",
    date: "11 mar 2026",
    category: "Backend",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();

    if (!email) return;

    console.log("Novo inscrito:", email);

    setSuccess(true);
    setEmail("");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">

      {/* HERO */}

      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="max-w-3xl mb-20">

          <span className="inline-block rounded-full bg-pink-100 text-pink-700 text-sm font-medium px-4 py-1 mb-6">
            Backend • Docker • Full Stack • Carreira
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Ela Compila
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8">
            Um blog com tutoriais rápidos, aprendizados reais e conteúdos
            técnicos para garotas que constroem tecnologia.
          </p>

          <div className="flex flex-wrap gap-4">

            <Link
              href="/blog"
              className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 font-medium hover:opacity-90 transition"
            >
              Ler artigos
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-pink-200 bg-white text-slate-700 px-6 py-3 font-medium hover:bg-pink-50 transition"
            >
              Conhecer a autora
            </Link>

          </div>

        </div>

        {/* POSTS */}

        <div>

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-3xl font-bold text-slate-900">
              Últimos artigos
            </h2>

            <Link
              href="/blog"
              className="text-pink-700 hover:underline text-sm font-medium"
            >
              Ver todos
            </Link>

          </div>

          <div className="space-y-6">

            {latestPosts.map((post) => (

              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-2xl border border-pink-100 bg-white p-6 shadow-sm hover:shadow-md transition"
              >

                <div className="flex items-center gap-3 mb-2 text-sm">

                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>

                  <span className="text-slate-400">
                    {post.date}
                  </span>

                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {post.title}
                </h3>

              </Link>

            ))}

          </div>

        </div>

        {/* NEWSLETTER */}

        <div className="mt-24 bg-white border border-pink-100 rounded-2xl p-8 shadow-sm">

          <h3 className="text-2xl font-semibold text-slate-900 mb-2">
            Receba novos artigos por email
          </h3>

          <p className="text-slate-600 mb-6">
            Inscreva-se para receber notificações quando novos conteúdos forem publicados.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row gap-4"
          >

            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 p-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              Inscrever
            </button>

          </form>

          {success && (
            <p className="text-green-600 mt-4 text-sm">
              Obrigada! Você será avisada quando novos artigos forem publicados.
            </p>
          )}

        </div>

        {/* SOCIAL */}

        <div className="mt-16 flex flex-col items-center gap-4">

          <p className="text-sm text-slate-500">
            Conecte-se comigo
          </p>

          <div className="flex gap-6 text-pink-600 font-medium">

            <a
              href="https://www.linkedin.com/in/leiriele/"
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/leiriele"
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://instagram.com/_leiriele"
              target="_blank"
              className="hover:underline"
            >
              Instagram
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}