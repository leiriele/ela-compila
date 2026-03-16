import Link from "next/link";

export default function DockerEnvErrors() {
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
            Erros comuns com .env no Docker Compose
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mb-8">
            Variáveis de ambiente são essenciais para separar configuração
            de código. No entanto, muitos problemas em containers Docker
            estão relacionados ao uso incorreto do arquivo <strong>.env</strong>.
            Neste artigo veremos os erros mais comuns e como evitá-los.
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

            <p>12 fev 2026</p>

            <span className="text-pink-300">•</span>

            <p>Leitura de 5 min</p>

          </div>

        </header>

        <section className="space-y-8 text-slate-700 leading-8 text-lg">

          <h2 className="text-2xl font-bold text-slate-900">
            O que é o arquivo .env
          </h2>

          <p>
            O arquivo <strong>.env</strong> é utilizado para armazenar
            variáveis de ambiente da aplicação. Ele permite separar
            configurações sensíveis ou específicas do ambiente, como
            credenciais de banco de dados ou chaves secretas.
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto">
{`DEBUG=True
SECRET_KEY=super_secret_key
DATABASE_URL=postgres://user:password@db:5432/app`}
          </pre>

          <div className="bg-purple-50 border border-purple-200 p-5 rounded-xl">
            <p className="text-purple-800 text-sm">
              💡 Nunca versionar arquivos .env com informações sensíveis
              no repositório.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            Erro: arquivo .env não encontrado
          </h2>

          <p>
            Um erro comum ao iniciar containers é:
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto">
{`env file .env not found`}
          </pre>

          <p>
            Isso acontece quando o Docker Compose não consegue localizar
            o arquivo no diretório atual.
          </p>

          <p>
            Certifique-se de que o arquivo está na mesma pasta do
            <strong>docker-compose.yml</strong>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">
            Erro de sintaxe no .env
          </h2>

          <p>
            Variáveis no arquivo .env devem seguir o formato:
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto">
{`NOME_VARIAVEL=valor`}
          </pre>

          <p>
            Evite espaços extras ou aspas desnecessárias.
          </p>

          <pre className="bg-red-100 text-red-700 p-6 rounded-xl overflow-x-auto">
{`DEBUG = True
SECRET_KEY : chave`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900">
            Erro ao usar variáveis no docker-compose.yml
          </h2>

          <p>
            Para usar variáveis do arquivo .env dentro do docker-compose,
            utilize a sintaxe <strong>${`{VARIAVEL}`}</strong>.
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto">
{`services:
  web:
    environment:
      - DEBUG=\${DEBUG}
      - SECRET_KEY=\${SECRET_KEY}`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900">
            Boas práticas para variáveis de ambiente
          </h2>

          <ul className="list-disc ml-6 space-y-3">
            <li>Não versionar arquivos .env com dados sensíveis</li>
            <li>Utilizar nomes de variáveis consistentes</li>
            <li>Separar .env para desenvolvimento e produção</li>
            <li>Utilizar ferramentas de secrets em produção</li>
            <li>Documentar variáveis necessárias para rodar o projeto</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900">
            Conclusão
          </h2>

          <p>
            Variáveis de ambiente são fundamentais para configurar aplicações
            containerizadas. Seguir boas práticas evita erros comuns e melhora
            a segurança e organização do projeto.
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