import Link from "next/link";

export default function FlaskReports() {
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
            Python
          </span>

          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-4">
            Automatizando relatórios com Python e Flask
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mb-8">
            Automatizar relatórios é uma das aplicações mais comuns de Python
            em ambientes industriais e corporativos. Neste exemplo vamos
            construir um pequeno serviço com Flask que gera alertas de OEE
            (Overall Equipment Effectiveness) e envia notificações para o
            Telegram.
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

            <p>14 mar 2026</p>

            <span className="text-pink-300">•</span>

            <p>Leitura de 6 min</p>

          </div>

        </header>

        <section className="space-y-8 text-slate-700 leading-8 text-lg">

          <h2 className="text-2xl font-bold text-slate-900">
            O que é OEE
          </h2>

          <p>
            OEE (Overall Equipment Effectiveness) é um indicador usado para
            medir eficiência de máquinas industriais. Ele considera três fatores:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Disponibilidade</li>
            <li>Performance</li>
            <li>Qualidade</li>
          </ul>

          <p>
            Em muitas fábricas esse indicador é monitorado em tempo real e
            alertas são enviados quando o valor fica abaixo de um limite.
          </p>

          <div className="bg-purple-50 border border-purple-200 p-5 rounded-xl">
            <p className="text-purple-800 text-sm">
              💡 Automatizar relatórios reduz trabalho manual e permite reagir
              rapidamente a problemas na produção.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            Instalando dependências
          </h2>

          <p>
            Para criar um serviço simples utilizaremos Flask para a API e
            Pandas para manipular dados.
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto">
{`pip install flask pandas requests`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900">
            Estrutura básica da aplicação
          </h2>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto">
{`project
├── app.py
├── service
│   └── oee_service.py
└── requirements.txt`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900">
            Criando a API com Flask
          </h2>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto">
{`from flask import Flask, jsonify
from oee_service import calcular_oee

app = Flask(__name__)

@app.route("/oee")

def verificar_oee():

    valor = calcular_oee()

    return jsonify({
        "oee": valor
    })`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900">
            Simulando cálculo de OEE
          </h2>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto">
{`import random

def calcular_oee():

    disponibilidade = random.uniform(0.7, 0.95)
    performance = random.uniform(0.7, 0.95)
    qualidade = random.uniform(0.9, 0.99)

    oee = disponibilidade * performance * qualidade

    return round(oee * 100, 2)`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900">
            Enviando alerta para o Telegram
          </h2>

          <p>
            Podemos integrar o sistema com o Telegram usando o Bot API.
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto">
{`import requests

def enviar_alerta(oee):

    BOT_TOKEN = "SEU_TOKEN"
    CHAT_ID = "SEU_CHAT"

    mensagem = f"OEE abaixo do esperado: {oee}%"

    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"

    requests.post(url, json={
        "chat_id": CHAT_ID,
        "text": mensagem
    })`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900">
            Verificando limite mínimo
          </h2>

          <p>
            Podemos criar uma verificação automática quando o OEE cair abaixo
            de um limite configurado.
          </p>

          <pre className="bg-slate-950 text-white p-6 rounded-xl overflow-x-auto">
{`def verificar_alerta():

    oee = calcular_oee()

    if oee < 75:
        enviar_alerta(oee)

    return oee`}
          </pre>

          <h2 className="text-2xl font-bold text-slate-900">
            Possíveis evoluções
          </h2>

          <ul className="list-disc ml-6 space-y-3">
            <li>Agendar execução com Celery ou cron</li>
            <li>Salvar histórico em banco de dados</li>
            <li>Criar dashboards com gráficos</li>
            <li>Integrar com ERPs industriais</li>
            <li>Enviar relatórios diários automaticamente</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900">
            Conclusão
          </h2>

          <p>
            Python e Flask permitem criar serviços simples e eficientes
            para automação de relatórios e monitoramento industrial.
            Com poucas linhas de código é possível integrar dados de
            produção e gerar alertas em tempo real.
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