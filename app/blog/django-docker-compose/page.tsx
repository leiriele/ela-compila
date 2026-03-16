import Link from "next/link";

export default function DockerComposeApiPost() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      <div className="max-w-3xl mx-auto px-6 py-12">

        <Link
          href="/blog"
          className="text-sm text-pink-700 hover:underline mb-8 inline-block"
        >
          ← Voltar para artigos
        </Link>

        <header className="mb-12">

          <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
            Docker
          </span>

          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-4">
            Como subir uma API com Docker Compose
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mb-8">
            Um tutorial rápido para criar um ambiente backend organizado,
            reproduzível e fácil de manter usando containers.
          </p>

          <div className="flex items-center gap-4 border-t border-b border-pink-100 py-4 text-sm text-slate-500">

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center font-semibold">
                L
              </div>

              <div>
                <p className="font-medium text-slate-800">
                  Leiriele Corrêa
                </p>
                <p className="text-xs">
                  Autora
                </p>
              </div>
            </div>

            <span className="text-pink-300">•</span>

            <p>16 mar 2026</p>

            <span className="text-pink-300">•</span>

            <p>Leitura de 4 min</p>

          </div>
        </header>

        <section className="space-y-8 text-slate-700 leading-8 text-lg">

          <h2 className="text-2xl font-bold text-slate-900">
            Por que usar Docker Compose
          </h2>

          <p>
            O Docker Compose facilita a execução de aplicações compostas por
            múltiplos serviços, mantendo a configuração centralizada e simples
            de reproduzir em diferentes ambientes.
          </p>

          <div className="bg-purple-50 border border-purple-200 p-5 rounded-xl">
            <p className="text-purple-800 text-sm">
              💡 Docker Compose permite subir múltiplos serviços com apenas um
              comando.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12">
            Estrutura do projeto
          </h2>

          <pre className="bg-slate-950 text-slate-100 p-6 rounded-2xl overflow-x-auto border border-slate-800 shadow-sm">
{`project
├── docker-compose.yml
├── Dockerfile
└── app`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900 mt-12">
            docker-compose.yml
          </h2>

          <pre className="bg-slate-950 text-slate-100 p-6 rounded-2xl overflow-x-auto border border-slate-800 shadow-sm">
{`services:
  api:
    build: .
    ports:
      - "8000:8000"`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900 mt-12">
            Execução
          </h2>

          <p>
            Depois da configuração, basta executar:
          </p>

          <pre className="bg-slate-950 text-slate-100 p-6 rounded-2xl overflow-x-auto border border-slate-800 shadow-sm">
{`docker compose up`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900 mt-12">
            Conclusão
          </h2>

          <p>
            Com uma configuração simples, já é possível padronizar o ambiente de
            desenvolvimento e evitar diferenças entre máquina local,
            homologação e produção.
          </p>

        </section>

        <div className="mt-16 border-t border-pink-100 pt-10">

          <p className="text-sm text-slate-500 mb-4">
            Gostou do artigo?
          </p>

          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Ver mais artigos
          </Link>

        </div>

      </div>
    </article>
  );
}