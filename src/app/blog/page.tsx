import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import { 
  ArrowLeft, 
  Clock, 
  ChevronRight,
  Phone, 
  MapPin 
} from "lucide-react";

export default function BlogHome() {
  const whatsappUrl = "https://wa.me/5521997977092?text=Ol%C3%A1%20Marcelo%20Mesas!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20aluguel%20para%20meu%20evento.%20Vim%20do%20blog.";

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800">
      
      {/* Header do Blog */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-[#0866FF] hover:text-blue-700 transition-colors font-bold text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para aluguel de mesas e cadeiras Marcelo mesas</span>
          </Link>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-4 py-2 rounded-full text-xs hover:bg-[#20ba59] transition-all shadow-sm"
          >
            <span>Fazer Orçamento no WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero do Blog */}
      <section className="bg-gradient-to-br from-slate-900 via-[#0c326e] to-[#0866FF] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Blog & Dicas do Marcelo Mesas
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Ideias, conselhos de infraestrutura, planejamento de logística e SEO local para aluguel de mesas RJ nos bairros de Anchieta, Nilópolis e região.
          </p>
        </div>
      </section>

      {/* Grid de Artigos */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Silo de SEO: Linkagem de contexto */}
        <div className="bg-blue-50 border border-blue-200/60 p-6 rounded-2xl mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="font-bold text-slate-900 text-lg">Precisa de mesas, cadeiras ou gelo agora?</h2>
            <p className="text-slate-600 text-sm mt-0.5">
              Atendemos de forma imediata em Anchieta, Ricardo de Albuquerque, Nilópolis, Deodoro e Guadalupe.
            </p>
          </div>
          <Link 
            href="/" 
            className="bg-[#0866FF] text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-700 transition-colors shrink-0"
          >
            Ver catálogo completo
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div className="relative h-48 w-full bg-slate-100">
                <Image 
                  src={post.category === 'gelo' ? '/images/gelo.png' : '/images/mesas_cadeiras.png'} 
                  alt={post.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-50 text-[#0866FF] uppercase">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500">{post.date}</span>
                </div>

                <Link href={`/blog/${post.slug}`} className="group">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0866FF] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center gap-1 text-sm font-bold text-[#0866FF] hover:underline"
                >
                  <span>Ler Completo</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </main>

      {/* Rodapé do Blog */}
      <footer className="bg-slate-900 text-white pt-12 pb-8 border-t border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 text-sm text-slate-400">
          <p className="mb-4">
            Voltar para a página inicial de <Link href="/" className="text-white hover:underline font-bold">aluguel de mesas e cadeiras Marcelo mesas</Link>.
          </p>
          <div className="flex justify-center gap-4 mb-4 text-xs">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Parque Anchieta, RJ</span>
            <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> (21) 99797-7092</span>
          </div>
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Marcelo mesas. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
