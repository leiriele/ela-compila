import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-pink-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold flex items-center justify-center shadow-sm">
            EC
          </div>

          <div>
            <p className="font-bold text-slate-900 leading-none">Ela Compila</p>
            <p className="text-xs text-slate-500">blog para garotas de TI</p>
          </div>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-pink-700 transition">
            Início
          </Link>
          <Link href="/blog" className="hover:text-pink-700 transition">
            Blog
          </Link>
          <Link href="/about" className="hover:text-pink-700 transition">
            Sobre
          </Link>
        </div>
      </div>
    </nav>
  );
}