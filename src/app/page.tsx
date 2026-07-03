import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ShieldCheck, 
  Truck, 
  ArrowRight,
  MessageSquare
} from "lucide-react";

export default function Home() {
  // Limita a 3 posts na home
  const homePosts = posts.slice(0, 3);

  // Link do WhatsApp com mensagem personalizada para lead tracking
  const whatsappUrl = "https://wa.me/5521997977092?text=Ol%C3%A1%20Marcelo%20Mesas!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20aluguel%20para%20meu%20evento.%20Vim%20do%20site.";

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800">
      
      {/* Top Banner de Contato Rápido */}
      <div className="bg-[#0866FF] text-white py-2 px-4 text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>(21) 99797-7092</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-emerald-300" />
              <span>marcellomesasegelo@gmail.com</span>
            </span>
          </div>
          <div className="text-center sm:text-right">
            Atendimento Rápido em Anchieta, Nilópolis e Região
          </div>
        </div>
      </div>

      {/* Header/Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-[#0866FF] leading-none">
              MARCELO
            </span>
            <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              mesas e gelo
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#servicos" className="hover:text-[#0866FF] transition-colors">Serviços</a>
            <a href="#bairros" className="hover:text-[#0866FF] transition-colors">Área de Atendimento</a>
            <a href="#depoimentos" className="hover:text-[#0866FF] transition-colors">Depoimentos</a>
            <Link href="/blog" className="hover:text-[#0866FF] transition-colors">Blog & Dicas</Link>
            <a href="#contato" className="hover:text-[#0866FF] transition-colors">Contato</a>
          </nav>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-[#20ba59] transition-all hover:scale-[1.02] shadow-md shadow-emerald-200"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Fazer Orçamento</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-[#0c326e] to-[#0866FF] text-white py-20 lg:py-32 overflow-hidden">
        {/* Elemento de Fundo Decorativo */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto do Hero */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
                <Truck className="w-3.5 h-3.5" /> Entrega Rápida & Pontualidade Garantida
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Aluguel de mesas e cadeiras <span className="text-blue-300">Marcelo mesas</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed">
                Precisa de mesas e cadeiras plásticas brancas limpas e gelo cristalino para o seu evento? Garantimos entrega rápida com pontualidade rígida e total segurança na sua região.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold px-8 py-4 rounded-xl text-base shadow-lg shadow-emerald-950/20 transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Pedir no WhatsApp Agora</span>
                </a>
                <a 
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border border-white/20 text-base transition-all"
                >
                  <span>Conhecer Nossos Produtos</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Badges de Confiança */}
              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-300 shrink-0" />
                  <span className="text-sm font-medium text-blue-100">Pontualidade Rígida</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-300 shrink-0" />
                  <span className="text-sm font-medium text-blue-100">Material Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-300 shrink-0" />
                  <span className="text-sm font-medium text-blue-100">Limpeza Impecável</span>
                </div>
              </div>
            </div>

            {/* Imagem do Hero */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image 
                  src="/images/mesas_cadeiras.png" 
                  alt="Mesas e cadeiras de plástico brancas aluguel Marcelo mesas" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção de Serviços e Produtos */}
      <section id="servicos" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Nossos Serviços & Produtos
            </h2>
            <p className="text-lg text-slate-600">
              Oferecemos soluções práticas e seguras para a infraestrutura do seu evento. Equipamento limpo, seguro e entrega imediata.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Produto 1: Aluguel de Mesas */}
            <div className="flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all hover:shadow-md">
              <div className="h-56 relative bg-slate-200">
                <Image 
                  src="/images/mesas_cadeiras.png" 
                  alt="Aluguel de Mesas Plásticas" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Aluguel de Mesas</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                  Mesas plásticas brancas de alta durabilidade e estabilidade, ideais para churrascos, aniversários e festas comunitárias. Higienizadas antes de cada entrega para a segurança da sua família.
                </p>
                <div className="pt-4 border-t border-slate-200/60">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#0866FF] font-bold text-sm hover:underline">
                    <span>Solicitar mesas no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Produto 2: Aluguel de Cadeiras */}
            <div className="flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all hover:shadow-md">
              <div className="h-56 relative bg-slate-200">
                <Image 
                  src="/images/mesas_cadeiras.png" 
                  alt="Aluguel de Cadeiras Plásticas Brancas" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Aluguel de Cadeiras</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                  Cadeiras plásticas brancas reforçadas e confortáveis. Atendemos aos padrões de segurança para suportar peso com total estabilidade, evitando acidentes no seu evento.
                </p>
                <div className="pt-4 border-t border-slate-200/60">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#0866FF] font-bold text-sm hover:underline">
                    <span>Solicitar cadeiras no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Produto 3: Venda de Gelo */}
            <div className="flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all hover:shadow-md">
              <div className="h-56 relative bg-slate-200">
                <Image 
                  src="/images/gelo.png" 
                  alt="Sacos de gelo para festas" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Gelo para Bebidas</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                  Sacos de gelo produzidos com água 100% filtrada. Ideal para manter suas bebidas geladas o evento inteiro. Entrega programada no horário exato para o gelo chegar sem derreter.
                </p>
                <div className="pt-4 border-t border-slate-200/60">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#0866FF] font-bold text-sm hover:underline">
                    <span>Solicitar gelo no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção de Área de Atendimento Focada */}
      <section id="bairros" className="py-20 bg-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Logística de Entrega Ágil nos Bairros do RJ
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nosso diferencial é a proximidade e o conhecimento profundo da região. Entregamos com caminhão próprio e equipe dedicada nos bairros da Zona Norte e arredores, garantindo a sua tranquilidade.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Anchieta",
                  "Ricardo de Albuquerque",
                  "Deodoro",
                  "Guadalupe",
                  "Cabral",
                  "Olinda",
                  "Nilópolis"
                ].map((bairro, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-xs">
                    <MapPin className="w-5 h-5 text-[#0866FF] shrink-0" />
                    <span className="font-semibold text-slate-700 text-sm">{bairro}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0866FF] text-white p-8 lg:p-12 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              
              <div>
                <span className="text-xs font-bold tracking-wider text-blue-200 uppercase">Rapidez e Segurança</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-6">Não cobramos taxas abusivas de frete para nossa região!</h3>
                <p className="text-blue-100 leading-relaxed mb-8">
                  Como nossa base logística está próxima a esses bairros, conseguimos programar entregas rápidas e eficientes no mesmo dia ou agendadas. Oferecemos segurança física de que o material chegará pronto para uso.
                </p>
              </div>

              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0866FF] font-extrabold px-6 py-3.5 rounded-xl text-sm hover:bg-blue-50 transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Consultar Disponibilidade Próxima</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Testemunhos Locais Reais (Baseados nas Ruas e Locais) */}
      <section id="depoimentos" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              O que dizem os clientes na nossa região
            </h2>
            <p className="text-lg text-slate-600">
              Moradores e comerciantes das redondezas confiam no Marcelo mesas para suas festas e eventos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Testemunho 1: Anchieta */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between relative">
              <span className="absolute top-6 right-8 text-6xl text-blue-200 font-serif leading-none">“</span>
              <div className="relative z-10 flex-1">
                <p className="text-slate-600 italic mb-6 leading-relaxed">
                  &ldquo;Aluguei 5 jogos de mesas plásticas brancas para o churrasco na Estrada do Engenho Novo, em Anchieta. O Marcelo entregou exatamente no horário combinado pela manhã e as mesas estavam extremamente limpas. Recomendo muito pela pontualidade!&rdquo;
                </p>
              </div>
              <div className="flex flex-col mt-4 pt-4 border-t border-slate-200/60">
                <span className="font-bold text-slate-900 text-sm">Carlos Alberto S.</span>
                <span className="text-xs text-slate-500">Estrada do Engenho Novo, Anchieta</span>
              </div>
            </div>

            {/* Testemunho 2: Ricardo de Albuquerque */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between relative">
              <span className="absolute top-6 right-8 text-6xl text-blue-200 font-serif leading-none">“</span>
              <div className="relative z-10 flex-1">
                <p className="text-slate-600 italic mb-6 leading-relaxed">
                  &ldquo;Precisávamos de cadeiras firmes para o aniversário na Rua Japeri, em Ricardo de Albuquerque. As cadeiras plásticas brancas do Marcelo são reforçadas de verdade, todos os convidados ficaram confortáveis e seguros. Atendimento nota 10.&rdquo;
                </p>
              </div>
              <div className="flex flex-col mt-4 pt-4 border-t border-slate-200/60">
                <span className="font-bold text-slate-900 text-sm">Juliana Mendes</span>
                <span className="text-xs text-slate-500">Rua Japeri, Ricardo de Albuquerque</span>
              </div>
            </div>

            {/* Testemunho 3: Nilópolis / Olinda */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between relative">
              <span className="absolute top-6 right-8 text-6xl text-blue-200 font-serif leading-none">“</span>
              <div className="relative z-10 flex-1">
                <p className="text-slate-600 italic mb-6 leading-relaxed">
                  &ldquo;Pedimos mesas, cadeiras e 4 sacos de gelo para um almoço de domingo em Olinda, Nilópolis. O gelo chegou super inteiro, embalado direitinho e a equipe descarregou tudo com muita educação e agilidade. Com certeza farei novos pedidos.&rdquo;
                </p>
              </div>
              <div className="flex flex-col mt-4 pt-4 border-t border-slate-200/60">
                <span className="font-bold text-slate-900 text-sm">Marcos Vinícius</span>
                <span className="text-xs text-slate-500">Próximo à estação de Olinda, Nilópolis</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção do Blog (Silo SEO Local) */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                Blog & Dicas para Eventos Locais
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Confira nossas dicas de organização e guias práticos sobre aluguel de materiais e infraestrutura para festas no Rio de Janeiro.
              </p>
            </div>
            <Link 
              href="/blog" 
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-[#0866FF] font-bold text-sm hover:underline"
            >
              <span>Ver todos os posts do Blog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards do Blog */}
          <div className="grid md:grid-cols-3 gap-8">
            {homePosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-xs flex flex-col justify-between transition-all hover:shadow-md">
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-[#0866FF] uppercase">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500">{post.date}</span>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`} className="group">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0866FF] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">{post.readTime}</span>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#0866FF] hover:underline"
                  >
                    <span>Ler Artigo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Seção de Contato e Localização */}
      <section id="contato" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Informações de Contato */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Fale Conosco
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Tem dúvidas sobre quantidade, valores ou quer agendar a entrega para a sua festa? Fale diretamente pelo WhatsApp ou nos envie um e-mail. Respondemos rapidamente!
              </p>

              <div className="space-y-6">
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-[#0866FF] rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">WhatsApp</h4>
                    <p className="text-slate-600 text-sm mt-0.5">+55 21 99797-7092</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-[#0866FF] rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Email</h4>
                    <p className="text-slate-600 text-sm mt-0.5">marcellomesasegelo@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-[#0866FF] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Endereço da Base</h4>
                    <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">
                      R. Otacílio Pedro Vasco, 993<br />
                      Parque Anchieta, Rio de Janeiro - RJ, 21635-380
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-[#0866FF] rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Horário de Funcionamento</h4>
                    <p className="text-slate-600 text-sm mt-0.5">Segunda a Domingo: 08:00 às 20:00</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Caixa de Ação Rápida */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-8 sm:p-12 rounded-3xl shadow-sm flex flex-col justify-center text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Solicite um Orçamento sem Compromisso
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Clique no botão abaixo para iniciar uma conversa no WhatsApp. Você receberá valores de kits de mesas, cadeiras plásticas brancas e sacos de gelo imediatamente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold px-8 py-4 rounded-xl text-base shadow-lg shadow-emerald-200 transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Chamar Marcelo no WhatsApp</span>
                </a>
                <a 
                  href="tel:+5521997977092"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-bold px-8 py-4 rounded-xl text-base hover:bg-slate-50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-slate-500" />
                  <span>Ligar para (21) 99797-7092</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Rodapé do Site */}
      <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            
            {/* Info Principal */}
            <div className="md:col-span-2">
              <span className="text-2xl font-black tracking-tight text-white leading-none">
                MARCELO <span className="text-[#0866FF]">MESAS</span>
              </span>
              <p className="text-slate-400 text-sm mt-4 leading-relaxed max-w-sm">
                Empresa especializada em aluguel de mesas e cadeiras plásticas brancas e gelo no Rio de Janeiro. Comprometimento com rapidez, pontualidade de entrega e segurança.
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#bairros" className="hover:text-white transition-colors">Atendimento</a></li>
                <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Dicas</Link></li>
              </ul>
            </div>

            {/* Contato Rápido */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">Contato Oficial</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>WhatsApp: (21) 99797-7092</li>
                <li>Email: marcellomesasegelo@gmail.com</li>
                <li>Parque Anchieta, Rio de Janeiro - RJ</li>
              </ul>
            </div>

          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>&copy; {new Date().getFullYear()} Marcelo mesas - Todos os direitos reservados. Slogan: aluguel de mesas e cadeiras Marcelo mesas.</p>
            <p>Desenvolvido com foco em SEO Local</p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp (Fixado no Canto Inferior Direito) */}
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          Chame no WhatsApp!
        </span>
      </a>

    </div>
  );
}
