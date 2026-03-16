export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-pink-700 font-medium mb-2">Sobre</p>
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          A autora por trás do Ela Compila
        </h1>

        <div className="rounded-3xl border border-pink-100 bg-white p-8 shadow-sm">
          <p className="text-slate-700 leading-8">
            Sou Leiriele Corrêa, desenvolvedora com foco em backend e full stack.
            Criei este blog para compartilhar tutoriais rápidos, experiências de
            projeto e conteúdos técnicos que ajudem outras garotas na área de TI
            a aprender, construir e crescer com mais confiança.
          </p>
        </div>
      </section>
    </main>
  );
}