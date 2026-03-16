import Link from "next/link";

export default function RestBestPractices() {
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
            APIs
          </span>

          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-4">
            Boas práticas de APIs REST
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mb-8">
            APIs REST são a base de grande parte das aplicações modernas.
            Seguir boas práticas melhora manutenção, escalabilidade e
            integração entre sistemas.
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

            <p>02 mar 2026</p>

            <span className="text-pink-300">•</span>

            <p>Leitura de 6 min</p>

          </div>
        </header>

        <section className="space-y-8 text-slate-700 leading-8 text-lg">

          <h2 className="text-2xl font-bold text-slate-900">
            1. Use nomes de recursos no plural
          </h2>

          <p>
            Uma boa prática em APIs REST é usar nomes de recursos no plural.
            Isso torna a API mais consistente e previsível.
          </p>

          <pre className="bg-slate-950 text-white p-5 rounded-xl">
            GET /users
            GET /products
            GET /orders
          </pre>

          <p>
            Evite usar verbos ou nomes singulares nas rotas.
          </p>

          <pre className="bg-red-100 text-red-700 p-5 rounded-xl">
            /getUser
            /createOrder
            /user
          </pre>

          <h2 className="text-2xl font-bold text-slate-900">
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

          <pre className="bg-slate-950 text-white p-5 rounded-xl">
            GET /users
            POST /users
            PUT /users/1
            DELETE /users/1
          </pre>

          <h2 className="text-2xl font-bold text-slate-900">
            3. Padronize respostas JSON
          </h2>

          <p>
            Padronizar o formato de resposta facilita consumo da API por
            frontend e outros serviços.
          </p>

        <pre className="bg-slate-950 text-white p-5 rounded-xl">
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

        <pre className="bg-slate-950 text-white p-5 rounded-xl">
        {`GET /users
        POST /users
        PUT /users/1
        DELETE /users/1`}
        </pre>

          <h2 className="text-2xl font-bold text-slate-900">
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

          <h2 className="text-2xl font-bold text-slate-900">
            5. Versionamento da API
          </h2>

          <p>
            Versionar APIs evita quebrar integrações existentes quando novas
            mudanças são introduzidas.
          </p>

          <pre className="bg-slate-950 text-white p-5 rounded-xl">
/api/v1/users
/api/v2/users
          </pre>

          <h2 className="text-2xl font-bold text-slate-900">
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

          <div className="bg-purple-50 border border-purple-200 p-5 rounded-xl">
            <p className="text-purple-800 text-sm">
              💡 APIs bem projetadas economizam tempo de desenvolvimento
              e reduzem erros de integração.
            </p>
          </div>

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