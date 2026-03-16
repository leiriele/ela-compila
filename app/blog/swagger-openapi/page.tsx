"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const posts = [
  {
    title: "Diferença entre container, imagem e volume",
    slug: "docker-conceitos",
    date: "03 fev 2026",
    category: "Docker",
    excerpt:
      "Entenda os conceitos fundamentais do Docker e como imagem, container e volume trabalham juntos no dia a dia.",
  },
  {
    title: "Erros comuns com .env no Docker Compose",
    slug: "docker-env-erros",
    date: "12 fev 2026",
    category: "Docker",
    excerpt:
      "Veja falhas frequentes no uso de variáveis de ambiente e como evitar problemas de configuração em projetos containerizados.",
  },
  {
    title: "Como subir uma API Django com Docker Compose",
    slug: "django-docker-compose",
    date: "25 fev 2026",
    category: "Docker",
    excerpt:
      "Um guia prático para estruturar, subir e manter uma API Django com Docker Compose de forma organizada.",
  },
  {
    title: "Boas práticas de APIs REST",
    slug: "boas-praticas-api-rest",
    date: "02 mar 2026",
    category: "Backend",
    excerpt:
      "Aprenda padrões importantes para rotas, métodos HTTP, respostas JSON e versionamento de APIs.",
  },
  {
    title: "Integração Django + API externa",
    slug: "django-api-externa",
    date: "07 mar 2026",
    category: "Backend",
    excerpt:
      "Saiba como consumir APIs externas em Django com tratamento de erros e organização do código.",
  },
  {
    title: "Como documentar endpoints com Swagger/OpenAPI",
    slug: "swagger-openapi",
    date: "11 mar 2026",
    category: "Backend",
    excerpt:
      "Documente endpoints de forma clara para facilitar integrações, testes e manutenção do projeto.",
  },
  {
    title: "Automatizando relatórios com Python (Flask)",
    slug: "relatorios-python-flask",
    date: "14 mar 2026",
    category: "Python",
    excerpt:
      "Um exemplo de automação com Python e Flask para gerar alertas e relatórios em cenários reais.",
  },
];

type Post = (typeof posts)[number];

function SectionHeader({
  title,
  description,
  count,
}: {
  title: string;
  description: string;
  count: number;
}) {
  return (
    <div className="mb-6 mt-14">
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        <span className="rounded-full bg-white border border-pink-100 px-3 py-1 text-sm text-slate-500">
          {count} artigo{count !== 1 ? "s" : ""}
        </span>
      </div>

      <p className="text-slate-600 max-w-3xl">{description}</p>
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-white border border-pink-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
    >
      <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
        <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium">
          {post.category}
        </span>
        <span className="text-slate-400">{post.date}</span>
      </div>

      <h3 className="text-xl font-semibold text-slate-900 mb-3">
        {post.title}
      </h3>

      <p className="text-slate-600 leading-7">{post.excerpt}</p>
    </Link>
  );
}

export default function BlogPage() {
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    const term = search.toLowerCase().trim();

    if (!term) return posts;

    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term)
    );
  }, [search]);

  const dockerPosts = filteredPosts.filter((p) => p.category === "Docker");
  const backendPosts = filteredPosts.filter((p) => p.category === "Backend");
  const pythonPosts = filteredPosts.filter((p) => p.category === "Python");

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-pink-700 font-medium mb-2">Blog</p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Tutoriais e aprendizados
          </h1>

          <p className="text-slate-600 max-w-3xl mb-6 leading-8">
            Conteúdos sobre Docker, backend, APIs, Python e automação, com foco
            em prática, organização de projetos e exemplos que podem ser
            aplicados no dia a dia de desenvolvimento.
          </p>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="w-full md:max-w-md">
              <input
                type="text"
                placeholder="Buscar por título, tema ou tecnologia..."
                className="w-full p-3 rounded-xl border border-pink-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <p className="text-sm text-slate-500">
              {filteredPosts.length} resultado
              {filteredPosts.length !== 1 ? "s" : ""} encontrado
              {filteredPosts.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {filteredPosts.length === 0 && (
          <div className="rounded-2xl border border-pink-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Nenhum artigo encontrado
            </h2>
            <p className="text-slate-600 leading-7">
              Tente buscar por termos como Docker, Django, API, Swagger, Python
              ou automação.
            </p>
          </div>
        )}

        {dockerPosts.length > 0 && (
          <>
            <SectionHeader
              title="Docker"
              description="Artigos voltados para fundamentos de containers, configuração com Docker Compose e boas práticas para ambientes reproduzíveis."
              count={dockerPosts.length}
            />

            <div className="grid gap-6 md:grid-cols-2">
              {dockerPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}

        {backendPosts.length > 0 && (
          <>
            <SectionHeader
              title="Backend & APIs"
              description="Conteúdos sobre construção de APIs, integração entre serviços, padrões REST e documentação técnica para projetos reais."
              count={backendPosts.length}
            />

            <div className="grid gap-6 md:grid-cols-2">
              {backendPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}

        {pythonPosts.length > 0 && (
          <>
            <SectionHeader
              title="Python & Automação"
              description="Exemplos práticos de automação com Python, geração de relatórios e pequenos serviços para otimizar processos."
              count={pythonPosts.length}
            />

            <div className="grid gap-6 md:grid-cols-2">
              {pythonPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}