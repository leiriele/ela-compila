import Link from "next/link";

export default function RestBestPractices() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-3xl mx-auto px-6 py-12">

        <Link
          href="/blog"
          className="text-sm text-pink-700 hover:underline mb-8 inline-block dark:text-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded px-2 py-1"
        >
          ← Voltar
        </Link>

        <header className="mb-12">

          <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium mb-4 dark:bg-pink-900 dark:text-pink-200">
            APIs
          </span>

          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-4 dark:text-white">
            Boas práticas de APIs REST
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mb-8 dark:text-slate-200">
            APIs REST são a base de grande parte das aplicações modernas.
            Seguir boas práticas melhora manutenção, escalabilidade e
            integração entre sistemas.
          </p>

          <div className="flex items-center gap-4 border-t border-b border-pink-100 py-4 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center font-semibold">
                L
              </div>

              <div>
                <p className="font-medium text-slate-800 dark:text-slate-200">
                  Leiriele Corrêa
                </p>
                <p className="text-xs dark:text-slate-400">
                  Autora
                </p>
              </div>
            </div>

            <span className="text-pink-300 dark:text-slate-600">•</span>

            <p>02 mar 2026</p>

            <span className="text-pink-300 dark:text-slate-600">•</span>

            <p>Leitura de 6 min</p>

          </div>
        </header>

        <section className="space-y-8 text-slate-700 leading-8 text-lg dark:text-slate-200">

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            1. Use nomes de recursos no plural
          </h2>

          <p>
            Uma boa prática em APIs REST é usar nomes de recursos no plural.
            Isso torna a API mais consistente e previsível.
          </p>

          <pre className="bg-slate-950 text-white p-5 rounded-xl border border-slate-800 dark:bg-slate-900 dark:border-slate-700">
            GET /users
            GET /products
            GET /orders
          </pre>

          <p>
            Evite usar verbos ou nomes singulares nas rotas.
          </p>

          <pre className="bg-red-100 text-red-700 p-5 rounded-xl overflow-x-auto dark:bg-red-950 dark:text-red-300 dark:border-red-900">
            /getUser
            /createOrder
            /user
          </pre>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            2. Utilize corretamente os métodos HTTP
          </h2>

          <p>
            Métodos HTTP indicam a ação que será realizada no recurso.
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li><strong>GET</strong> → buscar dados</li>
            <li><strong>POST</strong> → criar recurso</li>
            <li><strong>PUT</strong> → atualizar recurso</li>
            <li><strong>PATCH</strong> → atualizar parcialmente</li>
            <li><strong>DELETE</strong> → remover recurso</li>
          </ul>

          <pre className="bg-slate-950 text-white p-5 rounded-xl border border-slate-800 dark:bg-slate-900 dark:border-slate-700">
            GET /users
            POST /users
            PUT /users/1
            DELETE /users/1
          </pre>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            3. Padronize respostas JSON
          </h2>

          <p>
            Padronizar o formato de resposta facilita consumo da API por
            frontend e outros serviços.
          </p>

        <pre className="bg-slate-950 text-white p-5 rounded-xl border border-slate-800 dark:bg-slate-900 dark:border-slate-700">
        {`{
        "success": true,
            "data": {
                "id": 1,
                "name": "Ana"
            }
        }` }
        </pre>

          <p>
            Em caso de erro:
          </p>

        <pre className="bg-slate-950 text-white p-5 rounded-xl border border-slate-800 dark:bg-slate-900 dark:border-slate-700">
        {`GET /users
        POST /users
        PUT /users/1
        DELETE /users/1`}
        </pre>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            4. Utilize códigos HTTP corretos
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li><strong>200</strong> → sucesso</li>
            <li><strong>201</strong> → recurso criado</li>
            <li><strong>400</strong> → erro de requisição</li>
            <li><strong>401</strong> → não autorizado</li>
            <li><strong>404</strong> → recurso não encontrado</li>
            <li><strong>500</strong> → erro interno</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            5. Versionamento da API
          </h2>

          <p>
            Versionar APIs evita quebrar integrações existentes quando novas
            mudanças são introduzidas.
          </p>

          <pre className="bg-slate-950 text-white p-5 rounded-xl border border-slate-800 dark:bg-slate-900 dark:border-slate-700">
/api/v1/users
/api/v2/users
          </pre>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            6. Documentação da API
          </h2>

          <p>
            APIs bem documentadas são muito mais fáceis de integrar.
            Ferramentas populares incluem:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Swagger / OpenAPI</li>
            <li>Redoc</li>
            <li>Postman Collections</li>
          </ul>

          <div className="bg-purple-50 border border-purple-200 p-5 rounded-xl dark:bg-purple-950 dark:border-purple-900">
            <p className="text-purple-800 text-sm dark:text-purple-300">
              💡 APIs bem projetadas economizam tempo de desenvolvimento
              e reduzem erros de integração.
            </p>
          </div>

        </section>

        <div className="mt-16 border-t border-pink-100 pt-10 dark:border-slate-800">

          <p className="text-sm text-slate-500 mb-4 dark:text-slate-400">
            Gostou do artigo?
          </p>

          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600"
          >
            Ver mais artigos
          </Link>

        </div>

      </div>
    </article>
  );
}