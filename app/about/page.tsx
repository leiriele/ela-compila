export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-pink-700 font-medium mb-2">Sobre</p>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Sobre o Ela Compila
        </h1>

        <p className="text-slate-600 text-lg max-w-3xl mb-10 leading-8">
          Um espaço para compartilhar tutoriais práticos, aprendizados reais e
          conteúdos técnicos sobre desenvolvimento, APIs, Docker, automação e
          backend.
        </p>

        <div className="grid gap-8 md:grid-cols-[280px_1fr] items-start">
          <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
            <img
            src="/perfil3.jpg"
            alt="Foto de Leiriele Corrêa"
            className="w-full aspect-square object-cover rounded-2xl border border-pink-100"
            />

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-slate-900">
                Leiriele Corrêa
              </h2>
              <p className="text-slate-500 mt-1">
                Desenvolvedora Backend / Full Stack
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-pink-100 bg-white p-8 shadow-sm">
            <div className="space-y-6 text-slate-700 leading-8">
              <p>
                Sou Leiriele Corrêa, desenvolvedora com foco em backend e full
                stack. Criei o Ela Compila para reunir conteúdos técnicos,
                experiências práticas e aprendizados construídos ao longo de
                projetos reais.
              </p>

              <p>
                A proposta do blog é transformar conhecimento técnico em
                conteúdo acessível, objetivo e útil para quem busca evoluir em
                temas como APIs, Docker, integração entre sistemas, automação e
                boas práticas de desenvolvimento.
              </p>

              <p>
                Além de compartilhar tutoriais, este projeto também faz parte do
                meu portfólio, refletindo meu interesse em construção de
                produto, organização de conteúdo técnico e desenvolvimento de
                interfaces modernas com foco em experiência de leitura.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Principais temas
                </h3>
                <p className="text-slate-600 leading-7">
                  Backend, Docker, APIs, integração de sistemas, Python e
                  automação.
                </p>
              </div>

              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Objetivo do blog
                </h3>
                <p className="text-slate-600 leading-7">
                  Compartilhar conteúdo técnico prático e consolidar projetos
                  como parte do portfólio profissional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}