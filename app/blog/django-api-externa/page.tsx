import Link from "next/link";

export default function DjangoApiIntegration() {
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
            Backend
          </span>

          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-4 dark:text-white">
            Integração Django + API externa
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mb-8 dark:text-slate-200">
            Em muitos projetos precisamos consumir dados de APIs externas,
            como serviços de pagamento, clima, autenticação ou ERPs.
            Neste guia vamos ver como integrar Django com APIs externas
            de forma segura e organizada.
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

            <p>07 mar 2026</p>

            <span className="text-pink-300 dark:text-slate-600">•</span>

            <p>Leitura de 5 min</p>

          </div>

        </header>

        <section className="space-y-8 text-slate-700 leading-8 text-lg dark:text-slate-200">

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Quando usar integração com APIs externas
          </h2>

          <p>
            Integrações com APIs externas são comuns em sistemas modernos.
            Alguns exemplos incluem:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Integração com sistemas de pagamento</li>
            <li>Consulta de dados em ERPs</li>
            <li>Serviços de geolocalização</li>
            <li>APIs de envio de email</li>
            <li>Serviços de autenticação externa</li>
          </ul>

          <div className="bg-purple-50 border border-purple-200 p-5 rounded-xl dark:bg-purple-950 dark:border-purple-900">
            <p className="text-purple-800 text-sm dark:text-purple-300">
              💡 Integrar APIs externas permite reutilizar serviços já
              existentes e acelerar o desenvolvimento de sistemas.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Instalando biblioteca de requisição HTTP
          </h2>

          <p>
            A biblioteca mais utilizada em Python para consumir APIs
            é o <strong>requests</strong>.
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto border border-slate-800 dark:bg-slate-900 dark:border-slate-700">
{`pip install requests`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Realizando uma requisição simples
          </h2>

          <p>
            Podemos consumir uma API externa dentro de uma view Django
            ou dentro de um serviço da aplicação.
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto border border-slate-800 dark:bg-slate-900 dark:border-slate-700">
{`import requests

response = requests.get("https://api.exemplo.com/dados")

data = response.json()

print(data)`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Tratando erros de requisição
          </h2>

          <p>
            APIs externas podem falhar, por isso é importante tratar erros.
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto border border-slate-800 dark:bg-slate-900 dark:border-slate-700">
{`import requests

try:
    response = requests.get("https://api.exemplo.com/dados", timeout=5)

    if response.status_code == 200:
        data = response.json()
    else:
        print("Erro ao consultar API")

except requests.exceptions.RequestException as error:
    print("Falha na requisição:", error)`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Boas práticas para integrações
          </h2>

          <ul className="list-disc ml-6 space-y-3">
            <li>Use timeout nas requisições</li>
            <li>Trate erros e exceções</li>
            <li>Evite chamar APIs externas dentro de loops</li>
            <li>Cache resultados quando possível</li>
            <li>Armazene tokens e chaves no arquivo .env</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Exemplo dentro de uma view Django
          </h2>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto border border-slate-800 dark:bg-slate-900 dark:border-slate-700">
{`from django.http import JsonResponse
import requests

def buscar_dados(request):

    response = requests.get("https://api.exemplo.com/dados")

    data = response.json()

    return JsonResponse(data)`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Conclusão
          </h2>

          <p>
            Integrar APIs externas em Django é simples e poderoso.
            Com boas práticas de tratamento de erro e organização
            do código, é possível construir integrações robustas
            e escaláveis.
          </p>

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