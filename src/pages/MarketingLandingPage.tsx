import { motion } from "framer-motion";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageSquare, Target, Zap, Search, Layout, MousePointer2, Smartphone } from "lucide-react";
import { marketingPages } from "../data/marketingPages";

export default function MarketingLandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const pageContent = marketingPages.find(p => p.slug === slug);

  if (!pageContent) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-brand-bg pt-32 pb-20">
      {/* Noise Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="dna-grid gap-12 items-center">
            <div className="col-span-4 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-brand-accent-light" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">
                    Soluções de Autoridade em Indaiatuba
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-7xl font-sans font-black text-white leading-[0.9] tracking-ultra-tight uppercase mb-8">
                  {pageContent.headline.split(' ').map((word, i) => (
                    <span key={i} className={i % 3 === 0 ? "text-gradient" : ""}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>

                <div className="flex flex-col sm:flex-row gap-6 mt-12">
                  <a 
                    href="https://wa.me/5511978959567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-6 px-12 py-6 bg-brand-accent-light overflow-hidden rounded-full transition-all hover:shadow-[0_0_40px_rgba(0,255,209,0.4)] hover:scale-105"
                  >
                    <span className="relative font-sans text-sm font-black uppercase tracking-[0.2em] text-brand-bg">Diagnóstico Gratuito</span>
                    <ArrowRight className="relative text-brand-bg group-hover:translate-x-2 transition-transform" size={20} />
                  </a>
                  <Link 
                    to="/blog"
                    className="flex items-center justify-center gap-4 px-10 py-6 border border-white/10 rounded-full font-black uppercase tracking-widest text-[10px] text-white hover:bg-white/5 transition-all"
                  >
                    Ver Cases de Sucesso
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="col-span-4 lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="p-10 rounded-[3.5rem] glass-premium border border-white/5 relative overflow-hidden"
              >
                <div className="text-sm font-mono text-brand-accent-light uppercase tracking-widest mb-6">Foco Local</div>
                <div className="text-2xl font-black text-white mb-4 uppercase">Indaiatuba & RMC</div>
                <p className="text-brand-secondary text-sm leading-relaxed italic">
                  Especialistas em transformar empresas da região em referências digitais com websites de alta performance e branding estratégico.
                </p>
                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                   <div className="flex flex-col">
                      <span className="text-2xl font-black text-white">98%</span>
                      <span className="text-[8px] font-mono text-brand-secondary uppercase tracking-widest text-center mt-1">SEO Relevância</span>
                   </div>
                   <div className="h-8 w-[1px] bg-white/10" />
                   <div className="flex flex-col">
                      <span className="text-2xl font-black text-white">+50</span>
                      <span className="text-[8px] font-mono text-brand-secondary uppercase tracking-widest text-center mt-1">Projetos Locais</span>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 border-y border-white/5 relative bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="dna-grid gap-16">
            <div className="col-span-4 lg:col-span-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-secondary/40 mb-6 block">O Desafio</span>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 italic">
                {pageContent.problem.title}
              </h2>
              <p className="text-xl text-brand-secondary leading-relaxed mb-12 italic font-serif">
                {pageContent.problem.description}
              </p>
            </div>

            <div className="col-span-4 lg:col-span-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light mb-6 block">Nossa Solução</span>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">
                {pageContent.solution.title}
              </h2>
              <div className="space-y-6">
                {pageContent.solution.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-3xl bg-brand-accent-light/[0.03] border border-brand-accent-light/10">
                    <CheckCircle2 className="text-brand-accent-light mt-1 shrink-0" size={20} />
                    <div>
                      <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">{feature.name}</h4>
                      <p className="text-brand-secondary text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Geo */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-sm font-mono text-brand-accent-light uppercase tracking-[0.4em] mb-8">Base de Operações: Indaiatuba</h3>
            <p className="text-2xl md:text-3xl text-white font-sans font-black uppercase tracking-tighter leading-tight mb-12">
              Atendemos empresas em toda a <span className="text-gradient">Região Metropolitana de Campinas</span> que buscam posicionamento premium.
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-40">
               {["Hélice", "Sui", "Matrix", "Lotto", "Vibe"].map(n => (
                 <span key={n} className="font-mono text-xs uppercase tracking-[0.5em]">{n} Partner</span>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="p-12 md:p-20 rounded-[4rem] bg-brand-accent-light text-brand-bg text-center relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-sans font-black uppercase tracking-ultra-tight mb-8">
                {pageContent.cta}
              </h2>
              <p className="text-brand-bg/80 font-serif italic text-xl mb-12 max-w-2xl mx-auto">
                Não deixe sua empresa invisível no digital. Comece hoje sua transformação com um diagnóstico estratégico sem custos.
              </p>
              <a 
                href="https://wa.me/5511978959567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-6 px-12 py-6 bg-brand-bg text-white rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl"
              >
                Solicitar Diagnóstico Agora <ArrowRight size={20} />
              </a>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>
    </div>
  );
}
