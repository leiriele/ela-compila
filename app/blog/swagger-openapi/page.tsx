import Link from "next/link";

export default function SwaggerOpenAPI() {
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
            Como documentar endpoints com Swagger/OpenAPI
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mb-8 dark:text-slate-200">
            Documentação clara de APIs é essencial para facilitar integrações,
            testes e manutenção do projeto. Swagger/OpenAPI é o padrão da
            indústria para documentar APIs REST.
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

            <p>11 mar 2026</p>

            <span className="text-pink-300 dark:text-slate-600">•</span>

            <p>Leitura de 7 min</p>

          </div>

        </header>

        <section className="space-y-8 text-slate-700 leading-8 text-lg dark:text-slate-200">

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            O que é Swagger/OpenAPI
          </h2>

          <p>
            Swagger é uma especificação aberta para descrever APIs REST de forma
            padronizada e legível. OpenAPI é a evolução da especificação Swagger,
            mantida pela Linux Foundation.
          </p>

          <p>
            Com Swagger/OpenAPI você documenta:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Endpoints disponíveis</li>
            <li>Métodos HTTP suportados</li>
            <li>Parâmetros de entrada</li>
            <li>Respostas esperadas</li>
            <li>Códigos de erro</li>
            <li>Autenticação necessária</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Por que usar Swagger
          </h2>

          <div className="bg-purple-50 border border-purple-200 p-5 rounded-xl dark:bg-purple-950 dark:border-purple-900">
            <p className="text-purple-800 text-sm dark:text-purple-300">
              💡 Swagger fornece uma interface web interativa para explorar e testar
              sua API, melhorando a experiência do desenvolvedor.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Instalação com Django
          </h2>

          <p>
            Para usar Swagger com Django, instale o package drf-spectacular:
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto border border-slate-800 dark:bg-slate-900 dark:border-slate-700">
{`pip install drf-spectacular`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Configuração básica
          </h2>

          <p>
            Adicione ao settings.py do seu projeto Django:
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto border border-slate-800 dark:bg-slate-900 dark:border-slate-700">
{`INSTALLED_APPS = [
    ...
    'drf_spectacular',
]

REST_FRAMEWORK = {
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
}`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Adicionando endpoints de Swagger
          </h2>

          <p>
            Configure as URLs no urls.py:
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto border border-slate-800 dark:bg-slate-900 dark:border-slate-700">
{`from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns = [
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('docs/', SpectacularSwaggerView.as_view(url_name='schema')),
]`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Documentando endpoints
          </h2>

          <p>
            Use decoradores para documentar suas views:
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto border border-slate-800 dark:bg-slate-900 dark:border-slate-700">
{`from drf_spectacular.utils import extend_schema
from rest_framework.decorators import api_view

@extend_schema(
    description="Busca todos os usuários",
    responses={200: UserSerializer(many=True)}
)
@api_view(['GET'])
def list_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Boas práticas
          </h2>

          <ul className="list-disc ml-6 space-y-3">
            <li>Descreva todos os endpoints</li>
            <li>Documente respostas de erro</li>
            <li>Use exemplos práticos</li>
            <li>Mantenha a documentação atualizada</li>
            <li>Não deixe endpoints internos expostos</li>
          </ul>

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