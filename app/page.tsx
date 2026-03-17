import Link from "next/link";

const featuredPosts = [
  {
    title: "Como subir uma API Django com Docker Compose",
    slug: "django-docker-compose",
    category: "Docker",
    date: "25 fev 2026",
  },
  {
    title: "Boas práticas de APIs REST",
    slug: "boas-praticas-api-rest",
    category: "Backend",
    date: "02 mar 2026",
  },
  {
    title: "Como documentar APIs com Swagger/OpenAPI",
    slug: "swagger-openapi",
    category: "Backend",
    date: "11 mar 2026",
  },
  {
    title: "Automatizando relatórios com Python (Flask)",
    slug: "relatorios-python-flask",
    category: "Python",
    date: "14 mar 2026",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white px-4 py-2 text-sm text-pink-700 shadow-sm mb-6 dark:border-slate-800 dark:bg-slate-900 dark:text-pink-200">
              <span className="h-2 w-2 rounded-full bg-pink-500" />
              Blog técnico e projeto de portfólio
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-6 dark:text-white">
              Ela Compila
            </h1>

            <p className="max-w-2xl text-lg md:text-xl leading-9 text-slate-600 mb-8 dark:text-slate-200">
              Tutoriais práticos e aprendizados reais sobre backend, APIs,
              Docker e automação. Este blog faz parte do meu portfólio e
              documenta projetos, experimentos e boas práticas de engenharia de
              software.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {["Docker", "Backend", "APIs", "Python", "Automação", "Next.js"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-white font-medium hover:bg-slate-800 transition dark:bg-pink-600 dark:hover:bg-pink-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
              >
                Explorar artigos
              </Link>

            </div>

          </div>

          <aside className="rounded-3xl border border-pink-100 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-medium text-pink-700 mb-1 dark:text-pink-200">
                  Em destaque
                </p>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Últimos artigos
                </h2>
              </div>

              <Link
                href="/blog"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                Ver todos
              </Link>
            </div>

            <div className="space-y-4">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block rounded-2xl border border-slate-200 p-5 hover:border-pink-200 hover:bg-pink-50/40 transition dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                    <span className="rounded-full bg-pink-100 px-3 py-1 font-medium text-pink-700 dark:bg-pink-500/15 dark:text-pink-200">
                      {post.category}
                    </span>
                    <span className="text-slate-400 dark:text-slate-400">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold leading-7 text-slate-900 dark:text-white">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>

          </aside>
        </div>
      </section>
    </main>
  );
}