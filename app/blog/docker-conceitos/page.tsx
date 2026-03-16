import Link from "next/link";

export default function DockerConcepts() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      <div className="max-w-3xl mx-auto px-6 py-12">

        <Link
          href="/blog"
          className="text-sm text-pink-700 hover:underline mb-8 inline-block"
        >
          ← Voltar
        </Link>

        <header className="mb-12">

          <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
            Docker
          </span>

          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-4">
            Diferença entre container, imagem e volume
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mb-8">
            Ao começar a trabalhar com Docker, três conceitos aparecem
            constantemente: imagens, containers e volumes. Entender a
            diferença entre eles é essencial para construir ambientes
            consistentes e escaláveis.
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

            <p>03 fev 2026</p>

            <span className="text-pink-300">•</span>

            <p>Leitura de 5 min</p>

          </div>

        </header>

        <section className="space-y-8 text-slate-700 leading-8 text-lg">

          <h2 className="text-2xl font-bold text-slate-900">
            O que é uma imagem Docker
          </h2>

          <p>
            Uma imagem Docker é um pacote imutável que contém tudo necessário
            para executar uma aplicação: código, bibliotecas, dependências e
            configuração do ambiente.
          </p>

          <p>
            Pense na imagem como um **template** ou uma receita para criar
            containers.
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto">
{`docker build -t minha-api .`}
          </pre>

          <p>
            Esse comando cria uma imagem chamada <strong>minha-api</strong>
            baseada no Dockerfile do projeto.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">
            O que é um container
          </h2>

          <p>
            Um container é uma instância em execução de uma imagem Docker.
            Ele funciona como um ambiente isolado onde a aplicação roda.
          </p>

          <p>
            Containers permitem executar aplicações de forma consistente
            em qualquer máquina.
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto">
{`docker run minha-api`}
          </pre>

          <p>
            Cada vez que esse comando é executado, um novo container
            é criado baseado na imagem especificada.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">
            O que são volumes
          </h2>

          <p>
            Containers são efêmeros. Quando são removidos, os dados dentro
            deles também desaparecem. Para resolver esse problema usamos
            volumes.
          </p>

          <p>
            Volumes permitem persistir dados fora do container.
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto">
{`docker volume create db_data`}
          </pre>

          <p>
            Esse volume pode ser conectado a containers para armazenar
            dados de forma permanente.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">
            Como esses conceitos trabalham juntos
          </h2>

          <ul className="list-disc ml-6 space-y-3">
            <li>Imagem → define o ambiente da aplicação</li>
            <li>Container → executa a aplicação</li>
            <li>Volume → armazena dados persistentes</li>
          </ul>

          <div className="bg-purple-50 border border-purple-200 p-5 rounded-xl">
            <p className="text-purple-800 text-sm">
              💡 Separar aplicação, execução e armazenamento torna os
              sistemas mais portáveis e fáceis de escalar.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            Conclusão
          </h2>

          <p>
            Entender a diferença entre imagem, container e volume é o
            primeiro passo para dominar Docker. Esses três conceitos são
            a base para criar ambientes isolados e reproduzíveis em
            desenvolvimento e produção.
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