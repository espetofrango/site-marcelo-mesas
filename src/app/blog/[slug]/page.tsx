import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Phone, 
  MapPin, 
  Mail,
  ChevronRight,
  MessageSquare
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Links do Silo de SEO e CTAs
  const whatsappUrl = `https://wa.me/5521997977092?text=Ol%C3%A1%20Marcelo%20Mesas!%20Li%20o%20artigo%20sobre%20${encodeURIComponent(post.title)}%20e%20gostaria%20de%20um%20or%C3%A7amento.`;

  // Posts relacionados (excluindo o atual)
  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800">
      
      {/* Header Silo */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <Link href="/blog" className="flex items-center gap-2 text-[#0866FF] hover:text-blue-700 transition-colors font-bold text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o Blog</span>
          </Link>

          <Link href="/" className="hidden md:inline-flex text-xs font-bold text-slate-500 hover:text-[#0866FF] transition-colors">
            Página Inicial Marcelo mesas
          </Link>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#25D366] text-white font-bold px-4 py-2 rounded-full text-xs hover:bg-[#20ba59] transition-all shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Post Content */}
          <article className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/60 shadow-xs">
            
            {/* Meta do Artigo */}
            <div className="flex items-center gap-4 mb-6 text-sm text-slate-500">
              <span className="font-semibold text-xs px-2.5 py-1 rounded bg-blue-50 text-[#0866FF] uppercase">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{post.readTime}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-8">
              {post.title}
            </h1>

            {/* Render do HTML do conteúdo */}
            <div 
              className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-slate-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* SEO Tag Slogan */}
            <div className="mt-12 pt-8 border-t border-slate-100 text-xs text-slate-400 text-center">
              Foco do conteúdo: <strong>aluguel de mesas e cadeiras Marcelo mesas</strong>
            </div>

          </article>

          {/* Sidebar Silo & CTA */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Caixa de Contato/Orçamento Rápido */}
            <div className="bg-gradient-to-br from-slate-900 to-[#0c326e] text-white p-8 rounded-3xl shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              
              <h3 className="text-xl font-bold mb-4">Precisa de Entrega Rápida?</h3>
              <p className="text-sm text-blue-100 mb-6 leading-relaxed">
                Nós atendemos em Anchieta, Ricardo de Albuquerque, Nilópolis, Deodoro e Guadalupe com pontualidade e segurança rígidas.
              </p>

              <div className="space-y-4 mb-8 text-xs text-blue-200">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-300" />
                  <span>R. Otacílio Pedro Vasco, 993, RJ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-300" />
                  <span>(21) 99797-7092</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-300" />
                  <span>marcellomesasegelo@gmail.com</span>
                </div>
              </div>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold py-3.5 px-4 rounded-xl text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Pedir Orçamento no WhatsApp</span>
              </a>
            </div>

            {/* Posts Relacionados */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-xs">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Leia também</h3>
              <div className="space-y-4">
                {relatedPosts.map((related) => (
                  <div key={related.slug} className="group">
                    <Link href={`/blog/${related.slug}`}>
                      <span className="text-xs text-slate-500">{related.date}</span>
                      <h4 className="font-bold text-sm text-slate-800 group-hover:text-[#0866FF] transition-colors mt-0.5 leading-snug">
                        {related.title}
                      </h4>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Link Silo Principal */}
            <div className="bg-slate-100 p-6 rounded-3xl text-center border border-slate-200/40">
              <p className="text-xs text-slate-500 mb-2">
                Procurando a principal empresa de locação de móveis?
              </p>
              <Link 
                href="/" 
                className="text-xs font-extrabold text-[#0866FF] hover:underline flex items-center justify-center gap-1"
              >
                <span>aluguel de mesas e cadeiras Marcelo mesas</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </aside>

        </div>
      </main>

      {/* Footer do Artigo */}
      <footer className="bg-slate-900 text-white py-8 border-t border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 text-xs text-slate-500">
          <p className="mb-2">Voltar para a página inicial de <Link href="/" className="text-slate-400 hover:text-white transition-colors underline">aluguel de mesas e cadeiras Marcelo mesas</Link>.</p>
          <p>&copy; {new Date().getFullYear()} Marcelo mesas. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
